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
          primary: "#34d399",
          secondary: "#c4b5fd",
          accent: "#7e22ce",
          neutral: "#292524",
          "base-100": "#f5f5f4",
          info: "#0079c8",
          success: "#00ff73",
          warning: "#ffa300",
          error: "#e11d48",
        },
      },
    ],
  },
};
