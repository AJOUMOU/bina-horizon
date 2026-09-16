import { brand } from "@/lib/content";

export function Marquee() {
  const phrase = `${brand.slogan}  ·  ${brand.line}  ·  ${brand.principle}  ·  `;
  const loop = Array.from({ length: 8 }, () => phrase).join(" ");

  return (
    <div className="overflow-hidden border-y border-copper/30 bg-brown text-gold">
      <div className="marquee-track py-3">
        <p className="px-6 text-[0.72rem] uppercase tracking-[0.38em]">{loop}</p>
        <p className="px-6 text-[0.72rem] uppercase tracking-[0.38em]">{loop}</p>
      </div>
    </div>
  );
}
