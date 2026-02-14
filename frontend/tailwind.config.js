/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#4E9F3D", 
        "primary-dark": "#3c7e2f",
        "background-light": "#f6f8f6",
        "background-dark": "#191A19",
        "card-dark": "#1E5128", 
        "card-darker": "#1e2b1c",
        "accent-light": "#D8E9A8",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #4E9F3D10 1px, transparent 1px), linear-gradient(to bottom, #4E9F3D10 1px, transparent 1px)",
      },
      animation: {
        'text-reveal': 'reveal 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'line-grow': 'growLine 1.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        reveal: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        growLine: {
          '0%': { height: '0%' },
          '100%': { height: '100%' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px #4E9F3D', borderColor: '#4E9F3D' },
          '50%': { boxShadow: '0 0 20px #4E9F3D', borderColor: '#D8E9A8' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}