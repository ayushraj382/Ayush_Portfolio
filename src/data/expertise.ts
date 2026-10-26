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
    subtitle: 'API design, runtime reliability, and service integration',
    description:
      'Engineering resilient service architectures, handling dependency migrations, resolving concurrency bottlenecks, and conducting production incident debugging.',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Maven', 'Microservices'],
  },
  {
    id: 'frontend',
    index: '02',
    icon: 'web',
    lucideIcon: 'Monitor',
    title: 'Frontend Engineering',
    subtitle: 'Responsive web systems, state architecture, and UI performance',
    description:
      'Building type-safe interfaces, design systems, and responsive layouts with high rendering performance, clean component abstractions, and deep DevTools profiling.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'Vite'],
  },
  {
    id: 'cms',
    index: '03',
    icon: 'feed',
    lucideIcon: 'Rss',
    title: 'CMS & Publishing',
    subtitle: 'Editorial pipelines, headless content engines, and syndication',
    description:
      'Architecting zero-downtime content migrations, decoupled templates, automated editorial workflows, and multilingual syndication feeds at enterprise scale.',
    tags: ['Custom CMS', 'WordPress', 'RSS/Atom', 'Headless Arch', 'Sanitization'],
  },
  {
    id: 'adtech',
    index: '04',
    icon: 'ads_click',
    lucideIcon: 'MousePointerClick',
    title: 'Ad Technology',
    subtitle: 'Client-side auction flows, yield diagnostics, and tag latency',
    description:
      'Diagnosing header bidding latency, orchestrating inventory configuration, resolving bidder drop-offs, and protecting layout stability against cumulative shifts.',
    tags: ['Prebid.js', 'Google Ad Manager (GAM)', 'Bid Analysis', 'Core Web Vitals'],
  },
  {
    id: 'data',
    index: '05',
    icon: 'database',
    lucideIcon: 'Database',
    title: 'Data & Search',
    subtitle: 'Schema optimization, indexing pipelines, and high-throughput query caching',
    description:
      'Designing high-volume search collections, streaming ingestion workers, cache invalidation schemes, and optimizing complex relational queries.',
    tags: ['MySQL', 'Apache Solr', 'Redis', 'Apache Kafka', 'MariaDB'],
  },
  {
    id: 'infrastructure',
    index: '06',
    icon: 'dns',
    lucideIcon: 'Server',
    title: 'Infrastructure & Tooling',
    subtitle: 'Deployment pipelines, runtime containerization, and log telemetry',
    description:
      'Automating CI/CD delivery pipelines, managing containerized servlet environments, aggregating distributed log streams, and maintaining production uptime.',
    tags: ['Linux', 'Docker', 'Apache Tomcat', 'Jenkins', 'Git CI/CD'],
  },
  {
    id: 'seo',
    index: '07',
    icon: 'trending_up',
    lucideIcon: 'TrendingUp',
    title: 'SEO & Web Optimization',
    subtitle: 'Crawl budget efficiency, structured indexing, and edge caching',
    description:
      'Engineering dynamic XML sitemap generation, structured JSON-LD schemas, canonical routing rules, and Core Web Vitals optimization for large publisher domains.',
    tags: ['JSON-LD Schema', 'XML Sitemaps', 'Lighthouse', 'Core Web Vitals', 'Canonical Routing'],
  },
  {
    id: 'analytics',
    index: '08',
    icon: 'hub',
    lucideIcon: 'BarChart3',
    title: 'Analytics & Integrations',
    subtitle: 'Event telemetry, behavioral pipelines, and webhook orchestration',
    description:
      'Instrumenting end-to-end event data streams, server-side attribution, and cross-platform payload synchronization across third-party endpoints.',
    tags: ['Google Analytics 4', 'Google Tag Manager', 'DataLayer', 'Webhooks', 'Meta Pixel'],
  },
  {
    id: 'solutions',
    index: '09',
    icon: 'build',
    lucideIcon: 'Wrench',
    title: 'Technical Solutions',
    subtitle: 'Root-cause diagnostics, cross-stack triaging, and system audits',
    description:
      'Bridging product and infrastructure by troubleshooting edge cases across browser runtimes, reverse proxies, content APIs, and publisher partner integrations.',
    tags: ['Root Cause Analysis', 'Network Tracing', 'Production Triaging', 'SLA Management'],
  },
]
