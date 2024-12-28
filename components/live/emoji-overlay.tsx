'use client'

import { useState, forwardRef, useImperativeHandle } from 'react'
import { FloatingEmoji } from './floating-emoji'

interface EmojiAnimation {
  id: number
  emoji: string
  startPosition: { x: number; y: number }
}

export const EmojiOverlay = forwardRef((props, ref) => {
  const [activeEmojis, setActiveEmojis] = useState<EmojiAnimation[]>([])
  
  useImperativeHandle(ref, () => ({
    addEmoji: (emoji: string, position: { x: number; y: number }) => {
      const newEmoji: EmojiAnimation = {
        id: Date.now(),
        emoji,
        startPosition: position,
      }
      
      setActiveEmojis(prev => [...prev, newEmoji])
    }
  }))
  
  const removeEmoji = (id: number) => {
    setActiveEmojis(prev => prev.filter(emoji => emoji.id !== id))
  }
  
  return (
    <>
      {activeEmojis.map(({ id, emoji, startPosition }) => (
        <FloatingEmoji
          key={id}
          emoji={emoji}
          startPosition={startPosition}
          onComplete={() => removeEmoji(id)}
        />
      ))}
    </>
  )
})

EmojiOverlay.displayName = 'EmojiOverlay'

