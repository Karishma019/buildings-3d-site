/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C3265",
        blackish: "#1e1e1e",
        primary_light: "#1765C9",
      },
    },
  },
  plugins: [],
};
