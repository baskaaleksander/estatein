/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {},
    screens: {},
    colors: {
      'purple-60': '#703BF7',
      'purple-65': '#1A64FF',
      'purple-70': '#FF9533',
      'purple-75': '#FFCA99',
      'purple-90': '#FFE4CC',
      'purple-95': '#FFF1E5',
      'purple-97': '#FFF7F0',
      'purple-99': '#FFFCFA',
      'white-0': "#ffffff",
      'white-90': '#E4E4E7',
      'white-95': '#F1F1F3',
      'white-97': '#F7F7F8',
      'white-99': '#FCFCFD',
      'grey-08': '#141414',
      'grey-10': '#1A1A1A',
      'grey-15': '#262626',
      'grey-20': '#333333',
      'grey-30': '#4D4D4D',
      'grey-40': '#666666',
      'grey-50': '#808080',
      'grey-60': '#999999',
    },
    fontFamily: {
      'main': ['Urbanist', 'sans-serif'],
    },
    boxShadow: {
      'card': '0px 0px 0px 10px #191919',
    },

    
  },
  plugins: [],
}

