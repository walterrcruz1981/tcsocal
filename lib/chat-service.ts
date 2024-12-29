import { supabase } from './supabase'
import type { ChatMessage } from '@/types/chat'


export const chatService = {
  async sendMessage(message: string, userId: string, userName: string, userImage?: string) {
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .insert({
          message,
          user_id: userId,
          user_name: userName,
          user_image: userImage
        })
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log('Error sending message:', error.message)
      }
      throw error
    }
  },

  async getMessages(limit = 50) {
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .order('created_at', { ascending: true })
        .limit(limit)

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error fetching messages:', error)
      throw error
    }
  },

  subscribeToMessages(callback: (message: ChatMessage) => void) {
    const channel = supabase.channel('public:chat_messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages'
        },
        (payload) => {
          callback(payload.new as ChatMessage)
        }
      )
      .subscribe()

    return channel
  },

  async updatePresence(userId: string, userName: string, userImage?: string) {
    return await supabase
      .from('chat_presence')
      .upsert({
        user_id: userId,
        user_name: userName,
        user_image: userImage,
        last_seen: new Date().toISOString(),
        is_online: true
      })
  }
} 