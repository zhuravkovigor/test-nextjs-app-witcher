import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      borderColor: {
        primary: "#EC3F3FCC",
      },

      boxShadow: {
        button: "0px 2px 24px 0px #FF1E1E80",
      },

      backgroundColor: {
        primary: "#FF1E1E",
      },

      container: {
        center: true,
        padding: "20px",

        screens: {
          sm: "640px",
          md: "1200px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
