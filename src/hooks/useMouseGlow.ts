import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function useMouseGlow<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const moveX = gsap.quickTo(element, "left", { duration: 0.45, ease: "power3" });
    const moveY = gsap.quickTo(element, "top", { duration: 0.45, ease: "power3" });

    const handlePointerMove = (event: PointerEvent) => {
      moveX(event.clientX);
      moveY(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return ref;
}
