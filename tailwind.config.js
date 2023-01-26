/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
            './*.html',
            './pages/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair':['Playfair Display', 'serif'],
        'Roboto':['Roboto', 'sans-serif'],
        'Satisfy':['Satisfy', 'cursive'],
        'Ubuntu-C':['Ubuntu Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
