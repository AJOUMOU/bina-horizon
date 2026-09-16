"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function SunPortrait() {
  const wrap = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 120, damping: 18 });
  const y = useSpring(my, { stiffness: 120, damping: 18 });

  return (
    <motion.div
      ref={wrap}
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = wrap.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left - r.width / 2) / 18);
        my.set((e.clientY - r.top - r.height / 2) / 18);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative mx-auto size-[min(72vw,400px)]"
    >
      <div className="pointer-events-none absolute inset-[-12%] animate-[spin_64s_linear_infinite] opacity-80">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2;
            const ray = (r: number) =>
              [
                Number((50 + Math.cos(a) * r).toFixed(4)),
                Number((50 + Math.sin(a) * r).toFixed(4)),
              ] as const;
            const [x1, y1] = ray(42);
            const [x2, y2] = ray(49);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#D9A21B"
                strokeWidth={i % 2 === 0 ? 0.7 : 0.35}
              />
            );
          })}
        </svg>
      </div>
      <div className="absolute inset-[9%] overflow-hidden rounded-full bg-brown-ink shadow-[0_0_0_3px_#D9A21B]">
        <Image
          src="/images/gaze.jpg"
          alt="A young woman looking toward the light"
          fill
          priority
          sizes="400px"
          className="object-cover object-[center_18%] contrast-[1.05]"
        />
      </div>
    </motion.div>
  );
}
