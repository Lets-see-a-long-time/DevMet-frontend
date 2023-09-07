/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor: {
        borderbox: "1px",
      },
      borderWidth: {
        borderbox: "black",
      },
      borderRadius: {
        login: "30px",
      },
      width: {
        login: "328px",
        loginForm: "428px",
      },
      height: {
        login: "50px",
        loginForm: "546px",
      },
      backgroundColor: {
        kakao: "#FEE500",
        naver: "#2DB400",
        google: "white",
      },
    },
  },
  plugins: [],
});
