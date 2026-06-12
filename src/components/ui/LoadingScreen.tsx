"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/ui/BrandMark";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 850);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          role="status"
          aria-live="polite"
          aria-label="Loading NXS Esports"
          className="fixed inset-0 z-[120] grid place-items-center bg-ink"
        >
          <div className="relative grid place-items-center">
            <div className="absolute h-40 w-40 animate-pulse rounded-full bg-cyan/10 blur-3xl" />
            <div className="absolute h-36 w-36 rounded-full border border-cyan/20 bg-purple/[0.04]" />
            <BrandMark size="loading" />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
