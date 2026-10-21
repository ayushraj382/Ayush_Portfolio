import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Surface Scale ──────────────────────────────────────────────
        'surface':                  '#121315',
        'surface-dim':              '#121315',
        'surface-bright':           '#38393b',
        'surface-container-lowest': '#0d0e10',
        'surface-container-low':    '#1b1c1e',
        'surface-container':        '#1f2022',
        'surface-container-high':   '#292a2c',
        'surface-container-highest':'#343537',
        'surface-variant':          '#343537',
        'surface-tint':             '#00dbe9',
        'background':               '#121315',

        // ── On-Surface Text ────────────────────────────────────────────
        'on-surface':         '#e3e2e5',
        'on-surface-variant': '#b9cacb',
        'inverse-surface':    '#e3e2e5',
        'inverse-on-surface': '#303033',
        'on-background':      '#e3e2e5',

        // ── Outlines / Borders ─────────────────────────────────────────
        'outline':         '#849495',
        'outline-variant': '#3b494b',

        // ── Primary (Electric Cyan) ────────────────────────────────────
        'primary':                   '#dbfcff',
        'on-primary':                '#00363a',
        'primary-container':         '#00f0ff',
        'on-primary-container':      '#006970',
        'inverse-primary':           '#006970',
        'primary-fixed':             '#7df4ff',
        'primary-fixed-dim':         '#00dbe9',
        'on-primary-fixed':          '#002022',
        'on-primary-fixed-variant':  '#004f54',

        // ── Secondary (Emerald Mint) ───────────────────────────────────
        'secondary':                  '#4edea3',
        'on-secondary':               '#003824',
        'secondary-container':        '#00a572',
        'on-secondary-container':     '#00311f',
        'secondary-fixed':            '#6ffbbe',
        'secondary-fixed-dim':        '#4edea3',
        'on-secondary-fixed':         '#002113',
        'on-secondary-fixed-variant': '#005236',

        // ── Tertiary (Amber/Gold) ──────────────────────────────────────
        'tertiary':                  '#fff5de',
        'on-tertiary':               '#3b2f00',
        'tertiary-container':        '#fed639',
        'on-tertiary-container':     '#715d00',
        'tertiary-fixed':            '#ffe179',
        'tertiary-fixed-dim':        '#eac324',
        'on-tertiary-fixed':         '#231b00',
        'on-tertiary-fixed-variant': '#554500',

        // ── Error ──────────────────────────────────────────────────────
        'error':             '#ffb4ab',
        'on-error':          '#690005',
        'error-container':   '#93000a',
        'on-error-container':'#ffdad6',
      },

      // ── Border Radius ───────────────────────────────────────────────
      // Stitch: compact, disciplined — eschews large curves
      borderRadius: {
        DEFAULT: '0.25rem',  // 4px  — badges, pills, inputs, buttons
        sm:      '0.125rem', // 2px  — micro elements
        md:      '0.375rem', // 6px
        lg:      '0.5rem',   // 8px  — cards, containers, code blocks
        xl:      '0.75rem',  // 12px — case study tiles, featured sections
        full:    '9999px',   // Status dots, avatars
      },

      // ── Spacing ─────────────────────────────────────────────────────
      spacing: {
        'space-xs': '0.25rem',  // 4px
        'space-sm': '0.5rem',   // 8px
        'space-md': '1rem',     // 16px
        'space-lg': '1.5rem',   // 24px
        'space-xl': '2.5rem',   // 40px
        'space-2xl': '4rem',    // 64px
        'space-3xl': '6rem',    // 96px
        'gutter':   '1.5rem',   // 24px — column/horizontal padding
        'gutter-sm':'1rem',     // 16px — mobile gutter
        'margin':   '2rem',     // 32px
        'margin-sm':'1rem',     // 16px
        'margin-lg':'4rem',     // 64px
      },

      // ── Font Families ────────────────────────────────────────────────
      fontFamily: {
        sans:  ['Geist', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'ui-monospace', 'monospace'],
        geist: ['Geist', 'system-ui', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },

      // ── Typography Scale ─────────────────────────────────────────────
      fontSize: {
        'headline-xl': ['48px', {
          lineHeight: '56px',
          letterSpacing: '-0.03em',
          fontWeight: '600',
        }],
        'headline-xl-mobile': ['32px', {
          lineHeight: '38px',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        }],
        'headline-lg': ['36px', {
          lineHeight: '44px',
          letterSpacing: '-0.025em',
          fontWeight: '600',
        }],
        'headline-lg-mobile': ['26px', {
          lineHeight: '32px',
          letterSpacing: '-0.015em',
          fontWeight: '600',
        }],
        'headline-md': ['24px', {
          lineHeight: '32px',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        }],
        'headline-sm': ['20px', {
          lineHeight: '28px',
          letterSpacing: '-0.015em',
          fontWeight: '500',
        }],
        'title-md': ['16px', {
          lineHeight: '24px',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        'body-lg': ['18px', {
          lineHeight: '30px',
          letterSpacing: '-0.005em',
          fontWeight: '400',
        }],
        'body-md': ['15px', {
          lineHeight: '24px',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'body-sm': ['13px', {
          lineHeight: '20px',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'code-md': ['14px', {
          lineHeight: '22px',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],
        'code-sm': ['12px', {
          lineHeight: '18px',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'label-md': ['13px', {
          lineHeight: '16px',
          letterSpacing: '0.02em',
          fontWeight: '500',
        }],
        'label-sm': ['11px', {
          lineHeight: '14px',
          letterSpacing: '0.04em',
          fontWeight: '500',
        }],
      },

      // ── Max Width ────────────────────────────────────────────────────
      maxWidth: {
        '8xl': '88rem',  // 1408px — generous outer container
      },

      // ── Box Shadow ────────────────────────────────────────────────────
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.4)',
        'card-hover': '0 4px 12px -2px rgba(0,0,0,0.5)',
        'nav': '0 1px 8px rgba(0,0,0,0.35)',
        'modal': '0 20px 40px -15px rgba(0,0,0,0.7)',
        'accent-glow': '0 0 8px rgba(0, 240, 255, 0.4)',
        'status-glow': '0 0 8px rgba(78,222,163,0.5)',
      },

      // ── Backdrop Blur ─────────────────────────────────────────────────
      backdropBlur: {
        nav: '20px',
      },

      // ── Animation ─────────────────────────────────────────────────────
      transitionDuration: {
        '100': '100ms',
        '150': '150ms',
      },
    },
  },
  plugins: [],
}

export default config
