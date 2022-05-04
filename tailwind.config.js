module.exports = {
  content: ['./views/**/*.ejs', './public/**/*.js'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'nblack': '#2A1613',
        'ndarkorange': {
            700: '#A44A3F',

        },

        'norange': {
          400: '#F19C79',
          700: '#B94513',
          900: '#6E2A0C'
        },

        'nred': {
          600: '#703B33',
        },

        'nlightgreen': {
          200:'#FCFBEE',
          300:'#F6F4D2'
        },
        'ngreen': '#D4E09B',
        'nmint': '#CBDFBD'

      },  
    },
  },
  plugins: [],
}
