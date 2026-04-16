/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        'cream-warm': '#F5F0E8',
        'cream-deep': '#EDE7DB',
        ink: '#1A1A1A',
        'ink-light': '#3D3D3D',
        'ink-muted': '#7A7A72',
        forest: '#2D5A3D',
        'forest-light': '#3A7A52',
        'forest-deep': '#1E3D2A',
        'forest-muted': '#D4E4D9',
        border: '#E0DAD0',
        'border-hover': '#C9C2B5',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
