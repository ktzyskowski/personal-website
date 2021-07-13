module.exports = {
  purge: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'hover-hover': {'raw': '(hover: hover)'} // https://stackoverflow.com/a/60478751
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
