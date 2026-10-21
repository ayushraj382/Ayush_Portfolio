import { motion } from 'framer-motion'
import {
  Cpu, Rss, ArrowLeftRight, MousePointerClick,
  SearchCode, HardDrive, BarChart3, Terminal, Handshake,
} from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import TechBadge from '@/components/ui/TechBadge'
import { experience } from '@/data/experience'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Cpu, Rss, ArrowLeftRight, MousePointerClick,
  SearchCode, HardDrive, BarChart3, Terminal, Handshake,
}

/**
 * Experience section — single experience block with 9 contribution items.
 */
export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-space-xl bg-surface"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-64px' }}
          transition={{ duration: 0.4 }}
        >
          <SectionLabel>[ EXPERIENCE ]</SectionLabel>
          <h2
            id="experience-heading"
            className="text-headline-lg font-sans font-semibold text-on-surface mt-1"
          >
            Experience & Contributions
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant mt-1">
            Software development, CMS platforms, publishing technology, ad-tech and technical
            solutions.
          </p>
        </motion.div>

        {/* Experience block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-48px' }}
          transition={{ duration: 0.45 }}
          className="p-space-lg rounded-xl bg-surface-container-low border border-surface-container-high flex flex-col gap-space-md shadow-md"
        >
          {/* Role header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container">
            <div>
              <div className="font-mono text-code-sm text-primary-container font-medium">
                {experience.period}
              </div>
              <h3 className="text-headline-md font-sans font-semibold text-on-surface mt-0.5">
                {experience.role}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-code-sm px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Contributions grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md pt-space-xs">
            {experience.contributions.map((item, i) => {
              const Icon = iconMap[item.lucideIcon]
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-32px' }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="p-space-md rounded-lg bg-surface-container border border-surface-container-high flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      {Icon && (
                        <Icon size={16} className="text-primary-container shrink-0" aria-hidden="true" />
                      )}
                      <div className="font-sans text-title-md text-on-surface font-medium">
                        {item.title}
                      </div>
                    </div>
                    <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-space-md pt-space-sm border-t border-surface-container flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <TechBadge key={tag} label={tag} />
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
