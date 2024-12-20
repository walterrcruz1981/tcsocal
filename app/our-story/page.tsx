import ParallaxHero from '@/components/ParallaxHero'

const visionPillars = [
  {
    title: "Evangelize",
    description: "Every member of the Body of Christ is called to evangelize. Our 'One for One' approach is simple: 'Christ brought me, so I bring.' Christ won me so that I could win others.",
    verse: "Mark 1:38–39"
  },
  {
    title: "Train",
    description: "Champions of Faith is our training ground for future leaders, beginning with principles of faith and advancing to preparation of lessons and sermons.",
    verse: "2 Tim. 4:2; 1 Peter 3:15–16"
  },
  {
    title: "Empower",
    description: "Graduates are commissioned to launch their own Cell groups, taking the gospel to all nations, beginning with our Jerusalem - our own community.",
    verse: "John 4:35"
  }
]

export default function OurStory() {
  return (
    <>
      <ParallaxHero 
        title="OUR STORY"
        subtitle="A legacy of faith, service, and community impact since 1936"
        imageSrc="/about/heart-revolution.webp"
      />

      {/* Main Content */}
      <section className="py-24 section-primary">
        <div className="max-w-3xl mx-auto px-4">
          {/* Impact Story */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Church Multiplication</h2>
            <div className="prose prose-lg mx-auto text-foreground/90">
              <p className="mb-6">
                What started with one faithful lady from Mexico returning home to establish a church 
                has grown into a movement. Today, we have opened 103 churches through the power of 
                multiplication.
              </p>
              <p>
                We believe that now the church will multiply even more because these churches are a 
                product of church multiplication. We plan to open no less than 20 per decade, with 
                God&apos;s help.
              </p>
            </div>
          </div>

          {/* Vision Pillars */}
          <div className="space-y-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Evangelizing – Train – Commission
            </h2>
            <p className="text-xl text-center text-foreground/90 mb-16">
              Templo Calvario dares to be different. Our vision is to equip our church to reproduce 
              itself and meet the &quot;Great Commission.&quot;
            </p>
            {visionPillars.map((pillar, index) => (
              <div key={pillar.title} className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-red-500">{index + 1}</span>
                  <h3 className="text-2xl font-bold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-foreground/90 pl-12">{pillar.description}</p>
                <p className="text-sm text-red-500 pl-12">{pillar.verse}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 