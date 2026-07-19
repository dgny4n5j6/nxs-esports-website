"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

type StickyDownloadProps = {
  forceVisible?: boolean;
};

export function StickyDownload({ forceVisible }: StickyDownloadProps) {
  if (forceVisible === false) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-white/10 bg-ink/80 px-4 py-3 backdrop-blur-2xl sm:hidden mobile-safe-bottom"
    >
      <MagneticButton
        href={process.env.NEXT_PUBLIC_APK_URL || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Securely download the GS Esports APK"
        className="download-cta download-cta-primary pulse-download mx-auto flex h-14 max-w-sm items-center justify-center text-xs sm:text-sm"
      >
        Secure Download APK
      </MagneticButton>
    </motion.div>
  );
}
