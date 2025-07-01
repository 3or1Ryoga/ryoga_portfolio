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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#111827",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#E7D0A9",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#374151",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#374151",
          foreground: "#9ca3af",
        },
        accent: {
          DEFAULT: "#E7D0A9",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#1f2937",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#1f2937",
          foreground: "#ffffff",
        },
        // カスタムベージュカラーを追加
        beige: {
          DEFAULT: "#E7D0A9",
          50: "#F5F0E6",
          100: "#EDE4D1",
          200: "#E7D0A9",
          300: "#DFC18A",
          400: "#D7B26B",
          500: "#CFA34C",
          600: "#B8923D",
          700: "#A1812E",
          800: "#8A701F",
          900: "#735F10",
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
