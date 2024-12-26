'use client'

import { useState, useRef, useEffect } from 'react'

type Message = {
  id: string
  user: {
    name: string
    avatar?: string
  }
  content: string
  timestamp: string
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    user: { name: 'Jamila M.', avatar: '/placeholder.svg?height=40&width=40' },
    content: 'Good morning everyone',
    timestamp: 'Today at 6:34 AM'
  },
  {
    id: '2',
    user: { name: 'Elise C.', avatar: '/placeholder.svg?height=40&width=40' },
    content: 'A lovely good morning to you too and welcome to Church @raynette nicholson., Merry Christmas.',
    timestamp: 'Today at 6:34 AM'
  },
  {
    id: '3',
    user: { name: 'Christie B.', avatar: '/placeholder.svg?height=40&width=40' },
    content: 'Wonderful start this cold morning',
    timestamp: 'Today at 6:35 AM'
  },
  {
    id: '4',
    user: { name: 'Erin L.', avatar: '/placeholder.svg?height=40&width=40' },
    content: "I think my family thinks I'm not singing in praising Jesus in my living room lol standing up and shouting to the Lord all by myself but I know I'm not by myself just because I'm watching it online I still have the power of the Holy Spirit and I've got my e family Praise Jesus",
    timestamp: 'Today at 6:35 AM'
  }
]

const COLORS = ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500']

export function Chat() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessage: Message = {
      id: String(Date.now()),
      user: { name: 'You', avatar: '/placeholder.svg?height=40&width=40' },
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages([...messages, newMessage])
    setInput('')
  }

  const getRandomColor = () => {
    return COLORS[Math.floor(Math.random() * COLORS.length)]
  }

  return (
    <div className="flex flex-col h-full bg-black/30">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-full flex-shrink-0 ${message.user.avatar ? '' : getRandomColor()}`}>
              {message.user.avatar ? (
                <img src={message.user.avatar} alt={message.user.name} className="w-full h-full rounded-full" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-bold">
                  {message.user.name[0]}
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-bold text-sm text-white">{message.user.name}</span>
                <span className="text-xs text-gray-500">{message.timestamp}</span>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 text-sm text-white">
                {message.content}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className=" p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message to chat..."
            className="flex-1 border border-gray-700 text-black rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500/60 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

