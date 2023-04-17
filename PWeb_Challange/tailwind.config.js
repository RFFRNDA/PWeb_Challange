/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}'],
  theme: {
    extend: {
      colors :{
        biru : "#19202a",
        hitam : "#141519"
      }
    },
    
  },
  plugins: [],
  purge: ['./public/*.html', './public/*.js'],
}

