import AnimatedCard from '@/components/cards/AnimatedCard'
import GiveButton from '@/components/utils/GiveButton'
import ParallaxHero from '@/components/hero/ParallaxHero'
import ServiceCard from '@/components/cards/ServiceCard'

const impactAreas = [
  {
    title: "Provide Help and Hope",
    description: "Reach out to individuals and families facing challenging circumstances with practical aid and spiritual guidance.",
    backgroundImage: "/give/help.webp"
  },
  {
    title: "Spread the Message of Love",
    description: "Share the timeless message of hope and encouragement through various outreach programs, community events, and spiritual teachings.",
    backgroundImage: "/give/spread.webp"
  },
  {
    title: "Empower Lives",
    description: "Invest in meaningful initiatives such as educational workshops, youth mentorship, and skill-building opportunities that create lasting change.",
    backgroundImage: "/give/empower.webp"
  }
]

const givingOptions = [
  {
    title: "Online Donations",
    description: "Securely give through our online platform"
  },
  {
    title: "In-Person Contributions",
    description: "Visit us during any of our events or services"
  },
  {
    title: "Recurring Support",
    description: "Set up a monthly gift to sustain ongoing efforts and future projects"
  }
]

export default function Give() {
  return (
    <div className="relative min-h-screen">
      <ParallaxHero 
        title="GIVE"
        subtitle="Support Our Ministry"
        imageSrc="/give/give-hero.webp"
      />

      <section className="py-24 section-primary">
        <div className="max-w-7xl mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 text-foreground">Support Our Ministry</h2>
            <p className="text-lg text-foreground/90 mb-8">
              Your generous support plays a vital role in enabling us to serve and minister to those in need. 
              Every contribution helps us make an eternal impact in the lives of countless individuals.
            </p>
          </div>

          {/* Impact Areas */}
          <div className="mb-24">
            <h3 className="text-5xl font-bold text-center mb-12 text-foreground">Your Impact</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {impactAreas.map((area) => (
                <ServiceCard
                  key={area.title}
                  title={area.title}
                  description={area.description}
                  image={area.backgroundImage}
                  areas={[]}
                />
              ))}
            </div>
          </div>

          {/* Ways to Give */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-5xl font-bold text-center mb-12 text-foreground">Ways to Give</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {givingOptions.map((option) => (
                <AnimatedCard
                  key={option.title}
                  title={option.title}
                  description={option.description}
                />
              ))}
            </div>
            <div className="text-center">
              <p className="text-2xl text-foreground/90 mb-8">
                We are deeply grateful for your faithfulness and generosity. With your help, we can continue 
                this vital work and touch even more lives with God&apos;s love.
              </p>
              <p className="text-xl font-bold text-foreground">Thank You for Being a Blessing!</p>
             <br />
              <GiveButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 