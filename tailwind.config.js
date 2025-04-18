/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hot-pink': 'rgb(255, 105, 180)',
        'heat-pink': 'rgb(223, 148, 205)',
      },
      fontFamily: {
        'cosmic': ['Cosmic Octo', 'system-ui', 'sans-serif'],
        'Audiowide': ['Audiowide', 'sans-serif']
      },
    },
  },
  plugins: [],
};