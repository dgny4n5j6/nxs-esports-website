"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MEDIA_FIRE_APK_URL, navItems } from "@/lib/nxs-data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BrandMark } from "@/components/ui/BrandMark";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
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
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-[70] border-b transition-all duration-300 ${
        scrolled ? "border-white/15 bg-ink/82 shadow-cyan/10" : "border-transparent bg-transparent"
      }`}
      style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
    >
      <nav className="site-shell flex h-20 items-center justify-between">
        <Link href="#home" onClick={() => setOpen(false)} className="group inline-flex items-center gap-3" aria-label="NXS Esports home">
          <BrandMark size="nav" className="transition-transform group-hover:rotate-3 group-hover:scale-105" />
          <span className="hidden sm:block">
            <span className="block text-sm font-black uppercase tracking-[0.34em] text-white">NXS ESPORTS</span>
            <span className="block -mt-1 text-xs font-bold uppercase tracking-[0.3em] text-purple">APK DOWNLOAD</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link text-xs font-black uppercase tracking-[0.2em]">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <MagneticButton
            href={MEDIA_FIRE_APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="download-cta download-cta-primary pulse-download inline-flex h-12 items-center justify-center px-6 text-xs"
          >
            Download APK
          </MagneticButton>
        </div>

        <button
          type="button"
          className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle navigation menu"
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
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.24 }}
            className="glass-panel-strong absolute left-4 right-4 top-[76px] rounded-3xl p-4 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-white/78 transition-colors hover:bg-cyan/10 hover:text-cyan"
                >
                  {item.label}
                </Link>
              ))}
              <MagneticButton
                href={MEDIA_FIRE_APK_URL}
                target="_blank"
                rel="noopener noreferrer"
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
