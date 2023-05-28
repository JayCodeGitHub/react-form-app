/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      '4xl': ['36px', '44px'],
    },
    extend: {
      backgroundImage: {
        'background-gradient':  "linear-gradient(168.13deg, #F8D696 4.91%, #EA8AF2 43.43%, #A972EE 98.14%)",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

