import Image from "next/image";
import { cn } from "@/lib/utils";

export function Photo({
  src,
  alt,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  fit = "cover",
  vivid = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** cover crops to fill; contain shows the full image */
  fit?: "cover" | "contain";
  /** keep natural color (skip brand grayscale wash) */
  vivid?: boolean;
}) {
  return (
    <div
      className={cn(
        "brand-photo",
        fit === "contain" && "brand-photo--contain",
        vivid && "brand-photo--vivid",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={fit === "contain" ? "object-contain" : "object-cover"}
      />
    </div>
  );
}
