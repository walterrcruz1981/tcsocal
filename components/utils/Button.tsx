import Link from 'next/link'
// New reusable server component for buttons
export default function Button({
  href,
  variant = 'primary',
  children,
  className = ''
}: {
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
  className?: string
}) {
  const baseStyles = "inline-block px-8 py-3 rounded-lg transition text-center"
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "bg-white text-black border-2 border-black hover:bg-gray-100"
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  )
} 