'use client'
import Image from 'next/image'

interface AnimatedCardProps {
  title: string
  description: string
  backgroundImage?: string
  className?: string
  children?: React.ReactNode
}

export default function AnimatedCard({ 
  title, 
  description, 
  backgroundImage,
  className = "",
  children
}: AnimatedCardProps) {
  return (
    <div
      className={`relative bg-card-bg rounded-xl shadow-xl dark:shadow-2xl dark:shadow-blue-500/10 overflow-hidden w-full ${className}`}
    >
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
      )}
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <div className="text-center text-foreground">
          <h4 className="text-2xl font-bold mb-4">{title}</h4>
          <p className="text-foreground/90 text-lg">{description}</p>
          {children}
        </div>
      </div>
    </div>
  )
} 