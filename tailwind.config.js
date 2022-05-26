module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")]
};
