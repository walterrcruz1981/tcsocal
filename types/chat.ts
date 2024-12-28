export interface ChatMessage {
  id: string
  user_id: string
  message: string
  user_name: string
  user_image?: string
  created_at: string
  is_deleted: boolean
  deleted_at?: string
  deleted_by?: string
}

export interface ChatPresence {
  id: string
  user_id: string
  user_name: string
  user_image?: string
  last_seen: string
  is_online: boolean
} 