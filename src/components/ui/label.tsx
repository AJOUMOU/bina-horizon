import * as React from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "text-[0.68rem] uppercase tracking-[0.28em] text-copper",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
