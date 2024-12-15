import Image from 'next/image'
import Link from 'next/link'

// Latest videos from TC SoCal's English Service playlist
const latestMessage = {
  id: "80VZQ5SnYCk",
  title: "Templo Calvario Santa Ana | Sunday Service | 12.31.23",
  pastor: "Dr. Daniel de León",
  date: "December 31, 2023",
  description: "Join us for our Sunday service at Templo Calvario Santa Ana as we worship together and hear God's Word."
}

const previousMessages = [
  {
    id: "80VZQ5SnYCk",
    title: "Templo Calvario Santa Ana | Sunday Service | 12.31.23",
    thumbnail: "https://i.ytimg.com/vi/80VZQ5SnYCk/maxresdefault.jpg",
    pastor: "Dr. Daniel de León",
    date: "December 31, 2023"
  },
  {
    id: "Wd_vZHHBZ4Y",
    title: "Templo Calvario Santa Ana | Sunday Service | 12.24.23",
    thumbnail: "https://i.ytimg.com/vi/Wd_vZHHBZ4Y/maxresdefault.jpg",
    pastor: "Dr. Daniel de León",
    date: "December 24, 2023"
  },
  {
    id: "YVBxJgL6C0Y",
    title: "Templo Calvario Santa Ana | Sunday Service | 12.17.23",
    thumbnail: "https://i.ytimg.com/vi/YVBxJgL6C0Y/maxresdefault.jpg",
    pastor: "Dr. Daniel de León",
    date: "December 17, 2023"
  }
]

const LatestMessage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-blue-950/50" />
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
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${latestMessage.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
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
                    href={`https://www.youtube.com/watch?v=${latestMessage.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2"
                  >
                    Watch on YouTube
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
                href={`https://www.youtube.com/watch?v=${message.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <Image
                    src={message.thumbnail}
                    alt={message.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
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
              href="https://www.youtube.com/@TemploCalvarioSA"
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
  )
}

export default LatestMessage 