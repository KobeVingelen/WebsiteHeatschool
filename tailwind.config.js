/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hot-pink': 'rgb(255, 105, 180)',
      },
      fontFamily: {
        'cosmic': ['Cosmic Octo', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};