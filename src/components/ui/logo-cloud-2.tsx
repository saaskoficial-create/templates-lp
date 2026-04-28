import { PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  const normalizedLogos = [...logos];
  while (normalizedLogos.length < 8) {
    normalizedLogos.push(...logos);
  }

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 overflow-hidden rounded-[28px] border border-white/10 md:grid-cols-4",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-white/10 md:top-auto md:bottom-1/2" />

      {normalizedLogos.slice(0, 8).map((logo, index) => (
        <LogoCard
          key={`${logo.alt}-${index}`}
          className={cn(
            "relative border-white/10 bg-white/[0.03]",
            index % 2 === 0 && "bg-white/[0.05]",
            index < 4 && "border-b",
            index % 2 === 0 && "border-r md:border-r",
            index % 4 !== 3 && "md:border-r",
          )}
          logo={logo}
        >
          {index === 0 && (
            <PlusIcon
              className="absolute -bottom-3 -right-3 z-10 size-6 text-white/45"
              strokeWidth={1}
            />
          )}
          {index === 2 && (
            <>
              <PlusIcon
                className="absolute -bottom-3 -right-3 z-10 size-6 text-white/45"
                strokeWidth={1}
              />
              <PlusIcon
                className="absolute -bottom-3 -left-3 z-10 hidden size-6 text-white/45 md:block"
                strokeWidth={1}
              />
            </>
          )}
          {index === 4 && (
            <PlusIcon
              className="absolute -bottom-3 -right-3 z-10 size-6 text-white/45 md:hidden"
              strokeWidth={1}
            />
          )}
        </LogoCard>
      ))}
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex min-h-28 items-center justify-center px-4 py-8 md:min-h-32 md:p-8",
        className,
      )}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={logo.alt}
        className="pointer-events-none h-4 select-none opacity-90 brightness-0 invert md:h-5"
        height={logo.height || undefined}
        src={logo.src}
        width={logo.width || undefined}
      />
      {children}
    </div>
  );
}
