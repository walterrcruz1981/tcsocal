import PageHeader from '@/components/PageHeader'
import EventsGrid from '@/components/EventsGrid'
import { events } from '../../data/events'

export default function Events() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="UPCOMING EVENTS"
        backgroundImage="/events/events-hero.webp"
      />
      
      <section className="py-16 section-primary">
        <div className="max-w-7xl mx-auto px-4">
          <EventsGrid initialEvents={events} />
        </div>
      </section>
    </div>
  )
} 