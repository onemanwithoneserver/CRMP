import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cremp-blue": "#1C2A44",
        "cremp-gold": "#C89B3C",
        "cremp-lightgold": "#E6C36A",
        "cremp-bg": "#F5F7FA",
        "cremp-gray": "#667085",
        "cremp-success": "#22C55E",
        "cremp-primary": "#2563EB",
        "cremp-danger": "#EF4444",
        "cremp-warning": "#F59E0B",
        "cremp-lightgray": "#E4E7EC",
      },
    },
  },
  plugins: [],
} satisfies Config;
