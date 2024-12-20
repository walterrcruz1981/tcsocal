'use client'
import { useState, useEffect } from 'react'

interface CarouselProps {
  items: {
    id: string | number
    content: React.ReactNode
  }[]
  interval?: number
}

export default function ImpactCarousel({ items, interval = 6000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % items.length)
    }, interval)
    return () => clearInterval(timer)
  }, [items.length, interval])

  return (
    <div className="relative">
      <div className="overflow-hidden h-[40vh]">
        <div className="max-w-4xl mx-auto h-full">
          {items[currentIndex].content}
        </div>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all
              ${index === currentIndex ? 'bg-blue-500 w-4' : 'bg-blue-300'}`}
          />
        ))}
      </div>
    </div>
  )
} 