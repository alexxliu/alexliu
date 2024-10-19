/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'Helvetica', 'Arial', 'sans-serif'],
      },
      minWidth: {
        'global': '520px',
      },
    },
  },
  plugins: [],
}

