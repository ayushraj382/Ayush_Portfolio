import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Layout from '@/components/layout/Layout'
import SectionLabel from '@/components/ui/SectionLabel'
import PipelineFlow from '@/components/ui/PipelineFlow'
import { caseStudies } from '@/data/caseStudies'

/**
 * CaseStudyPage — shared template driven entirely by `src/data/caseStudies.ts`.
 * Resolves the case study by matching `slug` from the URL param.
 * Redirects to /404 if slug doesn't exist.
 */
export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const cs = caseStudies.find((c) => c.slug === slug)

  // Unknown slug → redirect to NotFound
  if (!cs) return <Navigate to="/404" replace />

  return (
    <Layout>
      <article
        className="w-full bg-surface min-h-screen"
        aria-labelledby="case-study-title"
      >
        {/* ── Header band ──────────────────────────────────────────── */}
        <div className="w-full bg-surface-container-lowest border-b border-surface-container-high">
          <div className="max-w-7xl mx-auto px-gutter py-space-xl flex flex-col gap-space-lg">

            {/* Back nav */}
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/#work"
                className="inline-flex items-center gap-1.5 font-mono text-code-sm text-on-surface-variant hover:text-primary transition-colors duration-150 group"
                aria-label="Back to homepage work section"
              >
                <ArrowLeft
                  size={14}
                  className="group-hover:-translate-x-0.5 transition-transform duration-150"
                  aria-hidden="true"
                />
                Back to Work
              </Link>
            </motion.div>

            {/* Case study index + category */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-space-sm flex-wrap"
            >
              <span className="font-mono text-code-sm px-2.5 py-0.5 rounded bg-primary-container/10 text-primary-container border border-primary-container/30">
                {cs.index}
              </span>
              <span className="font-mono text-code-sm text-on-surface-variant">{cs.category}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              id="case-study-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-headline-lg sm:text-headline-xl font-sans font-semibold text-on-surface max-w-4xl leading-tight"
            >
              {cs.title}
            </motion.h1>

            {/* Summary description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="font-sans text-body-lg text-on-surface-variant max-w-3xl leading-relaxed"
            >
              {cs.description}
            </motion.p>
          </div>
        </div>

        {/* ── Body ─────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-gutter py-space-xl flex flex-col gap-space-xl">

          {/* Pipeline flow */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            aria-labelledby="pipeline-heading"
          >
            <SectionLabel>[ PROCESS PIPELINE ]</SectionLabel>
            <h2
              id="pipeline-heading"
              className="text-headline-md font-sans font-semibold text-on-surface mt-1 mb-space-md"
            >
              How it was approached
            </h2>
            <PipelineFlow steps={cs.pipeline} />
          </motion.section>

          {/* Technical highlights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            aria-labelledby="highlights-heading"
          >
            <SectionLabel>[ TECHNICAL HIGHLIGHTS ]</SectionLabel>
            <h2
              id="highlights-heading"
              className="text-headline-md font-sans font-semibold text-on-surface mt-1 mb-space-md"
            >
              Key areas of focus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              {cs.highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.32 + i * 0.06 }}
                  className="p-space-lg rounded-xl bg-surface-container-low border border-surface-container-high flex flex-col gap-space-sm shadow-card"
                >
                  <div className="font-mono text-code-sm text-primary font-medium">{h.title}</div>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                    {h.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Navigation — previous / next */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md pt-space-xl border-t border-surface-container-high"
            aria-label="Case study navigation"
          >
            {/* Previous */}
            {(() => {
              const idx = caseStudies.findIndex((c) => c.slug === slug)
              const prev = idx > 0 ? caseStudies[idx - 1] : null
              const next = idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null
              return (
                <>
                  {prev ? (
                    <Link
                      to={`/case/${prev.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-code-sm text-on-surface-variant hover:text-primary transition-colors duration-150 group"
                    >
                      <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-150" aria-hidden="true" />
                      <span>
                        <span className="block text-[11px] text-outline uppercase tracking-wider mb-0.5">Previous</span>
                        {prev.summary}
                      </span>
                    </Link>
                  ) : <div />}

                  {next && (
                    <Link
                      to={`/case/${next.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-code-sm text-on-surface-variant hover:text-primary transition-colors duration-150 group text-right"
                    >
                      <span>
                        <span className="block text-[11px] text-outline uppercase tracking-wider mb-0.5">Next</span>
                        {next.summary}
                      </span>
                      <ArrowLeft size={14} className="rotate-180 group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true" />
                    </Link>
                  )}
                </>
              )
            })()}
          </motion.nav>
        </div>
      </article>
    </Layout>
  )
}
