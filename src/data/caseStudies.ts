/** A step in a case study pipeline flow visualization */
export interface PipelineStep {
  label: string
  variant: 'default' | 'accent' | 'success'
}

/** A highlight card inside a case study */
export interface CaseStudyHighlight {
  title: string
  description: string
}

/** Domains listed on Engineering Domains panel (Hero section) */
export interface EngineeringDomain {
  index: string
  title: string
  subtitle: string
  description: string
}

/** A full case study data model */
export interface CaseStudy {
  id: string
  slug: string
  index: string
  category: string
  title: string
  summary: string
  description: string
  pipeline: PipelineStep[]
  highlights: CaseStudyHighlight[]
  /** If truthy, link to standalone case study page */
  hasDetailPage: boolean
}

// ── Engineering Domains (Hero Section) ────────────────────────────────────
export const engineeringDomains: EngineeringDomain[] = [
  {
    index: '01 / CONTENT',
    title: 'CMS & Publishing',
    subtitle: 'Content migration, publishing workflows, templates & SEO',
    description: 'Content migration, publishing workflows, templates & SEO',
  },
  {
    index: '02 / INTEGRATION',
    title: 'APIs & Services',
    subtitle: 'REST APIs, integrations, authentication & service workflows',
    description: 'REST APIs, integrations, authentication & service workflows',
  },
  {
    index: '03 / DATA',
    title: 'Data & Search',
    subtitle: 'MySQL, Solr, Redis, Kafka & search infrastructure',
    description: 'MySQL, Solr, Redis, Kafka & search infrastructure',
  },
  {
    index: '04 / PLATFORM',
    title: 'Rendering & Infrastructure',
    subtitle: 'Rendering engines, server environments & production troubleshooting',
    description: 'Rendering engines, server environments & production troubleshooting',
  },
  {
    index: '05 / ECOSYSTEM',
    title: 'Ad Tech & Analytics',
    subtitle: 'Ad tags, campaigns, GA4, GTM & publisher integrations',
    description: 'Ad tags, campaigns, GA4, GTM & publisher integrations',
  },
]

// ── Case Studies ──────────────────────────────────────────────────────────
export const caseStudies: CaseStudy[] = [
  {
    id: 'java-migration',
    slug: 'java-migration',
    index: 'CASE STUDY // 01',
    category: 'INFRASTRUCTURE & RUNTIME',
    title: 'Modernizing a legacy Java application from Java 8 toward Java 21 LTS, including framework, dependency and namespace compatibility analysis.',
    summary: 'Java 8 → Java 21 Migration Analysis',
    description:
      'Application runtime upgrade moving legacy codebase components toward modern LTS Java 21. Reconciled deprecations across Maven dependencies, updated the Spring Boot stack, migrated packages from javax.* to jakarta.*, and validated runtime stability across environments.',
    pipeline: [
      { label: 'Java 8',                 variant: 'default' },
      { label: 'Dependency Audit',       variant: 'default' },
      { label: 'Spring Boot Upgrade',    variant: 'default' },
      { label: 'javax → jakarta',        variant: 'accent'  },
      { label: 'Library Compatibility',  variant: 'default' },
      { label: 'Java 21',               variant: 'default' },
      { label: 'Testing & Validation',   variant: 'success' },
    ],
    highlights: [
      {
        title: 'Jakarta Migration',
        description:
          'Identified and addressed compatibility issues related to the migration from javax.* to jakarta.* namespaces.',
      },
      {
        title: 'Dependency Compatibility',
        description:
          'Reviewed application dependencies and their compatibility with the newer Java and Spring Boot stack.',
      },
      {
        title: 'Runtime Validation',
        description:
          'Validated application behavior across database, search, caching, messaging and server components.',
      },
    ],
    hasDetailPage: true,
  },
  {
    id: 'publishing-migration',
    slug: 'publishing-migration',
    index: 'CASE STUDY // 02',
    category: 'DATA PIPELINES & CMS',
    title: 'Migrating a Large Publishing Ecosystem',
    summary: 'Migrating a Large Publishing Ecosystem',
    description:
      'Designed and supported content migration workflows covering articles, metadata, media assets, URLs and publishing structures across CMS platforms.',
    pipeline: [
      { label: 'Source Content',    variant: 'default' },
      { label: 'RSS / Feeds',       variant: 'default' },
      { label: 'Custom Parser',     variant: 'default' },
      { label: 'Transformation',    variant: 'accent'  },
      { label: 'Image Processing',  variant: 'default' },
      { label: 'CMS Import',        variant: 'default' },
      { label: 'Solr Index',        variant: 'default' },
      { label: 'SEO Validation',    variant: 'success' },
    ],
    highlights: [
      {
        title: 'Encoding Integrity',
        description:
          'Handled UTF-8 character encoding sanitization across diverse content sets and structured HTML payloads.',
      },
      {
        title: 'Media Pipelines',
        description:
          'Validated asset ingestion, media mapping, and automated thumbnail generation across transformed feeds.',
      },
      {
        title: 'Taxonomy & Redirects',
        description:
          'Structured taxonomy mapping for tags and categories alongside URL redirect verification for search continuity.',
      },
    ],
    hasDetailPage: true,
  },
  {
    id: 'ad-stack',
    slug: 'ad-stack',
    index: 'CASE STUDY // 03',
    category: 'AD TECH & INTEGRATIONS',
    title: 'Debugging the Publisher Ad Stack',
    summary: 'Debugging the Publisher Ad Stack',
    description:
      'Investigated and resolved publisher advertising delivery issues, ad slot definitions, tag placement in templates, and campaign targeting discrepancies across web properties.',
    pipeline: [
      { label: 'Publisher',      variant: 'default' },
      { label: 'CMS Layout',    variant: 'default' },
      { label: 'Ad Config',     variant: 'default' },
      { label: 'GPT Ad Tag',    variant: 'accent'  },
      { label: 'Ad Platform',   variant: 'default' },
      { label: 'Campaign Bids', variant: 'default' },
      { label: 'DOM Render',    variant: 'default' },
      { label: 'Analytics',     variant: 'success' },
    ],
    highlights: [
      {
        title: 'Slot Configuration',
        description:
          'Investigated ad-slot configuration, dimensions and placement issues affecting publisher pages.',
      },
      {
        title: 'Browser Debugging',
        description:
          'Used browser developer tools to trace client-side behavior, network requests and ad-rendering issues.',
      },
      {
        title: 'Discrepancy Analysis',
        description:
          'Investigated differences between expected campaign behavior, ad requests and rendered results.',
      },
    ],
    hasDetailPage: true,
  },
  {
    id: 'search-indexing',
    slug: 'search-indexing',
    index: 'CASE STUDY // 04',
    category: 'SEARCH ENGINE & INDEXING',
    title: 'Turning Publishing Data Into Searchable Content',
    summary: 'Turning Publishing Data Into Searchable Content',
    description:
      'Configured Apache Solr search integration for editorial platforms. Handled indexing triggers from CMS saves, managed schema definitions, and ensured reliable data extraction from relational databases.',
    pipeline: [
      { label: 'CMS Event',          variant: 'default' },
      { label: 'SQL Extraction',     variant: 'default' },
      { label: 'Field Normalization',variant: 'accent'  },
      { label: 'Solr Schema',        variant: 'default' },
      { label: 'Facet Weighting',    variant: 'default' },
      { label: 'Faceted UI Result',  variant: 'success' },
    ],
    highlights: [
      {
        title: 'Schema & Field Types',
        description:
          'Configured schema field mappings, multi-valued attributes, and analyzers tailored to article metadata.',
      },
      {
        title: 'Indexing Workflows',
        description:
          'Maintained indexing pipelines triggered by editorial publishing actions to ensure timely article discoverability.',
      },
      {
        title: 'Query Troubleshooting',
        description:
          'Investigated search query behavior, facet filtering accuracy, and cached responses using Redis layers.',
      },
    ],
    hasDetailPage: true,
  },
]
