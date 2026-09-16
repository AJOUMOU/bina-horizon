import type { Metadata } from "next";
import Link from "next/link";
import { FiveRs } from "@/components/five-rs";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { membership } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Five R’s",
};

export default function ValuesPage() {
  return (
    <div>
      <section className="px-6 pb-4 pt-10 md:px-14 md:pt-20">
        <p className="chapter">03 — The Five R’s</p>
        <h1 className="mt-5 max-w-4xl font-display text-[12vw] italic leading-[0.88] text-brown md:text-8xl">
          Five points on one arc.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/80">
          Values on a wall are décor. These are practised: responsibility,
          realization, reverence, rectitude, radiant purpose. Move the sun.
          Sit with the one that stings.
        </p>
      </section>

      <section className="px-4 py-10 md:px-10 md:py-16">
        <FiveRs />
      </section>

      <section className="grid md:grid-cols-3">
        {[
          { k: "Eligibility", v: membership.eligibility },
          { k: "What you receive", v: membership.benefits },
          { k: "What you owe", v: membership.responsibilities },
        ].map((item) => (
          <Reveal
            key={item.k}
            className="border-t border-copper/30 px-6 py-12 md:px-10"
          >
            <p className="chapter">{item.k}</p>
            <p className="mt-5 leading-relaxed text-charcoal/80">{item.v}</p>
          </Reveal>
        ))}
      </section>

      <section className="relative overflow-hidden bg-brown px-6 py-24 text-ivory md:px-14">
        <div className="sun-live pointer-events-none absolute right-[12%] top-10 size-24 rounded-full bg-gold/80" />
        <Reveal>
          <h2 className="relative max-w-3xl font-display text-4xl italic md:text-6xl">
            If the Five R’s feel like a home and not a lecture, write.
          </h2>
          <Button asChild className="relative mt-12" variant="gold">
            <Link href="/join">Join the horizon</Link>
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
