import { VideoPlayer } from '../../components/live/video-player'
import { ChatContainer } from '../../components/live/chat-container'
import { AboutChurch } from '../../components/live/about-church'
import { EmojiBar } from '../../components/live/emoji-bar'
import Footer from '@/components/Footer'

export default function Live() {
    return(
        <div className="w-[calc(80vw-2rem)] mt-28 bg-gradient-to-r from-gray-900/70 to-blue-600/80 mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] p-4 gap-4 ">
          <div className="space-y-4">
            <VideoPlayer />
            <EmojiBar />
            <AboutChurch />
          </div>
          <ChatContainer />
        </div>
     
    )
}