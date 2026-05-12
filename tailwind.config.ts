import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#07111f',
        surface: '#0d172a',
        soft: '#15223b',
        glow: '#62d0ff',
        satin: '#e4edf8'
      },
      boxShadow: {
        luxe: '0 28px 70px rgba(4, 14, 33, 0.28)',
        glow: '0 18px 50px rgba(98, 208, 255, 0.15)'
      },
      backgroundImage: {
        radialGlow:
          'radial-gradient(circle at top left, rgba(98, 208, 255, 0.16), transparent 26%), radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.08), transparent 25%)'
      }
    }
  },
  plugins: []
};

export default config;
