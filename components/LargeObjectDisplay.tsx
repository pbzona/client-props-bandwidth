'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"

interface Item {
  id: number
  name: string
  description: string
  category: string
  price: number
  sku: string
  manufacturer: string
  dimensions: {
    width: number
    height: number
    depth: number
  }
  weight: number
  reviews: Array<{
    user: string
    rating: number
    comment: string
  }>
  tags: string[]
  metadata: {
    dateAdded: string
    lastModified: string
    views: number
    inStock: boolean
  }
}

export default function LargeObjectDisplay({ data }: { data: Item[] }) {
  const [itemCount, setItemCount] = useState(0)
  const [propSize, setPropSize] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  useEffect(() => {
    const size = JSON.stringify(data).length
    console.log(`Client (Large): Received object size: ${size} bytes`)
    setItemCount(data.length)
    setPropSize(size)
  }, [data])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(data.length / itemsPerPage)

  return (
    <div>
      <p className="mb-2">Received {itemCount} items</p>
      <p className="mb-2 text-sm text-red-600">Props size: {propSize} bytes</p>
      <ul className="space-y-2 mb-4">
        {currentItems.map(item => (
          <li key={item.id} className="border p-2 rounded">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-sm">Category: {item.category}</p>
            <p className="text-sm font-medium">Price: ${item.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <Button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

