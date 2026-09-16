import Link from "next/link";
import { FiveRs } from "@/components/five-rs";
import { Hills } from "@/components/hills";
import { Marquee } from "@/components/marquee";
import { MillionMark } from "@/components/million-mark";
import { Photo } from "@/components/photo";
import { ProgramRail } from "@/components/program-rail";
import { Reveal } from "@/components/reveal";
import { SunPortrait } from "@/components/sun-portrait";
import { Button } from "@/components/ui/button";
import { brand, nameMeaning } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="overflow-x-clip">
      <section className="relative isolate min-h-[100svh] px-4 pb-28 pt-6 md:px-8 md:pb-36">
        <p className="vertical-label absolute left-3 top-28 hidden text-copper xl:block">
          {brand.slogan}
        </p>

        <div className="relative z-10 mx-auto max-w-[1400px] pt-4 text-center">
          <p className="chapter hero-line">Faith-inspired · African · Association</p>
          <h1 className="mt-4">
            <span className="hero-line display-huge block text-[28vw] text-brown md:text-[13rem]">
              Rise
            </span>
            <span
              className="hero-line -mt-2 block font-display text-[7.5vw] italic text-copper md:-mt-6 md:text-6xl"
              style={{ animationDelay: "0.14s" }}
            >
              beyond the given map
            </span>
          </h1>
        </div>

        <div
          className="relative z-20 mx-auto -mt-4 max-w-[520px] md:-mt-10"
          style={{ animationDelay: "0.28s" }}
        >
          <SunPortrait />
        </div>

        <p
          className="hero-line relative z-10 mx-auto mt-6 max-w-lg text-center text-lg leading-relaxed text-charcoal/80"
          style={{ animationDelay: "0.4s" }}
        >
          {brand.line}. Bina Horizon raises girls who can discern, earn, pray,
          and lead — then hands the light to the next one.
        </p>

        <div
          className="hero-line relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.52s" }}
        >
          <Button asChild size="lg" className="btn-rise">
            <Link href="/join">Write a letter</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">Read the name</Link>
          </Button>
        </div>

        <p className="relative z-10 mt-6 text-center text-[0.62rem] uppercase tracking-[0.32em] text-copper">
          Founded by {brand.founder}
        </p>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
          <Hills className="h-[28vh] w-full md:h-[34vh]" />
        </div>
      </section>

      <Marquee />

      <section className="relative grid min-h-[80vh] md:grid-cols-2">
        <Reveal className="flex flex-col justify-end border-b border-copper/30 px-6 py-20 md:border-r md:px-14 md:py-28">
          <p className="chapter">01 — Hebrew &amp; Sanskrit</p>
          <h2 className="mt-4 font-display text-[18vw] italic leading-[0.8] text-brown md:text-[7.5rem]">
            {nameMeaning.bina.word}
          </h2>
          <p className="mt-3 font-display text-2xl text-gold italic">
            {nameMeaning.bina.meaning}
          </p>
          <p className="mt-8 max-w-md leading-relaxed text-charcoal/80">
            {nameMeaning.bina.copy}
          </p>
        </Reveal>
        <Reveal
          delay={0.08}
          className="relative flex flex-col justify-end overflow-hidden px-6 py-20 md:px-14 md:py-28"
        >
          <div className="pointer-events-none absolute inset-x-0 top-[62%] h-px bg-gold" />
          <div className="sun-live pointer-events-none absolute left-[62%] top-[62%] size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
          <p className="chapter">02 — The line that keeps moving</p>
          <h2 className="mt-4 font-display text-[14vw] italic leading-[0.8] text-brown md:text-[6.2rem]">
            {nameMeaning.horizon.word}
          </h2>
          <p className="mt-3 font-display text-2xl text-copper italic">
            {nameMeaning.horizon.meaning}
          </p>
          <p className="mt-8 max-w-md leading-relaxed text-charcoal/80">
            {nameMeaning.horizon.copy}
          </p>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-brown-ink px-6 py-28 text-ivory md:px-14 md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "url(/patterns/geo.svg)",
            backgroundSize: "160px",
          }}
        />
        <p className="pointer-events-none absolute -right-6 top-0 font-display text-[46vw] leading-none text-white/[0.04] italic">
          BH
        </p>
        <Reveal>
          <p className="chapter text-gold">The Horizon Declaration</p>
          <blockquote className="mt-8 max-w-5xl font-display text-[9vw] leading-[1.05] italic tracking-tight text-ivory md:text-7xl">
            “When a girl rises beyond her boundaries,
            <span className="text-gold"> an entire generation </span>
            rises with her.”
          </blockquote>
          <p className="mt-12 max-w-xl text-ivory/90">
            {brand.principle} {brand.colours}
          </p>
        </Reveal>
      </section>

      <section className="px-6 py-24 md:px-14">
        <Reveal>
          <p className="chapter">A ten-year vow</p>
          <MillionMark />
          <p className="mt-2 max-w-2xl font-display text-3xl italic text-brown md:text-5xl">
            young African women. Wisdom. Skill. Faith. Enough to shape
            communities the world has not met yet.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-copper/30">
        <ProgramRail />
      </section>

      <section className="border-t border-copper/30 px-6 py-24 md:px-14">
        <Reveal>
          <p className="chapter">The Five R’s</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl italic md:text-6xl">
            A spine, not a poster.
          </h2>
          <p className="mt-4 max-w-lg text-charcoal/75">
            Touch a gold point on the arc. Each R is a practice. If you cannot
            live it, do not join it.
          </p>
        </Reveal>
        <div className="mt-8">
          <FiveRs compact />
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/values">Sit with every R</Link>
          </Button>
        </div>
      </section>

      <section className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <Photo
          src="/images/presence.jpg"
          alt="A woman in warm light — the posture of visionary leadership"
          className="min-h-[520px] lg:min-h-[720px]"
        />
        <div className="relative flex flex-col justify-center overflow-hidden bg-brown px-6 py-16 text-ivory md:px-16">
          <p className="pointer-events-none absolute -right-4 bottom-0 font-display text-[40vw] leading-none text-white/[0.05] italic">
            WR
          </p>
          <Reveal>
            <p className="chapter text-gold">Visionary</p>
            <h2 className="mt-4 font-display text-5xl italic md:text-7xl">
              {brand.founder}
            </h2>
            <p className="mt-3 text-[0.72rem] uppercase tracking-[0.3em] text-gold">
              {brand.founderRole}
            </p>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ivory/95">
              Talent without impact is a lamp under a bowl. She built a house
              that puts that lamp in the street — and teaches a million hands
              how to keep it lit.
            </p>
            <Button asChild className="mt-10 w-fit" variant="gold">
              <Link href="/about">The name &amp; the house</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
