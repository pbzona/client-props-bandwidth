'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface DataDisplayProps {
  data: any;
  objectType: 'Normal' | 'Large';
  unusedProps?: string[];
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' bytes';
  else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  else return (bytes / 1048576).toFixed(1) + ' MB';
}

export default function DataDisplay({ data, objectType, unusedProps = [] }: DataDisplayProps) {
  const [itemCount, setItemCount] = useState(0);
  const [propSize, setPropSize] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const size = JSON.stringify(data).length;
    console.log(`Client (${objectType}): Received object size: ${size} bytes`);
    setItemCount(Array.isArray(data) ? data.length : Object.keys(data).length);
    setPropSize(size);
  }, [data, objectType]);

  const isI18n = !Array.isArray(data);
  const languages = isI18n ? Object.keys(data) : [];
  const [currentLanguage, setCurrentLanguage] = useState(languages[0] || '');

  const items = isI18n
    ? Object.entries(data[currentLanguage] || {}).map(([key, value]) => ({ key, value }))
    : data;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const highlightUnused = (obj: any) => {
    return JSON.stringify(obj, null, 2).replace(
      new RegExp(`"(${unusedProps.join('|')})":`, 'g'),
      '"<span class="text-red-500 font-bold">$1</span>":'
    );
  };

  return (
    <div>
      <p className="mb-2">
        Received {itemCount} {isI18n ? 'languages' : 'items'}
      </p>
      <p className={`mb-2 text-sm ${objectType === 'Normal' ? 'text-blue-600' : 'text-red-600'}`}>
        Props size: {formatSize(propSize)}
      </p>
      {isI18n && (
        <div className="mb-4">
          <label
            htmlFor="language-select"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Select Language:
          </label>
          <select
            id="language-select"
            value={currentLanguage}
            onChange={e => setCurrentLanguage(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {languages.map(lang => (
              <option
                key={lang}
                value={lang}
              >
                {lang}
              </option>
            ))}
          </select>
        </div>
      )}
      <ul className="space-y-2 mb-4">
        {currentItems.map((item: any) => (
          <li
            key={isI18n ? item.key : item.id}
            className="border p-2 rounded"
          >
            <h3 className="font-semibold">{isI18n ? item.key : item.name}</h3>
            <p className="text-sm text-gray-600">{isI18n ? item.value : item.description}</p>
            {!isI18n && (
              <>
                <p className="text-sm">Category: {item.category}</p>
                <p className="text-sm font-medium">Price: ${item.price.toFixed(2)}</p>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mb-8">
        <Button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">First Three Objects (Raw Props):</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code dangerouslySetInnerHTML={{ __html: highlightUnused(items.slice(0, 3)) }} />
        </pre>
      </div>
    </div>
  );
}
