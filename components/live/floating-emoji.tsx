'use client'

import { useEffect, useState } from 'react'

interface FloatingEmojiProps {
  emoji: string
  startPosition: { x: number, y: number }
  onComplete: () => void
}

export function FloatingEmoji({ emoji, startPosition, onComplete }: FloatingEmojiProps) {
  const [position, setPosition] = useState(startPosition)
  const [opacity, setOpacity] = useState(1)
  
  useEffect(() => {
    const element = document.querySelector('.video-container')
    if (!element) return
    
    const rect = element.getBoundingClientRect()
    
    const endX = rect.left + (Math.random() * rect.width)
    const endY = rect.top + (rect.height * 0.3)
    
    const startTime = performance.now()
    const duration = 7000 // 7 seconds
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
      const easeProgress = easeOut(progress)
      
      const currentX = startPosition.x + (endX - startPosition.x) * easeProgress
      const currentY = startPosition.y + (endY - startPosition.y) * easeProgress
      
      setPosition({ x: currentX, y: currentY })
      setOpacity(1 - easeProgress)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        onComplete()
      }
    }
    
    requestAnimationFrame(animate)
  }, [startPosition, onComplete])
  
  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        opacity: opacity,
        fontSize: '2rem'
      }}
    >
      {emoji}
    </div>
  )
}

