/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter']
      },
      boxShadow:{
        '3xl':"1rem 2rem 3.5rem rgba(143, 174, 207, 0.25)",
    }
    },
  },
  plugins: [],
}

