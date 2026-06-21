/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: '#0A0A0F',
        'ink-2': '#13131A',
        'ink-3': '#1C1C26',
        cream: '#F0EDE8',
        'cream-2': '#D4CFC9',
        amber: '#E8A020',
        'amber-light': '#F5C05A',
        muted: '#6B7280',
        dim: '#374151',
        border: '#252530',
      },
    },
  },
  plugins: [],
}
