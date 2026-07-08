"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountUp } from "@/components/ui/CountUp";
import { trustStats } from "@/lib/nxs-data";

export default function Trust() {
  return (
    <section aria-label="GS Esports trust statistics" className="relative py-12 sm:py-16">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Free Fire Trust Layer"
          title="Credibility built for competitive gamers"
          description="Live numbers from the GS ESPORTS ecosystem."
          align="left"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustStats.map((stat, index) => (
            <CountUp key={stat.label} stat={stat} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
