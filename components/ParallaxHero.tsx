'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
const defaultImage = '/pattern1.jpg'

interface ParallaxHeroProps {
  title: string
  subtitle: string
  imageSrc?: string
  heroContent?: React.ReactNode
}

export default function ParallaxHero({ 
  title, 
  subtitle, 
  imageSrc,
  heroContent 
}: ParallaxHeroProps) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative h-[70vh] overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <Image
          src={imageSrc || defaultImage}
          alt={title}
          fill
          className="object-cover scale-110"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {heroContent}
            <h1 className="text-white text-5xl md:text-9xl font-bold mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-white/90 text-2xl md:text-4xl max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 