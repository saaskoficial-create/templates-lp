"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

type ShinyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  asChild?: boolean;
};

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, type = "button", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <>
        <style jsx>{`
          @property --gradient-angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }

          @property --gradient-angle-offset {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }

          @property --gradient-percent {
            syntax: "<percentage>";
            initial-value: 5%;
            inherits: false;
          }

          @property --gradient-shine {
            syntax: "<color>";
            initial-value: white;
            inherits: false;
          }

          .shiny-cta {
            --shiny-cta-bg: #08111f;
            --shiny-cta-bg-subtle: rgba(34, 211, 238, 0.24);
            --shiny-cta-fg: #f8fafc;
            --shiny-cta-highlight: #22d3ee;
            --shiny-cta-highlight-subtle: #67e8f9;
            --animation: gradient-angle linear infinite;
            --duration: 3s;
            --shadow-size: 2px;
            --transition: 800ms cubic-bezier(0.25, 1, 0.5, 1);

            isolation: isolate;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            outline-offset: 4px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 3.25rem;
            padding: 1rem 2rem;
            font-size: 1rem;
            line-height: 1.2;
            font-weight: 600;
            border: 1px solid transparent;
            border-radius: 999px;
            color: var(--shiny-cta-fg);
            background:
              linear-gradient(var(--shiny-cta-bg), var(--shiny-cta-bg)) padding-box,
              conic-gradient(
                  from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
                  transparent,
                  var(--shiny-cta-highlight) var(--gradient-percent),
                  var(--gradient-shine) calc(var(--gradient-percent) * 2),
                  var(--shiny-cta-highlight) calc(var(--gradient-percent) * 3),
                  transparent calc(var(--gradient-percent) * 4)
                )
                border-box;
            box-shadow:
              inset 0 0 0 1px var(--shiny-cta-bg-subtle),
              0 18px 40px -28px rgba(34, 211, 238, 0.52);
            transition: var(--transition);
            transition-property: --gradient-angle-offset, --gradient-percent, --gradient-shine,
              transform, box-shadow;
            text-decoration: none;
          }

          .shiny-cta::before,
          .shiny-cta::after,
          .shiny-cta span::before {
            content: "";
            pointer-events: none;
            position: absolute;
            inset-inline-start: 50%;
            inset-block-start: 50%;
            translate: -50% -50%;
            z-index: -1;
          }

          .shiny-cta:active {
            transform: translateY(1px);
          }

          .shiny-cta::before {
            --size: calc(100% - var(--shadow-size) * 3);
            --position: 2px;
            --space: calc(var(--position) * 2);
            width: var(--size);
            height: var(--size);
            background: radial-gradient(
                circle at var(--position) var(--position),
                rgba(255, 255, 255, 0.9) calc(var(--position) / 4),
                transparent 0
              )
              padding-box;
            background-size: var(--space) var(--space);
            background-repeat: space;
            mask-image: conic-gradient(
              from calc(var(--gradient-angle) + 45deg),
              black,
              transparent 10% 90%,
              black
            );
            border-radius: inherit;
            opacity: 0.28;
            z-index: -1;
          }

          .shiny-cta::after {
            --animation: shimmer linear infinite;
            width: 100%;
            aspect-ratio: 1;
            background: linear-gradient(
              -50deg,
              transparent,
              rgba(34, 211, 238, 0.9),
              transparent
            );
            mask-image: radial-gradient(circle at bottom, transparent 40%, black);
            opacity: 0.5;
          }

          .shiny-cta span {
            z-index: 1;
            position: relative;
          }

          .shiny-cta span::before {
            --size: calc(100% + 1rem);
            width: var(--size);
            height: var(--size);
            box-shadow: inset 0 -1ex 2rem 4px rgba(34, 211, 238, 0.55);
            opacity: 0;
            transition: opacity var(--transition);
            animation: calc(var(--duration) * 1.5) breathe linear infinite;
          }

          .shiny-cta,
          .shiny-cta::before,
          .shiny-cta::after {
            animation: var(--animation) var(--duration),
              var(--animation) calc(var(--duration) / 0.4) reverse paused;
            animation-composition: add;
          }

          .shiny-cta:is(:hover, :focus-visible) {
            --gradient-percent: 20%;
            --gradient-angle-offset: 95deg;
            --gradient-shine: var(--shiny-cta-highlight-subtle);
            box-shadow:
              inset 0 0 0 1px var(--shiny-cta-bg-subtle),
              0 22px 48px -28px rgba(34, 211, 238, 0.72);
          }

          .shiny-cta:is(:hover, :focus-visible),
          .shiny-cta:is(:hover, :focus-visible)::before,
          .shiny-cta:is(:hover, :focus-visible)::after {
            animation-play-state: running;
          }

          .shiny-cta:is(:hover, :focus-visible) span::before {
            opacity: 1;
          }

          @keyframes gradient-angle {
            to {
              --gradient-angle: 360deg;
            }
          }

          @keyframes shimmer {
            to {
              rotate: 360deg;
            }
          }

          @keyframes breathe {
            from,
            to {
              scale: 1;
            }
            50% {
              scale: 1.2;
            }
          }

          @media (max-width: 640px) {
            .shiny-cta {
              width: min(100%, 20rem);
              padding: 0.95rem 1.5rem;
              font-size: 0.95rem;
            }
          }
        `}</style>

        <Comp
          {...props}
          {...(!asChild ? { type } : {})}
          ref={ref}
          className={cn("shiny-cta", className)}
        >
          <span>{children}</span>
        </Comp>
      </>
    );
  },
);

ShinyButton.displayName = "ShinyButton";
