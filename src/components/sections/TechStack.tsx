import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { techStackCategories } from '@/data/techStack'

/**
 * TechStack section — 6-category badge matrix.
 * Each category: monospace index + label, then a flex-wrap of technology chips.
 */
export default function TechStack() {
  return (
    <section
      id="stack"
      className="w-full py-space-xl bg-surface"
      aria-labelledby="stack-heading"
    >
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">

        {/* Section header */}
        <motion.div
          className="flex flex-col gap-1 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-64px' }}
          transition={{ duration: 0.4 }}
        >
          <SectionLabel>[ CAPABILITIES & TOOLING ]</SectionLabel>
          <h2
            id="stack-heading"
            className="text-headline-lg font-sans font-semibold text-on-surface"
          >
            Technology Stack
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Technologies and tools I've worked with across software, publishing, ad-tech and
            infrastructure systems.
          </p>
        </motion.div>

        {/* Categories matrix */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-64px' }}
          transition={{ staggerChildren: 0.07 }}
        >
          {techStackCategories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
              className="p-space-md rounded-lg bg-surface-container-low border border-surface-container-high flex flex-col justify-start items-stretch h-full"
            >
              <div className="font-mono text-code-sm text-outline uppercase tracking-wider mb-space-sm">
                {cat.index} — {cat.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded bg-surface-container font-mono text-code-sm text-on-surface"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
