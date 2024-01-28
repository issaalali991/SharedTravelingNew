/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oleo: ["Oleo", "sans-serif"],
      },
      minHeight: {
        "3/4-screen": "75vh",
        136: "40rem",
      },
      transform: {
        "zoom-in": "scale(1.1)",
      },
    },
  },
  plugins: [],
};
