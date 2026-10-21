import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks } from '@/data/navigation'

/**
 * Header — fixed, backdrop-blur, 64px height.
 * Desktop: inline nav with active link highlighting via IntersectionObserver.
 * Mobile: hamburger menu with slide-down panel.
 * "Let's Talk" CTA always visible on the right.
 */
export default function Header() {
  const [activeAnchor, setActiveAnchor] = useState<string>('work')
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  // On a case study page, no anchor is active — reset to empty
  const isHomePage = pathname === '/'

  // IntersectionObserver: highlights the nav link for the section in view
  useEffect(() => {
    if (!isHomePage) return

    const observers: IntersectionObserver[] = []
    const thresholds = 0.25

    navLinks.forEach(({ anchor }) => {
      const el = document.getElementById(anchor)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveAnchor(anchor)
        },
        { threshold: thresholds, rootMargin: '-64px 0px -40% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [isHomePage])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-nav shadow-nav"
      role="banner"
    >
      <div className="h-16 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">

        {/* Logo / Name */}
        <Link
          to="/"
          className="flex items-center gap-space-sm group"
          aria-label="Ayush Raj — Home"
        >
          <span className="text-headline-sm font-semibold tracking-tight text-on-surface group-hover:text-primary transition-colors duration-150">
            AYUSH RAJ
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-space-lg"
          aria-label="Primary navigation"
        >
          {navLinks.map(({ label, href, anchor }) => {
            const isActive = isHomePage && activeAnchor === anchor
            return (
              <a
                key={anchor}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`
                  font-mono text-label-md transition-colors duration-150
                  ${isActive
                    ? 'text-primary font-medium'
                    : 'text-on-surface-variant hover:text-on-surface'
                  }
                `}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Right-side actions */}
        <div className="flex items-center gap-space-md">
          {/* Status badge — desktop only */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-surface-container">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-status-glow" aria-hidden="true" />
            <span className="font-mono text-label-sm text-on-surface-variant">Open to opportunities</span>
          </div>

          {/* CTA */}
          <a
            href="/#contact"
            className="flex items-center gap-space-xs px-3.5 py-1.5 rounded bg-primary text-on-primary font-mono text-label-md hover:bg-primary-container hover:text-on-primary-container transition-all duration-150"
            aria-label="Get in touch"
          >
            <span className="font-medium">Let's Talk</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-1.5 rounded text-on-surface-variant hover:text-on-surface transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="lg:hidden bg-surface-container-low border-t border-surface-container-high px-gutter py-space-md flex flex-col gap-space-sm"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ label, href, anchor }) => (
            <a
              key={anchor}
              href={href}
              onClick={closeMobile}
              className="font-mono text-label-md text-on-surface-variant hover:text-on-surface py-1.5 transition-colors duration-150"
            >
              {label}
            </a>
          ))}
          <div className="pt-space-sm border-t border-surface-container-high mt-space-xs">
            <a
              href="/#contact"
              onClick={closeMobile}
              className="inline-flex items-center gap-space-xs px-4 py-2 rounded bg-primary text-on-primary font-mono text-label-md hover:bg-primary-container hover:text-on-primary-container transition-all duration-150"
            >
              Let's Talk
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
