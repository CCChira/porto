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
        'div-separator': "url('../assets/wave5.svg')",
      },
      keyframes: {
        'slide': {
          '0%': {
            'transform': 'translateX(-800px)',
          },
          '100%': {
            'transform': 'translateX(0)',
          }
        },
        'fade': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },
        'fade-half': {
          '100%': {
            opacity: '0.5',
          },
        },
        'bouncer': {
          '0%': {
            'transform': 'translateY(-7%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '100%': {
            'transform': 'translateY(-7%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            'transform': 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          }
        }
        
      },
      animation: {
        'slide-in': 'slide 1s ease-in-out',
        'fade-in': 'fade 1s ease-in',
        'fade-in-out-half': 'fade-half 1s ease-in-out',
        'bouncer-infinite': 'bouncer 1s infinite'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}