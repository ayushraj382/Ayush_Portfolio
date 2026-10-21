import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import Expertise from '@/components/sections/Expertise'
import TechStack from '@/components/sections/TechStack'
import Work from '@/components/sections/Work'
import Engineering from '@/components/sections/Engineering'
import Architecture from '@/components/sections/Architecture'
import Experience from '@/components/sections/Experience'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

/**
 * HomePage — assembles all 10 homepage sections in Stitch order.
 * Each section handles its own scroll-triggered animations.
 */
export default function HomePage() {
  return (
    <Layout>
      {/* §1  Hero ─────────────────────────── */}
      <Hero />
      {/* §2  Expertise ───────────────────── */}
      <Expertise />
      {/* §3  Tech Stack ──────────────────── */}
      <TechStack />
      {/* §4  Work / Case Study Previews ──── */}
      <Work />
      {/* §5  Engineering / How I Think ───── */}
      <Engineering />
      {/* §6  Architecture / Topology ─────── */}
      <Architecture />
      {/* §7  Experience ──────────────────── */}
      <Experience />
      {/* §8+9 About + Philosophy Banner ──── */}
      <About />
      {/* §10  Contact ────────────────────── */}
      <Contact />
    </Layout>
  )
}
