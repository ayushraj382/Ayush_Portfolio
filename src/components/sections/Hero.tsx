import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { engineeringDomains } from '@/data/caseStudies'

/**
 * Hero section — gradient headline, two CTA buttons, engineering domains panel.
 * Ambient top glow is a CSS radial gradient positioned absolutely.
 */
export default function Hero() {
  return (
    <section
      className="relative w-full max-w-7xl mx-auto px-gutter pt-space-lg pb-space-xl flex flex-col gap-space-lg"
      aria-label="Introduction"
    >
      {/* Ambient structural top glow */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Status strip & eyebrow */}
      <motion.div
        className="flex flex-wrap items-center justify-between gap-space-sm"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 py-0.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-low border border-surface-container-highest">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-status-glow" aria-hidden="true" />
            <span className="text-headline-sm font-semibold tracking-wider text-on-surface uppercase">
              AYUSH RAJ
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline font-mono text-code-sm text-outline">/</span>
            <span className="font-mono text-code-sm text-on-surface-variant tracking-wider uppercase">
              SOFTWARE DEVELOPER · TECHNICAL SOLUTIONS ENGINEER
            </span>
          </div>
        </div>
      </motion.div>

      {/* Hero headline & body */}
      <div className="flex flex-col gap-space-sm max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-headline-xl sm:text-[56px] lg:text-[64px] font-sans font-semibold tracking-tight leading-tight lg:leading-none text-on-surface"
        >
          I build systems.{' '}
          <br className="hidden sm:inline" />
          <span className="text-on-surface">I solve the problems </span>
          <span className="text-gradient-primary sm:inline-block">inside them.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="font-sans text-body-lg text-on-surface-variant max-w-3xl leading-relaxed mt-1"
        >
          Software developer working across CMS platforms, publishing technology, APIs, ad-tech and
          infrastructure. I enjoy taking complex systems apart, finding what is breaking, and turning
          them into something reliable and scalable.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24 }}
          className="flex flex-wrap items-center gap-space-md pt-2"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-space-xs px-5 py-2.5 rounded bg-surface-container-low border border-primary-container/50 text-primary-container hover:border-primary-container hover:bg-primary-container/10 transition-all duration-150 font-mono text-code-md group shadow-card"
          >
            <span>Explore My Work</span>
            <ArrowDown
              size={16}
              className="group-hover:translate-y-0.5 transition-transform duration-150"
              aria-hidden="true"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-space-xs px-5 py-2.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-all duration-150 font-mono text-code-md group shadow-card border border-surface-container-highest"
          >
            <span>Let's Connect</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform duration-150"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>

      {/* Engineering Domains Panel */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="w-full bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg border border-surface-container-highest shadow-2xl relative overflow-hidden"
      >
        {/* Panel header */}
        <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high mb-space-md">
          <span className="font-mono text-code-sm text-primary tracking-wider uppercase">
            [ ENGINEERING DOMAINS ]
          </span>
          {/* <span className="font-mono text-code-sm text-on-surface-variant">WHAT I WORK ACROSS</span> */}
        </div>

        {/* 5-column domain grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {engineeringDomains.map((domain) => (
            <div
              key={domain.index}
              className="p-3.5 rounded bg-surface-container-low border border-surface-container-high flex flex-col gap-1.5"
            >
              <span className="font-mono text-code-sm text-primary font-medium">{domain.index}</span>
              <h4 className="text-[15px] font-sans font-semibold text-on-surface">{domain.title}</h4>
              <p className="font-sans text-[12px] text-on-surface-variant leading-relaxed">
                {domain.subtitle}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
