'use client'
import { useState, useEffect } from 'react'
import { VideoPlayer } from './video-player'

export default function StickyVideoPlayer() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const threshold = window.innerWidth < 768 ? 100 : 200 // Lower threshold for mobile
      setIsSticky(scrollPosition > threshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Placeholder div to prevent content jump when video becomes fixed */}
      {isSticky && <div className="w-full aspect-video" />}
      
      <div
        className={`w-full transition-all duration-300 ${
          isSticky 
            ? 'fixed top-20 left-0 z-50 bg-black p-2 shadow-lg' 
            : 'relative'
        }`}
      >
        <div className={`${
          isSticky 
            ? 'max-w-[400px] mx-auto aspect-video' 
            : 'w-full'
        }`}>
          <VideoPlayer />
        </div>
      </div>
    </>
  )
} 