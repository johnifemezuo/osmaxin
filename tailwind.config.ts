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
      variables: {
        '--slide-height': '19rem',
        '--slide-spacing': '1rem',
        '--slide-size': '45%',
      },
      keyframes: {
        'autoplay-progress': {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(100%, 0, 0)' }
        }
      },
      animation: {
        'autoplay-progress': 'autoplay-progress linear 1'
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
