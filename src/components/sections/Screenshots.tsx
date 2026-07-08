"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { screenshotSlides } from "@/lib/nxs-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Screenshots() {
  const [active, setActive] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % screenshotSlides.length);
    }, 4200);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const clamp = (value: number) => Math.max(0, Math.min(value, screenshotSlides.length - 1));

  return (
    <section id="screenshots" className="relative py-20 sm:py-28">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Free Fire App Interface"
          title="Swipe through a premium mobile arena"
          description="The carousel is built for one-thumb navigation and feels native on 320px devices."
        />

        <div className="mt-12">
          <div ref={containerRef} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3">
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={containerRef}
              dragElastic={0.18}
              animate={{ x: `calc(${-active * 100}% + ${dragOffset}px)` }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              onDrag={(_, info) => setDragOffset(info.offset.x)}
              onDragEnd={(_, info) => {
                const direction = info.offset.x < -58 ? 1 : info.offset.x > 58 ? -1 : 0;
                setActive((value) => clamp(value + direction));
                setDragOffset(0);
              }}
            >
              {screenshotSlides.map((slide, index) => {
                const tabId = `screenshot-tab-${index}`;
                const panelId = `screenshot-panel-${index}`;

                return (
                  <article
                    id={panelId}
                    key={slide.title}
                    role="tabpanel"
                    aria-labelledby={tabId}
                    className="min-w-full p-2"
                  >
                    <div className={`relative min-h-[520px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${slide.accent}`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.24),transparent_28%)]" />
                      <div className="absolute inset-5 rounded-[1.45rem] border border-white/10 bg-ink/72 p-4 backdrop-blur-xl">
                        <div className="flex items-center justify-between">
                          <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-cyan">GS</span>
                          <span className="text-xs font-black uppercase tracking-[0.2em] text-white/52">{slide.metric}</span>
                        </div>

                        <div className="mt-10 rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-5">
                          <div className="h-8 w-2/3 rounded-full bg-neon-gradient" />
                          <div className="mt-4 space-y-3">
                            <div className="h-3 w-full rounded-full bg-white/10" />
                            <div className="h-3 w-5/6 rounded-full bg-white/10" />
                            <div className="h-3 w-4/6 rounded-full bg-white/10" />
                          </div>
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-4">
                          <div className="rounded-2xl border border-cyan/20 bg-cyan/10 p-4">
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan">{slide.items[0]}</p>
                            <p className="mt-3 text-2xl font-black text-white">96%</p>
                          </div>
                          <div className="rounded-2xl border border-purple/20 bg-purple/10 p-4">
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-purple">{slide.items[1]}</p>
                            <p className="mt-3 text-2xl font-black text-white">2.4K</p>
                          </div>
                        </div>

                        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                          <p className="text-sm font-black uppercase tracking-[0.18em] text-white">{slide.items[2]}</p>
                          <div className="mt-3 h-2 rounded-full bg-white/10">
                            <div className="h-2 w-3/4 rounded-full bg-neon-gradient" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                        <p className="text-sm font-black uppercase tracking-[0.18em] text-white">{slide.title}</p>
                        <p className="mt-1 text-xs text-white/52">Free Fire tournament UI preview</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </motion.div>
          </div>

          <div role="tablist" aria-label="GS Esports app screenshots" className="mt-5 flex items-center justify-center gap-2">
            {screenshotSlides.map((slide, index) => {
              const tabId = `screenshot-tab-${index}`;
              const panelId = `screenshot-panel-${index}`;

              return (
                <button
                  id={tabId}
                  key={slide.title}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  aria-controls={panelId}
                  aria-label={`Show ${slide.title} screenshot`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === index ? "w-8 bg-neon-gradient" : "w-2 bg-white/18"
                  }`}
                  onClick={() => setActive(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
