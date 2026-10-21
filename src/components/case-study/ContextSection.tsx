import SectionLabel from '@/components/ui/SectionLabel'
import type { EnvironmentBaseline } from '@/data/caseStudies'

interface ContextSectionProps {
  context: {
    subtitle: string
    title: string
    lead: string
    secondaryLead?: string
    baselineNodes: EnvironmentBaseline[]
  }
}

export default function ContextSection({ context }: ContextSectionProps) {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-space-xs mb-8 md:mb-12">
        <div className="flex items-center gap-space-sm mb-1">
          <SectionLabel label="[ CONTEXT ]" />
          <span className="font-mono text-label-md text-outline uppercase tracking-wider">
            {context.subtitle}
          </span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-on-surface">
          {context.title}
        </h2>
        <p className="font-sans text-body-md sm:text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {context.lead}
        </p>
        {context.secondaryLead && (
          <p className="font-sans text-body-md text-on-surface-variant max-w-3xl pt-space-xs leading-relaxed">
            {context.secondaryLead}
          </p>
        )}
      </div>

      {/* Starting Environment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
        {context.baselineNodes.map((node) => (
          <div
            key={node.id}
            className="bg-surface-container border border-surface-container-high p-space-lg rounded-xl flex flex-col justify-between hover:border-primary-container/40 transition-colors shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-mono text-code-sm text-outline">{node.label}</span>
                <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
              </div>
              <h3 className="font-sans text-title-md font-semibold text-on-surface mb-space-xs">
                {node.title}
              </h3>
              <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                {node.description}
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-container-low px-space-sm py-space-xs rounded border border-surface-container-high/60">
              <span className="font-mono text-code-sm text-primary-container font-medium block truncate">
                {node.token}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
