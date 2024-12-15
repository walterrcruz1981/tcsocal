'use client'
import { useState } from 'react'
import EventCard from './EventCard'
import SearchBar from './SearchBar'
import type { Event } from '@/types/event'

interface EventsGridProps {
  initialEvents: Event[]
}

export default function EventsGrid({ initialEvents }: EventsGridProps) {
  const [filteredEvents, setFilteredEvents] = useState(initialEvents)
  
  const handleSearch = (searchTerm: string) => {
    const filtered = initialEvents.filter(event =>
      (event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) ||
      (event.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
    )
    setFilteredEvents(filtered)
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {filteredEvents.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-foreground/90">No events found</p>
        </div>
      )}
    </>
  )
} 