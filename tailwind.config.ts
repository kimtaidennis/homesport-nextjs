import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports =  {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#eeff26',
        "dark-bg": 'rgb(17, 25, 35)',
        "dark-op": '#192635',
        "dark-border": '#345170',
        "light-blue": '#AAB7CC'
      },
      fontFamily: {
        sans:['Roboto Condensed',...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
};

