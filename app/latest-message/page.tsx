import ParallaxHero from '@/components/ParallaxHero'
import PreviousMessages from '@/components/PreviousMessages'
import { vimeoMessages } from '@/data/messages'

export default async function LatestMessage() {

  const vimeo = await vimeoMessages(); // 
  const { name, description, player_embed_url, created_time } = vimeo.data[1];
  return (
    <>
      <ParallaxHero 
        title="LATEST MESSAGE"
        subtitle="Watch and grow in your faith journey"
        imageSrc="/hero-bg.webp"
      />
      
      <div className="relative min-h-screen -mt-32">
        <section>
          <div className="max-w-[1400px] mx-auto px-4">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto mb-24">
              {/* Video Player */}
              <div className="mb-8 outline-dashed outline-2 outline-blue-500 rounded-lg overflow-hidden shadow-lg shadow-black/70 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-4s">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe 
                    src={`${player_embed_url}?h=31472a8d92?h=1026f4b66c?badge=0&autopause=0&player_id=0&app_id=58479`}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title={name}
                  />
                </div>
                <script src="https://player.vimeo.com/api/player.js" async />
              </div>

              {/* Message Details */}
              <div className="border-b border-gray-200 dark:border-gray-800 pb-8">
                <h2 className="text-3xl font-bold mb-4 text-foreground">{name}</h2>
                <div className="flex items-center gap-4 text-foreground/90 mb-6">

                  <span>{created_time}</span>
                </div>
                <p className="text-foreground/90 text-lg">{description}</p>
              </div>
            </div>

            {/* Previous Messages Grid */}
            <PreviousMessages messages={vimeo.data} />
          </div>
        </section>
      </div>
    </>
  )
} 