"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { formatCounter, useCounter } from "@/hooks/useCounter";
import type { Stat } from "@/types";

type CountUpProps = {
  stat: Stat;
  index: number;
};

export function CountUp({ stat, index }: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const value = useCounter(stat.value, 1900, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass-panel rounded-[1.65rem] p-5"
    >
      <p className="text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">
        {formatCounter(value, stat.prefix, stat.suffix)}
      </p>
      <p className="mt-3 text-xs font-black uppercase tracking-[0.22em] text-white/52">{stat.label}</p>
    </motion.div>
  );
}
