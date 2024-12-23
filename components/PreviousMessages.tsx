import Link from 'next/link'
import type { Message } from '@/types/messages'

interface PreviousMessagesProps {
  messages: Message[]; // Expecting an array of Message
}

const PreviousMessages: React.FC<PreviousMessagesProps> = ({ messages }) => {
  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Previous Messages</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {messages.map((message) => (
          <Link 
            key={message.resource_key} 
            href={`${message.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe 
                  src={`${message.player_embed_url}?badge=0&autopause=0&player_id=0&app_id=58479`}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title={message.name}
                />
              </div>
              <script src="https://player.vimeo.com/api/player.js" async />
            </div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-blue-500 transition-colors">
              {message.name}
            </h3>
            <p className="text-foreground/90">{message.created_time}</p>
          </Link>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="https://vimeo.com/user/207837736/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          View All Messages
        </Link>
      </div>
    </div>
  )
} 
export default PreviousMessages;