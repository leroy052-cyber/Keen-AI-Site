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
        'bg-elevated': '#111111',
        'bg-card': '#161616',
        'bg-warm': '#0d0f08',
        surface: '#fafafa',
        'surface-dim': '#e0e0e0',
        accent: '#BFFF00',
        'accent-dim': '#8fbf00',
        'accent-deep': '#4a6600',
        'accent-glow': '#d4ff4d',
        'accent-muted': '#2a3a00',
        mint: '#00FFB2',
        'mint-dim': '#00cc8e',
        emerald: '#10B981',
        'emerald-dark': '#064E3B',
        lime: '#84CC16',
        muted: '#666666',
        'muted-light': '#999999',
        'muted-warm': '#8a8a7a',
        'border-subtle': '#1a1a1a',
        'border-accent': '#2a3a00',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"TASA Orbiter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
