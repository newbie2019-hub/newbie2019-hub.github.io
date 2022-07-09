module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'swing': 'swing 7s cubic-bezier(0.68, -0.6, 0.32, 1.6) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        swing: {
          '0%, 20%': { transform: 'rotate(0deg)' },
          '30%, 42%': { transform: 'rotate(-160deg)' },
          '52%, 65%': { transform: 'rotate(-130deg)' },
          '72%, 80%': { transform: 'rotate(-255deg)' },
          '85%, 90%': { transform: 'rotate(-220deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        },
        float: {
          '0%': {
            transform: 'translatey(0px)'
          },
          '50%': {
            transform: 'translatey(-4px)'
          },
          '100%': {
            transform: 'translatey(0px)'
          }
        }
      }
    },
  },
  plugins: [],
} 