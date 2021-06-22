module.exports = {
  purge: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        noto: [
          "'Noto Sans JP'",
          "'Helvetica Neue'",
          "Helvetica",
          "'Hiragino Sans'",
          "'Hiragino Kaku Gothic ProN'",
          "Arial",
          "'Yu Gothic'",
          "Meiryo",
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
