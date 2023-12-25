/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Abril Fatface', 'sans-serif'],
        rbt: ['Tenor Sans','sans-serif'],
      },
      screens: {
        'custom-sm': '500px',
        'custom-sm2': '350px',
        'custom-sm3': '900px',
      },
      
    },
  },
}
