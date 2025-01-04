'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface CarouselProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // Auto-advance slides when not dragging
  useEffect(() => {
    if (!isDragging) {
      const timer = setInterval(() => {
        setCurrentIndex((current) => (current + 1) % images.length)
      }, 6000)
      return () => clearInterval(timer)
    }
  }, [images.length, isDragging])

  // Touch Events
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    handleDragEnd(startX - e.changedTouches[0].clientX)
  }

  // Mouse Events
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging) {
      handleDragEnd(startX - e.clientX)
      setIsDragging(false)
    }
  }

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (isDragging) {
      handleDragEnd(startX - e.clientX)
      setIsDragging(false)
    }
  }

  // Shared drag end logic
  const handleDragEnd = (diff: number) => {
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Dragged/Swiped left - next slide
        setCurrentIndex((current) => (current + 1) % images.length)
      } else {
        // Dragged/Swiped right - previous slide
        setCurrentIndex((current) => (current - 1 + images.length) % images.length)
      }
    }
  }

  return (
    <div
      className="relative aspect-[16/11]  rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={index === 0}
            draggable="false"
          />
        </div>
      ))}
    </div>
  )
} 