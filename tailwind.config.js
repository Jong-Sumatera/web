/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B4670',
        primaryMedium: '#E2EEFF',
        primaryLight: '#F1F5FA',
        secondary: '#202020'
      },
      width: {
        '1023': '1023px'
      },
      margin: {
        auto: 'auto'
      },
      fontFamily: {
        primary: ['Montserrat'],
        title: ['Abhaya Libre ExtraBold']
      }
    },
  },
  plugins: [],
}