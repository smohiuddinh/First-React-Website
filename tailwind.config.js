module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customColor: '#08111F',
        aboutColor : '#08111F',
        contactColor : '#F9F3F5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}