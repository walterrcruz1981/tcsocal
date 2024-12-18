import Image from 'next/image'
import Link from 'next/link'
import { pastoralTeam } from '@/data/pastoralTeam'
import ParallaxHero from '@/components/ParallaxHero'

export default function About() {

  return (
    <div className="min-h-screen">
      <ParallaxHero 
        title="ABOUT"
        subtitle="TEMPLO CALVARIO"
        imageSrc="/carousel-lowerstage.webp"
      />

      {/* Mission Content */}
      <section className="py-24 section-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Right Column - Image */}
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/about/heart-revolution.webp"
                alt="Heart Revolution"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Left Column - Content */}
            <div>
              <h2 className="text-5xl font-bold mb-6 text-foreground">
                HEART REVOLUTION
              </h2>
              <div className="mb-4">
                <h3 className="text-xl uppercase text-foreground border-b border-red-500 pb-2 inline-block">
                  MINISTERING TO THE NEEDS OF THE PEOPLE
                </h3>
              </div>
              <div className="mt-8">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  That&apos;s right. Make no doubt about it. That is exactly what is taking place at TC. 
                  God is turning the hearts of youth and families back to God and back to one another. 
                  For more than 80 years, TC has been ministering to the needs of the people and now 
                  more than ever before God is working through TC to turn hearts back to God, one another, 
                  and the City!
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Our greatest joy is seeing hearts transformed, marriages restored, families healed, 
                  addicts set free, and lives made new! Every Sunday at TC is Freedom Sunday because 
                  the heart revolution is not a one-time event but a movement and a way of life. 
                  Join us and join the heart revolution!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="relative py-24 bg-gray-900">
        {/* Background Image */}
        <Image
          src="/carousel-lowerstage.webp"
          alt="Vision Background"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  
          className="object-cover opacity-30"
          priority
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Vision Column */}
            <div className="text-white">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-2">OUR VISION</h2>
                <p className="text-xl">WHAT WE BELIEVE</p>
              </div>
              <div className="mb-6">
                <p className="text-xl mb-4">Evangelizing – Train – Commission</p>
              </div>
              <div className="space-y-4">
                <p className="flex gap-2">
                  <span className="text-red-500">•</span>
                  <span>Turn hearts to God. <span className="text-gray-400">Matt. 22: 37- 38</span></span>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-500">•</span>
                  <span>Turn hearts to one another. <span className="text-gray-400">Matt. 22:39</span></span>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-500">•</span>
                  <span>Teach believers to apply God&apos;s Word to their lives. <span className="text-gray-400">Matt. 28:18-20</span></span>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-500">•</span>
                  <span>Train followers to serve God in the church and world. <span className="text-gray-400">Matt. 28:18-20</span></span>
                </p>
                <p className="flex gap-2">
                  <span className="text-red-500">•</span>
                  <span>Take the Gospel of Jesus Christ here, near, and far. <span className="text-gray-400">Acts 1:8</span></span>
                </p>
              </div>
            </div>

            {/* Mission Column */}
            <div className="text-white">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-2">OUR MISSION</h2>
                <p className="text-xl">MINISTERING TO THE NEEDS OF THE PEOPLE</p>
              </div>
              <div className="mb-6">
                <p className="text-xl mb-4">Evangelizing – Train – Commission</p>
              </div>
              <p className="text-lg">
                Templo Calvario exists to evangelize the lost, train new believers and commission 
                them to do work in ministry. Templo Calvario dares to be different from many other 
                churches that our vision is to equip our church to reproduce itself, therefore, 
                meet the &quot;Great Commission&quot;.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Pastor Section */}
      <section className="py-24 section-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Heading */}
            <div>
              <h2 className="text-6xl md:text-7xl font-semi-bold text-foreground">
                MEET OUR<br />
                SENIOR<br />
                PASTOR
              </h2>
            </div>

            {/* Right Column - Text */}
            <div>
              <p className="text-lg leading-relaxed text-foreground/90">
                <span className="font-bold text-foreground">Dr. Daniel de León</span>, the warm-hearted and visionary Senior Pastor of 
                Templo Calvario, has accomplished remarkable feats with the unwavering support of his 
                late wife, Ruth de León. Since 1976, together they led the church with a deep care for 
                those in need, reflected in their outreach ministries such as Heart for the City and 
                Grateful Heart.
              </p>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="mt-16">
            <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden">
              <Image
                src="/pastors/senior-pastor.webp"
                alt="Dr. Daniel de León"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  
                className="object-cover"
                priority
              />
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

      {/* Connect Section */}
      <section className="py-16 section-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Connect</h3>
          <p className="text-lg mb-8 text-foreground/90">
            To connect with our pastoral team and you will receive a response within 3-5 business days.
          </p>
          <Link 
            href="/connect"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Send Message
          </Link>
        </div>
      </section>
    </div>
  )
} 