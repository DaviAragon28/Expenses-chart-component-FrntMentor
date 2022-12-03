/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8e9dd',
        softRed: '#ec775f',
        cyan: '#76b5bc',
        darkBrown: '#382314',
        mediumBrown: '#93867b',
        veryPaleOrange: '#fffaf5'
      },
      fontFamily: {
        'sans': ['DM Sans', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
