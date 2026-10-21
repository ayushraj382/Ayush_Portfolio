import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import type { CaseStudy } from '@/data/caseStudies'

interface CaseStudyHeaderProps {
  caseStudy: CaseStudy
}

export default function CaseStudyHeader({ caseStudy }: CaseStudyHeaderProps) {
  return (
    <div className="w-full">
      {/* Top Breadcrumb & Metadata Identifier */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-lg border-b border-surface-container-highest mb-space-xl">
        <Link
          to="/#work"
          className="inline-flex items-center gap-space-xs font-mono text-code-sm text-on-surface-variant hover:text-primary transition-colors group tracking-wider uppercase"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-primary-container" />
          <span>BACK TO WORK</span>
        </Link>
        <div className="inline-flex items-center gap-space-xs font-mono text-code-sm text-outline">
          <span className="w-2 h-2 rounded-full bg-secondary shadow-status-glow animate-pulse"></span>
          <span className="text-primary-container font-medium">[ DOC-REF: {caseStudy.docRef}</span>
        </div>
      </div>

      {/* Case Study Header Banner */}
      <div className="relative bg-surface-container-low border border-surface-container-high rounded-xl p-space-xl sm:p-space-2xl shadow-card overflow-hidden mb-space-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 via-transparent to-primary/5 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col gap-space-md max-w-4xl">
          <div className="flex items-center gap-space-sm flex-wrap">
            <span className="font-mono text-code-sm text-primary-container uppercase tracking-wider font-semibold">
              [ CASE STUDY / {caseStudy.index} ] {caseStudy.category}
            </span>
          </div>

          <h1 className="font-sans font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-on-surface">
            {caseStudy.title}
          </h1>

          <div className="flex flex-wrap gap-space-xs pt-space-xs">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-code-sm px-space-sm py-space-xs rounded bg-surface-container text-on-surface border border-surface-container-high"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="font-sans text-body-lg text-on-surface-variant max-w-3xl pt-space-sm leading-relaxed">
            {caseStudy.description}
          </p>

          {/* Spec Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md pt-space-lg mt-space-md border-t border-surface-container-high/60">
            <div className="bg-surface-container-lowest p-space-md rounded-lg border border-surface-container-high/40 flex flex-col justify-between">
              <span className="font-mono text-label-sm text-outline uppercase tracking-wider">Scope</span>
              <span className="font-sans text-title-md font-medium text-on-surface pt-space-xs">{caseStudy.scope}</span>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-lg border border-surface-container-high/40 flex flex-col justify-between">
              <span className="font-mono text-label-sm text-outline uppercase tracking-wider">Role</span>
              <span className="font-sans text-title-md font-medium text-on-surface pt-space-xs">{caseStudy.role}</span>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-lg border border-surface-container-high/40 flex flex-col justify-between">
              <span className="font-mono text-label-sm text-outline uppercase tracking-wider">Target Platforms</span>
              <span className="font-sans text-title-md font-medium text-on-surface pt-space-xs">{caseStudy.targetPlatforms}</span>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-lg border border-surface-container-high/40 flex flex-col justify-between">
              <span className="font-mono text-label-sm text-outline uppercase tracking-wider">Verification</span>
              <span className="font-sans text-title-md font-medium text-primary-container pt-space-xs">{caseStudy.verificationScope}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
