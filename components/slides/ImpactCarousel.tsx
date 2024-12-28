'use client'
import { useState, useEffect } from 'react'
import ImpactSlide from './ImpactSlide'

interface ImpactArea {
  title: string
  description: string
  backgroundImage: string
}

interface ImpactCarouselProps {
  areas: ImpactArea[]
}

export default function ImpactCarousel({ areas }: ImpactCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % areas.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [areas.length])

  return (
    <div className="relative">
      <div className="overflow-hidden h-[40vh]">
        <div className="max-w-4xl mx-auto h-full">
          <ImpactSlide {...areas[currentIndex]} />
        </div>
      </div>
      
      <div className="flex justify-center gap-2 mt-6">
        {areas.map((_, index) => (
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