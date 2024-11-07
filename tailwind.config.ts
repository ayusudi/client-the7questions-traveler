import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1C275D",
        "steel-blue": "#616F9C",
      },
      backgroundColor: {
        beige: "#FAF7F0",
        "light-turqoa": "#B3EDE6",
        "sky-blue": "#BCCEF8",
        "soft-blue": "#98A8F8",
        "vivid-blue": "#6E86FF",
        "steel-blue": "#616F9C",
        "dark-blue": "#1C275D",
        "grey-grey": "#D9D9D9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
