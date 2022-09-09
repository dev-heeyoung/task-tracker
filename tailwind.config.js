/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js", 
    "./src/components/AddTask.js", 
    "./src/components/Button.js",
    "./src/components/Footer.js",
    "./src/components/Header.js",
    "./src/components/Task.js",
    "./src/components/Tasks.js",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
