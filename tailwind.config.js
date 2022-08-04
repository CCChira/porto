/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FE9810',
        'primary-light': '#FFAD41',
        'secondary': '#65C27D',
        'secondary-2': '#91DC5A',
        'white': '#FFF7ED',
      },
      backgroundImage: {
        'div-separator': 'url("../assets/layered-waves-haikei-2.svg")',
      },
      keyframes: {
        'slide': {
          '0%': {
            transform: 'translateX(-400px)',
          },
          '100%': {
            transform: 'translateX(0)',
          }
        },
        'fade': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        }
      },
      animation: {
        'slide-in': 'slide 1s ease-in-out',
        'fade-in': 'fade 1s ease-in-out',
      }
    },
  },
  plugins: [],
}