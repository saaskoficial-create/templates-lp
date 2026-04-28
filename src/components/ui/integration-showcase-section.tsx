"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  Cable,
  ChartColumnBig,
  Check,
  Database,
  MessageSquareMore,
  Workflow,
} from "lucide-react";
import type { CustomLandingContent } from "@/content/custom-landing";

const baseNodes = [
  {
    id: "crm",
    label: "CRM",
    icon: ChartColumnBig,
    x: 19.74,
    y: 29.5,
    path: "M 152 140 Q 220 162 304 188",
  },
  {
    id: "automation",
    label: "Automacao",
    icon: Workflow,
    x: 19.74,
    y: 64.5,
    path: "M 152 274 Q 220 252 304 220",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageSquareMore,
    x: 80.26,
    y: 29.5,
    path: "M 456 140 Q 388 162 304 188",
  },
  {
    id: "ai",
    label: "IA",
    icon: Bot,
    x: 80.26,
    y: 64.5,
    path: "M 456 274 Q 388 252 304 220",
  },
  {
    id: "dados",
    label: "Dados",
    icon: Database,
    x: 50,
    y: 11,
    path: "M 304 86 Q 304 126 304 176",
  },
  {
    id: "integracoes",
    label: "Integracoes",
    icon: Cable,
    x: 50,
    y: 86,
    path: "M 304 290 Q 304 254 304 232",
  },
];

function BenefitItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-4 py-1.5">
      <span
        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: "var(--accent)", color: "var(--background)" }}
      >
        <Check className="size-4" />
      </span>
      <span className="text-sm text-slate-200 sm:text-base">{children}</span>
    </li>
  );
}

function Node({
  label,
  icon: Icon,
  x,
  y,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
}) {
  return (
    <div
      className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="flex size-14 items-center justify-center rounded-full border border-white/12 bg-white/[0.09] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_20px_35px_-24px_rgba(2,6,23,0.95)] backdrop-blur-xl">
        <Icon className="size-6 text-white" />
      </div>
      <span className="rounded-full border border-white/10 bg-white/[0.08] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-300 backdrop-blur-md">
        {label}
      </span>
    </div>
  );
}

export function IntegrationShowcaseSection({
  content,
}: {
  content: CustomLandingContent["integration"];
}) {
  const nodes = [
    { ...baseNodes[0], label: content.nodeLabels.crm },
    { ...baseNodes[1], label: content.nodeLabels.automation },
    { ...baseNodes[2], label: content.nodeLabels.whatsapp },
    { ...baseNodes[3], label: content.nodeLabels.ai },
    { ...baseNodes[4], label: content.nodeLabels.dados },
    { ...baseNodes[5], label: content.nodeLabels.integracoes },
  ];
  return (
    <section className="section-block relative">
      <div className="layout-container lg:flex lg:items-center lg:gap-10 xl:gap-12">
        <div className="max-w-[38rem] px-1 sm:px-0">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 backdrop-blur-md"
            style={{ border: "1px solid color-mix(in srgb, var(--accent) 20%, white 8%)" }}
          >
            <Cable className="h-4 w-4" style={{ color: "var(--accent)" }} />
            <span
              className="text-xs font-medium"
              style={{ color: "color-mix(in srgb, var(--accent) 62%, white 28%)" }}
            >
              {content.eyebrow}
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:mb-6 md:text-4xl lg:text-[2.8rem] lg:leading-[1.15]">
            {content.title}
          </h2>

          <p className="mb-8 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            {content.description}
          </p>

          <ul className="mb-8 max-w-[28rem] space-y-3 sm:mb-10 md:mb-12">
            {content.benefits.map((item) => (
              <BenefitItem key={item}>{item}</BenefitItem>
            ))}
          </ul>

          <Link
            href={content.ctaHref}
            className="inline-flex h-11 items-center justify-center rounded-full px-7 text-sm font-semibold transition"
            style={{ backgroundColor: "var(--accent)", color: "var(--background)" }}
          >
            {content.ctaLabel}
          </Link>
        </div>

        <div className="mt-14 w-full lg:ml-auto lg:mt-0 lg:max-w-[35rem] xl:max-w-[37rem]">
          <p className="mx-auto mb-10 max-w-[24rem] px-2 text-center text-sm leading-7 text-slate-400 sm:px-0 md:mb-12">
            {content.diagramDescription}
          </p>

          <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-[36px] border border-white/8 bg-[linear-gradient(180deg,rgba(10,16,28,0.9),rgba(8,13,24,0.95))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_30px_60px_-34px_rgba(2,6,23,0.95)] backdrop-blur-xl md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_58%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_72%)]" />

            <div className="relative mx-auto aspect-[608/400] w-full max-w-[35rem]">
              <svg
                fill="none"
                width="608"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 608 400"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="integration-line" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop stopColor="var(--accent)" stopOpacity="0" />
                    <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="var(--accent-strong)" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {nodes.map((node) => (
                  <g key={node.id}>
                    <path
                      d={node.path}
                      stroke="rgba(148,163,184,0.16)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d={node.path}
                      stroke="url(#integration-line)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                ))}
              </svg>

              {nodes.map((node) => (
                <Node
                  key={node.id}
                  label={node.label}
                  icon={node.icon}
                  x={node.x}
                  y={node.y}
                />
              ))}

              <div className="absolute left-1/2 top-[47%] z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex size-28 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.08),rgba(3,7,14,0.98)_58%,rgba(2,6,12,1)_100%)] p-4 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.95)]">
                  <div className="absolute inset-[6px] rounded-full border border-white/8" />
                  <Image
                    src={content.logoSrc ?? "/saask-logo.webp"}
                    alt={content.logoAlt ?? "SAASK"}
                    width={140}
                    height={40}
                    className="relative z-10 h-auto w-24 object-contain brightness-[1.03]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center border-t border-white/8 pt-5">
            <p className="text-center text-sm text-slate-400">
              {content.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
