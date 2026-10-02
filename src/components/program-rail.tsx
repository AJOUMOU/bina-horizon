"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/photo";
import { programs } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProgramRail() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [pinHeight, setPinHeight] = useState("auto");

  const usePinScroll = isDesktop && !reduceMotion;

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");
    const sync = () => {
      setReduceMotion(motion.matches);
      setIsDesktop(desktop.matches);
    };
    sync();
    motion.addEventListener("change", sync);
    desktop.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      desktop.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!usePinScroll) {
      setPinHeight("auto");
      const track = trackRef.current;
      if (track) track.style.transform = "";
      return;
    }

    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;

    const measure = () => {
      const travel = Math.max(0, track.scrollWidth - window.innerWidth);
      setPinHeight(`${travel + window.innerHeight}px`);
    };

    const onScroll = () => {
      const travel = Math.max(0, track.scrollWidth - window.innerWidth);
      if (travel <= 0) {
        track.style.transform = "translate3d(0,0,0)";
        return;
      }
      const progress = Math.min(
        1,
        Math.max(0, -pin.getBoundingClientRect().top / travel),
      );
      track.style.transform = `translate3d(${-travel * progress}px, 0, 0)`;
    };

    measure();
    onScroll();
    const ro = new ResizeObserver(() => {
      measure();
      onScroll();
    });
    ro.observe(track);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [usePinScroll]);

  return (
    <div
      ref={pinRef}
      className="relative"
      style={usePinScroll ? { height: pinHeight } : undefined}
    >
      <div
        className={cn(
          "flex flex-col bg-ivory",
          usePinScroll
            ? "sticky top-0 h-[100svh] overflow-hidden"
            : "relative py-10 md:py-14",
        )}
      >
        <div
          className={cn(
            "flex shrink-0 items-end justify-between px-6 pb-5 md:px-14 md:pb-6",
            usePinScroll ? "pt-24 md:pt-28" : "pt-2",
          )}
        >
          <div className="min-w-0">
            <p className="chapter">The work</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,6vw,3.75rem)] italic leading-tight">
              Six rooms. One skyline.
            </h2>
          </div>
          <p className="hidden max-w-[11rem] shrink-0 text-right text-sm text-copper md:block">
            {usePinScroll
              ? "Keep scrolling. The rooms move with you."
              : "Swipe sideways. The work is not a tidy grid."}
          </p>
        </div>

        <div
          className={cn(
            "min-h-0",
            usePinScroll
              ? "flex-1 overflow-hidden pb-6"
              : "overflow-x-auto overscroll-x-contain pb-4 [-webkit-overflow-scrolling:touch]",
          )}
        >
          <div
            ref={trackRef}
            className={cn(
              "flex items-stretch gap-4 px-6 md:items-end md:gap-6 md:px-14",
              !usePinScroll && "snap-x snap-mandatory",
            )}
            style={
              usePinScroll
                ? {
                    width: "max-content",
                    height: "100%",
                    willChange: "transform",
                  }
                : { width: "max-content" }
            }
          >
            {programs.map((program, index) => (
              <article
                key={program.n}
                className={cn(
                  "group relative flex shrink-0 snap-start flex-col overflow-hidden bg-brown-ink text-ivory",
                  usePinScroll
                    ? "h-[min(58svh,560px)] w-[min(36vw,420px)]"
                    : "h-[min(70vh,560px)] w-[min(82vw,360px)] sm:w-[min(70vw,380px)]",
                  usePinScroll && index % 3 === 1 && "md:mb-8",
                  usePinScroll && index % 3 === 2 && "md:mb-3",
                )}
              >
                <div className="relative min-h-0 flex-[1.05] overflow-hidden bg-brown-ink">
                  <Photo
                    src={program.image}
                    alt=""
                    vivid
                    fit={"showFull" in program && program.showFull ? "contain" : "cover"}
                    className={cn(
                      "absolute inset-0",
                      "showFull" in program && program.showFull
                        ? "brand-photo--integrate-ink"
                        : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]",
                    )}
                    sizes="(min-width: 768px) 36vw, 82vw"
                  />
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-0",
                      "showFull" in program && program.showFull
                        ? "bg-gradient-to-t from-brown-ink/80 via-transparent to-transparent"
                        : "bg-gradient-to-t from-brown-ink via-transparent to-brown-ink/25",
                    )}
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-2.5 md:left-6 md:top-6 md:gap-3">
                    <span className="grid size-10 place-items-center rounded-full border border-gold/70 bg-brown-ink/55 text-[0.58rem] uppercase tracking-[0.2em] text-gold backdrop-blur-[2px] md:size-11 md:text-[0.62rem]">
                      {program.n}
                    </span>
                    <span className="text-[0.58rem] uppercase tracking-[0.28em] text-ivory/80 md:text-[0.62rem] md:tracking-[0.32em]">
                      Room
                    </span>
                  </div>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent md:inset-x-6"
                  />
                </div>

                <div className="relative flex min-h-0 flex-1 flex-col justify-between gap-4 px-4 py-5 md:gap-5 md:px-6 md:py-7">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-2 top-2 font-display text-[4.5rem] leading-none text-white/[0.06] italic md:text-[5.5rem]"
                  >
                    {program.n}
                  </div>

                  <div className="relative min-w-0">
                    <p className="text-[0.58rem] uppercase tracking-[0.28em] text-gold md:text-[0.62rem]">
                      {program.n} / 06
                    </p>
                    <h3 className="mt-2 max-w-[14ch] font-display text-[1.55rem] italic leading-[1.05] tracking-tight md:mt-3 md:text-[2.15rem]">
                      {program.title}
                    </h3>
                    <p className="mt-3 line-clamp-4 max-w-sm text-sm leading-relaxed text-ivory/80 md:mt-4 md:line-clamp-none md:text-[0.95rem]">
                      {program.copy}
                    </p>
                  </div>

                  <Link
                    href="/programs"
                    className="relative inline-flex w-fit items-center gap-2 border border-gold/50 bg-gold/10 px-3.5 py-2 text-[0.6rem] uppercase tracking-[0.22em] text-gold transition-[background,border-color,color,transform] duration-500 hover:border-gold hover:bg-gold hover:text-brown-ink md:gap-3 md:px-4 md:py-2.5 md:text-[0.64rem] md:tracking-[0.24em]"
                  >
                    Enter the room
                    <svg
                      aria-hidden
                      viewBox="0 0 24 12"
                      className="h-2.5 w-5"
                      fill="none"
                    >
                      <path
                        d="M1 9 C7 2, 17 2, 23 9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <circle cx="12" cy="4.2" r="1.5" fill="currentColor" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
