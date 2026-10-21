import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'

/**
 * App-level smoke tests — verify ScrollToTop renders cleanly.
 * Full routing tests require Playwright (browser env) — see e2e/.
 */
describe('App scaffolding', () => {
  it('renders without crashing', () => {
    // App uses BrowserRouter internally — we verify no thrown errors
    // by rendering the smallest piece that needs router context
    const { container } = render(
      <MemoryRouter>
        <ScrollToTop />
      </MemoryRouter>,
    )
    // ScrollToTop returns null — container has no child nodes
    expect(container.firstChild).toBeNull()
  })
})

describe('ScrollToTop', () => {
  it('renders null (produces no visible DOM output)', () => {
    const { container } = render(
      <MemoryRouter>
        <ScrollToTop />
      </MemoryRouter>,
    )
    expect(container.firstChild).toBeNull()
  })
})
