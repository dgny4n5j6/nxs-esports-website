"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/ui/BrandMark";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"reveal" | "pulse" | "scan" | "complete">("reveal");

  useEffect(() => {
    const start = performance.now();
    const revealDuration = 800;
    const pulseDuration = 700;
    const scanDuration = 500;
    const totalDuration = 2200;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / totalDuration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased);

      if (elapsed < revealDuration) {
        setPhase("reveal");
      } else if (elapsed < revealDuration + pulseDuration) {
        setPhase("pulse");
      } else if (elapsed < totalDuration - 200) {
        setPhase("scan");
      } else {
        setPhase("complete");
      }

      if (p < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    const frame = window.requestAnimationFrame(tick);

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, totalDuration + 300);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          aria-live="polite"
          aria-label="Loading GS Esports"
          className="fixed inset-0 z-[120] grid place-items-center bg-background"
        >
          <div className="relative flex flex-col items-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-blue/15 blur-3xl" />
              <div className="absolute -inset-8 rounded-full border border-blue/15 bg-blue/5 blur-xl" />

              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                animate={{
                  scale: phase === "complete" ? 0.9 : 1,
                  opacity: 1,
                  rotateY: 0,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
                style={{ perspective: 1000 }}
              >
                <BrandMark size="loading" className="relative z-10" />

                {phase === "pulse" && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: [0.8, 1.4, 1],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    style={{
                      background: "radial-gradient(circle, rgba(59,130,246,0.4), transparent 70%)",
                    }}
                  />
                )}

                {phase === "scan" && (
                  <>
                    <motion.div
                      className="absolute inset-0 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.3), transparent)",
                          height: "40px",
                        }}
                        animate={{ y: ["-100%", "400%"] }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "conic-gradient(from 0deg, transparent, var(--blue), transparent, var(--royal), transparent)",
                        maskImage: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))",
                        WebkitMaskImage: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))",
                      }}
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </>
                )}
              </motion.div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center"
              >
                <h1 className="text-lg font-black uppercase tracking-[0.3em] text-white sm:text-xl">
                  GS Esports
                </h1>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-blue">
                  Free Fire Tournament App
                </p>
              </motion.div>

              <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, var(--ice), var(--blue), var(--royal))",
                    width: `${progress * 100}%`,
                  }}
                />
              </div>

              <motion.div
                className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue animate-pulse" />
                Loading Experience
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
