/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        gray: {
          lightest: "#FAFAFE",
          lighter: "#EBEBF5",
          light: "#A395AE",
          DEFAULT: "#191919",
        },
        purple: {
          lighter: "#E8EBFD",
          light: "#919AFF",
          DEFAULT: "#9A1EFC",
        },
        pink: {
          light: "#F9D8E5",
          DEFAULT: "#F466AC",
        },
        blue: {
          light: "#54C6FF",
          DEFAULT: "#2A75FE",
        },
        cherry: {
          light: "#C76FAB",
          DEFAULT: "#F03F6B",
        },
        cyan: {
          light: "#EAF3FE",
          DEFAULT: "#C8E3FE",
        },
      },
      fontFamily: {
        acumin: "Acumin Pro",
      },
    },
  },
  plugins: [],
};
