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
        primary: "#B026FF",
        secondary: "#A200FF",
        text1: '#FFFFFF',
        text2: '#818A9C',
        text3: '#201F1F',
      },
      fontFamily: {
        amoria: ["Amoria", "sans-serif"]
      },
      fontWeight: {
        regular: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
} satisfies Config;
