import type { VimeoResponse } from '@/types/messages'



export const vimeoMessages = async (): Promise<VimeoResponse> => {
  const response = await fetch('https://api.vimeo.com/users/231711131/videos', {
    headers: {
      'Authorization': `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`
    },
    cache: 'no-store'
  },);

  if (!response.ok) {
    throw new Error('Failed to fetch Vimeo messages');
  }

  const data: VimeoResponse = await response.json();
  return data;
};
