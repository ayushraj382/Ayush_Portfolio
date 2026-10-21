interface TechBadgeProps {
  label: string
  variant?: 'default' | 'accent' | 'outline'
  className?: string
}

/**
 * TechBadge — compact JetBrains Mono pill used for technology tags.
 * Three visual variants matching the Stitch design:
 *   - default: subtle surface fill, muted text
 *   - accent:  primary-container glow border, cyan text
 *   - outline: transparent fill, outline border
 */
export default function TechBadge({ label, variant = 'default', className = '' }: TechBadgeProps) {
  const variantClasses = {
    default: 'bg-surface-container-lowest text-on-surface-variant border-surface-container-high',
    accent:  'bg-primary-container/10 text-primary-container border-primary-container/30',
    outline: 'bg-transparent text-on-surface-variant border-surface-container-highest',
  }

  return (
    <span
      className={`
        inline-block font-mono text-code-sm px-2 py-0.5 rounded border
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {label}
    </span>
  )
}
