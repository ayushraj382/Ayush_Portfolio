import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Layout from '@/components/layout/Layout'
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader'
import ContextSection from '@/components/case-study/ContextSection'
import ArchitecturePipeline from '@/components/case-study/ArchitecturePipeline'
import CompatibilityMatrix from '@/components/case-study/CompatibilityMatrix'
import SystemChallenges from '@/components/case-study/SystemChallenges'
import ContributionsSection from '@/components/case-study/ContributionsSection'
import ValidationGates from '@/components/case-study/ValidationGates'
import TakeawaySection from '@/components/case-study/TakeawaySection'
import { caseStudies } from '@/data/caseStudies'

/**
 * CaseStudyPage — full-fidelity template driven by `src/data/caseStudies.ts`.
 * Resolves the case study by matching `slug` from the URL param.
 * Renders all 8 Stitch sections with standardized vertical rhythm and divider borders.
 */
export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const cs = caseStudies.find((c) => c.slug === slug)

  // Unknown slug → redirect to NotFound
  if (!cs) return <Navigate to="/404" replace />

  // Compute previous and next case studies
  const currentIndex = caseStudies.findIndex((c) => c.slug === slug)
  const nextStudy = cs.nextCaseStudy
    ? caseStudies.find((c) => c.slug === cs.nextCaseStudy?.slug) || caseStudies[(currentIndex + 1) % caseStudies.length]
    : caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <Layout>
      <article
        className="w-full bg-background min-h-screen text-on-surface pt-space-md pb-space-3xl"
        aria-labelledby="case-study-title"
      >
        <div className="w-full max-w-[1240px] mx-auto px-gutter space-y-16 md:space-y-24">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CaseStudyHeader caseStudy={cs} />
          </motion.div>

          {/* Section 01: Context */}
          {cs.context && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35 }}
              className="border-t border-surface-container-high/60 pt-16 md:pt-24"
            >
              <ContextSection context={cs.context} />
            </motion.div>
          )}

          {/* Section 02: Architecture Pipeline */}
          {cs.pipelineStages && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35 }}
              className="border-t border-surface-container-high/60 pt-16 md:pt-24"
            >
              <ArchitecturePipeline pipeline={cs.pipelineStages} />
            </motion.div>
          )}

          {/* Section 03: Compatibility Matrix */}
          {cs.compatibilityMatrix && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35 }}
              className="border-t border-surface-container-high/60 pt-16 md:pt-24"
            >
              <CompatibilityMatrix matrix={cs.compatibilityMatrix} />
            </motion.div>
          )}

          {/* Section 04: Key Engineering Problems */}
          {cs.challenges && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35 }}
              className="border-t border-surface-container-high/60 pt-16 md:pt-24"
            >
              <SystemChallenges challenges={cs.challenges} />
            </motion.div>
          )}

          {/* Section 05: What I Worked On (Responsibilities) */}
          {cs.contributions && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35 }}
              className="border-t border-surface-container-high/60 pt-16 md:pt-24"
            >
              <ContributionsSection contributions={cs.contributions} />
            </motion.div>
          )}

          {/* Section 06: Validation Gates */}
          {cs.validation && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35 }}
              className="border-t border-surface-container-high/60 pt-16 md:pt-24"
            >
              <ValidationGates validation={cs.validation} />
            </motion.div>
          )}

          {/* Section 07: Engineering Takeaway */}
          {cs.takeaway && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35 }}
              className="border-t border-surface-container-high/60 pt-16 md:pt-24"
            >
              <TakeawaySection takeaway={cs.takeaway} />
            </motion.div>
          )}

          {/* Case Study Bottom Navigation */}
          <div className="border-t border-surface-container-high/60 pt-12 md:pt-16 pb-12">
            <nav
              aria-label="Case study pagination"
              className="bg-surface-container border border-surface-container-high p-space-lg rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md font-mono text-code-sm shadow-card"
            >
              <Link
                to="/#work"
                className="text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-space-xs group"
              >
                <ArrowLeft className="w-4 h-4 text-primary-container transition-transform group-hover:-translate-x-1" />
                <span>Return to All Case Studies</span>
              </Link>

              {nextStudy && (
                <Link
                  to={`/case/${nextStudy.slug}`}
                  className="text-primary hover:text-primary-container transition-colors flex items-center gap-space-xs group"
                >
                  <span>Explore Next: {nextStudy.title}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </nav>
          </div>
        </div>
      </article>
    </Layout>
  )
}
