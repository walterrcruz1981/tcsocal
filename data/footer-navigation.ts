import type { LinkItem, Section } from '@/types/footer';

export const links: Section[] = [
  {
    title: 'ABOUT',
    items: [
      { href: '/about/our-story', label: 'Our Story' },
      { href: '/about/our-leaders', label: 'Leadership' },
      { href: '/about/our-vision', label: 'Our Vision' },
    ],
  },
  {
    title: 'CONNECT',
    items: [
      { href: '/connect', label: 'Get Connected' },
      { href: '/connect/groups', label: 'Small Groups' },
      { href: '/connect/serve', label: 'Serve' },
    ],
  },
  {
    title: 'RESOURCES',
    items: [
      { href: '/latest-message', label: 'Messages' },
      { href: '/connect/events', label: 'Events' },
      { href: '/give', label: 'Give' },
    ],
  },
];

export const socialLinks: LinkItem[] = [
  { href: 'https://facebook.com/tcsocal', label: 'Facebook' },
  { href: 'https://instagram.com/tcsocal', label: 'Instagram' },
];

