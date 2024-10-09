/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'Helvetica', 'Arial', 'sans-serif'], // Define Quicksand as your primary font
      },
      transitionDelay: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
}

