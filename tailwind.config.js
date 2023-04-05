/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#2F292C",
        "background-secondary": "#3c3438",
        secondary: "#E2DFE1",
        "red-primary": "#E97575",
        "blue-primary": "#82BCBF",
        "green-primary": "#A6B37F",
        "white-primary": "#ffffff",
      },
    },

    plugins: [],
  },
};
