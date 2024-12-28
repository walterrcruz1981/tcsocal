import Image from 'next/image'
import Link from 'next/link'
import { events } from '@/data/events'
import EventCard from '../components/event/EventCard'
import Carousel from '../components/slides/Carousel'
import { vimeoMessages} from '@/data/messages'
import ParallaxHero from '@/components/hero/ParallaxHero'
import { carouselImages } from '@/data/carousel'

export default async function Home() {
  const upcomingEvents = events.slice(0, 2)
   const vimeo = await vimeoMessages();
   const {name, description, player_embed_url, created_time} = vimeo.data[1];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxHero 
        title=""
        subtitle="WELCOMES YOU HOME"
        imageSrc="/hero-bg.webp"
        heroContent={
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
        }
      />

      {/* Join Us Section - Combined service times and call-to-action */}
      <section className="section-secondary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 items-center">
            {/* Left Column - Carousel - Now takes 3 columns */}
            <div className="md:col-span-3">
              <Carousel images={carouselImages} />
            </div>

            {/* Right Column - Content - Takes 1 column */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                JOIN US FOR<br />SERVICE
              </h2>
              <div className="text-lg text-foreground/90">
                <p className="mb-4">
                  Whether you&apos;re from Santa Ana CA or across the globe, we invite you to experience 
                  what God has in store for you during a service at TC Church!
                </p>
                <div className="font-semibold">
                  Join us every Sunday at:<br />
                  9:00 AM, 11:00 AM & 5:00 PM
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/connect/visit"
                  className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition text-center"
                >
                  JOIN IN PERSON
                </Link>
                <Link
                  href="/live"
                  className="inline-block bg-white text-black border-2 border-black px-8 py-3 rounded-lg hover:bg-gray-100 transition text-center"
                >
                  JOIN ONLINE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Message Section */}
      <section className="section-primary  py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            LATEST MESSAGE
          </h2>
          <div className="grid lg:grid-cols-8 gap-12 items-center">
            {/* Video Player */}
            <div className='col-span-6 rounded-lg'>
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe 
                  src={`${player_embed_url}?badge=0&autopause=0&player_id=0&app_id=58479`}
                  className="absolute top-0 left-0 w-full h-full rounded-xl"                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title={name}
                />
              </div>
              <script src="https://player.vimeo.com/api/player.js" async />
            </div>

            {/* Message Details */}
            <div className="col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                {name}
              </h3>
              <p className="text-foreground/90">
              Streamed: {new Date(created_time).toLocaleTimeString([], {day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </p>
              <p className="text-foreground/90">
                {description}
              </p>
              <div className="flex gap-4">
                <Link
                  href="/latest-message"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
                >
                  Watch More Messages
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
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/connect/events"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
