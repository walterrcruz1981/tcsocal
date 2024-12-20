'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ImpactSlideProps {
  title: string
  description: string
  backgroundImage: string
}

export default function ImpactSlide({ 
  title, 
  description, 
  backgroundImage 
}: ImpactSlideProps) {
  return (
    <motion.div
      className="relative h-full w-full rounded-xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={backgroundImage}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">{description}</p>
      </div>
    </motion.div>
  )
} 