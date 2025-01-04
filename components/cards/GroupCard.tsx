import Image from 'next/image'

interface GroupCardProps {
  title: string
  description: string
  details: string[]
  image: string
  schedule: string
}

export default function GroupCard({ title, description, details, image, schedule }: GroupCardProps) {
  return (
    <div className="bg-card-bg rounded-xl hover:filter hover:saturate-150 transition-all duration-300 overflow-hidden shadow-lg">
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
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-sm text-blue-500 mb-4">{schedule}</p>
          <p className="text-foreground/90">{description}</p>
        </div>
        <ul className="space-y-2">
          {details.map((detail) => (
            <li key={detail} className="flex items-center gap-2 text-foreground/90">
              <span className="text-blue-500">•</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 