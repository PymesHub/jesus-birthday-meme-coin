/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#388E3C',
        secondaryColor: '#F0D5A3',
      },
    },
  },
  plugins: [],
}

