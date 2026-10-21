import { type ReactNode } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

interface LayoutProps {
  children: ReactNode
}

/**
 * Layout — wraps every page with the sticky Header and Footer.
 * `main` uses pt-16 to offset for the 64px fixed header.
 */
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full pt-16" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
