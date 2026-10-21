import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const mindsetItems = [
  'Understand the system',
  'Follow the data',
  'Isolate the problem',
  'Validate the fix',
]

const enjoyItems = ['Building', 'Debugging', 'Integrating', 'Improving']

/**
 * About section — 2-column: narrative prose + Engineering Mindset spec sidebar.
 * Followed immediately by the full-width Philosophy Banner.
 */
export default function About() {
  return (
    <>
      {/* About section */}
      <section
        id="about"
        className="w-full bg-surface-container-lowest py-space-xl"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-64px' }}
            transition={{ duration: 0.4 }}
          >
            <SectionLabel>[ BACKGROUND ]</SectionLabel>
            <h2
              id="about-heading"
              className="text-headline-lg font-sans font-semibold text-on-surface mt-1"
            >
              A little about me
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-48px' }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start"
          >
            {/* Narrative */}
            <div className="lg:col-span-8 flex flex-col gap-space-md font-sans text-body-lg text-on-surface-variant leading-relaxed">
              <p>I'm a software developer who enjoys working where engineering meets real-world systems.</p>
              <p>
                My work spans backend development, CMS platforms, publishing technology, ad-tech,
                APIs, databases and infrastructure. I've worked on problems where the answer isn't
                always sitting inside one codebase, so I tend to follow the entire system: the
                request, the data, the integration, the infrastructure and finally what the user sees.
              </p>
              <p>
                I enjoy debugging as much as building. Give me a broken integration, a migration that
                isn't behaving, an API returning something unexpected, or a production issue with
                multiple moving parts, and I'll start by tracing the system until the failure point
                becomes clear.
              </p>
              <p>
                I'm particularly interested in building technology that is practical, maintainable and
                actually works in production.
              </p>
            </div>

            {/* Sidebar spec */}
            <div className="lg:col-span-4 p-space-md rounded-lg bg-surface-container-low border border-surface-container-high flex flex-col gap-space-md">
              <div>
                <span className="font-mono text-code-sm text-primary-container uppercase tracking-wider">
                  ENGINEERING MINDSET
                </span>
                <ul className="mt-2 space-y-2 font-mono text-code-sm text-on-surface">
                  {mindsetItems.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-secondary" aria-hidden="true">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-space-sm border-t border-surface-container">
                <span className="font-mono text-code-sm text-primary-container uppercase tracking-wider">
                  WHAT I ENJOY
                </span>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {enjoyItems.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-code-sm text-on-surface bg-surface-container px-2.5 py-1 rounded border border-surface-container-high"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section
        className="w-full bg-surface-container py-space-xl border-y border-surface-container-highest relative overflow-hidden"
        aria-label="Core philosophy"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-48px' }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto px-gutter text-center flex flex-col items-center gap-space-sm"
        >
          <span className="font-mono text-code-sm text-primary-container tracking-widest">
            [ CORE PHILOSOPHY ]
          </span>
          <h3 className="text-headline-lg font-sans font-semibold text-on-surface tracking-tight max-w-3xl leading-snug">
            Code is only part of the system.
            <br />
            Understanding how everything connects is the real skill.
          </h3>
          <span className="font-mono text-code-sm text-outline mt-2">
            — AYUSH RAJ · SOFTWARE DEVELOPER
          </span>
        </motion.div>
      </section>
    </>
  )
}
