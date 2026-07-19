"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "@/lib/gs-data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BrandMark } from "@/components/ui/BrandMark";
import { CommunityButtons } from "@/components/ui/CommunityButtons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);

      const sections = navItems.map(item => item.href.replace("#", ""));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-[70] transition-all duration-300 ${
        scrolled ? "border-b border-blue/12 bg-ink/80 shadow-[0_4px_30px_rgba(59,130,246,0.06)]" : "border-transparent bg-transparent"
      }`}
      style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
    >
      <nav className="site-shell flex h-20 items-center justify-between gap-3" aria-label="Primary navigation">
        <Link href="#home" onClick={() => setOpen(false)} className="group inline-flex min-w-0 items-center gap-3" aria-label="GS Esports home">
          <BrandMark size="nav" className="shrink-0 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110" />
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-sm font-black uppercase tracking-[0.34em] text-white">GS ESPORTS</span>
            <span className="block -mt-1 text-xs font-bold uppercase tracking-[0.3em] text-blue">Free Fire App</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link whitespace-nowrap text-xs font-black uppercase tracking-[0.2em] transition-colors duration-200 ${isActive ? "text-blue" : "text-white/68"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <CommunityButtons className="hidden xl:flex" compact />
          <MagneticButton
            href={process.env.NEXT_PUBLIC_APK_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download the official GS Esports APK"
            className="download-cta download-cta-primary pulse-download inline-flex h-12 shrink-0 items-center justify-center px-6 text-xs"
          >
            Download APK
          </MagneticButton>
        </div>

        <button
          type="button"
          className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-200 hover:border-blue/30 hover:bg-blue/10 lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex h-5 w-5 flex-col justify-between">
            <span className={`block h-0.5 w-full rounded-full bg-white transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-full rounded-full bg-white transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-0.5 w-full rounded-full bg-white transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel-strong absolute left-4 right-4 top-[76px] max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-3xl p-4 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-left text-xs font-black uppercase tracking-[0.2em] text-white/78 transition-all duration-200 hover:bg-blue/10 hover:text-blue"
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <CommunityButtons className="grid grid-cols-2" />
              <MagneticButton
                href={process.env.NEXT_PUBLIC_APK_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download the official GS Esports APK"
                className="download-cta download-cta-primary pulse-download mt-2 flex h-12 items-center justify-center px-5 text-xs"
              >
                Download APK
              </MagneticButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
