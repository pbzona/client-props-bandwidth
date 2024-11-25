/* eslint-disable react/no-unescaped-entities */
import DataDisplay from '@/components/DataDisplay';
import Link from 'next/link';

function generateLargeObject(size: number) {
  return Array.from({ length: size }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `Description for item ${i}.`,
    category: 'Category A',
    price: Math.round(Math.random() * 100 + 10),
    sku: `SKU${Math.random().toString(36).substr(2, 9)}`,
    manufacturer: 'ACME Corporation',
    dimensions: {
      width: Math.random() * 10 + 1,
      height: Math.random() * 10 + 1,
      depth: Math.random() * 10 + 1,
    },
    weight: Math.random() * 5 + 0.1,
    reviews: Array.from({ length: 5 }, (_, j) => ({
      user: `User${j}`,
      rating: Math.floor(Math.random() * 5) + 1,
      comment: 'This is a sample review comment.'.repeat(3),
    })),
    tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'],
    metadata: {
      dateAdded: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      views: Math.floor(Math.random() * 1000),
      inStock: Math.random() > 0.5,
    },
  }));
}

export default function LargeObjectPage() {
  const itemCount = 50;
  const largeObject = generateLargeObject(itemCount);

  const unusedProps = [
    'sku',
    'manufacturer',
    'dimensions',
    'weight',
    'reviews',
    'tags',
    'metadata',
  ];

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Large Object Transfer</h1>
      <Link
        href="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>
      <div
        className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4"
        role="alert"
      >
        <p className="font-bold">This is an example of inefficient data transfer.</p>
        <p>
          This page demonstrates a large object transfer where more data than necessary is passed to
          the client component. Each object contains properties that are not used in rendering
          (highlighted in red), which increases the amount of data transferred unnecessarily.
        </p>
        <p className="mt-2">
          <strong>How this can happen:</strong> Developers might include all available data in an
          API response or database query result, without considering which properties are actually
          needed for rendering.
        </p>
        <p className="mt-2">
          <strong>How to avoid:</strong>
        </p>
        <ul className="list-disc list-inside">
          <li>Only pass the properties that are actually needed for rendering</li>
          <li>Use server-side data filtering or GraphQL to select specific fields</li>
          <li>Implement lazy loading for additional data that's not immediately needed</li>
        </ul>
      </div>
      <div className="border p-4 rounded mt-4">
        <DataDisplay
          data={largeObject}
          objectType="Large"
          unusedProps={unusedProps}
        />
      </div>
    </main>
  );
}
