'use client'
import { motion } from 'framer-motion'

interface AnimatedCardProps {
  index?: number
  title: string
  description: string
  showNumber?: boolean
}

export default function AnimatedCard({ index = 0, title, description, showNumber = true }: AnimatedCardProps) {
  return (
    <motion.div
      className="bg-card-bg p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-4 mb-4">
        {showNumber && <span className="text-3xl text-red-500">0{index + 1}</span>}
        <h4 className="text-xl font-bold text-foreground">{title}</h4>
      </div>
      <p className="text-foreground/90">{description}</p>
    </motion.div>
  )
} 