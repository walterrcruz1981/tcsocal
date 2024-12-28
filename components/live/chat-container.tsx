'use client'

import { useState } from 'react'
import  ChatMessages  from './ChatMessages'
import { Notes } from './notes'
import { Bible } from './bible'
import {MessageCircle, BookOpen,NotepadText} from 'lucide-react'

export function ChatContainer() {
  const [activeTab, setActiveTab] = useState('chat')

  return (
    <div className="font-italic overflow-hidden flex flex-col h-[calc(90vh-2rem)] rounded-lg shadow-md shadow-red-500/80 animate-pulseShadow">
      <div className="flex-grow overflow-y-auto">
        {activeTab === 'chat' && <ChatMessages />}
        {activeTab === 'notes' && <Notes />}
        {activeTab === 'bible' && <Bible />}
      </div>
      <div className=" p-2 flex bg-gray-900">
        <button
          className={`flex-1 py-2 px-4 rounded-l-lg ${activeTab === 'chat' ? 'bg-gray-800/40 text-white' : 'text-gray-400 hover:bg-gray-800/50'}`}
          onClick={() => setActiveTab('chat')}
        >
          <MessageCircle className="w-8" />
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-r-lg ${activeTab === 'notes' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800/50'}`}
          onClick={() => setActiveTab('notes')}
        >
          <NotepadText className="w-8" />
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-r-lg ${activeTab === 'bible' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800/50'}`}
          onClick={() => setActiveTab('bible')}
        >
          <BookOpen className="w-8" />
        </button>
      </div>
    </div>
  )
}

