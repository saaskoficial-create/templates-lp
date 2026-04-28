import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)] disabled:pointer-events-none disabled:opacity-50 ring-offset-transparent",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--accent)] text-[color:var(--background)] shadow-[0_18px_40px_-22px_var(--accent)] hover:bg-[var(--accent-strong)]",
        destructive:
          "bg-red-500 text-white shadow-[0_18px_40px_-22px_rgba(239,68,68,0.6)] hover:bg-red-400",
        outline:
          "border border-white/14 bg-white/6 text-[var(--foreground)] hover:bg-white/10",
        secondary:
          "border border-white/12 bg-white/6 text-[var(--foreground)] hover:bg-white/10",
        ghost: "text-[var(--accent)] hover:text-[var(--accent-strong)] hover:bg-white/6",
        link: "text-[var(--accent)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-12 rounded-full px-6 text-sm",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
