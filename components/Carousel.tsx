'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface CarouselProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const dragThreshold = 50

  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-advance slides (only when not dragging)
  useEffect(() => {
    if (!isDragging) {
      const timer = setInterval(() => {
        setCurrentIndex((current) => (current + 1) % images.length)
      }, 6000)

      return () => clearInterval(timer)
    }
  }, [images.length, isDragging])

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const pos = 'touches' in e ? e.touches[0].clientX : e.clientX
    setStartPos(pos)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return

    const currentPos = 'touches' in e ? e.touches[0].clientX : e.clientX
    const diff = currentPos - startPos
    setCurrentTranslate(diff)
  }

  const handleDragEnd = () => {
    if (!isDragging) return

    if (Math.abs(currentTranslate) > dragThreshold) {
      if (currentTranslate > 0) {
        // Dragged right - go to previous
        setCurrentIndex((current) => (current - 1 + images.length) % images.length)
      } else {
        // Dragged left - go to next
        setCurrentIndex((current) => (current + 1) % images.length)
      }
    }

    setIsDragging(false)
    setCurrentTranslate(0)
  }

  return (
    <div 
      ref={containerRef}
      className="relative aspect-[16/9] rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            draggable="false"
          />
        </div>
      ))}
    </div>
  )
} 