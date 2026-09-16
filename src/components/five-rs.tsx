"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { values } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Flatter arc — kept short so the graphic doesn’t dominate the section */
const positions = [
  { x: 6, y: 38 },
  { x: 28, y: 16 },
  { x: 50, y: 8 },
  { x: 72, y: 16 },
  { x: 94, y: 38 },
];

export function FiveRs({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(2);
  const current = values[active];
  const sun = positions[active];

  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-col items-center",
        compact ? "max-w-3xl" : "max-w-4xl lg:max-w-5xl",
      )}
    >
      <div className="relative w-full max-w-md md:max-w-xl">
        <svg
          viewBox="0 0 100 48"
          className="mx-auto block h-auto w-full"
          role="list"
          aria-label="The Five R’s"
        >
          <path
            d="M4 40 Q50 2 96 40"
            fill="none"
            stroke="#D9A21B"
            strokeWidth="0.55"
          />
          {values.map((item, i) => {
            const p = positions[i];
            const on = i === active;
            return (
              <g key={item.key} role="listitem">
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={7}
                  fill="transparent"
                  className="cursor-pointer"
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActive(i);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={item.title}
                  aria-pressed={on}
                />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={on ? 2.4 : 1.5}
                  fill={on ? "#D9A21B" : "#B87333"}
                  className="pointer-events-none"
                />
                <text
                  x={p.x}
                  y={p.y - 4.5}
                  textAnchor="middle"
                  fill={on ? "#5A3218" : "#B87333"}
                  fontSize="3.2"
                  className="cursor-pointer select-none"
                  onClick={() => setActive(i)}
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  0{i + 1}
                </text>
              </g>
            );
          })}
          <motion.circle
            r="3.6"
            fill="#D9A21B"
            initial={false}
            animate={{ cx: sun.x, cy: sun.y }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
          />
        </svg>
      </div>

      <div className="mt-3 w-full min-h-[5.5rem] text-center md:min-h-[6.5rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-copper md:text-[0.72rem]">
              0{active + 1} — {current.subtitle}
            </p>
            <h3 className="mt-2 font-display text-5xl italic leading-[1.05] tracking-tight text-brown md:text-6xl lg:text-7xl">
              {current.title}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>

      <ol className="mt-6 flex flex-wrap justify-center gap-2">
        {values.map((item, i) => (
          <li key={item.key}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "border px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.18em] transition-colors",
                i === active
                  ? "border-gold bg-gold text-brown-ink"
                  : "border-copper/40 text-copper hover:border-gold hover:text-brown",
              )}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ol>

      <div className="mx-auto mt-8 min-h-[6.5rem] w-full max-w-2xl text-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={`${current.key}-copy`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            className="text-xl leading-relaxed text-charcoal/85 md:text-2xl md:leading-relaxed"
          >
            {current.copy}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
