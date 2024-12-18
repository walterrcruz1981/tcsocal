import type { NavItem } from '@/types/navigation'

export const navItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'LATEST MESSAGE', href: '/latest-message' },
  {
    label: 'CONNECT',
    href: '/connect',
    subItems: [
      { label: 'CELEBRATE RECOVERY', href: '/connect/celebrate-recovery' }
    ]
  },
  { label: 'UPCOMING EVENTS', href: '/events' },
  { label: 'VISIT US', href: '/visit' },
  { label: 'GIVE', href: '/give' }
] 