/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#F4D03F',
          400: '#C9A84C',
          500: '#B8962E',
          600: '#9A7D1A',
        },
        samarkand: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          800: '#166534',
          900: '#1B4332',
          950: '#0F2419',
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'counter': 'counter 2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #F4D03F 50%, #C9A84C 100%)',
        'hero-gradient': 'linear-gradient(to top, rgba(15, 36, 25, 0.95) 0%, rgba(15, 36, 25, 0.4) 60%, transparent 100%)',
      }
    },
  },
  plugins: [],
}
