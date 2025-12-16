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
          50: '#f0f9fb',
          500: '#2180d3',
          600: '#1d748e',
          700: '#1a6873',
          800: '#299aa1',
        },
        secondary: {
          50: '#faf8f3',
          100: '#f5f5f5',
          200: '#eeebe6',
          300: '#a7a9a9',
          400: '#777c7c',
          600: '#5e5240',
        },
      },
    },
    animation: {
      marquee: 'marquee 22s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
  },
  plugins: [],
};
