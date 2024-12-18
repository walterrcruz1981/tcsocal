import ServiceCard from '@/components/ServiceCard'
import ParallaxHero from '@/components/ParallaxHero'

const ministryAreas = [
  {
    title: "Worship Ministry",
    description: "Join our worship team in creating an atmosphere of praise through music, tech, and production.",
    areas: ["Music Team", "Sound Engineering", "Visual Production", "Choir"],
    image: "/serve/worship.webp"
  },
  {
    title: "Children's Ministry",
    description: "Help shape the next generation by serving in our children's programs and youth activities.",
    areas: ["Sunday School", "Nursery", "Youth Group", "VBS"],
    image: "/serve/children.webp"
  },
  {
    title: "Outreach Ministry",
    description: "Be part of our evangelism teams reaching our community with Christ's love.",
    areas: ["Community Events", "Food Distribution", "Street Ministry", "Visitation"],
    image: "/serve/outreach.webp"
  },
  {
    title: "Support Ministry",
    description: "Serve behind the scenes to help church operations run smoothly.",
    areas: ["Welcome Team", "Security Team", "Facilities", "Administration"],
    image: "/serve/support.webp"
  }
]

const trainingSteps = [
  {
    step: 1,
    title: "Connect",
    description: "Join our Champions of Faith program to build a strong foundation in faith and service."
  },
  {
    step: 2,
    title: "Train",
    description: "Receive practical ministry training specific to your area of service."
  },
  {
    step: 3,
    title: "Serve",
    description: "Put your training into practice by serving in your chosen ministry area."
  },
  {
    step: 4,
    title: "Lead",
    description: "Grow into leadership roles and help train others to serve."
  }
]

export default function ServePage() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-[url('/pattern1.jpg')] bg-center bg-no-repeat bg-cover -z-10" style={{ opacity: 1 }} />
      
      <div className="relative min-h-screen">
        <ParallaxHero 
          title="SERVE WITH US"
          subtitle="Join us in ministering to the needs of the people"
          imageSrc="/serve/serve-hero.webp"
        />

        {/* Vision Section */}
        <section className="py-24 section-primary">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Our Approach</h2>
            <p className="text-lg text-foreground/90 mb-12">
              At Templo Calvario, we believe every member is called to serve. Through our 
              Champions of Faith program, we equip you with the training and support needed 
              to make an impact in your area of ministry.
            </p>
          </div>
        </section>

        {/* Ministry Areas */}
        <section className="py-24 section-secondary">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
              Ministry Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ministryAreas.map((ministry) => (
                <ServiceCard key={ministry.title} {...ministry} />
              ))}
            </div>
          </div>
        </section>

        {/* Training Steps */}
        <section className="py-24 section-primary">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
              Your Journey to Serve
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {trainingSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-500">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-foreground/90">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 