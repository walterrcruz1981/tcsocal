import { VideoPlayer } from '../../components/live/video-player'
import { ChatContainer } from '../../components/live/chat-container'
import { AboutChurch } from '../../components/live/about-church'
import { EmojiBar } from '../../components/live/emoji-bar'

export default async function Live() {
    return(
        <div className="max-w-[1600px] rounded-lg shadow-right  mt-28 bg-gradient-to-r from-[#1a242e] to-gray-900/80 mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] p-4 gap-4 text-white ">
          <div className="space-y-4">
            <VideoPlayer />
            <EmojiBar />
            <AboutChurch />
          </div>
          <ChatContainer />
        </div>
     
    )
}