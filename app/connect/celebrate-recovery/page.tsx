import Image from 'next/image'
import Link from 'next/link'

export default function CelebrateRecovery() {
  const careResources = [
    {
      title: "Celebrate Recovery",
      description: "Our Christ-centered, 12-step program is a safe place to find community and freedom from the hurts and behaviors that are controlling our lives.",
      image: "/celebrate-recovery/worship.webp",
      link: "/connect/celebrate-recovery/program"
    },
    {
      title: "Counseling",
      description: "We offer a safe and caring environment for individuals to discover answers to personal struggles and relational challenges.",
      image: "/celebrate-recovery/counseling.webp",
      link: "/connect/celebrate-recovery/counseling"
    },
    {
      title: "Support Groups",
      description: "Our support groups offer Christ-centered communities to fill you with comfort, strength, and hope. In these groups, you can learn to trust in God as he guides you to wholeness.",
      image: "/celebrate-recovery/support.webp",
      link: "/connect/celebrate-recovery/groups"
    }
  ]

  return (
    <>
      {/* Background Pattern - Fixed and behind everything */}
      <div 
        className="fixed top-0 left-0 w-full h-full bg-[url('/pattern1.jpg')] bg-center bg-no-repeat bg-cover -z-10"
        style={{ opacity: 1 }}
      />
      
      {/* Content Container */}
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh]">
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="text-outline text-left">
                <h2 className="text-white text-5xl md:text-8xl font-bold tracking-wider">
                  CELEBRATE <br />RECOVERY
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 section-primary">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold mb-6 text-foreground">How Can We Help You Today?</h2>
              <p className="text-xl text-foreground/90">
                Take the first step towards healing. Our team is here to support you on your journey.
              </p>
            </div>

            {/* Care Resources Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {careResources.map((resource) => (
                <Link 
                  key={resource.title} 
                  href={resource.link}
                  className="group bg-card-bg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-red-500 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {resource.description}
                    </p>

                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-white/40 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Need Support?</h2>
            <p className="text-xl mb-12 text-foreground/90">
              Take the first step towards healing. Our team is here to support you on your journey.
            </p>
            <div className="flex justify-center gap-6">
              <Link
                href="/visit"
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
              >
                Contact Us
              </Link>
              <a
                href="https://linktr.ee/tcsocal"
                className="bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-700 transition"
              >
                View Resources
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 