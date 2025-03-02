import type { Config } from "tailwindcss";
import shared from "@waredrop/tailwind-config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [shared],
  theme: {
    extend: {
      container: {
        padding: {
          default: "1rem",
          "2xl": "3rem",
          xl: "3rem",
          lg: "3rem",
          sm: "2rem",
        },
      },
    },
  },
};
export default config;
