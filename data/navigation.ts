import type { NavItem } from '@/types/navigation'

export const navItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT',
     href: '#',
     subItems: [
      { label: 'OUR STORY', href: '/about/our-story' },
      { label: 'OUR VISION', href: '/about/our-vision' },
      { label: 'WHAT WE BELIEVE', href: '/about/beliefs' },
      { label: 'OUR LOCATION', href: '/connect/visit' },
      { label: 'OUR LEADERS', href: '/about/our-leaders' },
     ]
  },
  {
    label: 'CONNECT',
    href: '##',
    subItems: [
      { label: 'CELEBRATE RECOVERY', href: '/connect/celebrate-recovery' },
      {label: 'EVENTS', href: '/connect/events'},
      {label: 'GROUPS', href: '/connect/groups'},
      {label: 'SERVE', href: '/connect/serve'},
      { label: 'GIVE', href: '/give' },
      { label: 'LATEST MESSAGE', href: '/latest-message' },
    ]
  },
  { label: 'VISIT US', href: '/connect/visit' },
  {label: 'LIVE STREAM', href: '/live'},

] 