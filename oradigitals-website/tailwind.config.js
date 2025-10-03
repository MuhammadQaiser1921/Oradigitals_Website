/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e6f0',
          200: '#b3cde3',
          300: '#8db4d6',
          400: '#679bc9',
          500: '#4a7fb8',
          600: '#3d6b9e',
          700: '#355882',
          800: '#2d4566',
          900: '#233b56',
          950: '#1a2d42',
        },
        accent: {
          50: '#fff7f0',
          100: '#ffedd5',
          200: '#ffd8a8',
          300: '#ffbc70',
          400: '#ff9938',
          500: '#ff7828',
          600: '#ff6500',
          700: '#e05500',
          800: '#c04a00',
          900: '#a13f00',
          950: '#853500',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Roboto', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}