import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex max-w-full items-center justify-center gap-2 overflow-hidden text-center leading-snug whitespace-normal sm:whitespace-nowrap text-[0.72rem] uppercase tracking-[0.22em] transition-[transform,background,color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4",
  {
    variants: {
      variant: {
        gold: "bg-gold text-brown-ink hover:bg-gold-soft shadow-[0_10px_30px_-18px_rgba(90,50,24,0.8)]",
        brown:
          "bg-brown text-ivory hover:bg-brown-ink border border-transparent",
        outline:
          "border border-copper/70 text-brown bg-transparent hover:border-gold hover:text-brown-ink",
        ghost: "text-brown hover:text-brown-ink",
        ivory: "bg-ivory text-brown hover:bg-white",
      },
      size: {
        default: "min-h-12 px-6 py-3",
        lg: "min-h-14 px-8 py-3",
        sm: "min-h-10 px-4 py-2 text-[0.64rem]",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
