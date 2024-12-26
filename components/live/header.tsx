import Link from 'next/link'


export function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full">
            Bell
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/10 rounded-full">
            User
            <span>Abe Gonzalez</span>
          </button>
        </div>
      </div>
    </header>
  )
}

