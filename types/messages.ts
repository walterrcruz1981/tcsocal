export interface Message {
  name: string,
  description: string,
  player_embed_url: string,
  created_time: string,
  resource_key: string,
  link: string,
  id: string
}

export interface VimeoResponse {
  data: Message[];
}

