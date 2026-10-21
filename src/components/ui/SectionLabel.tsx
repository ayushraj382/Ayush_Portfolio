import { type ReactNode } from 'react'

interface SectionLabelProps {
  children?: ReactNode
  label?: string
  className?: string
}

/**
 * SectionLabel — the monospace eyebrow text used above every section heading.
 * Pattern: "[ EXPERTISE ]" or "[ ENGINEERING APPROACH ]"
 * Uses JetBrains Mono, uppercase, widely tracked.
 */
export default function SectionLabel({ children, label, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`font-mono text-code-sm text-primary-container uppercase tracking-widest ${className}`}
    >
      {label ?? children}
    </span>
  )
}
