'use client'

import { useState } from 'react'
import ChatMessages from './ChatMessages'
import { Notes } from './notes'
import { Bible } from './bible'
import { MessageCircle, BookOpen, NotepadText } from 'lucide-react'

export function ChatContainer() {
  const [activeTab, setActiveTab] = useState('chat')

  return (
    <div className="font-italic overflow-hidden flex flex-col-reverse max-sm:flex-col h-[calc(80vh-2rem)] max-sm:h-[calc(50vh-2rem)] rounded-lg">

      <div className="grid grid-cols-3 border-t-2 h-10 border-b-2 py-2">

        <button
          className={`grid place-items-center text-gray-900 ${activeTab === 'chat' ? ' shadow-blue-400 shadow-sm text-blue-400 ' : ' hover:bg-blue-400/50'}`}
          onClick={() => setActiveTab('chat')}
        >
          <MessageCircle className="w-8" />
        </button>

        <button
          className={`grid place-items-center text-gray-900 ${activeTab === 'notes' ? ' shadow-blue-400 shadow-sm text-blue-400 ' : ' hover:bg-blue-400/50'}`}
          onClick={() => setActiveTab('notes')}
        >
          <NotepadText className="w-8" />
        </button>

        <button
          className={`grid place-items-center text-gray-900 ${activeTab === 'bible' ? ' shadow-blue-400 shadow-sm text-blue-400 ' : ' hover:bg-blue-400/50'}`}
          onClick={() => setActiveTab('bible')}
        >
          <BookOpen className="w-8" />
        </button>

      </div>
      <div className="flex-grow overflow-y-auto">
        {activeTab === 'chat' && <ChatMessages />}
        {activeTab === 'notes' && <Notes />}
        {activeTab === 'bible' && <Bible />}
      </div>
    </div>
  )
}

