import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import Layout from '@/components/layout/Layout'

/**
 * NotFound (404) page — minimal dark design matching the portfolio aesthetic.
 */
export default function NotFound() {
  return (
    <Layout>
      <section
        className="w-full min-h-[calc(100vh-8rem)] flex items-center justify-center px-gutter"
        aria-labelledby="not-found-heading"
      >
        <div className="max-w-xl w-full flex flex-col items-center text-center gap-space-lg">

          {/* Status code */}
          <div className="font-mono text-[96px] font-semibold leading-none text-surface-container-high select-none">
            404
          </div>

          {/* Label */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-mono text-code-sm text-primary-container uppercase tracking-widest">
              [ PAGE NOT FOUND ]
            </span>
            <h1
              id="not-found-heading"
              className="text-headline-md font-sans font-semibold text-on-surface"
            >
              This route doesn't exist.
            </h1>
            <p className="font-sans text-body-md text-on-surface-variant">
              The page you're looking for has either moved or never existed.
              Let's get you back to somewhere useful.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-space-md">
            <Link
              to="/"
              className="inline-flex items-center gap-space-xs px-5 py-2.5 rounded bg-primary-container text-on-primary-container font-mono text-code-md font-medium hover:bg-primary hover:text-on-primary transition-all duration-150 shadow-card"
            >
              <Home size={15} aria-hidden="true" />
              <span>Go Home</span>
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-space-xs px-5 py-2.5 rounded bg-surface-container border border-surface-container-highest text-on-surface font-mono text-code-md hover:bg-surface-container-high transition-all duration-150"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              <span>Go Back</span>
            </button>
          </div>

        </div>
      </section>
    </Layout>
  )
}
