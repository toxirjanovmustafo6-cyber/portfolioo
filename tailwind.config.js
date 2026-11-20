/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#09090B',
          50: '#18181B',
          100: '#141416',
          900: '#09090B',
          950: '#050507',
        },
        charcoal: {
          DEFAULT: '#121215',
          light: '#18181D',
          hover: '#1F1F26',
          border: '#27272A',
        },
        gold: {
          light: '#FEF08A',
          DEFAULT: '#EAB308',
          hover: '#CA8A04',
          bright: '#FACC15',
          subtle: 'rgba(234, 179, 8, 0.12)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(234, 179, 8, 0.25)',
        'gold-glow-lg': '0 0 40px -10px rgba(234, 179, 8, 0.35)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
