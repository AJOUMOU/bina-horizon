import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  size?: "sm" | "md" | "lg";
  mark?: boolean;
  priority?: boolean;
};

const sizes = {
  sm: { width: 140, height: 87 },
  md: { width: 180, height: 112 },
  lg: { width: 240, height: 150 },
} as const;

const markSizes = {
  sm: { width: 40, height: 40 },
  md: { width: 56, height: 56 },
  lg: { width: 72, height: 72 },
} as const;

export function Logo({
  className,
  inverted = false,
  size = "sm",
  mark = false,
  priority = false,
}: LogoProps) {
  const dim = mark ? markSizes[size] : sizes[size];
  const src = `/brand/bina-horizon-${mark ? "mark" : "logo"}${inverted ? "-light" : ""}.svg`;

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={src}
        alt="Bina Horizon — Talented for Impact"
        width={dim.width}
        height={dim.height}
        className="h-auto w-auto max-w-full object-contain"
        priority={priority}
      />
    </span>
  );
}
