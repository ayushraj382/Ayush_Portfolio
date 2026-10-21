import type { EditorialTakeaway } from '@/data/caseStudies'

interface TakeawaySectionProps {
  takeaway: EditorialTakeaway
}

export default function TakeawaySection({ takeaway }: TakeawaySectionProps) {
  return (
    <section className="w-full">
      <div className="bg-surface-container-lowest border border-surface-container-high p-8 sm:p-12 md:p-16 rounded-2xl shadow-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl pointer-events-none"></div>

        <span className="font-mono text-code-sm text-primary-container uppercase block mb-space-sm font-semibold tracking-wider">
          [ ENGINEERING TAKEAWAY ]
        </span>

        <blockquote className="font-sans text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-on-surface mb-space-md max-w-4xl leading-tight">
          {takeaway.quote}
        </blockquote>

        <p className="font-sans text-body-md sm:text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {takeaway.synthesis}
        </p>
      </div>
    </section>
  )
}
