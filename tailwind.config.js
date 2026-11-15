/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          amber: '#F59E0B',
          'amber-hover': '#D97706',
          dark: '#111114',
          surface: '#18181B',
          card: '#1F1F24',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        logo: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
