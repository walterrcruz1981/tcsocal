export function VideoPlayer() {
    return (
      <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 shadow-lg to-gray-900 rounded-lg overflow-hidden video-container">
        <div className="absolute inset-0 flex items-center justify-center">
   <iframe className="w-full h-full" src="https://player.vimeo.com/video/1041551918?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture;"  title="Watch Now"></iframe>
   </div>
      </div>
    )
  }
  
  