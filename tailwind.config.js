export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#34df5d',
        secondary: '#083e6d',
        black: '#0a0a0a',
        mattBlack: '#171717',
        white: '#fff',
        grey: '#191919',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      borderRadius: {
        main: '1rem',
      },
      boxShadow: {
        main: '2px 5px 8px rgba(0,0,0,0.5)',
        text: '2px 2px 2px rgba(0,0,0,0.5)',
      },
      fontSize: {
        heading: '2.5rem',
        text: '2rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};