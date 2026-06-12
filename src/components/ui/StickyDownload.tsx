"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";

export function StickyDownload() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] border-t border-white/10 bg-ink/78 px-4 py-3 backdrop-blur-2xl sm:hidden mobile-safe-bottom">
      <MagneticButton
        href={process.env.NEXT_PUBLIC_APK_URL || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Securely download the NXS Esports APK"
        className="download-cta download-cta-primary pulse-download mx-auto flex h-14 max-w-sm items-center justify-center text-xs sm:text-sm"
      >
        Secure Download APK
      </MagneticButton>
    </div>
  );
}
