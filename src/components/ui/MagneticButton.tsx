"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { AnchorHTMLAttributes, ComponentPropsWithoutRef, ReactNode } from "react";
import { useRef } from "react";

type MagneticButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
> & {
  children: ReactNode;
};

export function MagneticButton({ children, className = "", onPointerMove, onPointerLeave, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 28 });
  const springY = useSpring(y, { stiffness: 260, damping: 28 });
  const rotate = useTransform(springX, [-18, 18], [-1.4, 1.4]);
  const href = props.href?.toString() ?? "";
  const isHashLink = href.startsWith("#");
  const opensNewTab = !isHashLink && (props.target === "_blank" || /^https?:\/\//i.test(href));
  const relTokens = opensNewTab
    ? ["noopener", "noreferrer", ...(props.rel?.split(/\s+/) ?? [])]
    : props.rel?.split(/\s+/) ?? [];
  const rel = [...new Set(relTokens.filter(Boolean))].join(" ");
  const motionProps = { ...props, rel, target: opensNewTab ? props.target : undefined } as ComponentPropsWithoutRef<typeof motion.a>;

  const handlePointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    onPointerMove?.(event);

    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const nextX = event.clientX - rect.left - rect.width / 2;
    const nextY = event.clientY - rect.top - rect.height / 2;

    x.set(nextX * 0.16);
    y.set(nextY * 0.16);
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLAnchorElement>) => {
    onPointerLeave?.(event);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      style={{ x: springX, y: springY, rotate }}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...motionProps}
    >
      {children}
    </motion.a>
  );
}
