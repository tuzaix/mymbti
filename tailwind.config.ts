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
        agree: {
          light: "#88AD81",
          DEFAULT: "#33a474",
          dark: "#2a8a61",
        },
        disagree: {
          light: "#a58db8",
          DEFAULT: "#88619a",
          dark: "#714f80",
        },
        neutral: {
          DEFAULT: "#cbd5e1",
        }
      },
    },
  },
  plugins: [],
};
export default config;
