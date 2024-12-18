export interface Message {
  id: string
  title: string
  pastor: string
  date: string
  description: string
}

export interface PreviousMessage extends Message {
  thumbnail: string
} 