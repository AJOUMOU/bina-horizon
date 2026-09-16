"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function MillionMark() {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? 1_000_000 : 0);

  useEffect(() => {
    if (!inView || reduce) {
      if (inView) {
        const snap = requestAnimationFrame(() => setValue(1_000_000));
        return () => cancelAnimationFrame(snap);
      }
      return;
    }
    const start = performance.now();
    const duration = 1800;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(eased * 1_000_000));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce]);

  return (
    <p
      ref={ref}
      className="display-huge text-[18vw] text-brown md:text-[11rem]"
    >
      {value.toLocaleString("en-US")}
    </p>
  );
}
