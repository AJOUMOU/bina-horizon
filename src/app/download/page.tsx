import type { Metadata } from "next";
import { AutoDownload } from "@/components/auto-download";

export const metadata: Metadata = {
  title: "Download source",
};

export default function DownloadPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center px-6 py-16">
      <AutoDownload href="/api/source" />
      <p className="chapter">Source code</p>
      <h1 className="mt-4 font-display text-5xl italic leading-[0.95] text-brown md:text-7xl">
        Your download is starting.
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/80">
        The browser should save <strong>bina-horizon-source.zip</strong> to
        your Downloads folder (or Desktop, if that is your browser’s default).
        I cannot place files on your computer myself from this session.
      </p>
      <a
        href="/api/source"
        download="bina-horizon-source.zip"
        className="btn-rise relative mt-10 inline-flex h-14 w-fit items-center justify-center bg-gold px-8 text-[0.72rem] uppercase tracking-[0.22em] text-brown-ink"
      >
        Download again
      </a>
      <p className="mt-8 text-sm text-copper">
        Then: unzip → <code className="text-brown">npm install</code> →{" "}
        <code className="text-brown">npm run dev</code> → localhost:4327
      </p>
    </div>
  );
}
