import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-black uppercase tracking-[0.34em] text-cyan">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-8 text-white/60 sm:text-lg">{description}</p> : null}
    </div>
  );
}
