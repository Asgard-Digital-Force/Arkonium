/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'ark-bg': '#0E1A24',
        'ark-accent': '#C5A880',
        'ark-text': '#F5F3EE',
        'ark-text-secondary': '#B0B8C1',
        'ark-green': '#2E4A2B',
      },
      borderRadius: {
        'ark': '10px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
