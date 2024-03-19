/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      width:{
        '10/1': '30%'
      },
      boxShadow:{
        '3xl': '0 4px 8px 5px rgba(0, 0, 0, 09)',
      }
    },
  },
  plugins: [],
}

