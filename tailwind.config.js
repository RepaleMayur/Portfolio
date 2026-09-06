/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
      colors: {
        darkBg: '#0C0C0C',
        textLight: '#D7E2EA',
        obsidian: {
          50: '#f6f6f7',
          100: '#e3e3e8',
          800: '#16171d',
          900: '#101116',
          950: '#08080c',
        }
      }
    },
  },
  plugins: [],
}
