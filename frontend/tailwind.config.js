/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cream": "#E8E2D8",
        "sage": "#6F8F72",
        "onyx": "#0F0F0F",
        "orange": "#F2A65A",
        "platinum": "#E5E5E5",
        
        "primary": "#4E9F3D", 
        "primary-dark": "#3c7e2f",
        
        "background-light": "#E8E2D8",
        "background-dark": "#0F0F0F",
        
        "card-light": "#6F8F72",
        "card-dark": "#1e2b1c",
        
        "text-main-light": "#0F0F0F",
        "text-main-dark": "#FFFFFF",
        "text-muted-light": "#4a4a4a",
        "text-muted-dark": "#9ca3af",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #4E9F3D10 1px, transparent 1px), linear-gradient(to bottom, #4E9F3D10 1px, transparent 1px)",
      },
      animation: {
        'text-reveal': 'reveal 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse': 'spin 15s linear infinite reverse',
      },
      keyframes: {
        reveal: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}