'use client'
import { useTheme } from '@/contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="fixed right-4 top-3/4 -translate-y-1/2 z-50">
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="flex items-center justify-center w-8 h-20 rounded-full
          bg-white
          shadow-[0_0_15px_rgba(0,0,0,0.2)] 
          hover:shadow-[0_0_25px_rgba(0,0,0,0.3)] 
          hover:scale-105
          transition-all duration-300 ease-in-out"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <div className="relative w-5 h-12 bg-black-400 outline outline-1 outline-red-900 rounded-full p-1">
          <div 
            className={`absolute w-3 h-3 bg-blue-400 rounded-full shadow-md
              transform transition-transform duration-500 ease-in-out
              ${isDark ? 'translate-y-7' : 'translate-y-0'}`
            }
          />
        </div>
      </button>
    </div>
  )
} 