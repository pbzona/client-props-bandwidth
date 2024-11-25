import DataDisplay from '@/components/DataDisplay';
import Link from 'next/link';

function generateObject(size: number) {
  return Array.from({ length: size }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    description: `Description for item ${i}.`,
    category: 'Category A',
    price: Math.round(Math.random() * 100 + 10),
  }));
}

export default function NormalObjectPage() {
  const itemCount = 50;
  const normalObject = generateObject(itemCount);

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Normal Object Transfer</h1>
      <Link
        href="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>
      <div
        className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
        role="alert"
      >
        <p className="font-bold">This is a good example of data transfer.</p>
        <p>
          This page demonstrates a normal object transfer where only the necessary data is passed to
          the client component. Each object contains only the properties that are actually used in
          rendering, which helps to minimize the amount of data transferred.
        </p>
      </div>
      <div className="border p-4 rounded mt-4">
        <DataDisplay
          data={normalObject}
          objectType="Normal"
        />
      </div>
    </main>
  );
}
