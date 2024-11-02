/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#9a6dcc',
        'darkBgColor': '#242424',
        'lightBgColor': '#cccccc'
      }
      
    },
  },
  plugins: [],
}
