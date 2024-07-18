import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": "#E8EEEB",
        "dark-blue": "#223C77",
        "dark-orange": "#F7991D",
      },
      padding: {
        horizontal: "clamp(20px, 6.43vw, 111px)", // min 20px, max 111px
        vertical: "clamp(20px, 6.43vw, 111px)", // min 20px, max 111px
      },
    },
  },
  plugins: [],
};
export default config;
