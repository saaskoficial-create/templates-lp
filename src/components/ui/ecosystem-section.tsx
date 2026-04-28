import Image from "next/image";

import type { CustomLandingContent } from "@/content/custom-landing";
import { cn } from "@/lib/utils";

const ecosystemItems = [
  {
    title: "[Canal com IA]",
    description: "Automatize [atendimento, qualificacao ou suporte] com contexto e continuidade.",
    accent: "#10B981",
    corner: "rounded-tr-2xl rounded-bl-2xl",
  },
  {
    title: "[Canal integrado]",
    description: "Conecte [canais, entradas ou atendimentos] e direcione cada contato com agilidade.",
    accent: "#3B82F6",
    corner: "rounded-tl-2xl rounded-br-2xl",
  },
  {
    title: "[BI e relatorios]",
    description: "Use [dados, metas e indicadores] para decidir com mais clareza.",
    accent: "#8B5CF6",
    corner: "rounded-tr-2xl rounded-bl-2xl",
  },
  {
    title: "[Operacao integrada]",
    description: "Tenha visibilidade em tempo real sobre [pipeline, estoque ou operacao].",
    accent: "#EF4444",
    corner: "rounded-tl-2xl rounded-br-2xl",
  },
  {
    title: "[Campanhas e automacoes]",
    description: "Automatize jornadas para acelerar [ativacao] e [vendas].",
    accent: "#F59E0B",
    corner: "rounded-tr-2xl rounded-bl-2xl",
  },
  {
    title: "[Pos-venda]",
    description: "Mantenha relacionamento continuo com [clientes] e aumente [retencao].",
    accent: "#06B6D4",
    corner: "rounded-tl-2xl rounded-br-2xl",
  },
  {
    title: "[CRM ou tarefas]",
    description: "De ao time mais clareza sobre [prioridades, etapas e proximas acoes].",
    accent: "#84CC16",
    corner: "rounded-tr-2xl rounded-bl-2xl",
  },
];

function EcosystemCard({
  title,
  description,
  accent,
  corner,
  className,
}: {
  title: string;
  description: string;
  accent: string;
  corner: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex min-h-[8.5rem] flex-col justify-center overflow-hidden border border-white/10 bg-white/4 p-4 text-left transition-all duration-300 ease-out hover:shadow-lg hover:shadow-black/10 md:p-5",
        corner,
        className,
      )}
      style={{ borderColor: "color-mix(in srgb, var(--accent) 12%, white 10%)" }}
    >
      <div
        className="absolute left-0 top-4 h-8 w-1 rounded-r-full opacity-80 transition-all duration-300 group-hover:h-10 group-hover:opacity-100"
        style={{ backgroundColor: accent }}
      />
      <h3 className="mb-2 text-sm font-semibold text-white sm:text-base">{title}</h3>
      <p className="text-xs leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
        {description}
      </p>
    </div>
  );
}

export function EcosystemSection({
  content,
}: {
  content: CustomLandingContent["ecosystem"];
}) {
  const mergedItems = ecosystemItems.map((item, index) => ({
    ...item,
    title: content.items[index]?.title ?? item.title,
    description: content.items[index]?.description ?? item.description,
  }));
  const leftItems = mergedItems.slice(0, 2);
  const rightItems = mergedItems.slice(2, 4);
  const bottomItems = mergedItems.slice(4);

  return (
    <section className="section-block relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 10%, transparent), transparent 58%)" }}
        />
      </div>

      <div className="layout-container relative z-10 text-center">
        <div className="mb-14 sm:mb-10">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {content.title}
          </h2>
          <div className="mb-4 flex justify-center">
            <Image
              src={content.logoSrc ?? "/saask-logo.webp"}
              alt={content.logoAlt ?? "SAASK"}
              width={210}
              height={58}
              className="h-8 w-auto object-contain sm:h-10"
            />
          </div>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {content.description}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
          {mergedItems.map((item) => (
            <EcosystemCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mx-auto hidden w-full max-w-6xl lg:block">
          <div className="rounded-[40px] border border-white/6 px-8 py-10">
            <div className="grid items-center gap-6 xl:grid-cols-[1fr_19rem_1fr]">
              <div className="grid gap-4">
                {leftItems.map((item) => (
                  <EcosystemCard key={item.title} {...item} />
                ))}
              </div>

              <div className="relative flex min-h-[23rem] items-center justify-center">
                <div className="absolute inset-0 rounded-[36px] border border-white/6" />
                <div
                  className="absolute inset-6 rounded-[30px]"
                  style={{ border: "1px solid color-mix(in srgb, var(--accent) 12%, white 4%)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 14%, transparent), transparent 62%)" }}
                />
                <div
                  className="relative z-10 flex h-60 w-60 flex-col items-center justify-center gap-4 rounded-[48px] border border-white/10 px-6 text-center shadow-[0_28px_80px_-30px_rgba(2,6,23,0.9)]"
                  style={{ background: "radial-gradient(circle at top, color-mix(in srgb, var(--accent) 18%, transparent), rgba(9,17,31,0.96) 68%)" }}
                >
                  <span
                    className="inline-flex rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.24em]"
                    style={{
                      border: "1px solid color-mix(in srgb, var(--accent) 20%, white 8%)",
                      backgroundColor: "color-mix(in srgb, var(--accent) 8%, transparent)",
                      color: "color-mix(in srgb, var(--accent) 62%, white 28%)",
                    }}
                  >
                    {content.centerTag}
                  </span>
                  <Image
                    src={content.logoSrc ?? "/saask-logo.webp"}
                    alt={content.logoAlt ?? "SAASK"}
                    width={180}
                    height={48}
                    className="h-auto w-36 object-contain"
                  />
                  <p className="text-xs leading-6 text-slate-400">
                    {content.centerDescription}
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {rightItems.map((item) => (
                  <EcosystemCard key={item.title} {...item} />
                ))}
              </div>
            </div>

            <div className="mt-6 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />

            <div className="mt-6 grid grid-cols-3 gap-4">
              {bottomItems.map((item) => (
                <EcosystemCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
