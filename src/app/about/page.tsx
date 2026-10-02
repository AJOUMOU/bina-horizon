import type { Metadata } from "next";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { brand, founderVision, governance, nameMeaning } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Name",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden px-6 pb-10 pt-10 md:px-14 md:pt-20">
        <p className="chapter">01 — The Name</p>
        <h1 className="mt-5 max-w-5xl font-display text-[12vw] italic leading-[0.88] tracking-tight text-brown md:text-8xl">
          First, see clearly.
          <span className="mt-2 block text-copper">Then walk further.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-charcoal/80">
          Bina Horizon Association is a non-profit, faith-inspired house for
          girls and young women. Education, mentorship, skill-building, and
          spiritual grounding — not four programmes taped together. One long
          becoming.
        </p>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative overflow-hidden bg-brown px-6 py-20 text-ivory md:px-14 md:py-28">
          <p className="pointer-events-none absolute -left-4 top-8 font-display text-[42vw] leading-none text-white/[0.05] italic">
            B
          </p>
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">
              {nameMeaning.bina.origin}
            </p>
            <h2 className="relative mt-4 font-display text-7xl italic md:text-8xl">
              {nameMeaning.bina.word}
            </h2>
            <p className="mt-4 font-display text-2xl text-gold italic">
              {nameMeaning.bina.meaning}
            </p>
            <p className="mt-8 max-w-md leading-relaxed text-ivory/80">
              {nameMeaning.bina.copy} We will not raise girls who can only
              perform. We will raise women who can discern.
            </p>
          </Reveal>
        </div>
        <div className="relative min-h-[460px] overflow-hidden bg-[#f3e6cf] px-6 py-20 md:px-14 md:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-[58%] h-px bg-gold" />
          <div className="sun-live pointer-events-none absolute left-[36%] top-[58%] size-14 -translate-y-1/2 rounded-full bg-gold" />
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-copper">
              {nameMeaning.horizon.origin}
            </p>
            <h2 className="relative mt-4 font-display text-6xl italic text-brown md:text-8xl">
              {nameMeaning.horizon.word}
            </h2>
            <p className="mt-4 font-display text-2xl text-copper italic">
              {nameMeaning.horizon.meaning}
            </p>
            <p className="relative mt-8 max-w-md leading-relaxed text-charcoal/80">
              {nameMeaning.horizon.copy} Together they are a girl becoming more
              than her map.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid gap-10 px-6 py-24 md:px-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="chapter">Vision</p>
          <h2 className="mt-4 font-display text-4xl italic text-brown md:text-5xl">
            One million lives.
            <span className="mt-2 block text-copper">Ten years.</span>
            <span className="mt-2 block">No theatre.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-8">
          <p className="font-display text-2xl italic leading-snug text-brown md:text-4xl">
            {brand.vision}
          </p>
          <p className="mt-10 text-lg leading-relaxed text-charcoal/75">
            {brand.mission}
          </p>
        </Reveal>
      </section>

      <section className="grid bg-ivory lg:grid-cols-[0.9fr_1.1fr]">
        <Photo
          src="/images/wandia-full.jpg"
          alt="Wandia Remedy — Founder & Visionary Leader"
          fit="contain"
          className="brand-photo--integrate min-h-[640px] lg:min-h-[820px]"
        />
        <div className="flex flex-col justify-center bg-ivory px-6 py-16 md:px-14">
          <p className="chapter">Founder</p>
          <h2 className="mt-4 font-display text-6xl italic text-brown md:text-7xl">
            {brand.founder}
          </h2>
          <p className="mt-3 text-[0.72rem] uppercase tracking-[0.3em] text-copper">
            {brand.founderRole}
          </p>
          <blockquote className="mt-8 max-w-xl border-l-2 border-gold pl-6 font-display text-2xl leading-snug italic text-brown md:text-3xl">
            “{founderVision.vision}”
          </blockquote>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal/80">
            At the heart of that vision is Bina Horizon: {founderVision.movement}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80">
            {founderVision.journey}
          </p>
          <p className="mt-8 text-[0.62rem] uppercase tracking-[0.32em] text-copper">
            {founderVision.pillars.join(" · ")}
          </p>
        </div>
      </section>

      <section className="border-t border-copper/30 px-6 py-24 md:px-14">
        <p className="chapter">How the house is held</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl italic md:text-5xl">
          Governance, without the brochure voice.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {governance.map((g, i) => (
            <article key={g.title} className="border-t border-gold/50 pt-6">
              <p className="font-display text-5xl italic text-gold">0{i + 1}</p>
              <p className="mt-3 text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                {g.person}
              </p>
              <h3 className="mt-2 font-display text-2xl italic text-brown">
                {g.title}
              </h3>
              <p className="mt-4 leading-relaxed text-charcoal/75">{g.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
