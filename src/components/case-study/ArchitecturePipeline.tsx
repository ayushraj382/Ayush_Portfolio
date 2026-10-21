import { ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import type { PipelineStage } from '@/data/caseStudies'

interface ArchitecturePipelineProps {
  pipeline: {
    subtitle: string
    title: string
    lead: string
    discipline: string
    focus: string
    stages: PipelineStage[]
  }
}

export default function ArchitecturePipeline({ pipeline }: ArchitecturePipelineProps) {
  const getStatusBadge = (status: string, type?: string) => {
    switch (type) {
      case 'baseline':
        return <span className="font-mono text-label-sm text-outline-variant uppercase">STATUS: {status}</span>
      case 'active':
        return <span className="font-mono text-label-sm text-primary-container font-semibold uppercase">{status}</span>
      case 'target':
        return <span className="font-mono text-label-sm text-secondary font-semibold uppercase">{status}</span>
      case 'planned':
        return <span className="font-mono text-label-sm text-primary font-semibold uppercase animate-pulse">{status}</span>
      default:
        return <span className="font-mono text-label-sm text-primary-container font-semibold uppercase">{status}</span>
    }
  }

  const getStatusDot = (type?: string) => {
    switch (type) {
      case 'baseline':
        return <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
      case 'target':
        return <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      case 'planned':
        return <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
      default:
        return <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
    }
  }

  return (
    <section className="w-full">
      <div className="flex flex-col gap-space-xs mb-8 md:mb-12">
        <div className="flex items-center gap-space-sm mb-1">
          <SectionLabel label="[ ARCHITECTURE PIPELINE ]" />
          <span className="font-mono text-label-md text-outline uppercase tracking-wider">
            {pipeline.subtitle}
          </span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-on-surface">
          {pipeline.title}
        </h2>
        <p className="font-sans text-body-md sm:text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {pipeline.lead}
        </p>
      </div>

      {/* Horizontal Pipeline Diagram Card with Scroll Degradation */}
      <div className="bg-surface-container-lowest border border-surface-container-high p-space-lg sm:p-space-xl rounded-xl shadow-lg">
        <div className="overflow-x-auto pb-space-sm">
          <div className="min-w-[760px] grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-7 gap-space-md relative">
            {pipeline.stages.map((stage, i) => (
              <div
                key={stage.stage}
                className="flex flex-col justify-between bg-surface-container-low border border-surface-container-high p-space-md rounded-lg relative hover:border-primary-container/40 transition-colors"
              >
                <div className="space-y-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-code-sm text-primary-container font-medium">
                      {stage.stage}
                    </span>
                    {getStatusDot(stage.statusType)}
                  </div>
                  <h4 className="font-sans text-title-md font-semibold text-on-surface">
                    {stage.title}
                  </h4>
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                    {stage.description}
                  </p>
                </div>
                <div className="mt-space-lg pt-space-xs flex items-center justify-between border-t border-surface-container-high/40">
                  {getStatusBadge(stage.status, stage.statusType)}
                  {i < pipeline.stages.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-surface-container-highest" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline Footer Metadata */}
        <div className="mt-space-lg pt-space-md border-t border-surface-container-high flex flex-wrap items-center justify-between text-on-surface-variant font-mono text-code-sm gap-space-sm">
          <span className="uppercase text-outline font-medium tracking-wider">
            PIPELINE DISCIPLINE: {pipeline.discipline}
          </span>
          <span className="text-primary-container font-medium tracking-wide">
            {pipeline.focus}
          </span>
        </div>
      </div>
    </section>
  )
}
