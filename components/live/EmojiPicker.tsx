'use client'

interface EmojiPickerProps {
  onEmojiClick: (emoji: string) => void
}

export default function EmojiPicker({ onEmojiClick }: EmojiPickerProps) {
  const emojis = [
    '🙏', '😮', '💕', '✨', '❤️',
    '😊', '🙌', '🎉',
     '💯', '👏🏼', '💝', '🫡'
  ]

  return (
    <div className="p-2 border-t border-gray-700 bg-gray-800/50 rounded-lg mb-2">
      <div className="flex flex-wrap gap-2 justify-center">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() => onEmojiClick(emoji)}
            className="text-xl hover:scale-125 transition-transform p-1 cursor-pointer"
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  )
} 