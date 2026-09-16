"use client";

import { useEffect } from "react";

export function AutoDownload({ href }: { href: string }) {
  useEffect(() => {
    const t = window.setTimeout(() => {
      window.location.assign(href);
    }, 400);
    return () => window.clearTimeout(t);
  }, [href]);

  return null;
}
