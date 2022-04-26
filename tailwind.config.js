module.exports = {
  content: ['./views/**/*.ejs', './public/**/*.js'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'nblack': {
            700: '#371e06',
            800: '#251605',
            900: '#120a02',
        },
        'ndarkorange': '#c57b57',
        'norange': '#f1ab86',
        'nyellow': {
            200: '#f7dba7',
            500: '#cd8c13',
        },
        'ndarkgray': '#9cafb7',
        'ngray': '#a5b6be',
        'nblue': '#44b8e9',
      },  
    },
  },
  plugins: [],
}
