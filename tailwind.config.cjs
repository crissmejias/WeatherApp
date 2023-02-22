/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/background.jpg')",
        'dark-hero': "url('/night-background.jpg')"
      }
    },
  },
  plugins: [],
}