import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'
import HomePage from '@/pages/HomePage'
import CaseStudyPage from '@/pages/CaseStudyPage'
import NotFound from '@/pages/NotFound'

/**
 * App — root router.
 * <ScrollToTop /> sits inside <BrowserRouter> so it has location context.
 * It scrolls window to top on every pathname change before the page renders.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Case study detail pages — all served by the shared CaseStudyPage template */}
        <Route path="/case/:slug" element={<CaseStudyPage />} />

        {/* Explicit 404 route */}
        <Route path="/404" element={<NotFound />} />

        {/* Catch-all → 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
