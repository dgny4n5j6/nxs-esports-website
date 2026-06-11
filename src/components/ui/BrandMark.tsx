"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type BrandMarkProps = {
  size?: "nav" | "hero" | "footer" | "loading";
  className?: string;
};

const sizeClass: Record<NonNullable<BrandMarkProps["size"]>, string> = {
  nav: "h-11 w-11",
  hero: "h-44 w-44 sm:h-52 sm:w-52 lg:h-44 lg:w-44",
  footer: "h-12 w-12",
  loading: "h-24 w-24 sm:h-28 sm:w-28",
};

export function BrandMark({ size = "nav", className = "" }: BrandMarkProps) {
  return (
    <motion.span
      className={`relative inline-grid place-items-center ${sizeClass[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.72, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <span className="absolute inset-0 rounded-full bg-cyan/10 blur-2xl" />
      <span className="absolute inset-0 rounded-full bg-purple/10 blur-3xl" />
      <span className="relative grid h-full w-full place-items-center overflow-visible rounded-full border border-cyan/30 bg-white/[0.045] p-2 shadow-cyan">
        <Image
          src="/brand.jpg"
          alt="NXS Esports brand logo"
          fill
          sizes={size === "hero" ? "(max-width: 640px) 176px, 176px" : "(max-width: 640px) 44px, 44px"}
          className="object-contain drop-shadow-[0_0_18px_rgba(0,229,255,0.75)]"
          priority
        />
      </span>
      <span className="absolute -inset-2 rounded-full border border-cyan/20 bg-transparent" />
    </motion.span>
  );
}
