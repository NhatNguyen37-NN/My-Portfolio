import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        night: '#07111f',
        surface: '#0d172a',
        soft: '#15223b',
        glow: '#62d0ff',
        satin: '#e4edf8'
      },
      boxShadow: {
        luxe: '0 28px 70px rgba(4, 14, 33, 0.28)',
        glow: '0 18px 50px rgba(98, 208, 255, 0.12)'
      },
      backgroundImage: {
        radialGlow:
          'radial-gradient(circle at top left, rgba(98, 208, 255, 0.16), transparent 26%), radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.08), transparent 25%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    }
  },
  plugins: []
};

export default config;
