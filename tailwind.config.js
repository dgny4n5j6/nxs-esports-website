/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#00E5FF",
          purple: "#7B2CFF",
          green: "#00FFB2",
        },
        ink: "#030712",
        surface: "#0B1220",
        glass: "rgba(255,255,255,0.05)",
      },
      boxShadow: {
        cyan: "0 0 32px rgba(0, 229, 255, 0.32)",
        purple: "0 0 32px rgba(123, 44, 255, 0.32)",
        green: "0 0 32px rgba(0, 255, 178, 0.28)",
        arena: "0 0 40px rgba(0, 229, 255, 0.18), 0 0 90px rgba(123, 44, 255, 0.18)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "neon-gradient": "linear-gradient(135deg, #00E5FF 0%, #7B2CFF 52%, #00FFB2 100%)",
        "hero-gradient": "radial-gradient(circle at 18% 10%, rgba(0, 229, 255, 0.24), transparent 28%), radial-gradient(circle at 82% 18%, rgba(123, 44, 255, 0.26), transparent 30%), radial-gradient(circle at 50% 100%, rgba(0, 255, 178, 0.12), transparent 34%), #030712",
        "panel-gradient": "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.035))",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        gridMove: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(56px)" },
        },
        pulseRing: {
          "0%, 100%": { transform: "scale(0.96)", opacity: "0.72" },
          "50%": { transform: "scale(1.08)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(0, -18px, 0) rotate(2deg)" },
        },
        phoneFloat: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotateX(8deg) rotateY(-16deg) rotateZ(1deg)" },
          "50%": { transform: "translate3d(0, -24px, 0) rotateX(8deg) rotateY(-16deg) rotateZ(-1deg)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        beam: {
          "0%": { transform: "translateX(-120%) rotate(18deg)" },
          "100%": { transform: "translateX(180%) rotate(18deg)" },
        },
      },
      animation: {
        aurora: "aurora 12s ease-in-out infinite",
        gridMove: "gridMove 18s linear infinite",
        pulseRing: "pulseRing 2.4s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        phoneFloat: "phoneFloat 7.5s ease-in-out infinite",
        shimmer: "shimmer 1.8s ease-in-out infinite",
        beam: "beam 4.5s linear infinite",
      },
      screens: {
        "3xs": "320px",
        "2xs": "360px",
        xs: "390px",
      },
    },
  },
  plugins: [],
};

export default config;
