/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ─── Fondos ────────────────────────────────────────────
        surface: {
          DEFAULT: '#FAF8F5',           // blanco cálido
          bright: '#FFFFFF',             // blanco puro
          dim: '#F2EFEA',                // secciones alternas
          'container-lowest': '#FFFFFF', // cards
          'container-low': '#F7F4EF',
          container: '#F0EDE8',
          'container-high': '#E8E5E0',
          'container-highest': '#E0DDD8',
          variant: '#E8E5E0',
        },
        background: '#FAF8F5',

        // ─── Acento principal · navy ───────────────────────────
        primary: {
          DEFAULT: '#3A5A78',           // CTAs, links, acentos
          hover: '#1E3A5F',             // hover
          container: '#E8EEF4',         // fondo suave
          dark: '#152A45',              // bloques oscuros
        },
        secondary: {
          DEFAULT: '#6B8FA3',           // azul claro para hover secundario
          container: '#D6E3EC',
        },

        // ─── Texto ─────────────────────────────────────────────
        'on-surface': '#2E2E2E',        // texto principal
        'on-surface-variant': '#5A5A5A', // texto secundario
        'on-background': '#2E2E2E',
        'on-primary': '#FFFFFF',

        // ─── Bordes ────────────────────────────────────────────
        outline: {
          DEFAULT: '#8A8A8A',
          variant: '#D6D3CE',
        },

        // ─── Estados ───────────────────────────────────────────
        error: '#B23A3A',
        'error-container': '#F5D6D6',
        'on-error': '#FFFFFF',
        'on-error-container': '#7A1F1F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '400' }],
        'display-xl-mobile': ['38px', { lineHeight: '44px', letterSpacing: '-0.015em', fontWeight: '400' }],
        'headline-lg': ['36px', { lineHeight: '44px', letterSpacing: '-0.015em', fontWeight: '400' }],
        'headline-lg-mobile': ['28px', { lineHeight: '36px', letterSpacing: '-0.01em', fontWeight: '400' }],
        'headline-md': ['26px', { lineHeight: '34px', letterSpacing: '-0.01em', fontWeight: '500' }],
        'headline-sm': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'title-editorial': ['18px', { lineHeight: '26px', letterSpacing: '0.01em', fontWeight: '400' }],
        'body-lg': ['17px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['15px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['13px', { lineHeight: '20px', fontWeight: '400' }],
        'code-inline': ['13px', { lineHeight: '18px', fontWeight: '400' }],
        'label-technical': ['11px', { lineHeight: '16px', letterSpacing: '0.08em', fontWeight: '500' }],
        'label-status': ['10px', { lineHeight: '14px', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      spacing: {
        'space-2xs': '0.25rem',
        'space-xs': '0.5rem',
        'space-sm': '0.75rem',
        'space-md': '1.25rem',
        'space-lg': '2rem',
        'space-xl': '3.5rem',
        'space-2xl': '5rem',
        'margin-mobile': '1.25rem',
        'margin': '2rem',
        'margin-desktop': '5rem',
        'gutter-sm': '1rem',
        'gutter': '1.5rem',
        'gutter-lg': '2.5rem',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
