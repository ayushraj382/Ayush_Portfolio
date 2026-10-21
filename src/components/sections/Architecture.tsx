import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { topologyNodes } from '@/data/topology'

/**
 * Architecture section — interactive 7-node topology selector.
 * State is co-located in this component (useState, not Context).
 * Clicking a node updates the inspector panel below.
 */
export default function Architecture() {
  const [activeId, setActiveId] = useState<string>('user_browser')
  const activeNode = topologyNodes.find((n) => n.id === activeId) ?? topologyNodes[0]

  return (
    <section
      id="architecture"
      className="w-full bg-surface-container-lowest py-space-xl"
      aria-labelledby="architecture-heading"
    >
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-64px' }}
          transition={{ duration: 0.4 }}
        >
          <SectionLabel>[ SYSTEM TOPOLOGY ]</SectionLabel>
          <h2
            id="architecture-heading"
            className="text-headline-lg font-sans font-semibold text-on-surface mt-1"
          >
            Systems I've worked across
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant mt-1">
            A view of the application layers I work across, from browser and CMS systems to APIs,
            data, search and infrastructure.
          </p>
        </motion.div>

        {/* Interactive topology canvas */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-48px' }}
          transition={{ duration: 0.5 }}
          className="w-full bg-surface-container-low border border-surface-container-high rounded-xl p-space-md sm:p-space-lg shadow-xl flex flex-col gap-space-lg"
        >
          {/* Node buttons grid */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5"
            role="tablist"
            aria-label="System topology layers"
          >
            {topologyNodes.map((node) => {
              const isActive = node.id === activeId
              return (
                <button
                  key={node.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="topology-inspector"
                  id={`tab-${node.id}`}
                  type="button"
                  onClick={() => setActiveId(node.id)}
                  className={`
                    p-3 rounded border text-left flex flex-col justify-between
                    transition-all duration-150 cursor-pointer
                    ${
                      isActive
                        ? 'border-primary-container/60 bg-surface-container-lowest'
                        : 'border-surface-container-high bg-surface-container hover:border-primary-container'
                    }
                  `}
                >
                  <span
                    className={`font-mono text-code-sm ${
                      isActive ? 'text-primary-container' : 'text-outline'
                    }`}
                  >
                    {node.index}
                  </span>
                  <span className="font-sans text-title-md text-on-surface font-medium mt-2 text-[13px] leading-tight">
                    {node.label}
                  </span>
                  <span className="font-mono text-[11px] text-outline mt-1 leading-snug">
                    {node.sublabel}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Inspector panel */}
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            id="topology-inspector"
            role="tabpanel"
            aria-labelledby={`tab-${activeId}`}
            className="p-space-lg rounded-lg bg-surface-container-lowest border border-surface-container-high flex flex-col gap-space-md"
          >
            {/* Inspector header */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-high">
              <div className="flex items-center gap-space-sm">
                <span className="font-mono text-code-sm px-2.5 py-0.5 rounded bg-surface-container text-primary-container">
                  {activeNode.tag}
                </span>
                <span className="font-sans text-title-md text-on-surface font-semibold">
                  {activeNode.title}
                </span>
              </div>
              <div className="flex items-center gap-space-md">
                <span className="font-mono text-code-sm text-on-surface-variant">
                  Layer:{' '}
                  <span className="text-primary">{activeNode.layer}</span>
                </span>
              </div>
            </div>

            {/* Inspector body */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
              <div className="lg:col-span-2">
                <h5 className="font-mono text-code-sm text-outline uppercase tracking-wider mb-1">
                  Overview & Scope
                </h5>
                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                  {activeNode.description}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-surface-container-low border border-surface-container-high flex flex-col justify-between">
                <div>
                  <span className="font-mono text-code-sm text-outline uppercase tracking-wider">
                    TOOLS & TECHNOLOGIES
                  </span>
                  <ul className="mt-2 space-y-1 font-mono text-code-sm text-on-surface">
                    {activeNode.tools.map((tool) => (
                      <li key={tool}>• {tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
