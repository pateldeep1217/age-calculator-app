/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',   
      'lg': '1440px',  
    },
    extend: {
      letterSpacing:{
        widest: '.25rem',
      },
      fontSize: {
        '32px': '32px',
      },
      fontFamily: {
        poppins: ['Poppins'],
      }, 
 
      colors:{
        primary:{
          purple:'hsl(259, 100%, 65%)',
          'light-red': 'hsl(0, 100%, 67%)'
        },
        neutral:{
          white: 'hsl(0, 0%, 100%)',
          'off-white': 'hsl(0, 0%, 94%)',
          'light-grey': 'hsl(0, 0%, 86%)',
          'smokey-grey': 'hsl(0, 1%, 44%)',
          'off-black': 'hsl(0, 0%, 8%)',
        }
      }
    },
  },
  plugins: [],
}