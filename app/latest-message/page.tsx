import ParallaxHero from '@/components/ParallaxHero'
import PreviousMessages from '@/components/PreviousMessages'
import { latestMessage, previousMessages } from '@/data/messages'

export default function LatestMessage() {
  return (
    <>
      <ParallaxHero 
        title="LATEST MESSAGE"
        subtitle="Watch and grow in your faith journey"
        imageSrc="/hero-bg.webp"
      />
      
      <div className="relative min-h-screen">
        <section className="py-24 section-primary">
          <div className="max-w-7xl mx-auto px-4">
            {/* Main Content */}
            <div className="max-w-4xl mx-auto mb-24">
              {/* Video Player */}
              <div className="mb-8">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe 
                    src={`https://player.vimeo.com/video/${latestMessage.id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title={latestMessage.title}
                  />
                </div>
                <script src="https://player.vimeo.com/api/player.js" async />
              </div>

              {/* Message Details */}
              <div className="border-b border-gray-200 dark:border-gray-800 pb-8">
                <h2 className="text-3xl font-bold mb-4 text-foreground">{latestMessage.title}</h2>
                <div className="flex items-center gap-4 text-foreground/90 mb-6">
                  <span>{latestMessage.pastor}</span>
                  <span>•</span>
                  <span>{latestMessage.date}</span>
                </div>
                <p className="text-foreground/90 text-lg">{latestMessage.description}</p>
              </div>
            </div>

            {/* Previous Messages Grid */}
            <PreviousMessages messages={previousMessages} />
          </div>
        </section>
      </div>
    </>
  )
} 