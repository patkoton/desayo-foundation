/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'newsImg': "url('/src/assets/images/Newsletter_img.png')",
      },
    },
    colors: {
      transparent: 'transparent',
      'white': '#FFF',
      'black': '#000',
      'grey': '#D9D9D9',
      'grad1': 'rgba(30, 30, 30, 0.39)',
      'grad2': 'rgba(30, 30, 30, 0.39)',
      'purple': '#810281',
      'yellow': '#FFD657',
      'lemon': '#8DC313',
      'overlay': '#1E1E1E63'
    }
  },
  plugins: [],
}