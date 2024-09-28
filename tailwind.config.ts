import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mySerif: ["Montserrat", "sans-serif"],
      },
      screens: {
        "max-1600": { max: "1600px" },
        "max-1500": { max: "1500px" },
        "max-1400": { max: "1400px" },
        "max-1300": { max: "1300px" },
        "max-1200": { max: "1200px" },
        "max-1000": { max: "1000px" },
        "max-900": { max: "900px" },
        "max-800": { max: "800px" },
        "max-700": { max: "700px" },
        "max-600": { max: "600px" },
        "max-500": { max: "500px" },
        "max-400": { max: "400px" },
      },
    },
  },
  plugins: [],
};
export default config;
