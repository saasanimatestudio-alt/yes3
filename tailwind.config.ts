import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#0a0a0a',
          2: '#0f0f0f',
          3: '#141414',
          4: '#1a1a1a',
        },
        fg: {
          DEFAULT: '#ffffff',
          dim: '#a8a8a8',
          muted: '#6a6a6a',
        },
        accent: {
          DEFAULT: '#b8ff3e',
          2: '#a3e635',
          soft: 'rgba(184, 255, 62, 0.08)',
          glow: 'rgba(184, 255, 62, 0.25)',
        },
        border: 'rgba(255, 255, 255, 0.08)',
        'border-strong': 'rgba(255, 255, 255, 0.14)',
      },
      animation: {
        'pulse-dot': 'pulse 2s infinite',
        'logo-scroll': 'logoScroll 30s linear infinite',
        'slide-testimonials': 'slideTestimonials 60s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fadeIn 0.5s ease',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.3)' },
        },
        logoScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        slideTestimonials: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
