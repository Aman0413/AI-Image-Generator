/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fafafc",
        secondary: "#ffffff",
        "primary-blue": "#0268cc",
        "secondary-blue": "#55a7ff",
        "text-primary": "#808080",
        "text-secondary": "#848484",
      },
    },
  },
  plugins: [],
};
