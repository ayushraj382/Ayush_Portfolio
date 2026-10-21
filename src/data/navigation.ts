/** Navigation links used in the Header */
export interface NavLink {
  label: string
  href: string
  anchor: string
}

export const navLinks: NavLink[] = [
  { label: 'Work',         href: '/#work',         anchor: 'work' },
  { label: 'Expertise',    href: '/#expertise',    anchor: 'expertise' },
  { label: 'Architecture', href: '/#architecture', anchor: 'architecture' },
  { label: 'How I Think',  href: '/#engineering',  anchor: 'engineering' },
  { label: 'Experience',   href: '/#experience',   anchor: 'experience' },
  { label: 'About',        href: '/#about',         anchor: 'about' },
]
