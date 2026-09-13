/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF7F1',
          50: '#FFFEFC',
          100: '#FAF7F1',
          200: '#F4EEE3',
        },
        stone: {
          100: '#F4EEE3',
          200: '#E9E0D0',
          300: '#D9CCB4',
          400: '#BFAD8C',
          500: '#9C8A68',
        },
        charcoal: {
          DEFAULT: '#1B1A18',
          soft: '#332F2A',
          muted: '#5C564C',
        },
        clay: {
          DEFAULT: '#A6552F',
          light: '#C17849',
          dark: '#7E3F22',
          50: '#FBF1EA',
        },
        forest: {
          DEFAULT: '#3A4436',
        },
      },
      fontFamily: {
        sans: ['Heebo', 'Assistant', 'system-ui', 'sans-serif'],
        serif: ['"Frank Ruhl Libre"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 5vw + 1rem, 5.5rem)', { lineHeight: '1.04', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(2.25rem, 3.5vw + 1rem, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.75rem, 2vw + 1rem, 2.5rem)', { lineHeight: '1.15' }],
        'display-sm': ['clamp(1.375rem, 1.2vw + 1rem, 1.75rem)', { lineHeight: '1.2' }],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      maxWidth: {
        container: '1360px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(27,26,24,0.04), 0 8px 24px -12px rgba(27,26,24,0.12)',
        'card-hover': '0 4px 8px rgba(27,26,24,0.06), 0 20px 40px -16px rgba(27,26,24,0.18)',
        lift: '0 24px 48px -20px rgba(27,26,24,0.28)',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both',
        fadeIn: 'fadeIn 0.5s ease both',
      },
    },
  },
  plugins: [],
};
