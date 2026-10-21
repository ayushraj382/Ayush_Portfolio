import SectionLabel from '@/components/ui/SectionLabel'
import type { ContributionItem } from '@/data/caseStudies'

interface ContributionsSectionProps {
  contributions: {
    subtitle: string
    title: string
    lead: string
    items: ContributionItem[]
  }
}

export default function ContributionsSection({ contributions }: ContributionsSectionProps) {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-space-xs mb-8 md:mb-12">
        <div className="flex items-center gap-space-sm mb-1">
          <SectionLabel label="[ RESPONSIBILITIES ]" />
          <span className="font-mono text-label-md text-outline uppercase tracking-wider">
            {contributions.subtitle}
          </span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-on-surface">
          {contributions.title}
        </h2>
        <p className="font-sans text-body-md sm:text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {contributions.lead}
        </p>
      </div>

      {/* Grid of 9 Contribution Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
        {contributions.items.map((item) => (
          <div
            key={item.index}
            className="bg-surface-container border border-surface-container-high p-space-lg rounded-xl space-y-space-sm hover:border-primary-container/40 transition-colors shadow-sm"
          >
            <div className="font-mono text-code-sm text-primary-container font-semibold">
              [ {item.index} ]
            </div>
            <h3 className="font-sans text-title-md font-semibold text-on-surface">
              {item.title}
            </h3>
            <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
