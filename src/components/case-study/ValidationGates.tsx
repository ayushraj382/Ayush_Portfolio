import { Clock, CheckCircle2 } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import type { ValidationGate } from '@/data/caseStudies'

interface ValidationGatesProps {
  validation: {
    subtitle: string
    title: string
    lead: string
    gates: ValidationGate[]
  }
}

export default function ValidationGates({ validation }: ValidationGatesProps) {
  return (
    <section className="mb-space-3xl">
      <div className="flex flex-col gap-space-xs mb-space-xl">
        <div className="flex items-center gap-space-sm">
          <SectionLabel label="[ VERIFICATION ]" />
          <span className="font-mono text-label-md text-outline uppercase tracking-wider">
            {validation.subtitle}
          </span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-on-surface">
          {validation.title}
        </h2>
        <p className="font-sans text-body-md sm:text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {validation.lead}
        </p>
      </div>

      {/* Sequential Verification Gates List */}
      <div className="space-y-space-sm">
        {validation.gates.map((gate) => {
          const isVerified = gate.status === 'VERIFIED'
          return (
            <div
              key={gate.gate}
              className="bg-surface-container border border-surface-container-high p-space-md rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:border-primary-container/40 transition-colors shadow-sm"
            >
              <div className="flex items-start md:items-center gap-space-md">
                <span className="font-mono text-code-sm px-space-sm py-space-xs rounded bg-surface-container-low text-primary-container border border-surface-container-high font-medium whitespace-nowrap">
                  {gate.gate}
                </span>
                <div>
                  <h4 className="font-sans text-title-md font-semibold text-on-surface">
                    {gate.title}
                  </h4>
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                    {gate.description}
                  </p>
                </div>
              </div>

              <div
                className={`font-mono text-code-sm flex items-center gap-space-xs whitespace-nowrap ${
                  isVerified ? 'text-secondary' : 'text-primary-container'
                }`}
              >
                {isVerified ? (
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                ) : (
                  <Clock className="w-4 h-4 text-primary-container animate-pulse" />
                )}
                <span>{gate.status}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
