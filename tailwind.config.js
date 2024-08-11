/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./index.html"],
  theme: {
    extend: {},
    fontSize: {
      'sm': '0.7rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens: {
      'sm' : {'max' : "640px"},
      'md': {'min':'640px' , 'max':'768px'},
      'lg': {'min':'768px' , 'max':'1024px'},
      'xl': {'min':'1024px' , 'max':'1280px'},
      'xxl': {'min': '1280px'}
    },
  },
  plugins: [],
};
