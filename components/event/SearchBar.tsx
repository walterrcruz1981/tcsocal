'use client'
import { useState } from 'react'

interface SearchBarProps {
  onSearch: (term: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <div className="relative py-7">
      <input
        type="text"
        placeholder="Search Events..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-3 rounded-lg bg-card-bg text-foreground border border-gray-700 focus:outline-none focus:border-red-500"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  )
} 