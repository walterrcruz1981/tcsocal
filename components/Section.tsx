// New reusable server component for sections
export default function Section({
  variant = 'primary',
  className = '',
  children
}: {
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
}) {
  return (
    <section className={`section-${variant} py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {children}
      </div>
    </section>
  )
} 