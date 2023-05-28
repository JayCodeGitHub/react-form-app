/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '15px'],
      sm: ['14px', '17px'],
      base: ['16px', '19px'],
      lg: ['18px', '22px'],
      '4xl': ['36px', '44px'],
      '5xl': ['48px', '58px']
    },
    extend: {
      backgroundImage: {
        'background-gradient':  "linear-gradient(168.13deg, #F8D696 4.91%, #EA8AF2 43.43%, #A972EE 98.14%)",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'form-background': 'rgba(255, 255, 255, 0.15)',
        'dark-blue': '#000853',
        'white': '#FAF9FA',
        'hover-white': '#EEDFFF',
        'purple': '#761BE4',
        'purple-hover': '#6A19CD',
        'grey': '#898DA9',
        'red': '#ED4545',
        'light-red': '#F8D3D3'
      },
      boxShadow: {
        'form-shadow': ' 4px 4px 8px rgba(0, 0, 0, 0.05), inset 2px 2px 8px rgba(255, 255, 255, 0.25)',
      }
    },
  },
  plugins: [],
}

