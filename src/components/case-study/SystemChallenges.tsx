import SectionLabel from '@/components/ui/SectionLabel'
import type { SystemChallenge } from '@/data/caseStudies'

interface SystemChallengesProps {
  challenges: {
    subtitle: string
    title: string
    lead: string
    items: SystemChallenge[]
  }
}

export default function SystemChallenges({ challenges }: SystemChallengesProps) {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-space-xs mb-8 md:mb-12">
        <div className="flex items-center gap-space-sm mb-1">
          <SectionLabel label="[ SYSTEM CHALLENGES ]" />
          <span className="font-mono text-label-md text-outline uppercase tracking-wider">
            {challenges.subtitle}
          </span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-on-surface">
          {challenges.title}
        </h2>
        <p className="font-sans text-body-md sm:text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {challenges.lead}
        </p>
      </div>

      {/* Grid of Boundary Deep-Dive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {challenges.items.map((item, idx) => (
          <div
            key={idx}
            className="bg-surface-container border border-surface-container-high p-space-xl rounded-xl space-y-space-md flex flex-col justify-between shadow-card hover:border-primary-container/40 transition-colors"
          >
            <div className="space-y-space-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-code-sm text-primary font-medium">
                  {item.boundary}
                </span>
                <span className="font-mono text-code-sm text-outline uppercase">
                  {item.layer}
                </span>
              </div>

              <h3 className="font-sans text-xl sm:text-2xl font-semibold text-on-surface">
                {item.title}
              </h3>

              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                {item.description}
              </p>

              {/* Visual Code Snippet Schematic */}
              {item.codeSnippet && item.codeSnippet.length > 0 && (
                <div className="bg-surface-container-lowest border border-surface-container-high/60 p-space-md rounded-lg space-y-space-xs font-mono text-code-sm">
                  {item.codeSnippet.map((line, lIdx) => (
                    <div key={lIdx} className="text-on-surface-variant flex items-center justify-between gap-space-sm">
                      {line.label && <span className="text-outline">{line.label}:</span>}
                      <span className={line.isAccent ? 'text-primary-container font-semibold' : 'text-on-surface'}>
                        {line.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Arrow Transition Schematic */}
              {item.schematic && item.schematic.length > 0 && (
                <div className="bg-surface-container-lowest border border-surface-container-high/60 p-space-md rounded-lg font-mono text-code-sm space-y-1">
                  {item.schematic.map((s, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between py-space-xs border-b border-surface-container-high/40 last:border-b-0"
                    >
                      <span className="text-red-400 font-medium truncate max-w-[45%]">{s.from}</span>
                      <span className="text-primary-container font-bold px-2">{s.arrow}</span>
                      <span className="text-primary font-medium truncate max-w-[45%]">{s.to}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Dependency Fan-Out Schematic */}
              {item.fanout && (
                <div className="bg-surface-container-lowest border border-surface-container-high/60 p-space-md rounded-lg font-mono text-code-sm">
                  <div className="text-center font-semibold text-primary mb-space-xs">
                    {item.fanout.title}
                  </div>
                  <div className="text-center text-outline-variant text-xs mb-space-xs">
                    {item.fanout.subtitle}
                  </div>
                  <div className="grid grid-cols-2 gap-space-xs text-center">
                    {item.fanout.items.map((fItem, fIdx) => (
                      <div
                        key={fIdx}
                        className="bg-surface-container border border-surface-container-high p-space-xs rounded text-on-surface text-xs"
                      >
                        {fItem}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Syntax Highlighted Code Block */}
              {item.codeBlock && (
                <div className="bg-surface-container-lowest border border-surface-container-high/60 p-space-md rounded-lg font-mono text-code-sm overflow-x-auto">
                  <pre className="text-on-surface-variant whitespace-pre">
                    <code>{item.codeBlock.content}</code>
                  </pre>
                </div>
              )}
            </div>

            <p className="font-sans text-body-sm text-on-surface-variant pt-space-sm border-t border-surface-container-high/40 leading-relaxed">
              {item.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
