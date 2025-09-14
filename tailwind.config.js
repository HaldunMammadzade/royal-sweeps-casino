/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Casino themed colors
        gold: {
          50: '#fffef7',
          100: '#fffce8',
          200: '#fff9c2',
          300: '#fff388',
          400: '#ffe74c',
          500: '#ffd700', // Primary gold
          600: '#e6c200',
          700: '#cc9900',
          800: '#b8860b',
          900: '#996f00',
        },
        royal: {
          50: '#f8f7ff',
          100: '#f1efff',
          200: '#e4e0ff',
          300: '#cfc8ff',
          400: '#b19fff',
          500: '#8b5cf6', // Primary purple
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        casino: {
          dark: '#0a0a0a',
          secondary: '#1a1a1a',
          card: '#2a2a2a',
          border: '#3a3a3a',
        },
        success: '#00ff88',
        danger: '#ff4444',
        warning: '#ffaa00',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'bounce-in': 'bounce-in 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.8)' 
          },
        },
        'slide-up': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'slide-down': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(-20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce-in': {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.3)' 
          },
          '50%': { 
            opacity: '1', 
            transform: 'scale(1.05)' 
          },
          '70%': { 
            transform: 'scale(0.9)' 
          },
          '100%': { 
            transform: 'scale(1)' 
          },
        },
        'glow': {
          '0%': { 
            boxShadow: '0 0 5px rgba(255, 215, 0, 0.5)' 
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.6)' 
          },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #ffd700 0%, #ffaa00 100%)',
        'gradient-royal': 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        'casino-pattern': "url('/src/assets/images/casino-pattern.svg')",
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}