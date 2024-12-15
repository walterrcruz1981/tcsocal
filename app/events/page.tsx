import { Suspense } from 'react'
import Image from 'next/image'
import EventsGrid from '../../components/EventsGrid'
import { events } from '../../data/events'

export default function Events() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh]">
        <Image
          src="/events/events-hero.webp"
          alt="Events Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-blue-950/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
              UPCOMING EVENTS
            </h1>
          </div>
        </div>
      </section>

      {/* Events Grid with Search */}
      <section className="py-16 section-primary">
        <div className="max-w-7xl mx-auto px-4">
          <Suspense fallback={<div>Loading events...</div>}>
            <EventsGrid initialEvents={events} />
          </Suspense>
        </div>
      </section>
    </div>
  )
} 