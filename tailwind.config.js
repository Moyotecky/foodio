module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_7f: "#ffffff7f", A700: "#ffffff" },
        bluegray: {
          50: "#f1f1f1",
          100: "#ddd4d4",
          101: "#d1cccc",
          "600_33": "#57667533",
          "100_6c": "#d0ccc76c",
          "100_63": "#d0ccc763",
        },
        red: {
          100: "#fcd8d8",
          400: "#f54748",
          500: "#ff3838",
          "400_19": "#f5474819",
          A700: "#ea1010",
          A200: "#ff6060",
          A200_11: "#ff4e4e11",
          "400_00": "#f5474800",
          "400_2b": "#f447482b",
          "500_0f": "#ff38380f",
          A700_63: "#ff000063",
        },
        light_blue: {
          800: "#0874c3",
          A700_6c: "#0074ff6c",
          A100_7e: "#8ae9ff7e",
        },
        orange: { 600: "#ff8900", "600_6c": "#ff89006c" },
        black: { 900: "#000000", "900_07": "#00000007", "900_0f": "#0a0a0a0f" },
        lime: { "900_6c": "#9d65426c" },
        gray: {
          50: "#f9f9f9",
          51: "#fafaf9",
          200: "#ececec",
          300: "#e3e1df",
          301: "#e3e2e0",
          400: "#c4c4c4",
          500: "#a0978c",
          501: "#a08d76",
          800: "#59442b",
          801: "#5c4529",
          802: "#5c4429",
          900: "#311f09",
          901: "#1b1919",
          902: "#301e08",
          "700_33": "#60676933",
          "900_cc": "#311f09cc",
          "900_6c": "#1b161d6c",
          "900_a3": "#161616a2",
          "900_a2": "#311f09a2",
          "400_63": "#d0c7c763",
          "400_64": "#c4c4c463",
        },
        green: { 50: "#e7f7ed", "500_11": "#3fc56d11" },
        deep_orange: { "200_63": "#e1c29e63", "200_6c": "#e1c29e6c" },
        indigo: { 300: "#739fe0", 900: "#123968" },
        blue: { 400: "#53a5e0" },
        amber: { "800_6c": "#ff8c006c" },
      },
      boxShadow: {
        bs2: "0px 4px  29px 0px #60676933",
        bs3: "0px 12px  10px 0px #00000007",
        bs1: "0px 8.34px  21.18px 0px #57667533",
        bs: "3.323943614959717px 3.323943614959717px  4.99px 0px #ff4e4e11",
      },
      fontFamily: {
        poppins: "Poppins",
        opensans: "Open Sans",
        tinos: "Tinos",
        inter: "Inter",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#f447482b,#f5474800)",
        gradient1: "linear-gradient(180deg ,#ff89006c,#ff89006c)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
