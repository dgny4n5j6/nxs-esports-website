import { useEffect, useState } from "react";

export function useCounter(target: number, duration = 1800, enabled = true) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let frame = 0;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [duration, enabled, target]);

  return value;
}

export function formatCounter(value: number, prefix = "", suffix = "") {
  if (value >= 1000000) {
    return `${prefix}${(value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1)}M${suffix}`;
  }

  if (value >= 1000) {
    return `${prefix}${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}K${suffix}`;
  }

  return `${prefix}${value}${suffix}`;
}
