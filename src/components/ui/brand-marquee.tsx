"use client";

import Image from "next/image";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type BrandMarqueeProps = React.ComponentProps<"div"> & {
  label?: string;
};

const items = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  label: "SAASK",
}));

export function BrandMarquee({
  className,
  label = "SAASK",
  ...props
}: BrandMarqueeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-white/10 bg-[rgba(8,13,24,0.48)] py-3 backdrop-blur-md md:py-4",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,rgba(8,13,24,0.96),rgba(8,13,24,0))]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,rgba(8,13,24,0.96),rgba(8,13,24,0))]" />

      <InfiniteSlider gap={20} duration={20} durationOnHover={32} className="py-1">
        {items.map((item) => (
          <div
            key={`${label}-${item.id}`}
            className="flex items-center rounded-full border border-white/8 bg-white/[0.04] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <div className="flex size-10 items-center justify-center overflow-hidden rounded-full border border-cyan-300/18 bg-[#040810] md:size-12">
              <Image
                src="/saask-favicon-preto.jpeg"
                alt={`${label} simbolo`}
                width={48}
                height={48}
                className="size-full object-cover"
              />
            </div>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
