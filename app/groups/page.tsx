import Image from 'next/image'
import GroupCard from '@/components/GroupCard'

const groups = [
  {
    title: "Family Groups",
    description: "Connect with other families to study God's Word and grow together in faith.",
    details: [
      "Weekly meetings",
      "Family-friendly environment",
      "Shared meals and fellowship",
      "Prayer support"
    ],
    image: "/groups/family.webp",
    schedule: "Various times"
  },
  {
    title: "Young Adults",
    description: "A vibrant community of young adults seeking to deepen their faith and make lasting connections.",
    details: [
      "Bible study",
      "Social activities",
      "Mentorship opportunities",
      "Leadership development"
    ],
    image: "/groups/young-adults.webp",
    schedule: "Wednesday evenings"
  },
  {
    title: "Men's Fellowship",
    description: "Men gathering to study scripture, share life experiences, and support one another.",
    details: [
      "Biblical manhood",
      "Accountability",
      "Community service",
      "Monthly events"
    ],
    image: "/groups/mens.webp",
    schedule: "Saturday mornings"
  },
  {
    title: "Women's Ministry",
    description: "A supportive community of women growing together in faith and purpose.",
    details: [
      "Bible study",
      "Prayer groups",
      "Mentorship program",
      "Special events"
    ],
    image: "/groups/womens.webp",
    schedule: "Tuesday evenings"
  }
]

const benefits = [
  {
    title: "Community",
    description: "Find genuine connections and support in your faith journey"
  },
  {
    title: "Growth",
    description: "Deepen your understanding of God's Word through guided study"
  },
  {
    title: "Leadership",
    description: "Develop leadership skills and prepare to lead your own group"
  },
  {
    title: "Impact",
    description: "Make a difference in your community through group outreach"
  }
]

export default async function GroupsPage() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-[url('/pattern1.jpg')] bg-center bg-no-repeat bg-cover -z-10" style={{ opacity: 1 }} />
      
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh]">
          <Image
            src="/groups/groups-hero.webp"
            alt="Small Groups"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
                CONNECT & GROW
              </h1>
              <p className="text-white/90 text-xl max-w-2xl mx-auto">
                Join a small group and be part of our vision for community and growth
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 section-primary">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Our Vision for Groups</h2>
            <p className="text-lg text-foreground/90 mb-12">
              Cell groups are the heart of our church&apos;s growth strategy. Through these intimate 
              gatherings, we train, equip, and empower members to become leaders who can 
              reproduce the vision of reaching our community for Christ.
            </p>
          </div>
        </section>

        {/* Groups Grid */}
        <section className="py-24 section-secondary">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
              Find Your Group
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {groups.map((group) => (
                <GroupCard key={group.title} {...group} />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 section-primary">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
              Why Join a Group?
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                  <p className="text-foreground/90">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 