import Image from "next/image";
import { motion } from "framer-motion";

type BrandMarkProps = {
  size?: "nav" | "hero" | "footer" | "loading";
  className?: string;
};

const sizeClass: Record<NonNullable<BrandMarkProps["size"]>, string> = {
  nav: "h-10 w-10 sm:h-11 sm:w-11",
  hero: "h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-40 lg:w-40",
  footer: "h-10 w-10 sm:h-11 sm:w-11",
  loading: "h-20 w-20 sm:h-24 sm:w-24",
};

const imageSizes: Record<NonNullable<BrandMarkProps["size"]>, string> = {
  nav: "(max-width: 640px) 40px, 44px",
  hero: "(max-width: 430px) 112px, (max-width: 768px) 160px, 160px",
  footer: "(max-width: 640px) 40px, 44px",
  loading: "(max-width: 640px) 80px, 96px",
};

export function BrandMark({ size = "nav", className = "" }: BrandMarkProps) {
  return (
    <motion.div
      className={`relative inline-flex aspect-square shrink-0 place-items-center logo-mark ${sizeClass[size]} ${className}`}
      aria-hidden="true"
      whileHover={{ scale: 1.08, rotate: 3 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-blue/10 blur-2xl" />
      <span className="absolute inset-0 -z-10 rounded-full bg-royal/10 blur-3xl" />
      <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-full border border-blue/25 bg-white/[0.04] p-[10%] shadow-blue transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
        <Image
          src="/web_icon.svg"
          alt="GS Esports logo"
          fill
          sizes={imageSizes[size]}
          className="object-contain drop-shadow-[0_0_16px_rgba(59,130,246,0.7)]"
          priority={size === "hero"}
          loading={size === "hero" ? "eager" : "lazy"}
        />
      </div>
      <span className="absolute -inset-2 rounded-full border border-blue/15 bg-transparent logo-pulse" />
    </motion.div>
  );
}
