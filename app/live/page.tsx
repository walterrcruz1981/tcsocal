import ContactForm from '@/components/ContactForm'
import LivePageClient from '@/components/live/LivePageClient'
import PreviousMessages from '@/components/PreviousMessages'
import { vimeoMessages } from '@/data/messages'

export default async function Live() {
  const vimeo = await vimeoMessages();
  return <div className='bg-blue-800/50 p-3'>
    <LivePageClient />
    <ContactForm />
    <PreviousMessages messages={vimeo.data} />
  </div>
}