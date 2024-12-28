import Link from 'next/link'
import ParallaxHero from '@/components/hero/ParallaxHero'
import ServiceCard from '@/components/cards/ServiceCard'

const connectGroups = [
  {
    title: "Small Groups",
    description: "Join a small group to grow in faith and build meaningful relationships.",
    areas: ["Bible Study", "Prayer", "Fellowship", "Support"],
    image: "/connect/small-groups.webp"
  },
  {
    title: "Celebrate Recovery",
    description: "Find healing and hope through our Christ-centered recovery program.",
    areas: ["Support Groups", "Step Studies", "Fellowship", "Prayer"],
    image: "/connect/celebrate-recovery.webp"
  },
  {
    title: "Next Steps",
    description: "Discover your next step in faith and service at TC.",
    areas: ["Baptism", "Membership", "Serving", "Growth Track"],
    image: "/connect/next-steps.webp"
  },
  {
    title: "Prayer Ministry",
    description: "Join our prayer team or submit your prayer requests.",
    areas: ["Prayer Team", "Prayer Requests", "Prayer Events", "Intercession"],
    image: "/connect/prayer.webp"
  }
]

const steps = [
  {
    number: "01",
    title: "Visit a Service",
    description: "Join us for a Sunday service and experience worship with our community."
  },
  {
    number: "02",
    title: "Join a Group",
    description: "Connect with others in a small group setting for fellowship and growth."
  },
  {
    number: "03",
    title: "Start Serving",
    description: "Find your place to serve and make a difference in our community."
  }
]

export default function Connect() {
  return (
    <>
      <ParallaxHero 
        title="GET CONNECTED"
        subtitle="Find your place in our community"
        imageSrc="/connect/connect-hero.webp"
      />

      {/* Vision Section */}
      <section className="py-24 section-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Your Journey Starts Here</h2>
          <p className="text-lg text-foreground/90 mb-12">
            At TC, we believe that real life change happens in the context of relationships. 
            Whether you&apos;re new to faith, have been a Christian for many years, or are just 
            exploring, we have a place for you.
          </p>
        </div>
      </section>

      {/* Connection Steps */}
      <section className="py-24 section-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
            Next Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mb-6">
                  <span className="text-5xl font-bold text-blue-500">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-foreground/90">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Connect */}
      <section className="py-24 section-primary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
            Ways to Connect
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {connectGroups.map((group) => (
              <ServiceCard key={group.title} {...group} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 section-secondary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Ready to Take the Next Step?</h2>
          <p className="text-lg text-foreground/90 mb-12">
            We&apos;d love to help you get connected and find your place in our community.
          </p>
          <Link
            href="/visit"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </>
  )
} 