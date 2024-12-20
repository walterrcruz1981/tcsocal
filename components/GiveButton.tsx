'use client'
import { motion } from 'framer-motion'

export default function GiveButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href="https://pushpay.com/g/temploinc"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition group"
      >
        <span className="flex items-center gap-2">
          Give Now
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </a>
    </motion.div>
  )
} 