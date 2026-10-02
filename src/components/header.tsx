import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/content";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-[110]">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[130] focus:bg-gold focus:px-4 focus:py-2 focus:text-brown-ink"
      >
        Skip to content
      </a>

      <input id="bh-menu" type="checkbox" className="peer sr-only" />

      <nav
        className="fixed inset-0 z-[100] overflow-y-auto bg-brown-ink text-ivory opacity-0 pointer-events-none invisible transition-opacity duration-500 peer-checked:visible peer-checked:pointer-events-auto peer-checked:opacity-100"
        aria-label="Primary"
      >
        <div className="flex min-h-full flex-col justify-between px-6 pb-10 pt-32 md:px-16">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-baseline gap-5 border-b border-white/10 py-3 md:py-4"
                >
                  <span className="w-10 text-[0.68rem] tracking-[0.28em] text-gold">
                    {item.index}
                  </span>
                  <span className="menu-link font-display text-[11vw] leading-[0.9] italic tracking-tight text-ivory md:text-7xl">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-md text-sm leading-relaxed text-ivory/60">
            Brown for grounding. Gold for excellence. A faith-inspired movement
            raising young African women who are not only talented — but
            profoundly impactful.
          </p>
        </div>
      </nav>

      <div
        className="relative z-[120] grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 bg-ivory px-3 py-2 peer-checked:bg-transparent peer-checked:[&_.logo-on-light]:invisible peer-checked:[&_.logo-on-dark]:visible peer-checked:[&_.join-cta]:border-ivory/40 peer-checked:[&_.join-cta]:bg-transparent peer-checked:[&_.join-cta]:text-ivory peer-checked:[&_.join-cta:hover]:border-gold peer-checked:[&_.join-cta:hover]:bg-gold peer-checked:[&_.join-cta:hover]:text-brown-ink peer-checked:[&_.line-a]:translate-y-[5.5px] peer-checked:[&_.line-a]:rotate-45 peer-checked:[&_.line-b]:-translate-y-[5.5px] peer-checked:[&_.line-b]:-rotate-45 md:gap-4 md:px-10"
      >
        <Link href="/" className="relative min-w-0 justify-self-start">
          <span className="logo-on-light block h-9 max-w-[7.5rem] md:h-14 md:max-w-none">
            <Logo
              size="sm"
              priority
              className="h-full max-w-full [&_img]:h-full [&_img]:w-auto [&_img]:max-w-full"
            />
          </span>
          <span className="logo-on-dark invisible absolute inset-0 block h-9 max-w-[7.5rem] md:h-14 md:max-w-none">
            <Logo
              inverted
              size="sm"
              className="h-full max-w-full [&_img]:h-full [&_img]:w-auto [&_img]:max-w-full"
            />
          </span>
        </Link>

        <label
          htmlFor="bh-menu"
          data-cursor="gold"
          className="sun-menu relative z-[121] mx-auto grid size-12 shrink-0 cursor-pointer place-items-center rounded-full bg-gold text-brown-ink shadow-[0_0_0_8px_rgba(217,162,27,0.18)] md:size-14"
        >
          <span className="sr-only">Menu</span>
          <span className="relative flex h-3 w-5 flex-col items-center justify-between">
            <span className="line-a h-px w-5 origin-center bg-brown-ink transition-transform duration-500" />
            <span className="line-b h-px w-5 origin-center bg-brown-ink transition-transform duration-500" />
          </span>
        </label>

        <Link
          href="/join"
          className="join-cta group inline-flex min-w-0 max-w-full justify-self-end items-center gap-1.5 border border-gold bg-gold px-2.5 py-1.5 text-[0.58rem] uppercase tracking-[0.18em] text-brown-ink transition-[background,border-color,color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-gold-soft hover:shadow-[0_12px_28px_-16px_rgba(90,50,24,0.7)] sm:gap-2 sm:px-3.5 sm:py-2 sm:text-[0.62rem] md:gap-2.5 md:px-5 md:py-2.5 md:text-[0.68rem] md:tracking-[0.22em]"
        >
          <span className="hidden truncate sm:inline">Join the horizon</span>
          <span className="sm:hidden">Join</span>
          <svg
            aria-hidden
            viewBox="0 0 24 12"
            className="hidden h-2.5 w-5 shrink-0 transition-transform duration-500 group-hover:translate-x-0.5 sm:block"
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
    </header>
  );
}
