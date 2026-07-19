"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCounter } from "@/hooks/useCounter";

type CountUpProps = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  index: number;
};

export function CountUp({ value, suffix, prefix, label, index }: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const current = useCounter(value, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="glass-panel relative overflow-hidden rounded-[1.5rem] p-5"
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan/10 blur-2xl" aria-hidden="true" />
      <p className="relative text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl">
        {prefix}{current.toLocaleString()}{suffix}
      </p>
      <p className="relative mt-3 text-xs font-black uppercase tracking-[0.22em] text-white/48">{label}</p>
    </motion.div>
  );
}
