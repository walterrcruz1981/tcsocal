import Image from 'next/image'
    
// New reusable server component for page headers
export default function PageHeader({ 
  title, 
  backgroundImage 
}: { 
  title: string
  backgroundImage: string 
}) {
  return (
    <section className="relative h-[30vh]">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-blue-950/50" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
            {title}
          </h1>
        </div>
      </div>
    </section>
  )
} 