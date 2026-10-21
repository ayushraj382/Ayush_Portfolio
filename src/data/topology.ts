/** One interactive topology node in the Architecture section */
export interface TopologyNode {
  id: string
  index: string
  label: string        // Full button label
  sublabel: string     // Tech stack subtitle under the label
  tag: string          // Inspector panel tag
  title: string        // Inspector panel title
  layer: string        // Inspector panel layer metadata
  description: string  // Inspector panel body text
  tools: string[]      // Inspector panel tool list
}

export const topologyNodes: TopologyNode[] = [
  {
    id: 'user_browser',
    index: '01',
    label: '01 / USER / BROWSER',
    sublabel: 'HTML · CSS · JS · DevTools',
    tag: '01 // USER // BROWSER',
    title: 'Frontend & Browser Layer',
    layer: 'Client & Browser',
    description:
      'The layer where users interact with the system. I work with HTML, CSS, JavaScript, templates, browser behavior and developer tools to investigate implementation issues.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Chrome DevTools', 'Network Inspection', 'DOM Debugging'],
  },
  {
    id: 'frontend',
    index: '02',
    label: '02 / FRONTEND',
    sublabel: 'Templates · UI · Client Behavior',
    tag: '02 // FRONTEND',
    title: 'Frontend',
    layer: 'UI & Presentation',
    description:
      'Building and debugging responsive user interfaces, template integration, client-side application behavior and browser-level troubleshooting.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Templates', 'Responsive UI', 'Client-side Behavior', 'Browser Debugging'],
  },
  {
    id: 'cms',
    index: '03',
    label: '03 / CMS / PUBLISHING',
    sublabel: 'Custom CMS · WordPress · RSS',
    tag: '03 // CMS / PUBLISHING',
    title: 'CMS & Publishing',
    layer: 'Publishing Systems',
    description:
      'Content management systems, publishing workflows, feed generation, template architectures, migration integrity and search engine content optimization.',
    tools: ['Custom CMS', 'WordPress', 'RSS / Feeds', 'Templates', 'Content Migration', 'Sitemaps', 'SEO'],
  },
  {
    id: 'apis',
    index: '04',
    label: '04 / APIs / SERVICES',
    sublabel: 'REST APIs · Integrations',
    tag: '04 // APIs / SERVICES',
    title: 'APIs & Services',
    layer: 'Backend & Services',
    description:
      'Designing, connecting and debugging backend services, REST APIs, external integrations and authentication workflows.',
    tools: ['REST APIs', 'Backend Services', 'External Integrations', 'Authentication', 'API Troubleshooting'],
  },
  {
    id: 'data_search',
    index: '05',
    label: '05 / DATA / SEARCH',
    sublabel: 'MySQL · Solr · Redis · Kafka',
    tag: '05 // DATA / SEARCH',
    title: 'Data & Search',
    layer: 'Data & Indexing',
    description:
      'Relational storage, enterprise search indexing, query optimization, in-memory caching and real-time event pipeline integrations.',
    tools: ['MySQL', 'MariaDB', 'Solr', 'Redis', 'Kafka', 'SQL Queries', 'Schema Analysis', 'Search Validation'],
  },
  {
    id: 'rendering',
    index: '06',
    label: '06 / RENDERING / DELIVERY',
    sublabel: 'Rendering · Apache · Tomcat',
    tag: '06 // RENDERING / DELIVERY',
    title: 'Rendering & Delivery',
    layer: 'Rendering & Web Servers',
    description:
      'Application server environments, rendering engines, template compilation, web server configuration and runtime diagnostics.',
    tools: ['Rendering Engines', 'Templates', 'Apache', 'Tomcat', 'HTML Delivery', 'Application Runtime'],
  },
  {
    id: 'adtech',
    index: '07',
    label: '07 / AD TECH / ANALYTICS',
    sublabel: 'Ad Tags · Ad Manager · GA4',
    tag: '07 // AD TECH / ANALYTICS',
    title: 'Ad Technology & Analytics',
    layer: 'Ad Tech & Telemetry',
    description:
      'Configuring ad slots, auditing tag execution, troubleshooting campaign delivery discrepancies, and tracking client/server telemetry.',
    tools: ['Ad Tags', 'Ad Slots', 'Google Ad Manager', 'GA4', 'GTM', 'Publisher Integrations', 'Browser Debugging'],
  },
]
