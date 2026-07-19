import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0B0C10",
          surface: "#131519",
          elevated: "#1A1D23",
          border: "#24272E",
          borderStrong: "#31353D",
        },
        ink: {
          DEFAULT: "#F5F4F1",
          muted: "#9A9CA3",
          faint: "#6B6E76",
        },
        signal: {
          DEFAULT: "#E8B44C",
          soft: "#F4C767",
          dim: "#8A6A28",
        },
        wire: {
          DEFAULT: "#47A248",
          soft: "#6FC26F",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "display-1": ["clamp(3.5rem, 9vw, 8.5rem)", { lineHeight: "0.94", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2.5rem, 5.5vw, 5rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "display-3": ["clamp(1.9rem, 3.4vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "1360px",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
        "radial-fade": "radial-gradient(60% 60% at 50% 0%, rgba(232,180,76,0.10) 0%, rgba(11,12,16,0) 70%)",
      },
      animation: {
        "marquee": "marquee 28s linear infinite",
        "blink": "blink 1s steps(1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 1.2s",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      boxShadow: {
        "glow-signal": "0 0 0 1px rgba(232,180,76,0.25), 0 8px 30px -8px rgba(232,180,76,0.35)",
        "card": "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
