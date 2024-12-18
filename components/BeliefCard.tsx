interface BeliefCardProps {
  title: string
  description: string
  verse: string
  details: string[]
  icon: string
}

export default function BeliefCard({ title, description, verse, details }: BeliefCardProps) {
  return (
    <div className="bg-card-bg p-8 rounded-xl shadow-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
        <p className="text-foreground/90 mb-4">{description}</p>
        <p className="text-sm text-red-500">{verse}</p>
      </div>
      
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2 text-foreground/90">
            <span className="text-red-500 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  )
} 