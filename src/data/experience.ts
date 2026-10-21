/** A single contribution item inside the Experience section */
export interface Contribution {
  id: string
  lucideIcon: string
  title: string
  description: string
  tags: string[]
}

/** A work experience block */
export interface ExperienceBlock {
  period: string
  role: string
  tags: string[]
  contributions: Contribution[]
}

export const experience: ExperienceBlock = {
  period: '2022 — PRESENT',
  role: 'Software Developer & Technical Solutions Engineer',
  tags: ['CMS', 'Publishing', 'Ad Tech', 'Backend', 'Integrations'],
  contributions: [
    {
      id: 'backend-api',
      lucideIcon: 'Cpu',
      title: 'Backend & API Integrations',
      description:
        'Developed and maintained backend services, REST APIs and integrations across CMS and publishing systems.',
      tags: ['Java', 'Spring Boot', 'REST APIs'],
    },
    {
      id: 'cms-publishing',
      lucideIcon: 'Rss',
      title: 'CMS & Publishing Workflows',
      description:
        'Worked across custom CMS platforms, WordPress, publishing workflows, templates, RSS feeds and content structures.',
      tags: ['CMS', 'WordPress', 'Publishing'],
    },
    {
      id: 'content-migration',
      lucideIcon: 'ArrowLeftRight',
      title: 'Content Migration',
      description:
        'Worked on article and content migration workflows involving feeds, transformation, media, URLs and publishing validation.',
      tags: ['Migration', 'RSS', 'Content'],
    },
    {
      id: 'adtech',
      lucideIcon: 'MousePointerClick',
      title: 'Ad-Tech Troubleshooting',
      description:
        'Investigated publisher advertising implementations, ad slots, ad tags, campaign behavior and browser-side issues.',
      tags: ['Ad Tech', 'Ad Slots', 'Debugging'],
    },
    {
      id: 'production-troubleshooting',
      lucideIcon: 'SearchCode',
      title: 'Production Troubleshooting',
      description:
        'Investigated application, integration and runtime issues using logs, browser tools, APIs, SQL and system diagnostics.',
      tags: ['Debugging', 'Logs', 'DevTools'],
    },
    {
      id: 'data-search',
      lucideIcon: 'HardDrive',
      title: 'Data & Search',
      description:
        'Worked with MySQL, MariaDB, Solr, Redis and Kafka across application data and search workflows.',
      tags: ['MySQL', 'Solr', 'Redis'],
    },
    {
      id: 'analytics',
      lucideIcon: 'BarChart3',
      title: 'Analytics Integrations',
      description:
        'Worked with GA4, GTM and external APIs to support analytics implementations and data integrations.',
      tags: ['GA4', 'GTM', 'APIs'],
    },
    {
      id: 'infrastructure',
      lucideIcon: 'Terminal',
      title: 'Linux & Server Environments',
      description:
        'Worked with Linux-based environments, Apache, Tomcat, Jenkins and application deployment workflows.',
      tags: ['Linux', 'Tomcat', 'Jenkins'],
    },
    {
      id: 'cross-functional',
      lucideIcon: 'Handshake',
      title: 'Cross-Functional Technical Solutions',
      description:
        'Worked with engineering, operations and commercial stakeholders to investigate technical issues and support integrations.',
      tags: ['Technical Solutions', 'Integrations', 'Jira'],
    },
  ],
}
