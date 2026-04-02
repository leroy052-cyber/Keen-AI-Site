/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#fafafa',
        accent: '#BFFF00',
        'accent-dim': '#8fbf00',
        muted: '#666666',
        'muted-light': '#999999',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        display: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
