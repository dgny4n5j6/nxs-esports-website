"use client";

import { motion } from "framer-motion";
import { tournaments } from "@/lib/nxs-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const statusClass: Record<string, string> = {
  Live: "bg-green/15 text-green border-green/30",
  Opening: "bg-cyan/15 text-cyan border-cyan/30",
  Finals: "bg-purple/15 text-purple border-purple/30",
};

export default function Tournaments() {
  return (
    <section id="tournaments" className="relative py-20 sm:py-28">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Tournament Preview"
          title="Live rooms ready for your squad"
          description="Each card shows the details players need before they commit: fee, prize pool, slots, and match time."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tournaments.map((tournament, index) => (
            <motion.article
              key={tournament.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-panel-strong relative overflow-hidden rounded-[2rem] p-6"
            >
              <div className="absolute right-[-4rem] top-[-4rem] h-32 w-32 rounded-full bg-cyan/15 blur-3xl" aria-hidden="true" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan">{tournament.mode}</p>
                  <h3 className="mt-3 text-2xl font-black leading-none tracking-[-0.05em] text-white">{tournament.title}</h3>
                </div>
                <span className={`rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${statusClass[tournament.status]}`}>
                  {tournament.status}
                </span>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/48">Entry Fee</p>
                  <p className="mt-2 text-xl font-black text-white">{tournament.entryFee}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/48">Prize Pool</p>
                  <p className="mt-2 text-xl font-black text-white">{tournament.prizePool}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/48">Slots</p>
                  <p className="mt-2 text-xl font-black text-white">{tournament.slots}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/48">Match Time</p>
                  <p className="mt-2 text-sm font-black leading-6 text-white">{tournament.matchTime}</p>
                </div>
              </div>

              <a
                href="#download"
                className="download-cta download-cta-secondary mt-6 inline-flex h-12 w-full items-center justify-center text-xs font-black"
              >
                Join Room
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
