/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'bermuda': '#78dcca',
      'china-ivory': '#FFF6D3',
      'white':'#FFFFFF',
      'white-smoke':'#F6F6F6',
      'black':'#000000',
      'blue-light':'8D99AE',
      'text-black':'#2B2D42',
      'bright-gray':'#EFEFEF',
      'gray-98':'#FAFAFA',
      'gray-900': '#111827',
      'gray-400': '#9CA3AF',
      'bask': '#FE06BA',
      'inactive':'#A3ABB7',
      'yellow': '#FFFF00',
      'green':'#03aa92',
      'light-green':'#03D4B6',
      'light-blue': '#2194FF',
      'purple':'#635AD0',
      'light-red':'#fd6100',
      'light-purple':'#353190'
    },
    fontSize: {
      small:'6px',
      xs:'12px',
      sm:'14px',
      md:'16px',
      xl:'20px',
      xll:'24px'
    },
    extend: {},
  },
  plugins: [],
}