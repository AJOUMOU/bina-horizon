import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-12 w-full border-0 border-b border-copper/50 bg-transparent px-0 py-2 text-base text-charcoal placeholder:text-copper/70 transition-colors focus-visible:border-gold focus-visible:outline-none",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
