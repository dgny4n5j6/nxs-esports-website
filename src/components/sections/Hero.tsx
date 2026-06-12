"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
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
      </div>

      <div className="site-shell grid max-w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.div
            className="relative mx-auto mb-7 h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:mx-0 lg:h-44 lg:w-44"
            initial={{ opacity: 0, y: 28, scale: 0.86 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 animate-pulse rounded-full bg-cyan/10 blur-3xl" />
            <div className="absolute inset-0 rounded-full border border-cyan/20 bg-cyan/[0.03]" />
            <BrandMark size="hero" className="relative z-10" />
          </motion.div>

          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-cyan shadow-cyan">
            <span className="h-2 w-2 shrink-0 rounded-full bg-green shadow-green" />
            Free Fire Season 1 is Live
          </div>

          <h1 className="mt-7 max-w-full break-words text-5xl font-black uppercase leading-[0.86] tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="gradient-text">NXS Esports</span>
            <br />
            Free Fire Tournaments
          </h1>

          <p className="mx-0 mt-6 max-w-2xl text-balance text-base leading-8 text-white/66 sm:text-lg">
            Enter the ultimate mobile esports arena for Free Fire tournaments,
            ranked rooms, instant results, secure wallet flows, and fast reward withdrawals.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <MagneticButton
              href={process.env.NEXT_PUBLIC_APK_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download the verified NXS Esports APK"
              className="download-cta download-cta-primary pulse-download inline-flex h-14 items-center justify-center px-6 text-xs sm:text-sm"
            >
              Download APK Now
            </MagneticButton>
            <MagneticButton
              href="#tournaments"
              aria-label="View live Free Fire tournaments"
              className="download-cta download-cta-secondary inline-flex h-14 items-center justify-center px-6 text-xs sm:text-sm"
            >
              View Live Tournaments
            </MagneticButton>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/52">Join the official NXS community</p>
            <CommunityButtons className="mt-3" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-white/48">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/70">Verified APK</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/70">Instant Results</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/70">Secure Wallet</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.86, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden min-w-0 justify-center lg:flex"
        >
          <div className="absolute inset-0 -z-10 rounded-[3rem] border border-cyan/20 bg-cyan/[0.03] blur-2xl" />
          <PhoneMockup title="NXS Free Fire Arena" metric="LIVE" variant="hero" />
        </motion.div>
      </div>
    </section>
  );
}
