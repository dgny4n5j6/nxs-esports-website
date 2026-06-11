"use client";

import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 8;

    element.style.setProperty("--rx", `${rotateX}deg`);
    element.style.setProperty("--ry", `${rotateY}deg`);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ transform: "perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))" }}
    >
      {children}
    </div>
  );
}
