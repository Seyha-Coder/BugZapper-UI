/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': "#3D7EDF",
        'secondary': "#EAF6FF",
        'assent': "#000080",
        'borderInput': "#3D7EDF",
        'placeholder_color': '#797474',
        'gray_slate': '#858080',
      },
      fontSize: {
        'sub_header_regular': ['24px', '20px'],
        'paragraph16_regular': ['16px','20px'],
        'paragraph14_regular': ['14px','20px'],
        'paragraph_small_regular': ['10px','20px'],
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-header': {
          fontSize: '32px',
          lineHeight: '20px',
          fontWeight: '600', // semi-bold
        },
        '.text-sub_header_medium': {
          fontSize: '24px',
          lineHeight: '20px',
          fontWeight: '600', 
        },
        '.text-paragraph16_medium':{
          fontSize: '16px',
          lineHeight: '20px',
          fontWeight: '600', 
        },
        '.text-paragraph14_medium':{
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: '600', 
        },
        '.text-paragraph_small_medium':{
          fontSize: '10px',
          lineHeight: '20px',
          fontWeight: '600', 
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('daisyui'),
  ],
};
