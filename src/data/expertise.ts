/** One expertise domain card */
export interface ExpertiseCard {
  id: string
  index: string
  icon: string           // Material Symbols name → mapped to Lucide in component
  lucideIcon: string     // Lucide icon name used in the React component
  title: string
  subtitle: string       // Concise tech subtitle (monospace label)
  description: string
  tags: string[]
}

export const expertiseCards: ExpertiseCard[] = [
  {
    id: 'backend',
    index: '01',
    icon: 'terminal',
    lucideIcon: 'Terminal',
    title: 'Backend Engineering',
    subtitle: 'Java · Spring Boot · REST APIs · Maven',
    description:
      'Backend services, API integrations, dependency upgrades, application troubleshooting and production debugging.',
    tags: ['Java', 'Spring Boot', 'REST APIs'],
  },
  {
    id: 'frontend',
    index: '02',
    icon: 'web',
    lucideIcon: 'Monitor',
    title: 'Frontend Engineering',
    subtitle: 'HTML · CSS · JavaScript · Browser Debugging',
    description:
      'Building and troubleshooting web interfaces, responsive layouts, CMS templates, client-side behavior and browser-based integrations.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Chrome DevTools'],
  },
  {
    id: 'cms',
    index: '03',
    icon: 'feed',
    lucideIcon: 'Rss',
    title: 'CMS & Publishing',
    subtitle: 'Custom CMS · WordPress · RSS · Templates',
    description:
      'Custom CMS platforms, WordPress, content migration, publishing workflows, RSS feeds, templates, multilingual content and content delivery.',
    tags: ['Custom CMS', 'WordPress', 'RSS', 'Publishing'],
  },
  {
    id: 'adtech',
    index: '04',
    icon: 'ads_click',
    lucideIcon: 'MousePointerClick',
    title: 'Ad Technology',
    subtitle: 'Ad Tags · Ad Slots · Publisher Integrations',
    description:
      'Ad configuration, ad rendering, publisher integrations, campaign troubleshooting and browser-side debugging.',
    tags: ['Ad Tags', 'Ad Slots', 'Publisher Integrations'],
  },
  {
    id: 'data',
    index: '05',
    icon: 'database',
    lucideIcon: 'Database',
    title: 'Data & Search',
    subtitle: 'MySQL · MariaDB · Solr · Redis · Kafka',
    description:
      'Database queries, search indexing, schema analysis, caching and application data flows.',
    tags: ['MySQL', 'Solr', 'Redis'],
  },
  {
    id: 'infrastructure',
    index: '06',
    icon: 'dns',
    lucideIcon: 'Server',
    title: 'Infrastructure',
    subtitle: 'Linux · Apache · Tomcat · Jenkins · Git',
    description:
      'Server environments, deployments, application runtime troubleshooting, logs and production support.',
    tags: ['Linux', 'Tomcat', 'Jenkins'],
  },
  {
    id: 'seo',
    index: '07',
    icon: 'trending_up',
    lucideIcon: 'TrendingUp',
    title: 'SEO & Web Optimization',
    subtitle: 'Technical SEO · Sitemaps · Metadata · Performance',
    description:
      'Technical SEO, sitemap infrastructure, content discoverability, URL handling, metadata and publishing optimization.',
    tags: ['Technical SEO', 'Sitemaps', 'Metadata', 'Content Optimization'],
  },
  {
    id: 'analytics',
    index: '08',
    icon: 'hub',
    lucideIcon: 'BarChart3',
    title: 'Analytics & Integrations',
    subtitle: 'GA4 · GTM · Meta APIs · External APIs',
    description:
      'Analytics implementation, event tracking, API integrations and troubleshooting data flows between platforms.',
    tags: ['GA4', 'GTM', 'APIs'],
  },
  {
    id: 'solutions',
    index: '09',
    icon: 'build',
    lucideIcon: 'Wrench',
    title: 'Technical Solutions',
    subtitle: 'Integration · Troubleshooting · Client Support',
    description:
      'Investigating implementation issues across frontend, APIs, CMS, advertising, analytics and backend systems.',
    tags: ['Debugging', 'Integrations', 'Jira'],
  },
]
