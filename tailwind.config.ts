import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0807",
        panel: "#181311",
        panel2: "#221b17",
        text: "#f7efe6",
        muted: "#c7b7a6",
        gold: "#dfb06a",
        ember: "#ffb15c",
      },
      boxShadow: {
        soft: "0 22px 50px rgba(0,0,0,.34)",
      },
    },
  },
  plugins: [],
};

export default config;
