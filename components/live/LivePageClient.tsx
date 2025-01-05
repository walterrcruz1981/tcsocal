'use client'
import dynamic from 'next/dynamic'
import { VideoPlayer } from './video-player'
import { AboutChurch } from './about-church'
import { ChatContainer } from './chat-container'

const StickyVideoPlayer = dynamic(() => import('./StickyVideoPlayer'), {
  ssr: false
})


export default function LivePageClient() {
  return (
    <div className="mt-36 rounded-lg">
      {/* Mobile Sticky Player - Only visible on small screens */}
      <div className="lg:hidden">
        <StickyVideoPlayer />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12  gap-1">
        {/* video container */}
        <div className="bg-yellow-500  lg:col-span-8 grid rounded-lg">
          {/* Desktop Video Player - Hidden on mobile */}
          <div className="hidden lg:block ">
            <VideoPlayer />
            <div className='py-2 max-sm:hidden'>
              <AboutChurch />
            </div>
          </div>

        </div>
        {/* chat container */}
        <div className='bg-white col-span-4 rounded-lg'>
          <ChatContainer />
        </div>
      </div>
    </div>
  )
} 