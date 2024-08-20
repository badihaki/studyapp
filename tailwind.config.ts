import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const cardClassCustom = plugin(({ addUtilities })=>{
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)",
    },
    ".preserve-3d":{
      transformStyle: "preserve-3d"
    },
    ".perspective":{
      perspective: "1000px"
    },
    ".backface-hidden":{
      backfaceVisibility: "hidden"
    }
  })
})

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/components/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    cardClassCustom
  ],
};
export default config;
