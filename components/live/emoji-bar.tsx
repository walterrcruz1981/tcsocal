'use client'

import { useRef } from 'react'
import { EmojiOverlay } from './emoji-overlay'

export function EmojiBar() {
  const emojiOverlayRef = useRef<{ addEmoji: (emoji: string, position: { x: number; y: number }) => void } | null>(null)

  const handleEmojiClick = (emoji: string, event: React.MouseEvent) => {
    const position = {
      x: event.clientX,
      y: event.clientY
    }
    emojiOverlayRef.current?.addEmoji(emoji, position)
  }

  return (
    <>
      <EmojiOverlay ref={emojiOverlayRef} />
      <div className="flex items-center gap-2 py-2">
        <span className="text-lg pl-4">TEMPLO CALVARIO WELCOMES YOU</span>
        <div className="flex gap-2 ml-auto text-lg">
          <button className="p-2 hover:bg-white/10 rounded-full">
            <ShareIcon className="w-5 h-5" />
          </button>
          <button
            className="p-2 hover:bg-white/10 rounded-full"
            onClick={(e) => handleEmojiClick('👍', e)}
          >
            👍
          </button>
          <button
            className="p-2 hover:bg-white/10 rounded-full"
            onClick={(e) => handleEmojiClick('❤️', e)}
          >
            ❤️
          </button>
          <button
            className="p-2 hover:bg-white/10 rounded-full"
            onClick={(e) => handleEmojiClick('😆', e)}
          >
            😆
          </button>
          <button
            className="p-2 hover:bg-white/10 rounded-full"
            onClick={(e) => handleEmojiClick('😮', e)}
          >
            😮
          </button>
        </div>
      </div>
    </>
  )
}

function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  )
}

