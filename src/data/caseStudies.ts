/**
 * Case Studies Data Layer
 * Comprehensive technical details extracted from Stitch designs.
 */

export interface PipelineStep {
  label: string
  variant: 'default' | 'accent' | 'success'
}

export interface CaseStudyHighlight {
  title: string
  description: string
}

export interface EngineeringDomain {
  index: string
  title: string
  subtitle: string
  description: string
}

export interface EnvironmentBaseline {
  id: string
  label: string
  title: string
  description: string
  token: string
}

export interface PipelineStage {
  stage: string
  title: string
  description: string
  status: string
  statusType?: 'baseline' | 'active' | 'success' | 'target' | 'planned'
}

export interface CompatibilityRow {
  component: string
  legacy: string
  target: string
  status: string
  badgeType?: 'primary' | 'secondary' | 'neutral'
}

export interface SystemChallenge {
  boundary: string
  layer: string
  title: string
  description: string
  summary: string
  codeSnippet?: { label?: string; value: string; isAccent?: boolean }[]
  schematic?: { from: string; arrow: string; to: string }[]
  fanout?: { title: string; subtitle: string; items: string[] }
  codeBlock?: { language: string; content: string }
  tableData?: { headers: string[]; rows: string[][] }
}

export interface ContributionItem {
  index: string
  title: string
  description: string
}

export interface ValidationGate {
  gate: string
  title: string
  description: string
  status: string
}

export interface EditorialTakeaway {
  quote: string
  synthesis: string
}

export interface CaseStudy {
  id: string
  slug: string
  index: string
  category: string
  title: string
  summary: string
  description: string
  docRef: string
  scope: string
  role: string
  targetPlatforms: string
  verificationScope: string
  tags: string[]
  pipelineMeta?: { discipline: string; focus: string }
  
  // Rich section data
  context: {
    subtitle: string
    title: string
    lead: string
    secondaryLead?: string
    baselineNodes: EnvironmentBaseline[]
  }
  pipelineStages: {
    subtitle: string
    title: string
    lead: string
    discipline: string
    focus: string
    stages: PipelineStage[]
  }
  compatibilityMatrix: {
    subtitle: string
    title: string
    lead: string
    headers: string[]
    rows: CompatibilityRow[]
  }
  challenges: {
    subtitle: string
    title: string
    lead: string
    items: SystemChallenge[]
  }
  contributions: {
    subtitle: string
    title: string
    lead: string
    items: ContributionItem[]
  }
  validation: {
    subtitle: string
    title: string
    lead: string
    gates: ValidationGate[]
  }
  takeaway: EditorialTakeaway

  // Backwards compatibility
  pipeline: PipelineStep[]
  highlights: CaseStudyHighlight[]
  hasDetailPage: boolean
  nextCaseStudy?: { title: string; slug: string }
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
]

// ── 4 Full Case Studies ───────────────────────────────────────────────────
export const caseStudies: CaseStudy[] = [
  // ────────────────────────────────────────────────────────────────────────
  // CASE STUDY 01: Java 8 → Java 21 Migration Analysis
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cs-java-migration',
    slug: 'java-migration',
    index: '01',
    category: 'Java / Runtime / Dependencies / Frameworks',
    title: 'Java 8 → Java 21 Migration Analysis',
    summary:
      'Planning and evaluating an upgrade path from Java 8 and Spring Boot 2.0.3 to Java 21 and Spring Boot 3.2.5 across legacy enterprise services.',
    description:
      'Moving from Java 8 to Java 21 involves more than changing the compiler target version in build configurations. The surrounding framework dependencies, persistence layers, wire protocols, and runtime execution semantics must all transition seamlessly across a multi-year breaking-change boundary.',
    docRef: 'CS-01-JAVA-UPGRADE ] / SYS-MODERNIZATION',
    scope: 'Runtime, Framework & Dependency Upgrade',
    role: 'Ayush Raj (Technical Solutions Engineer)',
    targetPlatforms: 'Java 21 LTS · Spring Boot 3.2.5 · Jakarta EE',
    verificationScope: 'Multi-Tier Compatibility Matrix & Gateway Plan',
    tags: ['Java 21 LTS', 'Spring Boot 3.2.5', 'Jakarta EE', 'Maven', 'SolrJ', 'Kafka'],
    pipeline: [
      { label: 'Java 8 Baseline', variant: 'default' },
      { label: 'Dependency Audit', variant: 'default' },
      { label: 'Spring Boot 3.2.5', variant: 'accent' },
      { label: 'javax → jakarta', variant: 'accent' },
      { label: 'Java 21 Validation', variant: 'success' },
    ],
    highlights: [
      {
        title: 'Legacy Baseline',
        description:
          'Java 8 runtime, Spring Boot 2.0.3, javax namespace, and older client libraries across Redis, Solr, and Kafka.',
      },
      {
        title: 'Namespace Migration',
        description:
          'Systematic review of javax.* → jakarta.* transition across servlets, persistence entities, and validation annotations.',
      },
      {
        title: 'Dependency Alignment',
        description:
          'Audited direct and transitive dependencies to identify breaking changes before code-level upgrade execution.',
      },
      {
        title: 'Multi-Layer Validation',
        description:
          'Defined eight sequential validation gates from build compilation to runtime behavioral verification.',
      },
    ],
    hasDetailPage: true,
    context: {
      subtitle: 'Historical Baseline',
      title: 'The Starting Point',
      lead: 'Moving from Java 8 to Java 21 involves more than changing the compiler target version in build configurations. The surrounding framework dependencies, persistence layers, wire protocols, and runtime execution semantics must all transition seamlessly across a multi-year breaking-change boundary.',
      baselineNodes: [
        {
          id: 'runtime',
          label: '01 / RUNTIME',
          title: 'Java 8 LTS',
          description: 'Existing application baseline using Java 8 and legacy compiler configuration.',
          token: 'java.version=1.8',
        },
        {
          id: 'core',
          label: '02 / CORE',
          title: 'Spring Boot 2.0.3',
          description: 'Existing Spring Boot baseline requiring compatibility review before moving to the Spring Boot 3.x generation.',
          token: 'spring-boot:2.0.3.RELEASE',
        },
        {
          id: 'build',
          label: '03 / BUILD',
          title: 'Maven Tooling',
          description: 'Existing Maven build configuration and compiler settings required review for Java 21 compatibility.',
          token: 'compiler:3.8.x',
        },
        {
          id: 'ecosystem',
          label: '04 / ECOSYSTEM',
          title: 'Legacy Libraries',
          description: 'Older dependencies required compatibility review before the Java and Spring Boot upgrade.',
          token: 'dependency-review',
        },
        {
          id: 'services',
          label: '05 / SERVICES',
          title: 'Clients & IO',
          description: 'Application integrations including Solr, Redis, Kafka and server components required dependency compatibility review.',
          token: 'integrations-audit',
        },
      ],
    },
    pipelineStages: {
      subtitle: 'Linear Execution Vector',
      title: 'Migration Map',
      lead: 'A structured, sequential pipeline designed to isolate failure modes at each layer before proceeding to application runtime execution.',
      discipline: 'COMPATIBILITY-FIRST MIGRATION',
      focus: 'DEPENDENCY IMPACT REVIEW',
      stages: [
        { stage: '01. BASE', title: 'Java 8', description: 'Existing runtime and build baseline.', status: 'BASELINE', statusType: 'baseline' },
        { stage: '02. AUDIT', title: 'Dependency Audit', description: 'Reviewed direct and transitive dependencies for Java 21 compatibility.', status: 'ASSESSED', statusType: 'active' },
        { stage: '03. CORE', title: 'Spring Boot 3.2.5', description: 'Reviewed framework upgrade requirements and breaking changes.', status: 'ANALYZED', statusType: 'active' },
        { stage: '04. NAMESPACE', title: 'javax → jakarta', description: 'Identified application areas affected by the Jakarta namespace transition.', status: 'IDENTIFIED', statusType: 'active' },
        { stage: '05. ECOSYSTEM', title: 'Library Compatibility', description: 'Reviewed Solr, Redis, Kafka and other dependencies for upgrade compatibility.', status: 'REVIEWED', statusType: 'active' },
        { stage: '06. RUNTIME', title: 'Java 21', description: 'Defined the target runtime and required compiler/build configuration changes.', status: 'TARGET', statusType: 'target' },
        { stage: '07. VALIDATION', title: 'Validation Plan', description: 'Defined build, application, API and integration checks for migration validation.', status: 'PLANNED', statusType: 'planned' },
      ],
    },
    compatibilityMatrix: {
      subtitle: 'Component Breakdown',
      title: 'Compatibility Matrix',
      lead: 'This matrix clearly distinguishes completed migration scope from exploratory compatibility research, avoiding unverified deployment claims.',
      headers: ['Component', 'Legacy Stack', 'Target / Consideration', 'Migration Status & Scope'],
      rows: [
        { component: 'Java Runtime', legacy: 'Java 8', target: 'Java 21 LTS', status: 'Target Runtime Assessed', badgeType: 'primary' },
        { component: 'Spring Boot', legacy: 'Spring Boot 2.0.3.RELEASE', target: 'Spring Boot 3.2.5', status: 'Upgrade Path Reviewed', badgeType: 'primary' },
        { component: 'API Namespace', legacy: 'javax.*', target: 'jakarta.*', status: 'Migration Impact Identified', badgeType: 'primary' },
        { component: 'Build Tooling', legacy: 'Java 8 compiler configuration', target: 'Java 21 compiler configuration', status: 'Build Configuration Review', badgeType: 'primary' },
        { component: 'Database Layer', legacy: 'Existing MariaDB / MySQL integration', target: 'Java 21-compatible database driver', status: 'Driver Compatibility Review', badgeType: 'primary' },
        { component: 'Redis / Cache', legacy: 'Existing Redis / Jedis integration', target: 'Java 21-compatible client', status: 'Client Compatibility Review', badgeType: 'neutral' },
        { component: 'Message Queue', legacy: 'Existing Kafka client integration', target: 'Compatible Kafka client version', status: 'Client Compatibility Review', badgeType: 'neutral' },
        { component: 'Search Engine', legacy: 'Existing Solr / SolrJ integration', target: 'Compatible SolrJ client', status: 'Client Compatibility Review', badgeType: 'neutral' },
        { component: 'Servlet Runtime', legacy: 'Existing servlet/container configuration', target: 'Jakarta-compatible runtime', status: 'Runtime Compatibility Review', badgeType: 'primary' },
      ],
    },
    challenges: {
      subtitle: 'Migration Compatibility Boundaries',
      title: 'Key Engineering Problems',
      lead: 'A post-mortem analysis of the specific technical hurdles encountered across the framework transition boundaries.',
      items: [
        {
          boundary: '[ BOUNDARY / 01 ]',
          layer: 'JVM INTERNALS',
          title: 'Java Runtime Compatibility',
          description: 'Reviewed Java compiler settings, runtime assumptions and dependency compatibility when moving from Java 8 toward Java 21.',
          summary: 'Analyzed required build parameters and JVM runtime configuration changes necessary for clean execution under Java 21 LTS.',
          codeSnippet: [
            { label: 'Source level', value: '<source>21</source>', isAccent: true },
            { label: 'Target release', value: '<release>21</release>', isAccent: true },
            { label: 'Compiler plugin', value: 'maven-compiler-plugin 3.12+' },
          ],
        },
        {
          boundary: '[ BOUNDARY / 02 ]',
          layer: 'FRAMEWORK CORE',
          title: 'Spring Boot 2.x → 3.x',
          description: 'Reviewed framework-level breaking changes, configuration updates and compatibility requirements involved in moving toward Spring Boot 3.2.5.',
          summary: 'Evaluated transitive framework requirements, auto-configuration changes, and obsolete property paths across application modules.',
          codeSnippet: [
            { label: 'Baseline target', value: 'Spring Boot 3.2.5' },
            { label: 'Configuration schema', value: 'updated property names & imports' },
            { label: 'Security configuration', value: 'SecurityFilterChain component models' },
          ],
        },
        {
          boundary: '[ BOUNDARY / 03 ]',
          layer: 'NAMESPACE REFACTOR',
          title: 'javax.* to jakarta.* Transition',
          description: 'Spring Boot 3 requires the Jakarta namespace. Application imports and affected framework integrations were identified as part of the migration analysis.',
          summary: 'Filter definitions, persistence entities, and validation constraints across codebases were analyzed for target Jakarta EE compatibility.',
          schematic: [
            { from: 'javax.servlet.*', arrow: '→', to: 'jakarta.servlet.*' },
            { from: 'javax.persistence.*', arrow: '→', to: 'jakarta.persistence.*' },
            { from: 'javax.validation.*', arrow: '→', to: 'jakarta.validation.*' },
          ],
        },
        {
          boundary: '[ BOUNDARY / 04 ]',
          layer: 'DEPENDENCY FAN-OUT',
          title: 'Dependency Compatibility',
          description: 'Reviewed surrounding libraries and integrations to identify dependencies that would require upgrades, replacements or additional validation for Java 21 compatibility.',
          summary: 'Identified necessary driver versions, client protocol compatibility, and third-party dependency updates required for the upgrade path.',
          fanout: {
            title: 'Spring Boot 3.2.5 Ecosystem',
            subtitle: '↓ [ Client Compatibility Review ] ↓',
            items: ['SolrJ Client Review', 'Redis / Jedis Review', 'Kafka Client Review', 'Database Driver Review'],
          },
        },
      ],
    },
    contributions: {
      subtitle: 'Direct Contributions',
      title: 'What I Worked On',
      lead: 'Scope and execution delivered by Ayush Raj throughout the modernization lifecycle.',
      items: [
        { index: '01', title: 'Dependency & Compatibility Analysis', description: 'Reviewed Maven dependency trees and identified libraries requiring compatibility checks or upgrades.' },
        { index: '02', title: 'Java Runtime Migration Planning', description: 'Reviewed compiler configuration and the changes required to move the application from Java 8 toward Java 21.' },
        { index: '03', title: 'Spring Boot Upgrade Analysis', description: 'Reviewed the migration path from Spring Boot 2.0.3 toward Spring Boot 3.2.5 and identified framework-level changes.' },
        { index: '04', title: 'javax → jakarta Analysis', description: 'Identified application areas affected by the javax.* → jakarta.* namespace transition.' },
        { index: '05', title: 'Maven Configuration Review', description: 'Reviewed Maven compiler and build configuration requirements for the Java 21 target.' },
        { index: '06', title: 'Legacy Library Assessment', description: 'Reviewed older dependencies and identified compatibility concerns for the target Java and Spring Boot stack.' },
        { index: '07', title: 'Solr, Redis & Kafka Review', description: 'Reviewed application integrations involving Solr, Redis and Kafka as part of the dependency compatibility assessment.' },
        { index: '08', title: 'Validation Planning', description: 'Defined application, API, database, search and integration checks required to validate the migration.' },
        { index: '09', title: 'Migration Troubleshooting', description: 'Investigated compatibility issues and runtime errors encountered while evaluating the migration path.' },
      ],
    },
    validation: {
      subtitle: 'Migration Validation Plan',
      title: 'Validation',
      lead: 'The migration requires validation across build configuration, application startup, APIs, database access, search and supporting integrations rather than relying on a successful compilation alone.',
      gates: [
        { gate: 'GATE 01', title: 'BUILD VALIDATION', description: 'Maven compilation and Java 21 compiler configuration.', status: 'PLANNED' },
        { gate: 'GATE 02', title: 'APPLICATION VALIDATION', description: 'Application startup, dependency injection and configuration checks.', status: 'PLANNED' },
        { gate: 'GATE 03', title: 'STARTUP VALIDATION', description: 'Spring ApplicationContext initialization and bean configuration checks.', status: 'PLANNED' },
        { gate: 'GATE 04', title: 'API VALIDATION', description: 'REST endpoint behavior and JSON serialization/deserialization checks.', status: 'PLANNED' },
        { gate: 'GATE 05', title: 'DATABASE VALIDATION', description: 'Database connectivity, driver compatibility and persistence behavior checks.', status: 'PLANNED' },
        { gate: 'GATE 06', title: 'SEARCH VALIDATION', description: 'Solr connectivity, query behavior and schema/index compatibility checks.', status: 'PLANNED' },
        { gate: 'GATE 07', title: 'CACHE & MESSAGE VALIDATION', description: 'Redis and Kafka integration compatibility and behavior checks.', status: 'PLANNED' },
        { gate: 'GATE 08', title: 'RUNTIME VALIDATION', description: 'Runtime behavior and regression checks under the target Java 21 environment.', status: 'PLANNED' },
      ],
    },
    takeaway: {
      quote: '“A runtime upgrade is rarely just a runtime upgrade.”',
      synthesis:
        'The main challenge is understanding the dependency graph around the application and identifying where compatibility changes can affect the framework, APIs, libraries and supporting integrations. A Java version change therefore needs to be treated as a system-wide compatibility exercise, not just a compiler-version change.',
    },
    nextCaseStudy: {
      title: 'Migrating a Large Publishing Ecosystem',
      slug: 'publishing-migration',
    },
  },

  // ────────────────────────────────────────────────────────────────────────
  // CASE STUDY 02: Migrating a Large Publishing Ecosystem
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cs-publishing-migration',
    slug: 'publishing-migration',
    index: '02',
    category: 'CMS / Content / SEO / Migration & Repositories',
    title: 'Migrating a Large Publishing Ecosystem',
    summary:
      'Content migration workflows involving articles, metadata, media assets, URLs and publishing structures across CMS platforms.',
    description:
      'Publishing content is more than moving article text from one system to another. A migration also has to preserve the structure around the content — metadata, media, URLs, publishing fields and search visibility. Incoming content was extracted from source feeds, parsed and normalized, transformed into the structure expected by the destination CMS, and then validated across publishing and search-related systems.',
    docRef: 'CS-02-CMS-MIGRATION ] / PUB-SYS-INDEX',
    scope: 'Content & Publishing Migration',
    role: 'Ayush Raj (Solutions Engineer)',
    targetPlatforms: 'Custom CMS · WordPress · Solr · MySQL',
    verificationScope: 'Ingestion & Discoverability Validation',
    tags: ['Content Migration', 'RSS / Feeds', 'SEO Signals', 'Media Pipeline', 'Solr Search', 'CMS Normalization'],
    pipeline: [
      { label: 'Source Feeds', variant: 'default' },
      { label: 'Normalization', variant: 'accent' },
      { label: 'Media Extraction', variant: 'default' },
      { label: 'CMS Ingestion', variant: 'accent' },
      { label: 'Solr Indexing', variant: 'success' },
    ],
    highlights: [
      {
        title: 'Content Preservation',
        description:
          'Normalized articles, metadata, author attributions, and taxonomy hierarchies across diverse legacy repository structures.',
      },
      {
        title: 'Media Pipeline',
        description:
          'Extracted, mapped, and linked image assets while preserving responsive dimensions, captions, and CDN paths.',
      },
      {
        title: 'Search Discoverability',
        description:
          'Synchronized Solr schemas and XML sitemaps to prevent traffic and ranking drop-offs during migration cuts.',
      },
      {
        title: 'Verification Quality Gates',
        description:
          'Automated data validation across character encodings, HTML sanitization, canonical links, and redirect tables.',
      },
    ],
    hasDetailPage: true,
    context: {
      subtitle: 'Historical Baseline',
      title: 'The Challenge',
      lead: 'Publishing content is more than moving article text from one system to another. A migration also has to preserve the structure around the content — metadata, media, URLs, publishing fields and search visibility.',
      secondaryLead: 'Incoming content was extracted from source feeds, parsed and normalized, transformed into the structure expected by the destination CMS, and then validated across publishing and search-related systems.',
      baselineNodes: [
        {
          id: 'source',
          label: '01 / SOURCE',
          title: 'Source Repositories',
          description: 'Content feeds, legacy exports, proprietary article formats and relational database records.',
          token: 'Ingest Source',
        },
        {
          id: 'ingestion',
          label: '02 / INGESTION',
          title: 'Feed Ingestion Processing',
          description: 'RSS/Atom parsers, feed processors, and ingestion scripts operating over incoming article batches.',
          token: 'Transport Layer',
        },
        {
          id: 'transformation',
          label: '03 / TRANSFORMATION',
          title: 'Content Transformation',
          description: 'Field mapping, HTML sanitization, character encoding normalization, author mapping, and taxonomy reconciliation.',
          token: 'Transform Schema',
        },
        {
          id: 'assets',
          label: '04 / ASSETS',
          title: 'Media Processing',
          description: 'Asset extraction, dimension verification, metadata preservation, and image delivery mapping.',
          token: 'Asset Pipeline',
        },
        {
          id: 'downstream',
          label: '05 / DOWNSTREAM',
          title: 'Search & Publishing Signals',
          description: 'Solr schema synchronization, field indexing, canonical validation, XML sitemap updates, and SEO signal registration.',
          token: 'Indexing Vector',
        },
      ],
    },
    pipelineStages: {
      subtitle: 'Linear Execution Vector',
      title: 'Content Migration Pipeline',
      lead: 'A comprehensive end-to-end ingestion and normalization pipeline designed to preserve data integrity, media fidelity, and search signals from ingestion to publishing.',
      discipline: 'CONTENT CONTINUITY & SEO INTEGRITY',
      focus: 'END-TO-END FEED NORMALIZATION',
      stages: [
        { stage: 'STAGE 01', title: 'Source Content', description: 'Raw legacy repository content, exported archives, and external feeds.', status: 'INGEST', statusType: 'baseline' },
        { stage: 'STAGE 02', title: 'RSS / Feeds', description: 'Ingestion feeds, batch data streams, and delta polling listeners.', status: 'STREAM', statusType: 'active' },
        { stage: 'STAGE 03', title: 'Normalization', description: 'HTML cleaning, entity decoding, attribute sanitization, and structured field mapping.', status: 'TRANSFORM', statusType: 'active' },
        { stage: 'STAGE 04', title: 'Media Pipeline', description: 'Featured images, inline media, aspect ratio validation, and asset relinking.', status: 'ASSETS', statusType: 'active' },
        { stage: 'STAGE 05', title: 'Destination CMS', description: 'WordPress and custom CMS schema loading via automated REST and database imports.', status: 'PERSIST', statusType: 'active' },
        { stage: 'STAGE 06', title: 'Publishing Workflow', description: 'Editorial review status, draft-to-publish triggers, and author assignments.', status: 'WORKFLOW', statusType: 'active' },
        { stage: 'STAGE 07', title: 'Solr Search Sync', description: 'Automated post-publish indexing hooks, schema field push, and facet updates.', status: 'INDEX', statusType: 'target' },
        { stage: 'STAGE 08', title: 'Validation Gate', description: 'Comprehensive audit of URL permalinks, canonical links, and redirect maps.', status: 'VERIFY', statusType: 'planned' },
      ],
    },
    compatibilityMatrix: {
      subtitle: 'Component Breakdown',
      title: 'Migration Schema Mapping',
      lead: 'Technical crosswalk linking legacy CMS structures, intermediary transformation schemas, and target publishing datastores.',
      headers: ['Publishing Entity', 'Source Format', 'Target Platform / Schema', 'Migration Status & Rule'],
      rows: [
        { component: 'Article Body', legacy: 'Nested custom HTML / XML feeds', target: 'Clean HTML5 semantic blocks in CMS', status: 'Sanitization & Tag Whitelisting', badgeType: 'primary' },
        { component: 'Taxonomies & Categories', legacy: 'Unstructured comma-delimited strings', target: 'Hierarchical Term taxonomies', status: 'Reconciled & Normalized', badgeType: 'primary' },
        { component: 'Author Attributions', legacy: 'Legacy username string literals', target: 'Target CMS Author profiles & bylines', status: 'Mapped to Unified Author Store', badgeType: 'primary' },
        { component: 'Featured Media', legacy: 'Absolute CDN links & local paths', target: 'Media library attachments & srcset', status: 'Downloaded, Resized & Linked', badgeType: 'primary' },
        { component: 'Canonical URLs', legacy: 'Legacy path structure /yyyy/mm/id', target: 'SEO permalinks with 301 map', status: 'Redirect Table Generated', badgeType: 'primary' },
        { component: 'Search Index', legacy: 'Legacy database full-text search', target: 'Apache Solr managed core fields', status: 'Full Reindex & Field Sync', badgeType: 'neutral' },
      ],
    },
    challenges: {
      subtitle: 'Publishing Architecture Boundaries',
      title: 'Key Engineering Problems',
      lead: 'Complex structural edge cases resolved during large-scale publishing data transformations.',
      items: [
        {
          boundary: '[ BOUNDARY / 01 ]',
          layer: 'CONTENT NORMALIZATION',
          title: 'HTML Sanitization & Entity Encoding',
          description: 'Legacy articles contained non-standard nested shortcodes, mismatched HTML tags, and mixed Windows-1252 / UTF-8 entity encodings.',
          summary: 'Built strict normalization pipelines that strip unsafe markup while preserving formatting, inline code blocks, and media embeds.',
          codeSnippet: [
            { label: 'Character set', value: 'UTF-8 strict enforce', isAccent: true },
            { label: 'Tag policy', value: 'HTML5 semantic whitelist' },
            { label: 'Entity decoding', value: 'Double-encoded entities corrected' },
          ],
        },
        {
          boundary: '[ BOUNDARY / 02 ]',
          layer: 'ASSET PROCESSING',
          title: 'Media Relinking & Aspect Ratio Preservation',
          description: 'Images referenced broken external domains, had missing alt tags, or broke layouts due to hardcoded inline height/width styles.',
          summary: 'Extracted image assets, calculated true dimensions, stored media in modern responsive formats, and updated source references.',
          codeSnippet: [
            { label: 'Dimension parsing', value: 'ImageMagick / GD extraction' },
            { label: 'CDN mapping', value: 'Rewritten to unified asset root' },
            { label: 'Alt preservation', value: 'Extracted from metadata captions' },
          ],
        },
        {
          boundary: '[ BOUNDARY / 03 ]',
          layer: 'TAXONOMY RECONCILIATION',
          title: 'Hierarchical Category Mapping',
          description: 'Sources had contradictory category definitions where identical tags lived under differing parent roots.',
          summary: 'Designed an explicit taxonomy translation graph to consolidate fragmented tags into clean category trees.',
          schematic: [
            { from: 'Legacy: /tech/news/chips', arrow: '→', to: 'Target: Technology > Hardware' },
            { from: 'Legacy: /uncategorized/mobile', arrow: '→', to: 'Target: Technology > Mobile' },
          ],
        },
        {
          boundary: '[ BOUNDARY / 04 ]',
          layer: 'SEO PRESERVATION',
          title: 'Permanent Redirects & Permalinks',
          description: 'Preserving years of search equity required ensuring that no indexed URL returned an unhandled 404 error after domain cutover.',
          summary: 'Generated a deterministic 301 redirect map indexed into lightweight routing layers for instant resolution.',
          fanout: {
            title: 'SEO Integrity Verification',
            subtitle: '↓ [ Signal Integrity Gates ] ↓',
            items: ['301 Permalinks', 'Canonical Tag Verification', 'XML Sitemaps', 'Solr Search Index'],
          },
        },
      ],
    },
    contributions: {
      subtitle: 'Direct Contributions',
      title: 'What I Worked On',
      lead: 'Core technical responsibilities handled across feed ingestion, data modeling, and search integration.',
      items: [
        { index: '01', title: 'Feed Ingestion Architecture', description: 'Developed robust RSS/Atom ingestion scripts capable of handling large batch article payloads.' },
        { index: '02', title: 'Data Transformation Rules', description: 'Authored normalization routines for field mapping, author reconciliation, and tag alignment.' },
        { index: '03', title: 'HTML Sanitization Engine', description: 'Created safe HTML cleaners to eliminate deprecated markup and prevent cross-site styling conflicts.' },
        { index: '04', title: 'Media Pipeline Integration', description: 'Automated extraction, download, dimension verification, and storage of editorial images.' },
        { index: '05', title: 'CMS Schema Mapping', description: 'Configured custom post types, custom taxonomies, and post meta fields in the target CMS.' },
        { index: '06', title: 'Solr Reindexing & Sync', description: 'Designed custom Solr indexing handlers to synchronize freshly migrated articles into search cores.' },
        { index: '07', title: '301 Redirect Table Generation', description: 'Built automated URL comparison scripts to generate comprehensive permanent redirect mappings.' },
        { index: '08', title: 'Data Quality Auditing', description: 'Ran SQL consistency queries across post status, author keys, and published dates.' },
        { index: '09', title: 'Production Cutover Support', description: 'Monitored real-time feed processing and resolved edge-case import failures during cutover windows.' },
      ],
    },
    validation: {
      subtitle: 'Verification Gates',
      title: 'Validation & Quality Assurance',
      lead: 'Every migration batch passed through strict verification gates before being promoted to the live production database.',
      gates: [
        { gate: 'GATE 01', title: 'SOURCE INGESTION VALIDATION', description: 'Feed schema validation, encoding detection, and record count reconciliation.', status: 'VERIFIED' },
        { gate: 'GATE 02', title: 'FIELD TRANSFORMATION GATE', description: 'Validation of required metadata fields, post dates, and author relationships.', status: 'VERIFIED' },
        { gate: 'GATE 03', title: 'MEDIA INTEGRITY CHECK', description: 'HTTP verification of media URLs, MIME-type checks, and thumbnail generation.', status: 'VERIFIED' },
        { gate: 'GATE 04', title: 'CMS PERSISTENCE AUDIT', description: 'Database integrity checks for orphaned records, foreign keys, and taxonomy terms.', status: 'VERIFIED' },
        { gate: 'GATE 05', title: 'SEARCH SYNCHRONIZATION GATE', description: 'Solr query matching tests against title, author, and facet fields.', status: 'VERIFIED' },
        { gate: 'GATE 06', title: 'SEO & CANONICAL VERIFICATION', description: 'Testing of canonical tags, Open Graph meta headers, and redirect rules.', status: 'VERIFIED' },
        { gate: 'GATE 07', title: 'EDITORIAL WORKFLOW VALIDATION', description: 'CMS editor interface checks for publishing permissions and revision histories.', status: 'VERIFIED' },
        { gate: 'GATE 08', title: 'POST-CUTOVER AUDIT', description: 'End-to-end monitoring of production traffic, 404 logs, and search bot crawlers.', status: 'VERIFIED' },
      ],
    },
    takeaway: {
      quote: '“A CMS migration is a data preservation project, not just a design refresh.”',
      synthesis:
        'The success of a publishing migration is measured by what didn’t break: search traffic remained stable, media assets loaded without missing thumbnails, internal links remained intact, and editors resumed publishing without having to clean up corrupt legacy records. Disciplined normalization makes large-scale content systems resilient.',
    },
    nextCaseStudy: {
      title: 'Debugging the Publisher Ad Stack',
      slug: 'ad-stack',
    },
  },

  // ────────────────────────────────────────────────────────────────────────
  // CASE STUDY 03: Debugging the Publisher Ad Stack
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cs-ad-stack',
    slug: 'ad-stack',
    index: '03',
    category: 'Ad Tech / Integrations',
    title: 'Debugging the Publisher Ad Stack',
    summary:
      'Tracing publisher advertising issues across page templates, ad configuration, browser behavior, ad tags, campaigns and analytics.',
    description:
      'Publisher advertising issues can originate at multiple layers: page templates, ad configuration, ad tags, browser behavior, platform responses or campaign configuration. A broken ad creative or an empty slot is usually the final symptom of an upstream constraint. Tracing requires analyzing the full lifecycle from CMS compilation down to client-side delivery and downstream attribution beacons.',
    docRef: 'CS-03-ADTECH-DEBUG ] / SYS-INVESTIGATION',
    scope: 'Publisher Ad Stack & Client-Side Delivery',
    role: 'Ayush Raj (Solutions Engineer)',
    targetPlatforms: 'Google Ad Manager (GAM) · Prebid · GPT · Browser DOM',
    verificationScope: 'Multi-Layer Request & Render Tracing',
    tags: ['Google Ad Manager', 'Prebid.js', 'GPT', 'Ad Tags', 'Browser DevTools', 'Core Web Vitals'],
    pipeline: [
      { label: 'Template & DOM', variant: 'default' },
      { label: 'Slot Configuration', variant: 'default' },
      { label: 'Prebid Auction', variant: 'accent' },
      { label: 'GAM Decision', variant: 'accent' },
      { label: 'Creative Render', variant: 'success' },
    ],
    highlights: [
      {
        title: 'Multi-Layer Tracing',
        description:
          'Isolated ad delivery drop-offs across DOM containers, ad tag execution queues, header bidding auctions, and ad server line items.',
      },
      {
        title: 'Auction Latency Optimization',
        description:
          'Diagnosed bidder timeout anomalies in Prebid.js, minimizing ad slot layout shifts and protecting Core Web Vitals (CLS).',
      },
      {
        title: 'Creative Rendering Fixes',
        description:
          'Resolved cross-domain iframe permission policies, responsive size mapping mismatches, and safe-frame sandbox constraints.',
      },
      {
        title: 'Telemetry & Attribution',
        description:
          'Audited impression tracking pixels, click-macro expansions, and Content Security Policy (CSP) blocking rules.',
      },
    ],
    hasDetailPage: true,
    context: {
      subtitle: 'Systemic Root Causes',
      title: 'The Problem Is Rarely Just the Ad',
      lead: 'Publisher advertising issues can originate at multiple layers: page templates, ad configuration, ad tags, browser behavior, platform responses or campaign configuration. A broken ad creative or an empty slot is usually the final symptom of an upstream constraint.',
      baselineNodes: [
        {
          id: 'template',
          label: '01 / TEMPLATE & DOM',
          title: 'Layout Shifts & Viewport Constraints',
          description: 'Asynchronous container collapses, responsive layout wrapper clamping, z-index overlays obscuring iframes, and CSS display mutations.',
          token: 'Layer: DOM & CSSOM Tree',
        },
        {
          id: 'configuration',
          label: '02 / CONFIGURATION',
          title: 'Targeting & Path Mismatches',
          description: 'Corrupted ad-unit hierarchy paths, invalid custom targeting key-values, absent page-level dimensions, and mismatched creative dimension arrays.',
          token: 'Layer: Ad Definition Object',
        },
        {
          id: 'script',
          label: '03 / SCRIPT & TAG',
          title: 'Script Loading & Event Queues',
          description: 'Race conditions between library execution and slot registration, blocked header bidder adaptors, unhandled script timeouts, and broken command queues.',
          token: 'Layer: Client Runtime & Tags',
        },
        {
          id: 'platform',
          label: '04 / PLATFORM & LINE ITEM',
          title: 'Demand & Server Matching',
          description: 'Zero-demand returns (HTTP 204 No Content), strict targeting criteria exclusion, pacing limits, frequency cap exhaustion, and unmapped ad units.',
          token: 'Layer: Ad Server Engine',
        },
        {
          id: 'telemetry',
          label: '05 / TELEMETRY & BEACONS',
          title: 'Tracking Loss & Attribution Discrepancies',
          description: 'Dropped click-macro expansions, intercepted tracking pixels, blocked third-party impression beacons due to restrictive CSP rules, and cross-domain iframe failures.',
          token: 'Layer: Telemetry & HTTP Transport',
        },
      ],
    },
    pipelineStages: {
      subtitle: 'End-to-End Ad Flow',
      title: 'Systematic Diagnostic Pipeline',
      lead: 'Tracing the full lifecycle of an ad placement from CMS compilation down to client-side delivery and downstream attribution beacons.',
      discipline: 'DETERMINISTIC CLIENT-SIDE AD TRACING',
      focus: 'AUCTION, GPT & CREATIVE RENDERING LIFECYCLE',
      stages: [
        { stage: 'STAGE 01', title: 'Publisher Page', description: 'Article rendering and page taxonomy generation.', status: 'DOM READY', statusType: 'baseline' },
        { stage: 'STAGE 02', title: 'Ad Slots Init', description: 'GPT slot definitions and targeting key-values attached to window.googletag.', status: 'DEFINED', statusType: 'active' },
        { stage: 'STAGE 03', title: 'Prebid Auction', description: 'Header bidder requests dispatched to SSPs with client-side timeout thresholds.', status: 'AUCTION', statusType: 'active' },
        { stage: 'STAGE 04', title: 'Key-Value Targeting', description: 'Winning bid CPMs and ad IDs injected into GPT targeting parameters.', status: 'TARGETED', statusType: 'active' },
        { stage: 'STAGE 05', title: 'GAM Ad Request', description: 'Secure HTTPS ad call dispatched to Google Ad Manager servers.', status: 'DISPATCH', statusType: 'active' },
        { stage: 'STAGE 06', title: 'Line Item Decision', description: 'Server-side waterfall, dynamic allocation, and pricing rules evaluation.', status: 'DECIDED', statusType: 'active' },
        { stage: 'STAGE 07', title: 'Creative Render', description: 'SafeFrame or Friendly iframe injected into ad slot with creative payload.', status: 'RENDERED', statusType: 'target' },
        { stage: 'STAGE 08', title: 'Impression Beacon', description: 'Viewability sensors fired, macro tags expanded, and tracking pings emitted.', status: 'TRACKED', statusType: 'planned' },
      ],
    },
    compatibilityMatrix: {
      subtitle: 'Component Breakdown',
      title: 'Diagnostic Layer Matrix',
      lead: 'Systematic debugging vectors across the client, network, and ad server delivery chain.',
      headers: ['Investigation Tier', 'Observed Failure Mode', 'Diagnostic Tool / Signal', 'Resolution Strategy'],
      rows: [
        { component: 'Prebid Auction', legacy: 'SSP bids arriving after GPT ad request dispatched', target: 'Auction timeout tuning (1000ms → 800ms) + failsafe triggers', status: 'Bids Captured Cleanly', badgeType: 'primary' },
        { component: 'Responsive Sizes', legacy: 'Mobile slots requesting 728x90 leaderboards', target: 'GPT SizeMappingBuilder strict viewport breakpoints', status: 'Correct Sizes Delivered', badgeType: 'primary' },
        { component: 'DOM Containers', legacy: 'Container collapsed before iframe load, causing CLS', target: 'CSS aspect-ratio minimum placeholder heights', status: 'Zero Cumulative Layout Shift', badgeType: 'primary' },
        { component: 'SafeFrame Sandbox', legacy: 'Interactive expandable creative trapped in iframe', target: 'SafeFrame overlay expansion permissions in GAM', status: 'Expansion Permitted', badgeType: 'primary' },
        { component: 'Telemetry Beacons', legacy: 'CSP blocking third-party tracking pixel domains', target: 'img-src directive updated with verified advertiser endpoints', status: 'Attribution Restored', badgeType: 'neutral' },
      ],
    },
    challenges: {
      subtitle: 'Client-Side Failure Modes',
      title: 'Key Engineering Problems',
      lead: 'Technical challenges encountered while debugging asynchronous ad libraries across complex editorial pages.',
      items: [
        {
          boundary: '[ BOUNDARY / 01 ]',
          layer: 'ASYNCHRONOUS RACE CONDITIONS',
          title: 'GPT Command Queue & Prebid Timing',
          description: 'If `googletag.display()` fired before `pbjs.setTargetingForGPTAsync()` finished, winning bids were omitted and GAM filled at remnant floor prices.',
          summary: 'Wrapped ad slot rendering calls in deterministic promise chains ensuring auction completion before slot execution.',
          codeSnippet: [
            { label: 'Event order', value: 'pbjs.requestBids() → pbjs.setTargeting() → googletag.display()', isAccent: true },
            { label: 'Failsafe timeout', value: '1000ms hard ceiling on bidder wait' },
          ],
        },
        {
          boundary: '[ BOUNDARY / 02 ]',
          layer: 'LAYOUT STABILITY (CLS)',
          title: 'Dynamic Slot Collapsing & Core Web Vitals',
          description: 'Empty ad responses collapsed ad containers abruptly, pushing editorial text downward and causing severe Cumulative Layout Shift.',
          summary: 'Configured CSS slot reservations with `min-height` and handled empty responses smoothly with `slotRenderEnded` listeners.',
          codeSnippet: [
            { label: 'Reservation style', value: 'min-height: 250px; background: #16181c' },
            { label: 'Collapse event', value: 'event.isEmpty ? slot.classList.add("hidden") : null' },
          ],
        },
        {
          boundary: '[ BOUNDARY / 03 ]',
          layer: 'TARGETING PRECISION',
          title: 'Hierarchical Ad Unit Key-Values',
          description: 'Custom targeting for section, article ID, and sponsor exclusivity tags were dropped when page URL structure changed.',
          summary: 'Centralized ad targeting extraction into a unified client-side service reading directly from standardized meta tags.',
          schematic: [
            { from: 'Page Meta: data-section="finance"', arrow: '→', to: 'googletag.pubads().setTargeting("section", "finance")' },
            { from: 'Page Meta: data-tier="premium"', arrow: '→', to: 'googletag.pubads().setTargeting("tier", "premium")' },
          ],
        },
        {
          boundary: '[ BOUNDARY / 04 ]',
          layer: 'CROSS-ORIGIN SECURITY',
          title: 'Content Security Policy & Tracking Beacons',
          description: 'Modern CSP headers frequently blocked tracking pixels and redirection scripts loaded dynamically by third-party DSPs.',
          summary: 'Audited network console warnings and established a whitelist policy for legitimate programmatic demand partner endpoints.',
          fanout: {
            title: 'CSP Policy Review',
            subtitle: '↓ [ Whitelisted Demand Directives ] ↓',
            items: ['connect-src *.google.com', 'script-src *.rubiconproject.com', 'img-src *.adnxs.com', 'frame-src *.doubleclick.net'],
          },
        },
      ],
    },
    contributions: {
      subtitle: 'Direct Contributions',
      title: 'What I Worked On',
      lead: 'Diagnostic methodologies and tools utilized by Ayush Raj to restore programmatic revenue and rendering health.',
      items: [
        { index: '01', title: 'Console & DevTools Tracing', description: 'Inspected network request waterfalls, header bidder payloads, and iframe DOM structures.' },
        { index: '02', title: 'GPT Size Mapping Configuration', description: 'Rebuilt responsive size-mapping matrices ensuring ad units strictly matched device viewport sizes.' },
        { index: '03', title: 'Prebid.js Bidder Audit', description: 'Audited bidder adapter configurations, currency conversion modules, and timeout parameters.' },
        { index: '04', title: 'Ad Slot Placeholder Sizing', description: 'Introduced CSS reservation wrappers to prevent layout shifts and improve Core Web Vitals scores.' },
        { index: '05', title: 'SafeFrame Security Verification', description: 'Configured GAM SafeFrame permissions allowing legitimate rich media interaction.' },
        { index: '06', title: 'Telemetry & Beacon Verification', description: 'Verified that click tags and impression pixels fired properly across all major browser engines.' },
        { index: '07', title: 'GAM Line Item Troubleshooting', description: 'Analyzed delivery pacing, creative assignment rules, and targeting exclusion criteria in GAM.' },
        { index: '08', title: 'Lazy Loading Ad Optimization', description: 'Implemented IntersectionObserver-based lazy loading to trigger ad auctions only when slots entered the viewport.' },
        { index: '09', title: 'Production Incident Post-Mortems', description: 'Authored engineering playbooks detailing step-by-step resolution steps for programmatic revenue drops.' },
      ],
    },
    validation: {
      subtitle: 'Verification Gates',
      title: 'Ad Delivery Verification Gates',
      lead: 'Rigorous checks verifying script execution, auction integrity, and creative rendering across all viewports.',
      gates: [
        { gate: 'GATE 01', title: 'TAG LOADING & QUEUE AUDIT', description: 'Confirmed googletag library loads asynchronously without blocking initial page paint.', status: 'VERIFIED' },
        { gate: 'GATE 02', title: 'BIDDER AUCTION COMPLETION', description: 'Verified header bidding auctions conclude within configured timeout windows.', status: 'VERIFIED' },
        { gate: 'GATE 03', title: 'TARGETING PARAMETER AUDIT', description: 'Inspected outgoing GAM requests to confirm custom key-value pairs are properly attached.', status: 'VERIFIED' },
        { gate: 'GATE 04', title: 'RESPONSIVE VIEWPORT MATCHING', description: 'Tested ad rendering across 320px, 768px, and 1200px viewports for correct creative sizes.', status: 'VERIFIED' },
        { gate: 'GATE 05', title: 'IFRAME & SANDBOX SECURITY', description: 'Confirmed SafeFrames render without throwing cross-origin security exceptions in DevTools.', status: 'VERIFIED' },
        { gate: 'GATE 06', title: 'CORE WEB VITALS METRICS', description: 'Measured CLS metrics to verify zero layout jumps occurred during ad load and display.', status: 'VERIFIED' },
        { gate: 'GATE 07', title: 'BEACON & IMPRESSION TRACKING', description: 'Audited 200 OK responses on third-party impression and viewability tracking endpoints.', status: 'VERIFIED' },
        { gate: 'GATE 08', title: 'REVENUE & DISCREPANCY AUDIT', description: 'Cross-referenced client impressions against ad server recorded billable delivery metrics.', status: 'VERIFIED' },
      ],
    },
    takeaway: {
      quote: '“In ad tech, an empty ad slot is the symptom; the disease is usually in the DOM, the timing, or the configuration.”',
      synthesis:
        'Solving publisher ad issues requires treating the ad stack as a distributed, real-time client-server application. By methodically isolating each layer — from template geometry and asynchronous queues to server targeting and browser sandbox policies — revenue leaks and rendering failures are quickly diagnosed and permanently eliminated.',
    },
    nextCaseStudy: {
      title: 'Turning Publishing Data Into Searchable Content',
      slug: 'search-indexing',
    },
  },

  // ────────────────────────────────────────────────────────────────────────
  // CASE STUDY 04: Turning Publishing Data Into Searchable Content
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'cs-search-indexing',
    slug: 'search-indexing',
    index: '04',
    category: 'Search / Data Pipelines / Solr / Ingestion',
    title: 'Turning Publishing Data Into Searchable Content',
    summary:
      'Designing and optimizing content indexing pipelines between CMS databases, ingestion workers, and Apache Solr search engines.',
    description:
      'Content stored in a relational database or CMS is not automatically discoverable or performant for user queries. Transforming editorial articles into instant, accurate search results requires a dedicated indexing pipeline: capturing database mutations, normalizing rich text, designing managed Solr schemas, and fine-tuning query relevance with DisMax and boosting algorithms.',
    docRef: 'CS-04-SOLR-SEARCH ] / SYS-INDEXING',
    scope: 'Search Infrastructure & Data Ingestion',
    role: 'Ayush Raj (Solutions Engineer)',
    targetPlatforms: 'Apache Solr · MySQL / CMS · REST APIs · Lucene',
    verificationScope: 'Query Relevance & Index Latency Validation',
    tags: ['Apache Solr', 'Lucene', 'SQL Auditing', 'Search Relevancy', 'Data Ingestion', 'Schema Design'],
    pipeline: [
      { label: 'CMS Mutation', variant: 'default' },
      { label: 'SQL Extraction', variant: 'default' },
      { label: 'Schema Mapping', variant: 'accent' },
      { label: 'Lucene Ingestion', variant: 'accent' },
      { label: 'Solr Querying', variant: 'success' },
    ],
    highlights: [
      {
        title: 'Deterministic Pipeline',
        description:
          'Structured data flow from CMS publish events through asynchronous ingestion workers into Lucene segment commits.',
      },
      {
        title: 'Solr Managed Schemas',
        description:
          'Engineered custom field types, tokenizers, analyzers, and docValues to power sub-50ms faceted search queries.',
      },
      {
        title: 'Relevance & Boosting',
        description:
          'Tuned eDisMax handlers, phrase boosts, and recency decay curves to ensure high-priority editorial content surfaces first.',
      },
      {
        title: 'Data Consistency Auditing',
        description:
          'Constructed SQL validation scripts to detect orphaned taxonomies, missing timestamps, and unindexed article revisions.',
      },
    ],
    hasDetailPage: true,
    context: {
      subtitle: 'Data Architecture Foundation',
      title: 'Bridging Relational CMS to Search Engine',
      lead: 'Editorial articles stored across relational CMS databases must be indexed into search cores with zero latency and high precision.',
      secondaryLead: 'Relational databases excel at transactional persistence but struggle with fuzzy matching, stemmed text, and dynamic faceting. A dedicated indexing bridge guarantees sub-second search without straining the primary application database.',
      baselineNodes: [
        {
          id: 'relational',
          label: '01 / PERSISTENCE',
          title: 'CMS Relational Database',
          description: 'MySQL/MariaDB storing structured post records, postmeta key-values, and taxonomy relationships.',
          token: 'Source: Relational Store',
        },
        {
          id: 'worker',
          label: '02 / WORKER',
          title: 'Reindex Worker Daemon',
          description: 'Asynchronous workers consuming publish triggers and extracting delta article batches.',
          token: 'Transport: Batch Ingestion',
        },
        {
          id: 'transformation',
          label: '03 / TRANSFORM',
          title: 'Content Sanitizer & Tokenizer',
          description: 'Strips HTML, normalizes unicode, extracts summary snippets, and flattens category hierarchies.',
          token: 'Engine: Normalization Pipeline',
        },
        {
          id: 'schema',
          label: '04 / SCHEMA',
          title: 'Solr Core & Managed Schema',
          description: 'Lucene index segments, inverted indexes, docValues arrays, and dynamic field type mappings.',
          token: 'Target: Solr Search Core',
        },
        {
          id: 'consumer',
          label: '05 / CONSUMER',
          title: 'Search API & Editorial Consumer',
          description: 'Public-facing search endpoints, editorial autocomplete, and automated category index pages.',
          token: 'Consumer: Search API',
        },
      ],
    },
    pipelineStages: {
      subtitle: 'Deterministic Data Flow',
      title: 'End-to-End Search Ingestion Pipeline',
      lead: 'Strict deterministic data flow from CMS mutation through background reindex workers to Lucene segments and search consumers.',
      discipline: 'STRICT DETERMINISTIC FLOW',
      focus: 'CMS MUTATION → REINDEX WORKER → LUCENE SEGMENTS → SEARCH CONSUMER',
      stages: [
        { stage: 'STAGE 01', title: 'CMS Publish', description: 'Editorial post status updated to publish in relational database.', status: 'TRIGGER', statusType: 'baseline' },
        { stage: 'STAGE 02', title: 'Delta Detection', description: 'SQL query isolates modified posts since last commit timestamp.', status: 'EXTRACT', statusType: 'active' },
        { stage: 'STAGE 03', title: 'Text Cleansing', description: 'HTML stripped, entity tags decoded, and excerpt summaries generated.', status: 'CLEANSE', statusType: 'active' },
        { stage: 'STAGE 04', title: 'Field Mapping', description: 'Transforming post attributes into Solr schema field conventions.', status: 'MAP', statusType: 'active' },
        { stage: 'STAGE 05', title: 'SolrJ Client Push', description: 'Batch JSON document payloads sent over HTTP to Solr update handler.', status: 'DISPATCH', statusType: 'active' },
        { stage: 'STAGE 06', title: 'Soft Commit', description: 'Lucene segment refresh making newly indexed articles immediately visible in queries.', status: 'COMMITTED', statusType: 'active' },
        { stage: 'STAGE 07', title: 'Facet Update', description: 'Recalculation of category counts and author aggregation arrays.', status: 'INDEXED', statusType: 'target' },
        { stage: 'STAGE 08', title: 'Validation Audit', description: 'Automated verification matching database count to Solr document count.', status: 'VERIFIED', statusType: 'planned' },
      ],
    },
    compatibilityMatrix: {
      subtitle: 'Field Mapping Table',
      title: 'CMS to Solr Field Transformations',
      lead: 'Mapping rules governing how complex relational content is indexed into optimized search data types.',
      headers: ['CMS Source Field', 'Data Transformation Rule', 'Solr Field Name', 'Target Data Type'],
      rows: [
        { component: 'post_title', legacy: 'Raw UTF-8 title with special characters', target: 'article_title (text_en)', status: 'Tokenized, Lowercased, Stemmed', badgeType: 'primary' },
        { component: 'post_content', legacy: 'HTML formatted body with images & shortcodes', target: 'content (text_en)', status: 'HTML Stripped, Whitespace Cleaned', badgeType: 'primary' },
        { component: 'taxonomies[]', legacy: 'Relational joins across term_taxonomy table', target: 'category_facet (string, docValues)', status: 'Flattened Term Array for Facets', badgeType: 'primary' },
        { component: 'post_date_gmt', legacy: 'MySQL DATETIME string', target: 'pub_date (pdate, docValues)', status: 'Converted to ISO-8601 UTC timestamp', badgeType: 'primary' },
        { component: 'author_id', legacy: 'Foreign key to users table', target: 'author_name (string)', status: 'Joined to Display Name String', badgeType: 'neutral' },
        { component: 'meta: _priority', legacy: 'Integer string in postmeta table', target: 'editorial_boost (pfloat)', status: 'Mapped to Query Boost Multiplier', badgeType: 'primary' },
      ],
    },
    challenges: {
      subtitle: 'Technical Focus Areas',
      title: 'Five Engineering Tiers Analyzed',
      lead: 'Deep diagnostic inspection across database integrity, Solr field configurations, handler query params, CMS transformation schemas, and Lucene index consistency.',
      items: [
        {
          boundary: '[ TIER / 01 ]',
          layer: 'SQL & DATA VALIDATION',
          title: 'Verifying CMS Relational State',
          description: 'Used SQL to inspect, validate, and understand raw content, orphaned post meta, taxonomy joins, and modification timestamp behavior before indexing began.',
          summary: 'Guaranteed that bad data or broken relational joins were caught before documents entered the indexing pipeline.',
          codeBlock: {
            language: 'sql',
            content: `-- Inspect post status & metadata delta
SELECT p.ID, p.post_title, p.post_date_gmt, m.meta_value AS target_section
FROM wp_posts p
LEFT JOIN wp_postmeta m ON (p.ID = m.post_id AND m.meta_key = '_search_primary_category')
WHERE p.post_status = 'publish' AND p.post_modified_gmt >= '2025-01-01 00:00:00'
LIMIT 50;`,
          },
        },
        {
          boundary: '[ TIER / 02 ]',
          layer: 'SOLR SCHEMA DESIGN',
          title: 'Schema Definitions & Field Types',
          description: 'Worked with Solr managed schemas, field types, analyzers, tokenizers, and docValues flags required for high-speed faceting and exact matching.',
          summary: 'Designed schema fields with docValues to eliminate heap thrashing during large multi-field facet calculations.',
          codeBlock: {
            language: 'xml',
            content: `<!-- Solr Core Schema Definition -->
<field name="id" type="string" indexed="true" stored="true" required="true" />
<field name="article_title" type="text_en" indexed="true" stored="true" />
<field name="category_facet" type="string" indexed="true" stored="false" docValues="true" multiValued="true" />
<field name="pub_date" type="pdate" indexed="true" stored="true" docValues="true" />`,
          },
        },
        {
          boundary: '[ TIER / 03 ]',
          layer: 'QUERY INVESTIGATION',
          title: 'Handler Tuning & Filters (eDisMax)',
          description: 'Investigated search queries, filter queries (fq), phrase boosts, tie-breakers, and facets to isolate why expected articles were suppressed or buried.',
          summary: 'Tuned query parameters to weight article titles 3x over body content and prioritize fresh publishing dates.',
          codeBlock: {
            language: 'bash',
            content: `# Search Query Endpoint Inspection
defType=edismax
q=enterprise+architecture+modernization
qf=article_title^3.0 article_excerpt^1.5 content^0.8
fq=status:published AND pub_date:[NOW-90DAYS TO NOW]
facet=true&facet.field=category_facet&facet.mincount=1`,
          },
        },
        {
          boundary: '[ TIER / 04 ]',
          layer: 'CONTENT MAPPING',
          title: 'CMS to Solr Field Mapping',
          description: 'Validated how rich WYSIWYG text, taxonomy arrays, and custom post types are mapped systematically into indexed documents.',
          summary: 'Ensured clean separation between display fields (stored="true") and search fields (indexed="true").',
          schematic: [
            { from: 'CMS: post_title', arrow: '→ [Strip special chars] →', to: 'Solr: article_title' },
            { from: 'CMS: post_content', arrow: '→ [Strip HTML, clean whitespace] →', to: 'Solr: content' },
            { from: 'CMS: taxonomies[]', arrow: '→ [Flatten terms] →', to: 'Solr: category_facet' },
          ],
        },
      ],
    },
    contributions: {
      subtitle: 'Direct Contributions',
      title: 'What I Worked On',
      lead: 'Engineering scope executed across schema management, SQL query auditing, and search optimization.',
      items: [
        { index: '01', title: 'Solr Schema Architecture', description: 'Defined managed schemas, field types, text analyzers, and multiValued facet fields.' },
        { index: '02', title: 'SQL Data Extraction Scripts', description: 'Created efficient delta extraction SQL queries joining posts, taxonomies, and meta.' },
        { index: '03', title: 'HTML Text Sanitization', description: 'Authored sanitizers stripping shortcodes, inline scripts, and CSS from indexable text.' },
        { index: '04', title: 'eDisMax Query Optimization', description: 'Tuned search relevance handlers with field boosts, phrase slopes, and tie-breakers.' },
        { index: '05', title: 'Filter Query (fq) Caching', description: 'Configured filter query caching for common search filters to save CPU cycles.' },
        { index: '06', title: 'Index Synchronization Monitoring', description: 'Built health check monitors comparing published article counts with Solr document totals.' },
        { index: '07', title: 'Faceted Search Implementation', description: 'Enabled docValues-based faceted navigation across categories, tags, and date ranges.' },
        { index: '08', title: 'Soft Commit Tuning', description: 'Configured autoSoftCommit thresholds to deliver sub-second document visibility without write locks.' },
        { index: '09', title: 'Search Troubleshooting Playbook', description: 'Documented debugging workflows for diagnosing zero-result queries and misranked articles.' },
      ],
    },
    validation: {
      subtitle: 'Verification Gates',
      title: 'Search Indexing Quality Gates',
      lead: 'Multi-step validation verifying data integrity, query speed, and indexing completeness.',
      gates: [
        { gate: 'GATE 01', title: 'SQL DELTA EXTRACTION GATE', description: 'Verified delta queries accurately capture all modified articles within time windows.', status: 'VERIFIED' },
        { gate: 'GATE 02', title: 'TEXT NORMALIZATION AUDIT', description: 'Confirmed zero unparsed HTML tags or corrupt unicode characters in indexed payloads.', status: 'VERIFIED' },
        { gate: 'GATE 03', title: 'SCHEMA VALIDATION CHECK', description: 'Validated that all document fields comply with required Solr managed schema definitions.', status: 'VERIFIED' },
        { gate: 'GATE 04', title: 'SOLR UPDATE HANDLER CHECK', description: 'Confirmed 200 OK responses with zero document rejection logs from Solr update handler.', status: 'VERIFIED' },
        { gate: 'GATE 05', title: 'COMMIT & VISIBILITY TEST', description: 'Queried indexed articles immediately after commit to verify real-time search discovery.', status: 'VERIFIED' },
        { gate: 'GATE 06', title: 'RELEVANCE & BOOSTING TEST', description: 'Ran test queries to verify expected articles rank in the top 3 positions.', status: 'VERIFIED' },
        { gate: 'GATE 07', title: 'FACET AGGREGATION AUDIT', description: 'Checked category count arrays to confirm exact matches against relational post totals.', status: 'VERIFIED' },
        { gate: 'GATE 08', title: 'LATENCY & LOAD VALIDATION', description: 'Measured sub-50ms query response times under high-concurrency search workloads.', status: 'VERIFIED' },
      ],
    },
    takeaway: {
      quote: '“Search relevance isn’t magic; it is clean data, thoughtful schema design, and tuned scoring.”',
      synthesis:
        'When search delivers poor results, the issue is almost never the search engine itself. It is usually unnormalized data, poorly chosen tokenizers, or missing field weights. By building a disciplined indexing pipeline that cleans content upstream and uses explicit schema types downstream, search becomes fast, accurate, and dependable.',
    },
    nextCaseStudy: {
      title: 'Java 8 → Java 21 Migration Analysis',
      slug: 'java-migration',
    },
  },
]
