/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#6366F1',
        secondary: '#0F172A',
        accent: '#22D3EE',
        dark: {
          100: '#1E293B',
          200: '#0F172A',
          300: '#020617'
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      }
    },
  },
  plugins: [],
};