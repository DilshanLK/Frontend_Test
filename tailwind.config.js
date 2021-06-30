module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '5rem',
    },
    extend: {
      colors: {
        orange: {
          200: '#f59019',
        },
        blue: {
          200: '#2759ab',
        },
        brown: {
          200: '#242329',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
