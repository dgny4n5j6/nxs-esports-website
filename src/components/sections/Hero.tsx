"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BrandMark } from "@/components/ui/BrandMark";
import { CommunityButtons } from "@/components/ui/CommunityButtons";

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="aurora-field" aria-hidden="true" />
      <div className="animated-grid" aria-hidden="true" />
      <div className="particle-field" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/[0.04] blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="site-shell grid max-w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.div
            className="relative mx-auto mb-8 h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:mx-0 lg:h-40 lg:w-40"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 animate-pulse rounded-full bg-blue/10 blur-3xl" />
            <div className="absolute inset-0 rounded-full border border-blue/20 bg-blue/[0.03]" />
            <BrandMark size="hero" className="relative z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-blue"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inset-0 rounded-full bg-ice animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-ice" />
            </span>
            Free Fire Season 1 is Live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-full break-words text-5xl font-black uppercase leading-[0.86] tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="gradient-text">GS Esports</span>
            <br />
            Free Fire Tournaments
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-0 mt-6 max-w-2xl text-balance text-base leading-8 text-white/60 sm:text-lg"
          >
            Enter the ultimate mobile esports arena for Free Fire tournaments,
            ranked rooms, instant results, secure wallet flows, and fast reward withdrawals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton
              href={process.env.NEXT_PUBLIC_APK_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download the official GS Esports APK"
              className="download-cta download-cta-primary pulse-download inline-flex h-14 items-center justify-center px-6 text-xs sm:text-sm"
            >
              Download APK Now
            </MagneticButton>
            <MagneticButton
              href="#features"
              aria-label="View GS Esports features"
              className="download-cta download-cta-secondary inline-flex h-14 items-center justify-center px-6 text-xs sm:text-sm"
            >
              Explore Features
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
          >
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/48">Join the official GS community</p>
            <CommunityButtons className="mt-3" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-white/44"
          >
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/68 transition-all duration-200 hover:border-blue/30 hover:text-white hover:scale-105">Verified APK</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/68 transition-all duration-200 hover:border-blue/30 hover:text-white hover:scale-105">Instant Results</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/68 transition-all duration-200 hover:border-blue/30 hover:text-white hover:scale-105">Secure Wallet</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden min-w-0 justify-center lg:flex"
        >
          <div className="absolute -inset-10 rounded-full bg-blue/5 blur-3xl" aria-hidden="true" />
          <div className="relative rounded-[3rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <div className="text-center">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full border border-blue/30 bg-blue/10 p-3">
                <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-blue" aria-hidden="true">
                  <path d="M12 3L4 8v8l8 5 8-5V8l-8-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M12 12l8-5M12 12v8M12 12L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">GS Esports</h3>
              <p className="mt-2 text-xs font-black uppercase tracking-widest text-blue">Free Fire Tournament App</p>
              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-white/60">
                <span className="h-2 w-2 rounded-full bg-ice animate-pulse" />
                Version {process.env.NEXT_PUBLIC_APK_VERSION || "v4.8.0"}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
