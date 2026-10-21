import { ChevronRight } from 'lucide-react'
import type { PipelineStep } from '@/data/caseStudies'

interface PipelineFlowProps {
  steps: PipelineStep[]
}

/**
 * PipelineFlow — horizontal scrollable pipeline visualization.
 * Steps render as chips with arrow separators between them.
 * Variants: default (surface), accent (cyan), success (emerald).
 */
export default function PipelineFlow({ steps }: PipelineFlowProps) {
  const stepClasses: Record<PipelineStep['variant'], string> = {
    default: 'bg-surface-container-low text-on-surface border-surface-container-high',
    accent:  'bg-surface-container-low text-primary-container border-primary-container/40',
    success: 'bg-surface-container-low text-secondary border-secondary/40',
  }

  return (
    <div className="w-full bg-surface-container-lowest rounded p-space-md border border-surface-container overflow-x-auto">
      <div className="flex items-center gap-2 min-w-max">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2">
            <span
              className={`
                px-2.5 py-1 rounded font-mono text-code-sm border whitespace-nowrap
                ${stepClasses[step.variant]}
              `}
            >
              {step.label}
            </span>
            {i < steps.length - 1 && (
              <ChevronRight
                size={14}
                className="text-outline shrink-0"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
