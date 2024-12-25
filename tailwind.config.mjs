/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B3A67',
        secondary: '#496A81',
        accent: '#66999B',
        light: '#B4C5E4',
        dark: '#1B2541'
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}