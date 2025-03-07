/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bodyColor: '#EAE1D1',
        'text-color': '#FFFFFF',
        'btn-yellow': '#E1FF00',
        'content-bg': '#6899E1',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        judson: ['Judson', 'serif'],
      },
    },
  },
  plugins: [],
};
