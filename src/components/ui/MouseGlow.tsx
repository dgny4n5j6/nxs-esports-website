"use client";

import { useMouseGlow } from "@/hooks/useMouseGlow";

export function MouseGlow() {
  const ref = useMouseGlow<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-1/2 top-1/2 z-[90] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-3xl mix-blend-screen"
      aria-hidden="true"
    />
  );
}
