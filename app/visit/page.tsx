import Image from 'next/image'
import Link from 'next/link'
import { FacebookIcon, VimeoIcon } from '../../components/Icons'

const services = [
  {
    day: "Sunday",
    title: "GENERAL SERVICES",
    times: ["9:00 AM", "11:00 AM", "5:00 PM"]
  },
  {
    day: "Thursday",
    title: "WORSHIP NIGHT SERVICE",
    times: ["7:00 PM"]
  },
  {
    day: "Friday",
    title: "CELEBRATE RECOVERY",
    times: ["7:00 PM"]
  }
]

const watchPlatforms = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    link: "https://facebook.com/tcsocal"
  },
  {
    name: "Vimeo",
    icon: VimeoIcon,
    link: "https://vimeo.com/tcsocal"
  }
]

export default function VisitUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] ">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-blue-950/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
              VISIT US
            </h1>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-24 section-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.day}
                className="bg-card-bg p-8 rounded-xl shadow-lg text-center"
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {service.day}
                </h3>
                <div className="text-red-500 font-bold mb-4">
                  {service.title}
                </div>
                <div className="text-foreground/90">
                  TIME{service.times.length > 1 ? 'S' : ''}: {service.times.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Online Section */}
      <section className="py-24 section-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            WAYS TO WATCH SERVICE ONLINE
          </h2>
          <p className="text-xl mb-12 text-foreground/90">
            Watch service with us every weekend on your favorite platform! 
            Tap below to find the option that works for you!
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {watchPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card-bg p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-4">
                  <platform.icon className="w-8 h-8 text-foreground group-hover:text-red-500 transition-colors" />
                  <span className="text-xl font-bold text-foreground group-hover:text-red-500 transition-colors">
                    {platform.name.toUpperCase()}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 section-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-foreground">
            FIND US
          </h2>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              TC SoCal
            </h3>
            <p className="text-xl text-foreground/90 mb-8">
              2501 W 5th St.<br />
              Santa Ana, CA 92703
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2501+W+5th+St+Santa+Ana+CA+92703"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 