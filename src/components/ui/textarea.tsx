import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-36 w-full resize-y border-0 border-b border-copper/50 bg-transparent px-0 py-2 text-base text-charcoal placeholder:text-copper/70 transition-colors focus-visible:border-gold focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
