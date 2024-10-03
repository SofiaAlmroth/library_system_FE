/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fc00b0", // Change primary to the pink color
          secondary: "#fc6805", // Change secondary to the orange color
          accent: "#1d4ed8",
          neutral: "#d6d3d1",
          "base-100": "#f5f5f4",
          info: "#3730a3",
          success: "#115e59",
          warning: "#eab308",
          error: "#be123c",
        },
      },
    ],
  },
};
