import Image from 'next/image'

import ParallaxHero from '@/components/hero/ParallaxHero'

export default function About() {

  return (
    <div className="min-h-screen">
      <ParallaxHero 
        title="Our Vision"
        subtitle="@TEMPLO CALVARIO"
        imageSrc="/carousel-lowerstage.webp"
      />

      {/* Mission Content */}
      <section className="py-24  ">
        <div className="max-w-7xl mx-auto px-4 ">
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

    </div>
  )
} 