import Image from 'next/image'
import Link from 'next/link'
import { events } from '../data/events'
import EventCard from '../components/EventCard'
import Carousel from '../components/Carousel'

const carouselImages = [
  {
    src: "/carousel-ddleon.webp",
    alt: "DD Leon leading worship"
  },
  {
    src: "/carousel-band.webp",
    alt: "Band over the crowd"
  },
  {
    src: "/carousel-lowerstage.webp",
    alt: "Lower Stage picture worshipping"
  }
]

export default function Home() {
  // Get the next 3 upcoming events
  const upcomingEvents = events.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900">
        <Image
          src="/hero-bg.webp"
          alt="TC SoCal Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <div className="relative w-full max-w-[500px] md:max-w-[600px] lg:max-w-[800px] mb-8">
            <Image
              src="/hero-outline.webp"
              alt="Decorative Outline"
              width={1200}
              height={1200}
              className="w-full h-auto"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">WELCOMES YOU HOME</h1>
        </div>
      </section>

      {/* Service Times */}
      <section className="section-primary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-xl font-semibold text-foreground">JOIN US ONLINE THIS SUNDAY AT:</p>
            <p className="text-lg text-foreground/90">9:00 AM, 11:00 AM AND 5:00 PM</p>
          </div>
          <div className="flex justify-center gap-6">
            <Link
              href="/livestream"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Watch Livestream
            </Link>
            <Link
              href="/visit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section-secondary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Left Column - Carousel - Takes up 2 columns */}
            <div className="md:col-span-2">
              <Carousel images={carouselImages} />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                JOIN US FOR<br />SERVICE
              </h2>
              <p className="text-lg text-foreground/90">
                Whether you're from Santa Ana CA or across the globe, we invite you to experience 
                what God has in store for you during a service at TC Church! There's a place meant 
                just for you. Check out our in-person and online service experiences every Sunday 
                at 9 AM, 11:00 AM & 5:00 PM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/visit"
                  className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition text-center"
                >
                  JOIN IN PERSON
                </Link>
                <Link
                  href="/livestream"
                  className="inline-block bg-white text-black border-2 border-black px-8 py-3 rounded-lg hover:bg-gray-100 transition text-center"
                >
                  JOIN ONLINE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-secondary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            UPCOMING EVENTS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/events"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
