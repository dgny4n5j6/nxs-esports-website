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
        "surface-raised": "#0F172A",
        glass: "rgba(255,255,255,0.04)",
      },
      boxShadow: {
        cyan: "0 0 28px rgba(0, 229, 255, 0.3)",
        purple: "0 0 28px rgba(123, 44, 255, 0.3)",
        green: "0 0 28px rgba(0, 255, 178, 0.25)",
        arena: "0 0 36px rgba(0, 229, 255, 0.16), 0 0 80px rgba(123, 44, 255, 0.14)",
        glow: "0 0 20px rgba(0, 229, 255, 0.25), 0 0 40px rgba(123, 44, 255, 0.15)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "neon-gradient": "linear-gradient(135deg, #00E5FF 0%, #7B2CFF 52%, #00FFB2 100%)",
        "hero-gradient": "radial-gradient(circle at 18% 10%, rgba(0, 229, 255, 0.22), transparent 28%), radial-gradient(circle at 82% 18%, rgba(123, 44, 255, 0.24), transparent 30%), radial-gradient(circle at 50% 100%, rgba(0, 255, 178, 0.1), transparent 34%), #030712",
        "panel-gradient": "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025))",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        gridMove: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(64px)" },
        },
        pulseRing: {
          "0%, 100%": { transform: "scale(0.96)", opacity: "0.7" },
          "50%": { transform: "scale(1.06)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(0, -20px, 0) rotate(2deg)" },
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
        scanDown: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "10%": { opacity: 1 },
          "90%": { opacity: 1 },
          "100%": { transform: "translateY(100vh)", opacity: 0 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        slideInRight: {
          "0%": { opacity: 0, transform: "translateX(40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(0, 229, 255, 0.2)" },
          "50%": { borderColor: "rgba(0, 229, 255, 0.5)" },
        },
      },
      animation: {
        aurora: "aurora 14s ease-in-out infinite",
        gridMove: "gridMove 20s linear infinite",
        pulseRing: "pulseRing 2.6s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        phoneFloat: "phoneFloat 7.5s ease-in-out infinite",
        shimmer: "shimmer 1.8s ease-in-out infinite",
        beam: "beam 4.5s linear infinite",
        scanDown: "scanDown 2.5s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        scaleIn: "scaleIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        slideInRight: "slideInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        glowPulse: "glowPulse 2s ease-in-out infinite",
        borderGlow: "borderGlow 3s ease-in-out infinite",
      },
      screens: {
        "3xs": "320px",
        "2xs": "360px",
        xs: "390px",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
      transitionTimingFunction: {
        "expo": "cubic-bezier(0.22, 1, 0.36, 1)",
        "bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
