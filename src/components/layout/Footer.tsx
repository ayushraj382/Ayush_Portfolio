import { footerLinks, email } from '@/data/contact'

/**
 * Footer — minimal dark footer matching the Stitch design.
 * Name + tagline, hairline divider, social links row.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-surface-container-lowest mt-margin-lg" role="contentinfo">
      <div className="max-w-7xl mx-auto px-gutter py-space-xl flex flex-col gap-space-lg">

        {/* Brand */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-space-sm">
            <span className="text-headline-sm font-semibold text-on-surface">AYUSH RAJ</span>
            <span className="font-mono text-code-sm text-outline">— Software Developer</span>
          </div>
          <p className="font-sans text-body-sm text-on-surface-variant">
            Software development across CMS, publishing, APIs, ad-tech, data and infrastructure.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-surface-container-highest" role="separator" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
          <nav className="flex items-center gap-space-md" aria-label="Footer navigation">
            {footerLinks.map(({ id, label, href, isExternal, ariaLabel }) => (
              <a
                key={id}
                href={href}
                aria-label={ariaLabel}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="font-mono text-code-sm text-on-surface-variant hover:text-primary transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </nav>

          <span className="font-mono text-code-sm text-outline">
            © {year} ·{' '}
            <a
              href={`mailto:${email}`}
              className="hover:text-primary transition-colors duration-150"
            >
              {email}
            </a>
          </span>
        </div>

      </div>
    </footer>
  )
}
