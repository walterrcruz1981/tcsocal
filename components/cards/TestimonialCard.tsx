'use client'
import { motion } from 'framer-motion'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  index: number
}

export default function TestimonialCard({ quote, author, role, index }: TestimonialProps) {
  return (
    <motion.div
      className="bg-card-bg rounded-lg p-6 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <p className="text-foreground/90 mb-4">{quote}</p>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold mb-2">{author}</h3>
          <p className="text-foreground/90">{role}</p>
        </div>
        <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
          <span className="text-2xl text-blue-500">{index + 1}</span>
        </div>
      </div>
    </motion.div>
  )
} 