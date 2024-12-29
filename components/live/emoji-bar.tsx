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
        <div className="flex gap-2 ml-auto text-lg">

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

