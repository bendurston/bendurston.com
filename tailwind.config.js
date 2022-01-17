module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",    
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {        
        'flippyDo': 'flippyDo 250ms linear',
        'flippyUndo': 'flippyUndo 250ms linear',      
      },
      keyframes: {
        flippyDo : {
          '0%': { transform: 'rotate(0deg) scale(1)' },  
          '50%': { transform: 'rotate(90deg) scale(0.5)' },      
          '100%': { transform: 'rotate(180deg) scale(1)' }
        },
        flippyUndo : {
          '0%': { transform: 'rotate(180deg) scale(1)' },
          '50%': { transform: 'rotate(90deg) scale(0.5)' },         
          '100%': { transform: 'rotate(0deg) scale(1)' }
        }
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
