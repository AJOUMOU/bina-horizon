"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MenuCloser() {
  const pathname = usePathname();

  useEffect(() => {
    const el = document.getElementById("bh-menu") as HTMLInputElement | null;
    if (el?.checked) el.checked = false;
  }, [pathname]);

  return null;
}
