'use client'
import Image from 'next/image'
import { useState } from 'react'
import Modal from './Modal'
import type { Event } from '@/types/event'

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div 
        className="group cursor-pointer" 
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
          <Image
            src={event.imageUrl ?? '/placeholder.webp'}
            alt={event.title ?? 'Event Image'}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-white text-xl font-bold">{event.title ?? 'Untitled Event'}</h3>
            <div className="text-white/90 text-sm">
              <p>{event.day ?? 'Date TBD'}</p>
              <p>{`${event.date ?? 'TBD'} | ${event.time ?? 'TBD'}`}</p>
              <p>{event.location ?? 'Location TBD'}</p>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-500">{event.title}</h2>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={event.imageUrl ?? '/placeholder.webp'}
              alt={event.title ?? 'Event Image'}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

              className="object-cover"
            />
          </div>
          <div className="flex gap-4 text-sm text-gray-600">
            <p>{event.day}</p>
            <p>{event.date}</p>
            <p>{event.time}</p>
          </div>
          <p className="text-gray-800">{event.location}</p>
          <div className="prose max-w-none text-blue-500">
            {event.description}
          </div>
        </div>
      </Modal>
    </>
  )
} 