import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  areas: string[]
  image: string
}

export default function ServiceCard({ title, description, areas, image }: ServiceCardProps) {
  return (
    <div className="bg-card-bg rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-72">
        <Image
          src={image}
          alt={title}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
        <p className="text-foreground/90 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {areas.map((area) => (
            <span 
              key={area}
              className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
} 