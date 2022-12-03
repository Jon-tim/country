/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      colors: {
        //(Dark Mode Elements)
        DarkBlue: "hsl(var(--DarkBlue))",
        //(Dark Mode Background)
        VeryDarkBlue: "hsl(var(--VeryDarkBlue))",
        // (Light Mode Text)
        StillDarkBlue: "hsl(var(--StillDarkBlue))",
        //(Light Mode Input)
        DarkGray: "hsl(var(--DarkGray)",
        //(Light Mode Background)
        VeryLightGray: "hsl(var(--VeryLightGray))",
        // (Dark Mode Text & Light Mode Elements)
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
