import Link from "next/link";
import { Logo } from "@/components/logo";
import { brand, nav, sdgs } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-brown-ink text-ivory">
      <div className="px-6 py-16 md:px-12">
        <p className="chapter text-gold">The Horizon Declaration</p>
        <blockquote className="mt-6 max-w-4xl font-display text-3xl leading-[1.15] italic tracking-tight md:text-5xl">
          “{brand.declaration}”
        </blockquote>
        <p className="mt-8 text-[0.72rem] uppercase tracking-[0.32em] text-gold">
          Join Bina Horizon. Be talented for impact.
        </p>
      </div>
      <div className="rule opacity-30" />
      <div className="grid gap-10 px-6 py-12 md:grid-cols-12 md:px-12">
        <div className="md:col-span-4">
          <Logo inverted size="md" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">
            Non-profit. Faith-inspired. Dedicated to education, mentorship,
            skill-building, and spiritual grounding.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="chapter text-gold">Atlas</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="gold-underline text-ivory/85">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-5">
          <p className="chapter text-gold">Aligned with</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {sdgs.map((s) => (
              <div
                key={s.code}
                className="aspect-square border border-gold/40 p-3"
              >
                <p className="font-display text-2xl italic text-gold">{s.code}</p>
                <p className="mt-2 text-[0.62rem] uppercase leading-tight tracking-[0.14em] text-ivory/70">
                  {s.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-t border-white/10 px-6 py-5 text-[0.62rem] uppercase tracking-[0.22em] text-ivory/50 md:flex-row md:items-center md:justify-between md:px-12">
        <p>© {new Date().getFullYear()} Bina Horizon Association</p>
        <p>Founded by {brand.founder}</p>
      </div>
    </footer>
  );
}
