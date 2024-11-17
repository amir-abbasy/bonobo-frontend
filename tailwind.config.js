/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3AB0FF',
          background: '#edeef3',
          dark: '#005BB5',
          primary: '#4579ff',
          primaryDark: '#1B4CA1',
          primaryLight: '#D3E1F3',
          secondary: '#F69F1C',
        },
        success: '#4CAF50',
        warning: '#FFC107',
        danger: '#F44336',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('drawer-group-hover', '.drawer-group:hover &');
      addVariant('icon-group-hover', '.icon-group:hover &');
      
    },
  ],
}

