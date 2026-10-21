/** Tech stack category with a list of technology badges */
export interface TechCategory {
  id: string
  index: string
  label: string
  items: string[]
}

export const techStackCategories: TechCategory[] = [
  {
    id: 'languages',
    index: '01',
    label: 'LANGUAGES & WEB',
    items: ['Java', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SQL', 'Bash / Shell'],
  },
  {
    id: 'backend',
    index: '02',
    label: 'BACKEND & APIs',
    items: ['Spring Boot', 'REST APIs', 'Maven', 'API Integrations'],
  },
  {
    id: 'frontend',
    index: '03',
    label: 'FRONTEND & WEB',
    items: ['HTML', 'CSS', 'JavaScript', 'Chrome DevTools', 'Responsive UI', 'Browser Debugging'],
  },
  {
    id: 'cms',
    index: '04',
    label: 'CMS, PUBLISHING & SEO',
    items: [
      'Custom CMS', 'WordPress', 'RSS', 'XML', 'Sitemaps',
      'Templates', 'Multilingual Content', 'Technical SEO',
      'Metadata', 'Content Optimization',
    ],
  },
  {
    id: 'data',
    index: '05',
    label: 'DATA, SEARCH & INFRASTRUCTURE',
    items: ['MySQL', 'MariaDB', 'Solr', 'Redis', 'Kafka', 'Linux', 'Apache', 'Tomcat', 'Jenkins', 'Git'],
  },
  {
    id: 'adtech',
    index: '06',
    label: 'AD TECH, ANALYTICS & INTEGRATIONS',
    items: ['Google Ad Manager', 'GA4', 'GTM', 'Meta APIs', 'Ad Tags', 'Ad Slots', 'Publisher Integrations'],
  },
]
