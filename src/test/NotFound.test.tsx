import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound'

describe('NotFound page', () => {
  const renderNotFound = () =>
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    )

  it('renders the 404 status code', () => {
    renderNotFound()
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    renderNotFound()
    expect(
      screen.getByRole('heading', { name: /this route doesn't exist/i }),
    ).toBeInTheDocument()
  })

  it('renders a link home', () => {
    renderNotFound()
    expect(screen.getByRole('link', { name: /go home/i })).toBeInTheDocument()
  })

  it('renders a go-back button', () => {
    renderNotFound()
    expect(screen.getByRole('button', { name: /go back/i })).toBeInTheDocument()
  })
})
