"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type GalleryHoverCarouselItem = {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
};

const defaultItems: GalleryHoverCarouselItem[] = [
  {
    id: "dashboard-1",
    title: "[Dashboard principal]",
    summary: "Visao geral de [processo principal], indicadores e atividades em tempo real.",
    url: "#template-recursos",
    image:
      "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/dashboard-02.png",
  },
  {
    id: "dashboard-2",
    title: "[Relatorios executivos]",
    summary: "Cards, graficos e comparativos para dar mais previsibilidade a operacao.",
    url: "#template-recursos",
    image:
      "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/dashboard-gradient.png",
  },
  {
    id: "dashboard-3",
    title: "[Fluxos e automacoes]",
    summary: "Mostre como [gatilhos], [tarefas] e [acoes] podem rodar no mesmo sistema.",
    url: "#template-recursos",
    image:
      "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/featured-01.png",
  },
  {
    id: "dashboard-4",
    title: "[Analise por canal]",
    summary: "Uma tela para visualizar impacto de [integracoes], [campanhas] e [fontes].",
    url: "#template-recursos",
    image:
      "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/featured-06.png",
  },
  {
    id: "dashboard-5",
    title: "[Painel de performance]",
    summary: "Ideal para simular uma tela premium de software com dados, modulos e acompanhamento.",
    url: "#template-recursos",
    image:
      "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/Screenshot%202025-08-05%20at%2021-15-55%20Ruixen%20-%20Beautifully%20crafted%20UI%20components%20to%20elevate%20your%20web%20projects.png",
  },
];

export function GalleryHoverCarousel({
  heading = "Mockups principais do produto",
  supportingText = "Uma selecao de dashboards e telas-chave para ajudar o cliente a visualizar a experiencia, os modulos e a percepcao de valor do software.",
  eyebrow = "Mockup gallery",
  items = defaultItems,
}: {
  heading?: string;
  supportingText?: string;
  eyebrow?: string;
  items?: GalleryHoverCarouselItem[];
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const updateControls = React.useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setCanScrollPrev(container.scrollLeft > 8);
    setCanScrollNext(container.scrollLeft < maxScrollLeft - 8);
  }, []);

  React.useEffect(() => {
    updateControls();
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      container.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [updateControls]);

  const scrollByAmount = (direction: "prev" | "next") => {
    const container = containerRef.current;
    if (!container) return;

    const amount = Math.min(380, container.clientWidth * 0.85);
    container.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="pt-20 md:pt-24">
      <div className="mb-10 text-center sm:mb-12">
        <div className="mb-4 flex items-center justify-center">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-slate-300 backdrop-blur-md"
            style={{ border: "1px solid color-mix(in srgb, var(--accent) 20%, white 8%)" }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
            <span>{eyebrow}</span>
            <span
              className="h-px w-6"
              style={{ background: "linear-gradient(to right, color-mix(in srgb, var(--accent) 70%, transparent), transparent)" }}
            />
          </div>
        </div>

        <h3 className="mb-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {heading}
        </h3>
        <p className="mx-auto max-w-[40rem] text-sm leading-7 text-slate-400 sm:text-base">
          {supportingText}
        </p>
      </div>

      <div className="mb-5 flex justify-end gap-2 md:mb-6">
        <div className="flex gap-2 rounded-full border border-white/8 bg-white/4 p-1 backdrop-blur-md">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scrollByAmount("prev")}
            disabled={!canScrollPrev}
            className="h-10 w-10 rounded-full border-white/12 bg-transparent text-white hover:bg-white/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scrollByAmount("next")}
            disabled={!canScrollNext}
            className="h-10 w-10 rounded-full border-white/12 bg-transparent text-white hover:bg-white/10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-[linear-gradient(90deg,transparent,rgba(8,13,24,0))]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-[linear-gradient(270deg,transparent,rgba(8,13,24,0))]" />
        <div
          ref={containerRef}
          className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 pl-1 pr-1 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="group block min-w-[300px] shrink-0 snap-start md:min-w-[360px]"
          >
            <Card className="relative h-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_50px_-30px_rgba(2,6,23,0.85)] backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 z-10 h-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_72%)]" />
              <div className="relative h-full w-full transition-all duration-500 group-hover:h-[52%]">
                <Image
                  width={420}
                  height={320}
                  src={item.image}
                  alt={item.title}
                  unoptimized
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,13,24,0.06)_58%,rgba(8,13,24,0.24)_100%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-[44%] translate-y-6 flex-col justify-end bg-[linear-gradient(180deg,rgba(8,13,24,0)_0%,rgba(8,13,24,0.92)_38%,rgba(8,13,24,0.98)_100%)] px-5 pb-5 pt-12 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-lg font-medium text-white md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-400">
                  {item.summary}
                </p>
              </div>

              <div
                className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition-all duration-500 group-hover:-rotate-45"
                style={{ color: "var(--accent)" }}
              >
                <ArrowRight className="size-4" />
              </div>
            </Card>
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
}
