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
    extend: {},
  },
};
export default config;
