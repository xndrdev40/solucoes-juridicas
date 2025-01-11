/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-partner.jpg')",
        
      },

      colors:{
        'bg-site': '#440c12',
        'cor-fonte': '#F7D774',
      },

      fontFamily:{
        'site': ['Trykker', 'serif'],
      },
    },
  },
  plugins: [],
}

