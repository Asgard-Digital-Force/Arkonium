/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './content/**/*.md',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        'ark-bg': '#0E1A24',
        'ark-accent': '#C5A880',
        'ark-text': '#F5F3EE',
        'ark-text-secondary': '#B0B8C1',
        'ark-green': '#2E4A2B',
        'ark-card': '#13212E',
        'ark-card-hover': '#1A2F3B'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
      borderRadius: {
        ark: '10px'
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#F5F3EE',
            a: {
              color: '#C5A880',
              '&:hover': {
                color: '#d4bc9a'
              }
            },
            h1: { color: '#C5A880' },
            h2: { color: '#C5A880' },
            h3: { color: '#C5A880' },
            h4: { color: '#C5A880' },
            strong: { color: '#F5F3EE' },
            code: { color: '#C5A880' },
            blockquote: {
              color: '#B0B8C1',
              borderLeftColor: '#C5A880'
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
