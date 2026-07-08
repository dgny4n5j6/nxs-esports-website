import Image from "next/image";

type BrandMarkProps = {
  size?: "nav" | "hero" | "footer" | "loading";
  className?: string;
};

const sizeClass: Record<NonNullable<BrandMarkProps["size"]>, string> = {
  nav: "h-11 w-11 sm:h-12 sm:w-12",
  hero: "h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-44 lg:w-44",
  footer: "h-12 w-12 sm:h-13 sm:w-13",
  loading: "h-24 w-24 sm:h-28 sm:w-28",
};

const imageSizes: Record<NonNullable<BrandMarkProps["size"]>, string> = {
  nav: "(max-width: 640px) 44px, 48px",
  hero: "(max-width: 430px) 128px, (max-width: 768px) 192px, 176px",
  footer: "(max-width: 640px) 48px, 52px",
  loading: "(max-width: 640px) 96px, 112px",
};

export function BrandMark({ size = "nav", className = "" }: BrandMarkProps) {
  return (
    <div className={`relative inline-flex aspect-square shrink-0 place-items-center logo-mark ${sizeClass[size]} ${className}`} aria-hidden="true">
      <span className="absolute inset-0 -z-10 rounded-full bg-cyan/10 blur-2xl" />
      <span className="absolute inset-0 -z-10 rounded-full bg-purple/10 blur-3xl" />
      <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-full border border-cyan/30 bg-white/[0.045] p-[10%] shadow-cyan">
        <Image
          src="/nxs-logo.svg"
          alt="GS Esports logo"
          fill
          sizes={imageSizes[size]}
          className="object-contain drop-shadow-[0_0_18px_rgba(0,229,255,0.75)]"
          priority={size === "hero"}
          loading={size === "hero" ? "eager" : "lazy"}
        />
      </div>
      <span className="absolute -inset-3 rounded-full border border-cyan/20 bg-transparent logo-pulse" />
    </div>
  );
}
