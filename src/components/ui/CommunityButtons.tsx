"use client";

import { FaDiscord, FaWhatsapp } from "react-icons/fa";
import type { ReactNode } from "react";
import { communityLinks } from "@/lib/gs-data";
import type { CommunityPlatform } from "@/types";
import { motion } from "framer-motion";

type CommunityButtonsProps = {
  className?: string;
  compact?: boolean;
};

const iconMap: Record<CommunityPlatform, ReactNode> = {
  discord: <FaDiscord aria-hidden="true" />,
  whatsapp: <FaWhatsapp aria-hidden="true" />,
};

export function CommunityButtons({ className = "", compact = false }: CommunityButtonsProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {communityLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Join GS Esports ${link.label}`}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-blue transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/40 hover:bg-blue/10 hover:text-white sm:h-11 sm:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={`relative z-10 ${compact ? "text-lg" : "text-xl transition-transform duration-300 group-hover:scale-110"}`}>{iconMap[link.platform]}</span>
          {!compact && <span className="relative z-10 text-xs font-black uppercase tracking-wider">{link.label}</span>}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue/0 via-blue/10 to-blue/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
        </motion.a>
      ))}
    </div>
  );
}
