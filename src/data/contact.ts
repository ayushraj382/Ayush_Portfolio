/** Contact channel link */
export interface ContactChannel {
  id: string
  lucideIcon: string
  label: string
  display: string
  href: string
  isExternal: boolean
  ariaLabel: string
}

/** Contact form topic option */
export interface ContactTopic {
  value: string
  label: string
}

export const email = 'ayushrajsingh382@gmail.com'

export const contactChannels: ContactChannel[] = [
  {
    id: 'linkedin',
    lucideIcon: 'Linkedin',
    label: 'LinkedIn',
    display: 'linkedin.com/in/ayushraj382/',
    href: 'https://www.linkedin.com/in/ayushraj382/',
    isExternal: true,
    ariaLabel: 'LinkedIn Profile (opens in a new tab)',
  },
  {
    id: 'github',
    lucideIcon: 'Github',
    label: 'GitHub',
    display: 'github.com/ayushraj382',
    href: 'https://github.com/ayushraj382',
    isExternal: true,
    ariaLabel: 'GitHub Profile (opens in a new tab)',
  },
  {
    id: 'email',
    lucideIcon: 'Mail',
    label: 'Direct Email',
    display: email,
    href: `mailto:${email}`,
    isExternal: false,
    ariaLabel: `Send direct email to ${email}`,
  },
]

export const footerLinks: Pick<ContactChannel, 'id' | 'label' | 'href' | 'isExternal' | 'ariaLabel'>[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ayushraj382/',
    isExternal: true,
    ariaLabel: 'LinkedIn Profile (opens in a new tab)',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/ayushraj382',
    isExternal: true,
    ariaLabel: 'GitHub Profile (opens in a new tab)',
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${email}`,
    isExternal: false,
    ariaLabel: 'Direct Email',
  },
]

export const contactTopics: ContactTopic[] = [
  { value: 'job',           label: 'Job Opportunity' },
  { value: 'project',       label: 'Technical Project' },
  { value: 'freelance',     label: 'Freelance / Consulting' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'inquiry',       label: 'General Inquiry' },
]
