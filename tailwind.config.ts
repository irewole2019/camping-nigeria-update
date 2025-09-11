import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Custom Camping Nigeria Brand Colors
        "burnt-orange": {
          50: "#fef7f2",
          100: "#fdeee5",
          200: "#fad9c6",
          300: "#f6bfa1",
          400: "#f09b6b",
          500: "#E76F34", // Primary burnt orange
          600: "#d85a28",
          700: "#b4471f",
          800: "#90391d",
          900: "#74301c",
        },
        "forest-green": {
          50: "#f0f4f2",
          100: "#dce7e1",
          200: "#bad0c6",
          300: "#92b3a4",
          400: "#6b9481",
          500: "#4f7865",
          600: "#3d5f50",
          700: "#234E3F", // Primary forest green
          800: "#1e3f34",
          900: "#1a352c",
        },
        "dark-forest": {
          50: "#f2f4f3",
          100: "#e0e5e2",
          200: "#c2ccc6",
          300: "#9daba3",
          400: "#758680",
          500: "#596b64",
          600: "#45554f",
          700: "#384642",
          800: "#2f3a36",
          900: "#1A2D28", // Primary dark green/black
        },
        "warm-beige": {
          50: "#fefcf9",
          100: "#fdf8f1",
          200: "#fbf0e1",
          300: "#F2E5D5", // Primary beige
          400: "#e8d4be",
          500: "#dcc2a1",
          600: "#ccab82",
          700: "#b8926a",
          800: "#967659",
          900: "#7a614a",
        },
        "warm-cream": {
          50: "#FFF6E9", // Primary warm cream
          100: "#fef2dc",
          200: "#fde2b8",
          300: "#fbcd89",
          400: "#f8b158",
          500: "#f59e39",
          600: "#e6822a",
          700: "#bf6625",
          800: "#985126",
          900: "#7c4423",
        },
        "mountain-green": {
          50: "#f4f6f4",
          100: "#e6eae6",
          200: "#cfd6cf",
          300: "#adb9ad",
          400: "#849684",
          500: "#5C7452", // Mountain green
          600: "#4a5f42",
          700: "#3e4f37",
          800: "#34412f",
          900: "#2d3729",
        },
        "golden-sand": {
          50: "#fdf8f0",
          100: "#faeedd",
          200: "#f4dabb",
          300: "#ecc18e",
          400: "#D9A45F", // Golden sand
          500: "#d18c4a",
          600: "#c3743f",
          700: "#a25a36",
          800: "#834932",
          900: "#6b3d2b",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
