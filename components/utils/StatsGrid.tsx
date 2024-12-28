'use client'
import { motion } from 'framer-motion'

interface Stat {
  number: string
  label: string
}

export default function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
            {stat.number}
          </div>
          <div className="text-foreground/90">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
} 