'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import { useUser } from '@clerk/nextjs'
import { chatService } from '@/lib/chat-service'
import { supabase } from '@/lib/supabase'
import type { ChatMessage } from '@/types/chat'
import Image from 'next/image'
import EmojiPicker from './EmojiPicker'

export default function ChatMessages() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { user } = useUser()
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null)

  const loadMessages = useCallback(async () => {
    try {
      const data = await chatService.getMessages()
      if (data) {
        setMessages(data)
        setTimeout(scrollToBottom, 100)
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log('Error loading messages:', error.message)
      }
    }
  }, [])

  const setupRealtimeSubscription = useCallback(async () => {
    channelRef.current = supabase
      .channel('public:chat_messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages'
        },
        (payload) => {
          const newMessage = payload.new as ChatMessage
          setMessages((prev) => [...prev, newMessage])
          setTimeout(scrollToBottom, 100)
        }
      )

    await channelRef.current.subscribe()
  }, [])

  useEffect(() => {
    loadMessages()
    setupRealtimeSubscription()

    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current)
      }
    }
  }, [loadMessages, setupRealtimeSubscription])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !newMessage.trim()) return

    const messageToSend = newMessage.trim()
    setNewMessage('')

    try {
      const result = await chatService.sendMessage(
        messageToSend,
        user.id,
        user.fullName || user.username || 'Anonymous',
        user.imageUrl
      )
      
      if (result) {
        setMessages(prev => [...prev, result])
        setTimeout(scrollToBottom, 100)
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log('Error sending message:', error.message)
      }
      setNewMessage(messageToSend)
    }
  }

  const handleEmojiClick = (emoji: string) => {
    setNewMessage(prev => prev + emoji)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-2 ${
              message.user_id === user?.id ? 'flex-row-reverse' : ''
            }`}
          >
            {message.user_image ? (
              <Image
                src={message.user_image}
                alt={message.user_name}
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                {message.user_name[0]}
              </div>
            )}
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.user_id === user?.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-white'
              }`}
            >
              <p className="text-sm font-medium mb-1">{message.user_name}</p>
              <p>{message.message}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-700">
        <EmojiPicker onEmojiClick={handleEmojiClick} />
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
} 