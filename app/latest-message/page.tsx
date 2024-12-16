import Link from 'next/link'

// Latest videos from TC SoCal's English Service playlist
const latestMessage = {
  id: "1038818914",
  title: "¿Dónde está el bebé Jesús?",
  pastor: "Dr. Daniel de León",
  date: "March 3, 2024",
  description: "Join us for our Sunday service at Templo Calvario Santa Ana"
}

const previousMessages = [
  {
    id: "1039440019",
    title: "Watch Now",
    thumbnail: "https://i.vimeocdn.com/video/1039440019_640x360.jpg",
    pastor: "Dr. Daniel de León",
    date: "March 3, 2024"
  },
  {
    id: "1038818914",
    title: "¿Dónde está el bebé Jesús?",
    thumbnail: "https://i.vimeocdn.com/video/1038818914_640x360.jpg",
    pastor: "Dr. Daniel de León",
    date: "March 3, 2024"
  },
  {
    id: "1038803785",
    title: "Jesús es mi guía",
    thumbnail: "https://i.vimeocdn.com/video/1038803785_640x360.jpg",
    pastor: "Dr. Daniel de León",
    date: "March 3, 2024"
  },
  {
    id: "1037232364",
    title: "The Prophecy of His Name and His Ministry",
    thumbnail: "https://i.vimeocdn.com/video/1037232364_640x360.jpg",
    pastor: "Dr. Daniel de León",
    date: "March 3, 2024"
  },
  {
    id: "1036602770",
    title: "La Profecía de Su Nombre y Su Ministerio",
    thumbnail: "https://i.vimeocdn.com/video/1036602770_640x360.jpg",
    pastor: "Dr. Daniel de León",
    date: "March 3, 2024"
  }
]

const LatestMessage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Pattern - Placed first but behind content */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-[url('/pattern1.jpg')] bg-center bg-no-repeat bg-cover"
        style={{ opacity: 1 }}
      />
      
      {/* Content Container - Everything above background */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-[30vh]">
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
                LATEST MESSAGE
              </h1>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-24 section-primary">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Video Player */}
              <div className="lg:col-span-2">
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
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {latestMessage.title}
                  </h2>
                  <p className="text-foreground/90">
                    {latestMessage.pastor} • {latestMessage.date}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Description</h3>
                  <p className="text-foreground/90">
                    {latestMessage.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Share This Message</h3>
                  <div className="flex gap-4">
                    <a 
                      href={`https://vimeo.com/${latestMessage.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2"
                    >
                      Watch on Vimeo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Messages */}
        <section className="py-24 section-secondary">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Previous Messages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {previousMessages.map((message) => (
                <Link 
                  key={message.id} 
                  href={`https://vimeo.com/${message.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                      <iframe 
                        src={`https://player.vimeo.com/video/${message.id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        title={message.title}
                      />
                    </div>
                    <script src="https://player.vimeo.com/api/player.js" async />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-red-500 transition-colors">
                    {message.title}
                  </h3>
                  <p className="text-foreground/90">{message.pastor} • {message.date}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="https://vimeo.com/user/207837736/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
              >
                View All Messages
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LatestMessage 