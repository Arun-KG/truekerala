import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["var(--font-barlow)"],
        open_Sans: ["var(--font-open_Sans)"],
        charm: ["var(--font-charm)"],
        signika_Negative: ["var(--font-signika_Negative)"],
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {
        "sec-1-bg": "url('/bg-1.webp')",
        "sec-2-bg": "url('/bg-2.jpg')",
        "sec-4-bg": "url('/bg-4.jpg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".drag-none": {
          "-webkit-user-drag": "none",
          "-khtml-user-drag": "none",
          "-moz-user-drag": "none",
          "-o-user-drag": "none",
          "user-drag": "none",
        },
      });
    }),
  ],
};
export default config;
