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
    <div className="min-h-screen mt-40">
      {/* Mobile Sticky Player - Only visible on small screens */}
      <div className="lg:hidden">
        <StickyVideoPlayer />
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] rounded-lg shadow-right mt-28 bg-gradient-to-r from-[#1a242e] to-gray-900/80 mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] p-4 gap-4 text-white">
        <div className="space-y-4">
          {/* Desktop Video Player - Hidden on mobile */}
          <div className="hidden lg:block">
            <VideoPlayer />
          </div>
          <AboutChurch />
        </div>
        <ChatContainer />
      </div>
    </div>
  )
} 