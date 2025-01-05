'use client'
import { useTheme } from '@/contexts/ThemeContext'
import { useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'
  const [isLight, setIsLight] = useState(false)

  return (
    <div className="fixed right-4 top-3/4 -translate-y-1/2 z-50">
      <button
        onClick={() => {
          setIsLight(!isLight)
          setTheme(isDark ? 'light' : 'dark')
          setIsLight(!isLight)
        }}
        className={` w-6 h-16 rounded-md
         ${isDark ? 'bg-white' : 'bg-blue-900 '}
          shadow-[0_0_15px_rgba(0,0,0,0.2)] 
          hover:shadow-[0_0_25px_rgba(0,0,0,0.3)] 
          hover:scale-105
          transition-all duration-300 ease-in-out`}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <div className="relative w-6 h-12 bg-black-400 ">
          <div
            className={`absolute w-[14px] ml-1 h-6 ${isLight ? 'bg-white' : 'bg-blue-900'} rounded-full 
              transform transition-transform duration-500 ease-in-out
              ${isDark ? 'translate-y-5' : 'translate-y-1'}`
            }
          />
        </div>
      </button>
    </div>
  )
} 