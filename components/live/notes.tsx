'use client'

import React, { useState, useEffect } from 'react'

type Note = {
  id: number;
  content: string;
};

export function Notes() {
  const [notes, setNotes] = useState<Note[]>(() => {
    // Retrieve notes from local storage on initial render
    const savedNotes = localStorage.getItem('notes')
    return savedNotes ? JSON.parse(savedNotes) : []
  })
  const [newNoteInput, setNewNoteInput] = useState('')
  const [editNoteInput, setEditNoteInput] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [expandedId, setExpandedId] = useState<number | null>(null)

  // Save notes to local storage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newNoteInput.trim()) return

    const newNote: Note = {
      id: Date.now(),
      content: newNoteInput,
    }

    setNotes((prevNotes) => [...prevNotes, newNote])
    setNewNoteInput('')
  }

  const handleEditNote = (id: number) => {
    const noteToEdit = notes.find(note => note.id === id)
    if (noteToEdit) {
      setEditNoteInput(noteToEdit.content)
      setEditingId(id)
      setExpandedId(id)
    }
  }

  const handleUpdateNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!editNoteInput.trim() || editingId === null) return

    setNotes((prevNotes) =>
      prevNotes.map(note =>
        note.id === editingId ? { ...note, content: editNoteInput } : note
      )
    )
    setEditNoteInput('')
    setEditingId(null)
    setExpandedId(null)
  }

  const handleDeleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter(note => note.id !== id))
  }

  return (
    <div className="p-4">
      <form onSubmit={handleAddNote} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newNoteInput}
          onChange={(e) => setNewNoteInput(e.target.value)}
          placeholder="Add a new note..."
          className="flex-1 border border-gray-300 rounded p-2 text-black"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Add
        </button>
      </form>
      <ul>
        {notes.map(note => (
          <li key={note.id} className="mb-2">
            <div className="flex justify-between items-center p-2 border border-gray-300 rounded">
              <span>{note.content}</span>
              <div>
                <button onClick={() => handleEditNote(note.id)} className="text-blue-500 mr-2">📝</button>
                <button onClick={() => handleDeleteNote(note.id)} className="text-red-500">❌</button>
              </div>
            </div>
            {expandedId === note.id && (
              <form onSubmit={handleUpdateNote} className="mt-2">
                <input
                  type="text"
                  value={editNoteInput}
                  onChange={(e) => setEditNoteInput(e.target.value)}
                  className="border border-gray-300 rounded p-2 w-full text-black"
                />
                <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2">
                ✅
                </button>
              </form>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

