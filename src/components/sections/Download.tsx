"use client";

import { downloadInfo } from "@/lib/gs-data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";

export default function Download() {
  return (
    <section id="download" className="relative py-20 sm:py-28">
      <div className="site-shell">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-blue/20 bg-gradient-to-br from-ink via-surface to-ink p-6 sm:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(29,78,216,0.14),transparent_30%)]" aria-hidden="true" />
          <div className="absolute right-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-blue/10 blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-[-8rem] left-[-8rem] h-72 w-72 rounded-full bg-royal/10 blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-blue"
              >
                <span className="h-2 w-2 rounded-full bg-ice animate-pulse" />
                Official Download
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl"
              >
                Download GS Esports
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-5 max-w-2xl text-base leading-8 text-white/58 sm:text-lg"
              >
                Get the official GS Esports app for Free Fire tournaments, live rooms, instant results, wallet management, and rank tracking.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <MagneticButton
                  href={process.env.NEXT_PUBLIC_APK_URL || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Securely download the GS Esports APK"
                  className="download-cta download-cta-primary pulse-download inline-flex h-16 items-center justify-center px-8 text-sm sm:min-w-[280px]"
                >
                  Download APK Now
                </MagneticButton>
                <MagneticButton
                  href="#faq"
                  aria-label="Check Free Fire app requirements"
                  className="download-cta download-cta-secondary inline-flex h-16 items-center justify-center px-8 text-sm"
                >
                  Installation Guide
                </MagneticButton>
              </motion.div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {downloadInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 transition-all duration-300 hover:border-blue/25 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
                >
                  <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-blue/5 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-white/42 transition-colors duration-300 group-hover:text-white/70">{item.label}</p>
                  <p className="relative mt-2 text-2xl font-black tracking-[-0.04em] text-white transition-transform duration-300 group-hover:scale-105">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
