"use client";

import { useEffect, useRef } from "react";

export function LivingHorizon() {
  const sun = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sun.current;
    if (!el) return;
    let frame = 0;

    const tick = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      el.style.left = `${10 + p * 80}%`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-4 bottom-[6vh] z-20 hidden md:block lg:inset-x-8"
    >
      <div className="relative h-px bg-gradient-to-r from-transparent via-gold to-transparent">
        <div
          ref={sun}
          className="sun-live absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
        />
      </div>
    </div>
  );
}
