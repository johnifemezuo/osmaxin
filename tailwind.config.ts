import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        oswald: ["Oswald", "san-serif"],
        Wix_Madefor_Display: ["Wix_Madefor_Display", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
