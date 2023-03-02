/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
      },
      boxShadow: {
        "2xl-all": "0px 8px 25px 0px rgb(0 0 0 / 0.25)",
      },
    },
  },
  plugins: [],
};
