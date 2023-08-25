import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F1F1F",
        secondary: "#DD3965",
        accent: "#FFFFFF",
        "background-gray": "#EEEEEE",
        "text-gray": "#808C8E",
        pink: "#FF94B1",
      },
      fontSize: {
        "10": "10px",
        "18": "18px",
        "22": "22px",
        "30": "30px",
      },
    },
  },
  plugins: [],
};
export default config;
