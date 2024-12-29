export type Database = {
  public: {
    Tables: {
      chat_messages: {
        Row: {
          id: string
          user_id: string
          message: string
          user_name: string
          user_image: string | null
          created_at: string
          is_deleted: boolean
          deleted_at: string | null
          deleted_by: string | null
        }
        Insert: {
          id?: string
          user_id: string
          message: string
          user_name: string
          user_image?: string | null
          created_at?: string
          is_deleted?: boolean
          deleted_at?: string | null
          deleted_by?: string | null
        }
      }
      chat_presence: {
        Row: {
          id: string
          user_id: string
          user_name: string
          user_image: string | null
          last_seen: string
          is_online: boolean
        }
        Insert: {
          id?: string
          user_id: string
          user_name: string
          user_image?: string | null
          last_seen?: string
          is_online?: boolean
        }
      }
    }
  }
} 