import { useEffect, useRef } from "react";

export function useMouseGlow<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let frame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const update = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      element.style.left = `${currentX}px`;
      element.style.top = `${currentY}px`;

      frame = window.requestAnimationFrame(update);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    frame = window.requestAnimationFrame(update);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}
