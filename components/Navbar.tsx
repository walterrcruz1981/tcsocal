'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'LATEST MESSAGE', href: '/latest-message' },
    {
      label: 'CONNECT',
      href: '/connect/#connect',
      subItems: [
        { label: 'CELEBRATE RECOVERY', href: '/connect/celebrate-recovery' }
      ]
    },
    { label: 'UPCOMING EVENTS', href: '/events' },
    { label: 'VISIT US', href: '/visit' }
  ]

  // Helper to check if current path is in subItems
  const isSubPathActive = (item: typeof navItems[0]) => {
    return item.subItems?.some(subItem => pathname === subItem.href)
  }

  return (
    <header className="fixed top-0 w-full shadow-md z-50 bg-[#1a1a1a] text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  // Button for items with sublinks
                  <button 
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className={`text-white hover:text-red-500 text-sm font-semibold transition-colors flex items-center gap-1 relative
                      ${(pathname === item.href || isSubPathActive(item)) ? 'after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-red-500' : ''}`}
                    >
                      {item.label}
                      <svg 
                        className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    // Regular link for items without sublinks
                    <Link 
                      href={item.href}
                      className={`text-white hover:text-red-500 text-sm font-semibold transition-colors relative
                        ${pathname === item.href ? 'after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-0.5 after:bg-red-500' : ''}`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown menu */}
                  {item.subItems && openDropdown === item.label && (
                    <div className="absolute left-0 mt-2 w-48 bg-[#1a1a1a] shadow-lg rounded-md">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-[#2a2a2a]"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
            ))}
            <Link
              href="/livestream"
              className="bg-red-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              Watch Livestream
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground"
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
                    ${pathname === item.href ? 'border-l-2 border-red-500 bg-[#2a2a2a]' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.subItems?.map((subItem) => (
                  <Link
                    key={subItem.label}
                    href={subItem.href}
                    className={`block pl-8 py-2 text-gray-300 hover:bg-[#2a2a2a]
                      ${pathname === subItem.href ? 'border-l-2 border-red-500 bg-[#2a2a2a]' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/livestream"
              className="block px-4 py-2 mt-2 bg-red-600 text-white hover:bg-red-700"
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

export default Navbar 