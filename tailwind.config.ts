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
      fontFamily: {
        kumbh: ['"Kumbh Sans"', "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        blue: {
          DEFAULT: "#233B77",
          light: "#EDFAFF",
          100: "#DAE6EB",
        },
        orange: "#F79913",
        dark: "#323232",
        red: "#EC1A23",
      },
      padding: {
        horizontal: "clamp(20px, 6.43vw, 111px)", // min 20px, max 111px
        vertical: "clamp(20px, 6.43vw, 111px)", // min 20px, max 111px
      },
      fontSize: {
        header1: "clamp(2.25rem, 1.84615rem + 1.79487vw, 4rem)",
      },
      lineClamp: {
        11: "11",
      },
    },
  },
  plugins: [],
};
export default config;
