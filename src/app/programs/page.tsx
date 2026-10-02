import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { objectives, programs, sdgs } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Work",
};

export default function ProgramsPage() {
  return (
    <div>
      <section className="px-6 pb-8 pt-10 md:px-14 md:pt-20">
        <p className="chapter">02 — The Work</p>
        <h1 className="mt-5 max-w-5xl font-display text-[12vw] italic leading-[0.88] text-brown md:text-8xl">
          Skill in the hands.
          <span className="mt-2 block text-copper">Steel in the spine.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-charcoal/80">
          Four objectives. Six pillars. Not a certificate on a wall — a young
          woman who can speak, earn, pray, and build without asking anyone to
          shrink so she can stand.
        </p>
      </section>

      <section className="px-6 md:px-14">
        {objectives.map((item, i) => (
          <Reveal
            key={item.title}
            className="grid gap-6 border-t border-copper/30 py-12 md:grid-cols-12 md:py-16"
          >
            <p className="font-display text-6xl italic text-gold md:col-span-2">
              0{i + 1}
            </p>
            <h2 className="font-display text-3xl italic text-brown md:col-span-4 md:text-4xl">
              {item.title}
            </h2>
            <p className="max-w-xl leading-relaxed text-charcoal/75 md:col-span-6">
              {item.copy}
            </p>
          </Reveal>
        ))}
      </section>

      <section className="mt-8">
        {programs.map((program, i) => {
          const round = i % 2 === 0;
          return (
            <article
              key={program.n}
              className="grid items-center gap-8 border-t border-copper/20 px-6 py-16 md:px-14 lg:grid-cols-2 lg:gap-16 lg:py-24"
            >
              <Photo
                src={program.image}
                alt=""
                vivid
                fit={"showFull" in program && program.showFull ? "contain" : "cover"}
                className={
                  "showFull" in program && program.showFull
                    ? "brand-photo--integrate min-h-[520px] lg:min-h-[640px]"
                    : round
                      ? "mx-auto aspect-square w-full max-w-md rounded-full ring-2 ring-gold lg:order-2"
                      : "min-h-[420px]"
                }
              />
              <div className={round ? "lg:order-1" : ""}>
                <p className="font-display text-7xl italic text-gold">{program.n}</p>
                <h2 className="mt-3 font-display text-4xl italic text-brown md:text-5xl">
                  {program.title}
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/80">
                  {program.copy}
                </p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="bg-brown px-6 py-24 text-ivory md:px-14">
        <p className="chapter text-gold">UN SDGs, not as stickers</p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sdgs.map((s) => (
            <div key={s.code} className="border-t border-gold/40 pt-5">
              <p className="font-display text-5xl italic text-gold">{s.code}</p>
              <h3 className="mt-3 font-display text-xl italic">{s.title}</h3>
              <p className="mt-2 text-sm text-ivory/60">{s.area}</p>
            </div>
          ))}
        </div>
        <Button asChild className="mt-14" variant="gold">
          <Link href="/join">Bring a skill. Bring a girl. Bring yourself.</Link>
        </Button>
      </section>
    </div>
  );
}
