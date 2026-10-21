import { motion } from 'framer-motion'
import {
  Terminal, Monitor, Rss, MousePointerClick, Database,
  Server, TrendingUp, BarChart3, Wrench,
} from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import TechBadge from '@/components/ui/TechBadge'
import { expertiseCards } from '@/data/expertise'

/* Map lucideIcon string → component */
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Terminal, Monitor, Rss, MousePointerClick, Database,
  Server, TrendingUp, BarChart3, Wrench,
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0 },
}

/**
 * Expertise section — 9-card grid of engineering domains.
 * Each card: index badge, icon, title, monospace subtitle, description, tech tags.
 */
export default function Expertise() {
  return (
    <section
      id="expertise"
      className="w-full bg-surface-container-lowest py-space-xl"
      aria-labelledby="expertise-heading"
    >
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">

        {/* Section header */}
        <motion.div
          className="flex flex-col gap-1 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-64px' }}
          transition={{ duration: 0.4 }}
        >
          <SectionLabel>[ EXPERTISE ]</SectionLabel>
          <h2
            id="expertise-heading"
            className="text-headline-lg font-sans font-semibold text-on-surface"
          >
            What I work across
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Software, frontend, publishing, ad-tech and infrastructure systems I've worked across.
          </p>
        </motion.div>

        {/* 9-card grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-64px' }}
          transition={{ staggerChildren: 0.07 }}
        >
          {expertiseCards.map((card) => {
            const Icon = iconMap[card.lucideIcon]
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="p-space-lg rounded-lg bg-surface-container-low border border-surface-container-high hover:border-primary/40 hover:bg-surface-container transition-all duration-150 flex flex-col justify-between group shadow-card h-full"
              >
                <div>
                  {/* Card header row */}
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="font-mono text-code-sm text-primary-container px-2 py-0.5 rounded bg-surface-container-lowest border border-surface-container-high">
                      {card.index}
                    </span>
                    {Icon && (
                      <Icon
                        size={20}
                        className="text-outline group-hover:text-primary transition-colors duration-150"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <h3 className="text-headline-sm font-sans font-semibold text-on-surface group-hover:text-primary transition-colors duration-150">
                    {card.title}
                  </h3>
                  <div className="font-mono text-[12px] text-primary/80 mt-1 mb-2">
                    {card.subtitle}
                  </div>
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-space-md pt-space-sm border-t border-surface-container flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <TechBadge key={tag} label={tag} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
