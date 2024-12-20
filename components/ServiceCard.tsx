import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  areas: string[]
  image: string
}

export default function ServiceCard({ title, description, areas, image }: ServiceCardProps) {
  return (
    <div className="relative h-[400px] bg-card-bg rounded-xl overflow-hidden shadow-lg group">
      <Image
        src={image}
        alt={title}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
        after:absolute after:inset-0 after:bg-blue-500/10 after:opacity-0 after:transition-opacity after:duration-300
        group-hover:after:opacity-100" 
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-white/90 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {areas.map((area) => (
            <span 
              key={area}
              className="px-3 py-1 bg-blue-500/20 text-white backdrop-blur-sm rounded-full text-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
} 