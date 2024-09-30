/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fa8d01",
        blackish: "#1e1e1e",
        primary_light: "#fff6eb",
      },
    },
  },
  plugins: [],
};
