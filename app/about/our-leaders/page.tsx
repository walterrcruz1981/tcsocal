import Image from 'next/image'
import { pastoralTeam } from '@/data/pastoralTeam'
import ParallaxHero from '@/components/hero/ParallaxHero'

export default function About() {

  return (
    <div className="min-h-screen">
      <ParallaxHero
        title="Our Leaders"
        subtitle="@TEMPLO CALVARIO"
        imageSrc="/about/leaders-hero.webp"
      />



      {/* Senior Pastor Section */}
      <section className="py-24 section-primary">
        <div className="max-w-7xl mx-auto px-4">

          {/* Left Column - Heading */}
          <div>
            <h2 className="text-4xl md:text-7xl font-semi-bold text-foreground">
              MEET OUR<br></br> SENIOR PASTOR
            </h2>
          </div>

          {/* Full Width Image */}
          <div className="mt-16 grid md:grid-cols-12 items-end gap-2">
            <div className="relative col-span-9 w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/pastors/meetDdleon.webp"
                alt="Dr. Daniel de León"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                className="object-cover object-center md:scale-105"
                quality={100}
              />
            </div>

            {/* Right Column - Text */}
            <div className="col-span-3 z-10 text-white">
              <p className="text-lg leading-relaxed text-foreground/90 bg-black/50 p-8 rounded-lg md:-ml-28 md:-mb-16 shadow-lg ">
                <span className="font-bold ">Dr. Daniel de León</span>, the warm-hearted and visionary Senior Pastor of
                Templo Calvario, has accomplished remarkable feats with the unwavering support of his
                late wife, Ruth de León. Since 1976, together they led the church with a deep care for
                those in need, reflected in their outreach ministries such as Heart for the City and
                Grateful Heart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pastoral Team Section */}
      <section className="py-16 section-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-foreground">Pastoral Staff</h2>
          <p className="text-xl text-center mb-12 text-foreground/90">Meet our Pastoral Team</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastoralTeam.map((pastor) => (
              <div
                key={pastor.name}
                className="text-center rounded-lg shadow-lg bg-card-bg overflow-hidden group relative
                  transform transition-all duration-300 hover:scale-103 hover:shadow-xl"
              >
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={pastor.image}
                    alt={pastor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={100}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 
                    transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-lg font-bold">{pastor.name}</p>
                      <p className="text-white/90">{pastor.role}</p>
                    </div>
                  </div>
                </div>
                {/* Info section */}
                <div className="p-4 transform transition-transform duration-300 group-hover:translate-y-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{pastor.name}</h3>
                  <p className="text-foreground/75 mb-8">{pastor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 