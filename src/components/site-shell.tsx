import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Intro } from "@/components/intro";
import { LivingHorizon } from "@/components/living-horizon";
import { MenuCloser } from "@/components/menu-closer";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <MenuCloser />
      <Intro />
      <Header />
      <LivingHorizon />
      <main id="content" className="relative z-[2] flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
