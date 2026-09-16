"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function Intro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  function dismiss() {
    sessionStorage.setItem("bh-intro", "1");
    setShow(false);
  }

  useEffect(() => {
    if (reduce) return;
    const seen = sessionStorage.getItem("bh-intro");
    if (seen) return;
    const start = window.requestAnimationFrame(() => setShow(true));
    const t = window.setTimeout(dismiss, 2600);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(start);
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          role="dialog"
          aria-label="Bina Horizon introduction"
          onClick={dismiss}
          className="fixed inset-0 z-[60] flex cursor-pointer items-center justify-center bg-brown-ink text-ivory"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative flex h-[min(72vh,520px)] w-[min(86vw,420px)] flex-col items-center justify-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/brand/bina-horizon-logo-light.png"
                alt="Bina Horizon — Talented for Impact"
                width={280}
                height={175}
                className="h-auto w-[min(72vw,280px)] object-contain"
                priority
              />
            </motion.div>
            <motion.p
              className="relative z-10 mt-10 text-[0.58rem] uppercase tracking-[0.32em] text-ivory/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Click to enter
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
