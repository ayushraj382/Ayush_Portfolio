/// <reference types="@testing-library/jest-dom/vitest" />
import '@testing-library/jest-dom'

// Mock window.scrollTo for jsdom environment
if (typeof window !== 'undefined') {
  window.scrollTo = () => {}
}
