import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

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
        "sage": "#6F8F72",   /* Green */
        "onyx": "#0F0F0F",   /* Deep Black */
        "orange": "#F2A65A", /* Accent */
        "platinum": "#E5E5E5",
        
        // Semantic mapping
        "primary": "#4E9F3D", 
        "primary-dark": "#3c7e2f",
        
        // Backgrounds
        "background-light": "#E8E2D8", // Cream
        "background-dark": "#0F0F0F",  // Onyx
        
        // Cards
        "card-light": "#6F8F72",       // Sage Green
        "card-dark": "#1e2b1c",        // Dark Green/Black mix
        
        // Text
        "text-main-light": "#0F0F0F",  // Onyx
        "text-main-dark": "#FFFFFF",
        "text-muted-light": "#4a4a4a", // Darker grey for visibility
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