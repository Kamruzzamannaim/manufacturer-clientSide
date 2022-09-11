/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
         
          // "primary-focus": "mediumblue",
          primary: "#3b7aa0",
          secondary: "#f45933",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
