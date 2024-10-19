/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #54BCE7 20%, #DCE7E3 100%, #2878AE 60%)",
      },

      colors: {
        primary: "#3456DA",
        primary_10: "#eff3ff",
        primary_50: "#D6E1FD",
        primary_100: "#AEC3FB",
        primary_200: "#84A0F3",
        primary_300: "#6381E8",
        primary_400: "#3456DA",
        primary_500: "#2641BB",
        primary_600: "#1A2F9C",
        primary_700: "#10207E",
        primary_800: "#091568",
        neutral: "#999999",
        neutral_0: "#ffffff",
        neutral_100: "#F2F2F2",
        neutral_200: "#CCCCCC",
        neutral_400: "#666666",
        neutral_500: "#4D4D4D",
        error: "#CC0909",
        blackish: "#1e1e1e",
        primary_light: "#1765C9",
      },
    },
  },
  plugins: [],
};
