import SectionLabel from '@/components/ui/SectionLabel'
import type { CompatibilityRow } from '@/data/caseStudies'

interface CompatibilityMatrixProps {
  matrix: {
    subtitle: string
    title: string
    lead: string
    headers: string[]
    rows: CompatibilityRow[]
  }
}

export default function CompatibilityMatrix({ matrix }: CompatibilityMatrixProps) {
  const getBadgeStyle = (badgeType?: string) => {
    switch (badgeType) {
      case 'primary':
        return 'bg-surface-container-low text-primary-container border border-primary-container/30'
      case 'secondary':
        return 'bg-surface-container-low text-secondary border border-secondary/30'
      default:
        return 'bg-surface-container-low text-on-surface-variant border border-surface-container-high'
    }
  }

  return (
    <section className="w-full">
      <div className="flex flex-col gap-space-xs mb-8 md:mb-12">
        <div className="flex items-center gap-space-sm mb-1">
          <SectionLabel label="[ TECHNICAL MATRIX ]" />
          <span className="font-mono text-label-md text-outline uppercase tracking-wider">
            {matrix.subtitle}
          </span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-on-surface">
          {matrix.title}
        </h2>
        <p className="font-sans text-body-md sm:text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {matrix.lead}
        </p>
      </div>

      {/* Monospaced Technical Data Table */}
      <div className="overflow-x-auto bg-surface-container border border-surface-container-high rounded-xl shadow-card">
        <table className="w-full text-left font-sans text-body-sm min-w-[680px]">
          <thead className="bg-surface-container-high text-on-surface-variant font-mono text-code-sm uppercase tracking-wider border-b border-surface-container-highest">
            <tr>
              {matrix.headers.map((header) => (
                <th key={header} className="px-space-md py-space-sm font-medium">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-high/40 text-on-surface">
            {matrix.rows.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-surface-container-high/60 transition-colors"
              >
                <td className="px-space-md py-space-sm font-medium text-on-surface">
                  {row.component}
                </td>
                <td className="px-space-md py-space-sm font-mono text-code-sm text-on-surface-variant">
                  {row.legacy}
                </td>
                <td className="px-space-md py-space-sm font-mono text-code-sm text-primary font-medium">
                  {row.target}
                </td>
                <td className="px-space-md py-space-sm">
                  <span
                    className={`inline-flex items-center px-space-sm py-space-xs rounded font-mono text-code-sm ${getBadgeStyle(
                      row.badgeType
                    )}`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
