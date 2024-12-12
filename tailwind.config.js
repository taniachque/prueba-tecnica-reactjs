/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        custom: {
          blue: '#1877F2',
          lightBlue: '#E7F3FF',
          white: '#FFFFFF',
          lightGray: '#F0F2F5',
          darkGray: '#606770',
          black: '#000000',
        },
      },
    },
  },
  plugins: [],
}

