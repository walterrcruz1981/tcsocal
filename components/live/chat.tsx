// components/live/Chat.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { SignInButton, useUser } from '@clerk/nextjs';

type User = {
  username: string;
  imageUrl?: string;
};

type Message = {
  id: string;
  user: User;
  content: string;
  timestamp: string;
};

type ChatProps = {
  isLive: boolean;
};

export function Chat({ isLive }: ChatProps) {
  const { user } = useUser();
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Save messages to local storage whenever messages change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = {
      id: String(Date.now()),
      user: {
        username: user?.username || 'Anonymous',
        imageUrl: user?.imageUrl || '/tc-logo-outline.webp',
      },
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput(''); // Clear the input field after sending
  };

  const getRandomColor = () => {
    const COLORS = ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500'];
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  };

  return (
    <div className="flex flex-col h-full bg-black/30">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-full flex-shrink-0 ${message.user.imageUrl ? '' : getRandomColor()}`}>
              {message.user.imageUrl ? (
                <Image src={message.user.imageUrl} alt={message.user.username} height={40} width={40} className="w-full h-full rounded-full" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-bold">
                  {message.user.username}
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-bold text-sm text-white">{message.user.username}</span>
                <span className="text-xs text-gray-500">{message.timestamp}</span>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 text-sm text-white">{message.content}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4">
        {!isLive && (
          <div className="text-white rounded-lg">
            You need to be Signed In to chat
            <SignInButton>
              <div className="text-underline cursor-pointer text-red-500">Sign In</div>
            </SignInButton>
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message to chat..."
            className="flex-1 border border-gray-700 text-black rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={!isLive}
            className="bg-blue-500/60 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}