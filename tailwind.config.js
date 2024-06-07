/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBorder: '#023E8A',
        customBackground: '#222831',
        customCard: '#0077B6',
      }
    },
  },
  plugins: [],
}