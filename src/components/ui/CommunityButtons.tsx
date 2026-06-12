"use client";

import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { communityLinks } from "@/lib/nxs-data";

type CommunityButtonsProps = {
  className?: string;
  compact?: boolean;
};

const iconMap = {
  whatsapp: <FaWhatsapp aria-hidden="true" />,
  telegram: <FaTelegram aria-hidden="true" />,
};

export function CommunityButtons({ className = "", compact = false }: CommunityButtonsProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {communityLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Join NXS Esports ${link.label}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/40 hover:bg-cyan/10 hover:text-white sm:h-11 sm:w-11"
        >
          <span className={compact ? "text-lg" : "text-xl"}>{iconMap[link.platform]}</span>
          {!compact && <span className="sr-only">{link.label}</span>}
        </a>
      ))}
    </div>
  );
}
