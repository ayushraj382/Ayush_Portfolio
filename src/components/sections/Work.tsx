import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import PipelineFlow from '@/components/ui/PipelineFlow'
import { caseStudies } from '@/data/caseStudies'

/**
 * Work section — 4 case study preview cards with pipeline flow visualizers.
 * Each card links to its dedicated case study page.
 */
export default function Work() {
  return (
    <section
      id="work"
      className="w-full bg-surface-container-lowest py-space-xl"
      aria-labelledby="work-heading"
    >
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">

        {/* Section header */}
        <motion.div
          className="flex flex-col gap-1 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-64px' }}
          transition={{ duration: 0.4 }}
        >
          <SectionLabel>[ PRODUCTION CASE STUDIES ]</SectionLabel>
          <h2
            id="work-heading"
            className="text-headline-lg font-sans font-semibold text-on-surface"
          >
            Engineering breakdowns of complex systems
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            A few systems, migrations and integration problems I've worked through.
          </p>
        </motion.div>

        {/* Case study cards */}
        <div className="flex flex-col gap-space-lg">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-48px' }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
              className="p-space-lg rounded-xl bg-surface-container-low border border-surface-container-high flex flex-col gap-space-md shadow-card"
              aria-labelledby={`cs-title-${cs.id}`}
            >
              {/* Card header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container">
                <div className="flex items-center gap-space-sm">
                  <span className="font-mono text-code-sm px-2.5 py-0.5 rounded bg-primary-container/10 text-primary-container border border-primary-container/30">
                    {cs.index}
                  </span>
                  <span className="font-mono text-code-sm text-on-surface-variant">{cs.category}</span>
                </div>
              </div>

              {/* Title & description */}
              <div>
                <h3
                  id={`cs-title-${cs.id}`}
                  className="text-headline-md font-sans font-semibold text-on-surface"
                >
                  {cs.title}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant mt-2 max-w-4xl">
                  {cs.description}
                </p>
              </div>

              {/* Pipeline */}
              <PipelineFlow steps={cs.pipeline} />

              {/* Technical highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pt-space-xs">
                {cs.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="p-3 rounded-lg bg-surface-container border border-surface-container-high"
                  >
                    <div className="font-mono text-code-sm text-primary font-medium mb-1">{h.title}</div>
                    <div className="font-sans text-body-sm text-on-surface-variant">{h.description}</div>
                  </div>
                ))}
              </div>

              {/* Read more link */}
              {cs.hasDetailPage && (
                <div className="flex justify-end pt-space-xs">
                  <Link
                    to={`/case/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-code-sm text-primary-container hover:text-primary transition-colors duration-150 group"
                    aria-label={`Read full case study: ${cs.summary}`}
                  >
                    Read case study
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform duration-150"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
