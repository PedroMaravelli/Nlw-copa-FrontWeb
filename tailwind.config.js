/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily:{
        sans:'Roboto, sans-serif'
      },
      backgroundImage:{
        app:'url(/app-bg.png)',
      },
      colors:{
        ignite:{
          500: '#129E57'
        },
       
        black:{
          500: '#000'
        },
        gray:{
          100:'#E1E1E6',
          300:'#8D8D99',
          500:'#121214',
          600:'#323238',
          800:'#202024',
          
        }
      }
    
    },
  },
  plugins: [],
}
