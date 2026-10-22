import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const steps = [
  { step: 'STEP 01', title: 'OBSERVE',  desc: 'Logs, requests, errors, browser behavior and application state. Capture what is actually happening before making changes.',         footer: 'LOGS / REQUESTS' },
  { step: 'STEP 02', title: 'ISOLATE',  desc: 'Separate the problem by layer: frontend, API, application, database, search, infrastructure or third-party integration.',          footer: 'LAYER ISOLATION' },
  { step: 'STEP 03', title: 'TRACE',    desc: 'Follow the request. Follow the data. Find where the expected behavior changes.',                                                    footer: 'DATA FLOW' },
  { step: 'STEP 04', title: 'FIX',      desc: 'Make the smallest appropriate change, test it and validate the behavior again.',                                                    footer: 'TEST / VALIDATE' },
  { step: 'STEP 05', title: 'VERIFY',   desc: 'Check the result across the affected layers and make sure the original problem is actually resolved.',                              footer: 'REGRESSION CHECK', isSuccess: true },
]

/**
 * Engineering section — "How I Think".
 * Principal quote callout + 5-step diagnostic process grid.
 */
export default function Engineering() {
  return (
    <section
      id="engineering"
      className="w-full py-space-xl bg-surface scroll-mt-24 md:scroll-mt-28"
      aria-labelledby="engineering-heading"
    >
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-64px' }}
          transition={{ duration: 0.4 }}
        >
          <SectionLabel>[ ENGINEERING APPROACH ]</SectionLabel>
          <h2
            id="engineering-heading"
            className="text-headline-lg font-sans font-semibold text-on-surface mt-1"
          >
            How I Think
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant mt-1">
            A practical approach to understanding, isolating and solving technical problems.
          </p>
        </motion.div>

        {/* Principal quote callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-48px' }}
          transition={{ duration: 0.45 }}
          className="p-space-lg rounded-xl bg-surface-container-low border border-primary-container/30 relative overflow-hidden shadow-md"
        >
          <div
            className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full pointer-events-none blur-2xl"
            style={{ background: 'rgba(0,240,255,0.05)' }}
            aria-hidden="true"
          />
          <div className="flex items-start gap-space-md">
            <span className="font-mono text-code-sm text-primary-container mt-1 font-bold shrink-0">
              // PRINCIPLE
            </span>
            <p className="text-headline-md font-sans font-medium text-on-surface leading-normal italic">
              "My default debugging question is simple: where does the system stop behaving the way
              it should?"
            </p>
          </div>
        </motion.div>

        {/* 5-step diagnostic process */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-space-md"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-48px' }}
          transition={{ staggerChildren: 0.08 }}
        >
          {steps.map(({ step, title, desc, footer, isSuccess }) => (
            <motion.div
              key={step}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
              className="p-space-md rounded-lg bg-surface-container-low border border-surface-container-high flex flex-col justify-between"
            >
              <div>
                <div
                  className={`font-mono text-code-sm font-medium mb-space-sm ${
                    isSuccess ? 'text-secondary' : 'text-primary-container'
                  }`}
                >
                  {step}
                </div>
                <h4 className="text-title-md font-sans font-semibold text-on-surface mb-2">
                  {title}
                </h4>
                <p className="font-sans text-body-sm text-on-surface-variant">{desc}</p>
              </div>
              <div className="mt-4 pt-2 border-t border-surface-container font-mono text-outline text-[11px] uppercase tracking-wider">
                {footer}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
