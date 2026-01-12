/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#38BDF8',
        secondary: '#818CF8',
        accent: '#F472B6',
        'bg-color': '#0B1120',
        'card-bg': '#1E293B',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["dark"],
  },
}