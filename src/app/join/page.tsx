import type { Metadata } from "next";
import { JoinLetter } from "@/components/join-letter";
import { brand, membership, roles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Join the Horizon",
};

export default function JoinPage() {
  return (
    <div className="bg-[#f3e6cf]">
      <section className="px-6 py-14 md:px-14 md:py-20">
        <p className="chapter">04 — Join</p>
        <h1 className="mt-5 max-w-4xl font-display text-[13vw] italic leading-[0.88] text-brown md:text-8xl">
          Do not apply.
          <span className="mt-2 block text-copper">Write.</span>
        </h1>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-charcoal/80">
          {membership.eligibility} Show up. Live the Five R’s. One day turn
          around and mentor the girl behind you.
        </p>
        <ul className="mt-10 space-y-2 text-[0.72rem] uppercase tracking-[0.2em] text-copper">
          {roles.map((role) => (
            <li key={role} className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-gold" />
              {role}
            </li>
          ))}
        </ul>
      </section>

      <section className="px-4 pb-20 md:px-16">
        <JoinLetter />
      </section>

      <section className="bg-brown px-6 py-20 text-ivory md:px-14">
        <p className="max-w-4xl font-display text-4xl italic md:text-6xl">
          “{brand.declaration}”
        </p>
        <p className="mt-8 text-[0.72rem] uppercase tracking-[0.32em] text-gold">
          Join Bina Horizon. Be talented for impact.
        </p>
      </section>
    </div>
  );
}
