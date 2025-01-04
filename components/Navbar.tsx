'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { navItems } from '@/data/navigation'
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { user } = useUser()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const getRandomColor = () => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <header className="fixed w-full top-0 z-50 text-white">
      <nav className="w-full md:w-3/4 rounded-lg mt-4 mx-auto px-4 bg-black/40 backdrop-blur-sm hover:backdrop-blur-lg">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 z-50"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                ref={item.subItems ? dropdownRef : undefined}
                onMouseEnter={() => item.subItems && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`hover:text-blue-500 text-sm font-semibold transition-colors
                    ${pathname === item.href ? 'text-blue-500' : ''}`}
                >
                  <span className="flex items-center gap-1">
                    {item.label}
                    {item.subItems && (
                      <svg
                        className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </Link>

                {/* Desktop Dropdown Menu */}
                <AnimatePresence>
                  {item.subItems && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-[#1a242e] rounded-md shadow-lg z-50"
                    >
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm hover:bg-blue-500/10 transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Desktop Auth Section */}
            <div className="relative" ref={userMenuRef}>
              {user ? (
                <div>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 hover:opacity-80"
                  >
                    {user.imageUrl ? (
                      <Image
                        src={user.imageUrl}
                        alt="Profile"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    ) : (
                      <div className={`w-8 h-8 rounded-full ${getRandomColor()} flex items-center justify-center`}>
                        {user.firstName?.[0] || user.emailAddresses[0].emailAddress[0].toUpperCase()}
                      </div>
                    )}
                  </button>

                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-[#1a242e] rounded-md shadow-lg z-50"
                      >
                        <Link
                          href="/users"
                          className="block px-4 py-2 text-sm hover:bg-blue-500/10 transition-colors"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Dashboard
                        </Link>

                        <div className="border-t border-gray-700 mt-2 pt-2 px-4 py-2">
                          <SignOutButton>
                            <button className="text-sm text-red-500 hover:text-red-400 transition-colors">
                              Sign Out
                            </button>
                          </SignOutButton>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <SignInButton mode="modal">
                  <button className="text-sm hover:text-blue-500 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Slide-out Menu */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed h-screen top-0 left-0 bottom-0 w-screen bg-black z-50 md:hidden overflow-y-auto"
              >
                <div className="p-7">
                  <div className="flex  justify-between items-center mb-8">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <Image
                        src="/tc-logo-outline.webp"
                        alt="TC SoCal"
                        width={140}
                        height={50}
                        className="h-10 w-auto"
                      />
                    </Link>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2"
                      aria-label="Close menu"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Mobile Navigation Items */}
                  <div className="space-y-4 ">
                    {navItems.map((item) => (
                      <div key={item.href}>
                        {item.subItems ? (
                          <div>
                            <button
                              onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                              className="w-full flex items-center justify-between py-2 text-lg"
                            >
                              {item.label}
                              <svg
                                className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''
                                  }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            <AnimatePresence>
                              {openDropdown === item.label && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="ml-4 space-y-2"
                                >
                                  {item.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.href}
                                      href={subItem.href}
                                      className="block py-2 text-sm text-gray-300 hover:text-white"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className="block py-2 text-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}

                    {/* Mobile Auth Section */}
                    <div className="pt-4 mt-4 border-t border-gray-700">
                      {user ? (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            {user.imageUrl ? (
                              <Image
                                src={user.imageUrl}
                                alt="Profile"
                                width={40}
                                height={40}
                                className="rounded-full"
                              />
                            ) : (
                              <div className={`w-10 h-10 rounded-full ${getRandomColor()} flex items-center justify-center text-lg`}>
                                {user.firstName?.[0] || user.emailAddresses[0].emailAddress[0].toUpperCase()}
                              </div>
                            )}
                            <div>
                              <p className="font-medium">{user.fullName || user.emailAddresses[0].emailAddress}</p>
                            </div>
                          </div>
                          <Link
                            href="/users"
                            className="block py-2 text-sm text-gray-300 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Dashboard
                          </Link>
                          <SignOutButton>
                            <button className="w-full text-left py-2 text-sm text-red-500 hover:text-red-400">
                              Sign Out
                            </button>
                          </SignOutButton>
                        </div>
                      ) : (
                        <SignInButton mode="modal">
                          <button className="w-full text-left py-2 text-lg hover:text-blue-500">
                            Sign In
                          </button>
                        </SignInButton>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}