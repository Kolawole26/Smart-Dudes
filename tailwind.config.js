module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'B-purple': '#845EC2',
        'pink': '#D65DB1',
        'Ash': '#00000053',
        'Ash-2': '#707070',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      margin: {
        13: '52px',
        
      },
    },
  },
  plugins: [],
}
