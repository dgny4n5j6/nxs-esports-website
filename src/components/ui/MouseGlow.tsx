"use client";

import { useMouseGlow } from "@/hooks/useMouseGlow";
import { motion } from "framer-motion";

export function MouseGlow() {
  const ref = useMouseGlow<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none fixed left-1/2 top-1/2 z-[90] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/10 blur-3xl mix-blend-screen"
      aria-hidden="true"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
