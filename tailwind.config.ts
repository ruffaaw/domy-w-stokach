import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "#353535",
        color2: "#3C6E71",
        color3: "#FFFFFF",
        color4: "#D9D9D9",
        color5: "#284B63",
        brown: "#403D39",
        signature: "#555",
        signature_text: "#aaa",
      },
      backgroundImage: {
        backgroud: "url('/1.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
