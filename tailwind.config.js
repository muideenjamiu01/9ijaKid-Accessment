/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        xl: "2px 2px 5px rgba(0, 0, 0, 0.1)",
        xxl: "0px 4px 4px  rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
}