import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Azul marino profundo (fondo) y superficies, tomados de la identidad actual de Yasi
        navy: {
          DEFAULT: "#040a1a",
          2: "#07112b",
          3: "#0b1838",
          4: "#102148",
        },
        // Dorado de la marca
        gold: {
          DEFAULT: "#e9b949",
          light: "#f7d774",
          dim: "#b8862b",
          ink: "#1a1203",
        },
        ink: {
          DEFAULT: "#f2f4fa",
          muted: "#9aa7c4",
          dim: "#6f7c9c",
        },
        wa: "#25d366",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        gold: "0 10px 30px -10px rgba(233,185,73,0.45)",
        card: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 30px 60px -30px rgba(0,0,0,0.9)",
        panel: "0 40px 80px -40px rgba(0,0,0,0.95), 0 0 0 1px rgba(233,185,73,0.12)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        page: "76rem",
      },
    },
  },
  plugins: [],
};

export default config;
