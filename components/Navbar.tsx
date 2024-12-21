'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { navItems } from '@/data/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Helper to check if current path is in subItems
  const isSubPathActive = (item: typeof navItems[0]) => {
    return item.subItems?.some(subItem => pathname === subItem.href)
  }

  // Updated helper to check if link is active
  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    // Remove trailing slashes and hash for comparison
    const cleanPath = pathname.replace(/\/$/, '').split('#')[0]
    const cleanHref = href.replace(/\/$/, '').split('#')[0]
    return cleanPath.startsWith(cleanHref)
  }

  return (
    <header className="fixed w-full top-0 z-50
     text-white">
      <nav className="w-3/4 rounded-lg mt-4 mx-auto px-4 bg-black/40  backdrop-blur-sm hover:backdrop-blur-lg sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/tc-logo-outline.webp"
              alt="TC SoCal"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.subItems ? (
                  <div className="relative">
                    <Link 
                      href={item.href}
                      className={`hover:text-blue-500 text-sm font-semibold transition-colors
                        ${(isLinkActive(item.href) || isSubPathActive(item)) ? 'text-blue-500' : 'text-white'}`}
                    >
                      <span className="flex items-center gap-1">
                        {item.label}
                        <button 
                          onClick={(e) => {
                            e.preventDefault()
                            setOpenDropdown(openDropdown === item.label ? null : item.label)
                          }}
                          className="p-1"
                        >
                          <svg 
                            className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </span>
                    </Link>
                    {/* Dropdown menu */}
                    {item.subItems && openDropdown === item.label && (
                      <div className="absolute left-0 mt-2 w-48 bg-[#1a242e] shadow-lg rounded-md">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm hover:bg-[#2a2a2a]
                              ${pathname === subItem.href ? 'text-blue-500 bg-[#2a2a2a]' : 'text-white'}`}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={item.href}
                    className={`hover:text-blue-500 text-sm font-semibold transition-colors
                      ${isLinkActive(item.href) ? 'text-blue-500' : 'text-white'}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="https://tcsocalonline.online.church/"
              className={`bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors
                ${isLinkActive('/livestream') ? 'bg-blue-700' : ''}`}
            >
              Watch Livestream
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-white"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 text-white hover:bg-[#2a2a2a]
                    ${pathname === item.href ? 'text-blue-500' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.subItems?.map((subItem) => (
                  <Link
                    key={subItem.label}
                    href={subItem.href}
                    className={`block pl-8 py-2 text-gray-300 hover:bg-[#2a2a2a]
                      ${pathname === subItem.href ? 'text-blue-500' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/livestream"
              className="block px-4 py-2 mt-2 bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Watch Livestream
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
} 