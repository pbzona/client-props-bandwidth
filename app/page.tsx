/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Object Transfer Comparison Demo</h1>
      <p className="mb-4">
        This demo illustrates the difference in bandwidth usage between normal and large object
        transfers in React components.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        <li>Open your browser's Developer Tools (F12 or Right-click &gt; Inspect)</li>
        <li>Go to the Network tab</li>
        <li>Check the "Disable cache" checkbox</li>
        <li>Click on one of the links below to load a component</li>
        <li>
          In the Network tab, look for the document request (it will have the same name as the page
          you're viewing)
        </li>
        <li>Compare the "Size" column for each page to see the difference in data transferred</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Product Data Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Link
          href="/normal-object"
          className="block p-4 border rounded hover:bg-gray-100 transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2">Normal Object Transfer</h3>
          <p>View the component with normal-sized product data props</p>
        </Link>
        <Link
          href="/large-object"
          className="block p-4 border rounded hover:bg-gray-100 transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2">Large Object Transfer</h3>
          <p>View the component with large product data props</p>
        </Link>
      </div>

      <h2 className="text-2xl font-semibold mb-4">I18n Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/normal-i18n"
          className="block p-4 border rounded hover:bg-gray-100 transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2">Normal I18n Object Transfer</h3>
          <p>View the component with normal-sized i18n data props</p>
        </Link>
        <Link
          href="/large-i18n"
          className="block p-4 border rounded hover:bg-gray-100 transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2">Large I18n Object Transfer</h3>
          <p>View the component with large i18n data props</p>
        </Link>
      </div>
    </main>
  );
}
