import EventsGrid from '@/components/event/EventsGrid'
import ParallaxHero from '@/components/hero/ParallaxHero'
import { events } from '../../../data/events'

export default function Events() {
  return (
    <div className="min-h-screen">
      <ParallaxHero 
        title="UPCOMING EVENTS"
        subtitle="Join us for our upcoming events and activities"
        imageSrc="/events/events-hero.webp"
      />
      
      <section className="py-16 section-primary">
        <div className="max-w-7xl mx-auto px-4">
          <EventsGrid initialEvents={events} />
        </div>
      </section>
    </div>
  )
} 