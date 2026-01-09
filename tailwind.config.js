/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'blob': 'blob 7s infinite',
        'in': 'in 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in-from-left': 'slideInFromLeft 0.5s ease-out',
        'slide-in-from-right': 'slideInFromRight 0.5s ease-out',
        'slide-in-from-top': 'slideInFromTop 0.5s ease-out',
        'slide-in-from-bottom': 'slideInFromBottom 0.5s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInFromTop: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}