export interface SubNavItem {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href: string
  subItems?: SubNavItem[]
} 