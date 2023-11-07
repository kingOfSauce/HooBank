/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins'],
      },
      fontSize: {
        '7xl': [
          '4.5rem',
          {
            lineHeight: '140%',
            fontWeight: '600',
            letterSpacing: '0.72px',
          },
        ],
        '6xl': [
          '3rem',
          {
            lineHeight: '160%',
            fontWeight: '600',
            letterSpacing: '0.48px',
          },
        ],
        base: [
          '1.25rem',
          {
            lineHeight: '170%',
            fontWeight: '400',
          },
        ],
        sm: [
          '1rem',
          {
            lineHeight: 'normal',
            fontWeight: '400',
          },
        ],
      },
      container: {
        center: true,
      },
      colors: {
        gray: {
          400: '#b7b8bc',
          950: '#010510',
        },
      },
      spacing: {
        4: '18px',
      },
      borderRadius: {
        DEFAULT: '10px',
        xl: '20px',
      },
    },
  },
  plugins: [],
};
