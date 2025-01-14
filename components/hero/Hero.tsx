export default function Hero({ title }: { title: string }) {
  return (
    <section className="relative h-[60vh]">
      <div className="absolute inset-0 bg-black/60" />
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