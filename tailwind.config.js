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
          primary: "#10b981",
          secondary: "#a78bfa",
          accent: "#1d4ed8",
          neutral: "#d6d3d1",
          "base-100": "#f5f5f4",
          info: "#3730a3",
          success: "#115e59",
          warning: "#eab308",
          error: "#f43f5e",
        },
      },
    ],
  },
};
