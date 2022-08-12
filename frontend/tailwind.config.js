const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ...colors, 'bright-turquoise': '#00E7F0', 'vivid-cerulean': '#009AF3' }
    }
  },
  plugins: []
}
