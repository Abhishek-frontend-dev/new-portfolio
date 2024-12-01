// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0.8 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'slide-in': 'slideIn 1s ease-out',
        'fade-in': 'fadeIn 1s ease-in',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode with a class
};