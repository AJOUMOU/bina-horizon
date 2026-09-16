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
  const [pinHeight, setPinHeight] = useState("auto");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setPinHeight("auto");
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
  }, [reduceMotion]);

  return (
    <div
      ref={pinRef}
      className="relative"
      style={reduceMotion ? undefined : { height: pinHeight }}
    >
      <div
        className={cn(
          "flex flex-col bg-ivory",
          reduceMotion ? "relative" : "sticky top-0 h-[100svh] overflow-hidden",
        )}
      >
        <div className="flex shrink-0 items-end justify-between px-6 pb-5 pt-14 md:px-14 md:pb-6 md:pt-16">
          <div>
            <p className="chapter">The work</p>
            <h2 className="mt-3 font-display text-4xl italic md:text-6xl">
              Six rooms. One skyline.
            </h2>
          </div>
          <p className="hidden max-w-[11rem] text-right text-sm text-copper md:block">
            {reduceMotion
              ? "Slide sideways. The work is not a tidy grid."
              : "Keep scrolling. The rooms move with you."}
          </p>
        </div>

        <div
          className={cn(
            "min-h-0 flex-1",
            reduceMotion ? "overflow-x-auto pb-8" : "overflow-hidden pb-6",
          )}
        >
          <div
            ref={trackRef}
            className={cn(
              "flex items-end gap-5 px-6 md:gap-6 md:px-14",
              reduceMotion && "h-auto",
            )}
            style={
              reduceMotion
                ? undefined
                : {
                    width: "max-content",
                    height: "100%",
                    willChange: "transform",
                  }
            }
          >
            {programs.map((program, index) => (
              <article
                key={program.n}
                className={cn(
                  "group relative flex shrink-0 flex-col overflow-hidden bg-brown-ink text-ivory",
                  reduceMotion
                    ? "h-[min(72vh,620px)] w-[min(85vw,380px)]"
                    : "h-[min(64svh,600px)] w-[min(84vw,400px)] md:w-[min(36vw,420px)]",
                  // Skyline stagger — rooms sit at different heights
                  !reduceMotion && index % 3 === 1 && "md:mb-8",
                  !reduceMotion && index % 3 === 2 && "md:mb-3",
                )}
              >
                {/* Image plane */}
                <div className="relative min-h-0 flex-[1.15] overflow-hidden">
                  <Photo
                    src={program.image}
                    alt=""
                    className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    sizes="(min-width: 768px) 36vw, 84vw"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brown-ink via-transparent to-brown-ink/25"
                  />
                  <div className="absolute left-5 top-5 flex items-center gap-3 md:left-6 md:top-6">
                    <span className="grid size-11 place-items-center rounded-full border border-gold/70 bg-brown-ink/55 text-[0.62rem] uppercase tracking-[0.2em] text-gold backdrop-blur-[2px]">
                      {program.n}
                    </span>
                    <span className="text-[0.62rem] uppercase tracking-[0.32em] text-ivory/80">
                      Room
                    </span>
                  </div>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent md:inset-x-6"
                  />
                </div>

                {/* Content plane */}
                <div className="relative flex flex-[0.95] flex-col justify-between gap-5 px-5 py-6 md:px-6 md:py-7">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-2 top-2 font-display text-[5.5rem] leading-none text-white/[0.06] italic"
                  >
                    {program.n}
                  </div>

                  <div className="relative">
                    <p className="text-[0.62rem] uppercase tracking-[0.28em] text-gold">
                      {program.n} / 06
                    </p>
                    <h3 className="mt-3 max-w-[14ch] font-display text-[1.85rem] italic leading-[1.05] tracking-tight md:text-[2.15rem]">
                      {program.title}
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/80 md:text-[0.95rem]">
                      {program.copy}
                    </p>
                  </div>

                  <Link
                    href="/programs"
                    className="relative inline-flex w-fit items-center gap-3 border border-gold/50 bg-gold/10 px-4 py-2.5 text-[0.64rem] uppercase tracking-[0.24em] text-gold transition-[background,border-color,color,transform] duration-500 hover:border-gold hover:bg-gold hover:text-brown-ink"
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
