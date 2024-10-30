/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a192f', // dark background
        'secondary': '#64ffda', // accent color
        'accent': '#e6f1ff', // light accent
        'muted': '#8892b0', // muted text color
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'pulse': 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
}
