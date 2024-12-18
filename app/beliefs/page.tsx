import Image from 'next/image'
import BeliefCard from '@/components/BeliefCard'

const beliefs = [
  {
    id: 1,
    title: "Evangelize",
    description: "Every member of the Body of Christ is called to be an Evangelist. Through our 'One for One' approach, we believe in personal evangelism where each member brings others to Christ.",
    verse: "Mark 1:38–39",
    icon: "evangelize",
    details: [
      "Personal evangelism over traditional revivals",
      "Each member is called to bring others",
      "'Christ brought me, so I bring' philosophy",
      "Simple, reproducible approach"
    ]
  },
  {
    id: 2,
    title: "Train",
    description: "Through our Champions of Faith program, we prepare future leaders with strong biblical foundations and practical ministry skills.",
    verse: "2 Tim. 4:2; 1 Peter 3:15–16",
    icon: "train",
    details: [
      "Foundational principles of faith",
      "Preparation of lessons and sermons",
      "Practical ministry training",
      "Leadership development"
    ]
  },
  {
    id: 3,
    title: "Empower",
    description: "We commission trained leaders to start cell groups and reach their communities, beginning with their own Jerusalem - our local community.",
    verse: "John 4:35",
    icon: "empower",
    details: [
      "Cell group multiplication",
      "Local community focus",
      "Global vision starting locally",
      "Ready harvest mindset"
    ]
  }
]

export default function Beliefs() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-[url('/pattern1.jpg')] bg-center bg-no-repeat bg-cover -z-10" style={{ opacity: 1 }} />
      
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh]">
          <Image
            src="/beliefs-hero.webp"
            alt="Our Beliefs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
                WHAT WE BELIEVE
              </h1>
              <p className="text-white/90 text-xl max-w-2xl mx-auto">
                Equipping our church to reproduce itself and fulfill the Great Commission
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 section-primary">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h2>
              <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
                Templo Calvario dares to be different. Our vision is to equip our church to 
                reproduce itself and meet the &quot;Great Commission&quot; through three key pillars.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {beliefs.map((belief) => (
                <BeliefCard key={belief.id} {...belief} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 