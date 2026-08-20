/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#0E1626',
        'deep-slate': '#182338',
        'signature-gold': '#BB9457',
        'muted-gold': '#D3AD70',
        'warm-grey': '#8B8F98',
        'off-white': '#F8F7F4',
        'pure-white': '#FFFFFF',
      },
      fontFamily: {
        serif: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
