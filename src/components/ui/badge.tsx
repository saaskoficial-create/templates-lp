import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]",
        "border-white/12 bg-white/6 text-[var(--accent)]",
        className,
      )}
      {...props}
    />
  );
}
