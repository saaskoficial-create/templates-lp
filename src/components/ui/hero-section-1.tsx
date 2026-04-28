"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import type { Variants } from "framer-motion";

import { AnimatedGroup } from "@/components/ui/animated-group";
import { BrandMarquee } from "@/components/ui/brand-marquee";
import { Button } from "@/components/ui/button";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { LogoCloud as LogoCloudGrid } from "@/components/ui/logo-cloud-2";
import { LogoCloud as LogoCloudSlider } from "@/components/ui/logo-cloud-3";
import { ShinyButton } from "@/components/ui/shiny-button";
import type { CustomLandingContent } from "@/content/custom-landing";
import { cn } from "@/lib/utils";

const transitionVariants: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
];

const accentText = "var(--accent)";
const accentStrong = "var(--accent-strong)";
const accentBorder = "color-mix(in srgb, var(--accent) 28%, white 8%)";
const buttonText = "color-mix(in srgb, var(--background) 94%, white 4%)";

function renderHighlightedTitle(title: string) {
  return title.split(/(\[[^\]]+\])/g).map((part, index) => {
    const isHighlighted = /^\[[^\]]+\]$/.test(part);

    if (!isHighlighted) {
      return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
    }

    return (
      <span
        key={`${part}-${index}`}
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(180deg, color-mix(in srgb, ${accentText} 58%, white 32%) 0%, ${accentText} 55%, ${accentStrong} 100%)`,
        }}
      >
        {part}
      </span>
    );
  });
}

function HeroHeader({ content }: { content: CustomLandingContent["hero"] }) {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-30 transition-all duration-300",
          isScrolled
            ? "border-b border-white/8 bg-[rgba(4,8,16,0.84)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="layout-container">
            <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-3">
                <Image
                  src={content.logoSrc ?? "/saask-logo.webp"}
                  alt={content.logoAlt ?? content.brandName ?? "SAASK"}
                  width={152}
                  height={42}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </Link>

              <button
                onClick={() => setMenuState((state) => !state)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu
                  className={cn(
                    "m-auto size-6 text-white transition-all duration-200",
                    menuState && "scale-0 opacity-0",
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 text-white opacity-0 transition-all duration-200",
                    menuState ? "scale-100 opacity-100" : "scale-0",
                  )}
                />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex items-center gap-8 text-sm text-slate-300">
                {content.navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/60 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <Button
                asChild
                size="sm"
                variant="ghost"
                className="h-10 px-5 text-sm text-white/80 hover:bg-white/6 hover:text-white"
              >
                <Link href={content.navSecondaryCtaHref}>{content.navSecondaryCta}</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="h-10 rounded-md px-5 text-sm font-medium"
                style={{ backgroundColor: accentText, color: buttonText }}
              >
                <Link href={content.navPrimaryCtaHref}>{content.navPrimaryCta}</Link>
              </Button>
            </div>

            <div
              className={cn(
                "w-full rounded-[24px] border border-white/10 bg-[rgba(4,8,16,0.96)] p-6 shadow-2xl shadow-slate-950/40 lg:hidden",
                menuState ? "block" : "hidden",
              )}
            >
              <ul className="space-y-4 text-base text-slate-200">
                {content.navItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="block transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <Button
                  asChild
                  size="sm"
                  variant="ghost"
                  className="h-10 text-white/80 hover:bg-white/6 hover:text-white"
                >
                  <Link href={content.navSecondaryCtaHref}>{content.navSecondaryCta}</Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="h-10 rounded-md text-sm font-medium"
                  style={{ backgroundColor: accentText, color: buttonText }}
                >
                  <Link href={content.navPrimaryCtaHref}>{content.navPrimaryCta}</Link>
                </Button>
              </div>
            </div>
            </div>
        </div>
      </nav>
    </header>
  );
}

function DashboardMockup() {
  return (
    <div className="layout-showcase relative overflow-hidden rounded-[32px] border border-white/12 bg-[linear-gradient(180deg,rgba(12,19,34,0.98),rgba(8,14,25,0.98))] p-4 shadow-[0_32px_80px_-36px_rgba(15,23,42,0.85)] ring-1 ring-white/8">
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{ background: "radial-gradient(circle at top, color-mix(in srgb, var(--accent) 18%, transparent), transparent 62%)" }}
      />
      <div className="relative rounded-[26px] border border-white/8 bg-[rgba(255,255,255,0.03)] p-4 md:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-rose-400/70" />
            <span className="size-2.5 rounded-full bg-sky-300/70" />
            <span className="size-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="flex gap-2">
            {["[modulo central]", "[automacao]", "[resultado]"].map((chip) => (
              <span
                key={chip}
                className="rounded-full px-3 py-1 text-[11px] font-medium"
                style={{
                  border: "1px solid color-mix(in srgb, var(--accent) 18%, white 6%)",
                  backgroundColor: "color-mix(in srgb, var(--accent) 8%, transparent)",
                  color: "color-mix(in srgb, var(--accent) 64%, white 24%)",
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.24fr_0.76fr]">
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Volume processado", value: "[+124%]", tone: "accent" },
                { label: "Tempo poupado", value: "[18h/sem]", tone: "bg-emerald-400/12 text-emerald-100" },
                { label: "Visibilidade", value: "[tempo real]", tone: "bg-violet-400/12 text-violet-100" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={cn("rounded-[22px] border border-white/8 p-4", item.tone !== "accent" ? item.tone : "")}
                  style={
                    item.tone === "accent"
                      ? {
                          backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
                          color: "color-mix(in srgb, var(--accent) 64%, white 24%)",
                        }
                      : undefined
                  }
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/65">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[24px] border border-white/8 bg-white/4 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">Pipeline principal</p>
                    <p className="text-xs text-slate-400">[processo principal] em um unico fluxo</p>
                  </div>
                  <span className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-3 py-1 text-[11px] text-emerald-100">
                    Atualizado agora
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "[entrada]",
                    "[em andamento]",
                    "[concluido]",
                  ].map((step, index) => (
                    <div key={step} className="rounded-[20px] bg-white/4 p-3">
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                        Etapa {index + 1}
                      </p>
                      <p className="mt-2 text-sm font-medium text-white">{step}</p>
                      <div className="mt-3 space-y-2">
                        <div className="h-10 rounded-2xl bg-white/6" />
                        <div className="h-10 rounded-2xl bg-white/6" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[24px] border border-white/8 bg-white/4 p-4">
                  <p className="text-sm font-medium text-white">Atividades automatizadas</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Gatilhos, tarefas e eventos em um painel unico
                  </p>
                  <div className="mt-4 space-y-3">
                    {["[evento detectado]", "[acao automatica]", "[responsavel notificado]"].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/12 px-3 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className="size-2.5 rounded-full"
                              style={{ backgroundColor: "var(--accent)" }}
                            />
                            <span className="text-sm text-slate-200">{item}</span>
                          </div>
                          <ArrowRight className="size-4 text-slate-500" />
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/8 bg-white/4 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-medium text-white">Visao executiva</p>
                    <span className="text-xs" style={{ color: "color-mix(in srgb, var(--accent) 64%, white 24%)" }}>[resultado desejado]</span>
                  </div>
                  <div className="grid grid-cols-12 items-end gap-2">
                    {[42, 56, 48, 70, 66, 84, 80, 94, 88, 102, 98, 110].map((height, index) => (
                      <div
                        key={index}
                        className="rounded-t-full"
                        style={{
                          background: "linear-gradient(to top, color-mix(in srgb, var(--accent) 30%, transparent), color-mix(in srgb, var(--accent) 76%, white 12%))",
                          height: `${height}px`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div
              className="rounded-[24px] p-4"
              style={{
                border: "1px solid color-mix(in srgb, var(--accent) 16%, white 6%)",
                backgroundColor: "color-mix(in srgb, var(--accent) 8%, transparent)",
              }}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-white">Resumo da operacao</p>
                  <p
                    className="mt-1 text-xs"
                    style={{ color: "color-mix(in srgb, var(--accent) 60%, white 26%)" }}
                  >
                    Cards com placeholders de copy para o designer visualizar a estrutura final
                  </p>
                </div>
                <span
                  className="rounded-full bg-black/14 px-3 py-1 text-[11px]"
                  style={{
                    border: "1px solid color-mix(in srgb, var(--accent) 16%, white 6%)",
                    color: "color-mix(in srgb, var(--accent) 64%, white 24%)",
                  }}
                >
                  [prova principal]
                </span>
              </div>
              <div className="grid gap-3">
                {[
                  ["Beneficio principal", "[beneficio principal]"],
                  ["Processo central", "[processo principal]"],
                  ["Resultado esperado", "[resultado desejado]"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[20px] border border-white/8 bg-black/12 px-4 py-3"
                  >
                    <p
                      className="text-[11px] uppercase tracking-[0.18em]"
                      style={{ color: "color-mix(in srgb, var(--accent) 60%, white 26%)" }}
                    >
                      {label}
                    </p>
                    <p className="mt-2 text-sm text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-white/4 p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium text-white">Atividade recente</p>
                <span className="rounded-full border border-emerald-300/16 bg-emerald-300/10 px-3 py-1 text-[11px] text-emerald-100">
                  sincronizado
                </span>
              </div>
              <div className="space-y-3 text-sm text-slate-300">
                {[
                  "[evento principal] movido para [etapa]",
                  "[automacao] disparada para [time ou responsavel]",
                  "[integracao] atualizou [modulo central]",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-black/12 px-3 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection({ content }: { content: CustomLandingContent["hero"] }) {
  const useGridLogoSection = content.logoSectionVariant === "grid";

  return (
    <>
      <HeroHeader content={content} />
      <main id="template-hero" className="overflow-hidden pt-28 md:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 isolate hidden opacity-80 lg:block"
        >
          <div
            className="absolute left-0 top-0 h-[80rem] w-[35rem] -translate-y-[320px] -rotate-45 rounded-full"
            style={{ background: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, color-mix(in srgb, var(--accent) 18%, transparent) 0, color-mix(in srgb, var(--accent) 2%, transparent) 55%, transparent 80%)" }}
          />
          <div className="absolute right-0 top-28 h-[44rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.12)_0,rgba(148,163,184,0)_70%)]" />
        </div>

        <section className="relative">
          <div className="layout-container">
            <div className="text-center">
              <AnimatedGroup variants={transitionVariants}>
                <Link
                  href={content.primaryCtaHref}
                  className="group mx-auto mb-7 flex w-fit max-w-[92vw] items-center gap-2 rounded-full border border-slate-600/60 bg-white/4 py-1.5 pl-2 pr-1 backdrop-blur-sm transition-all duration-300 hover:bg-slate-600/20 sm:mb-5 sm:max-w-none sm:gap-4 sm:pl-3 sm:pr-1.5 md:mb-7"
                  style={{ borderColor: accentBorder }}
                >
                  <span className="flex items-center gap-1 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white sm:px-3">
                    <Sparkles className="size-3" style={{ color: accentText }} />
                    <span
                      className="bg-clip-text text-transparent sm:hidden"
                      style={{
                        backgroundImage: `linear-gradient(90deg, color-mix(in srgb, ${accentText} 56%, white 38%), ${accentText}, ${accentStrong})`,
                      }}
                    >
                      {content.badgeMobile}
                    </span>
                    <span
                      className="hidden bg-clip-text text-transparent sm:inline"
                      style={{
                        backgroundImage: `linear-gradient(90deg, color-mix(in srgb, ${accentText} 56%, white 38%), ${accentText}, ${accentStrong})`,
                      }}
                    >
                      {content.badge}
                    </span>
                  </span>
                  <span className="text-xs font-medium text-slate-200 sm:text-sm">
                    {content.badgeText}
                  </span>
                  <span className="flex size-6 items-center justify-center rounded-full bg-white text-slate-950 sm:size-7">
                    <ArrowRight className="size-3 sm:size-3.5" />
                  </span>
                </Link>

                <h1 className="mx-auto max-w-[62rem] px-2 text-[2.4rem] font-semibold leading-10 tracking-tight text-white sm:px-4 sm:text-[2.5rem] sm:leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:px-0 lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]">
                  {renderHighlightedTitle(content.title)}
                </h1>
                <p className="mx-auto mt-6 max-w-3xl px-2 text-sm leading-7 text-slate-300 sm:px-4 sm:text-base md:mt-7 md:text-[1.05rem] md:leading-8 lg:px-0">
                  {content.description}
                </p>
              </AnimatedGroup>

            </div>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.85,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
              <div className="relative mt-10 px-2 sm:mt-12 md:mt-16">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-6 -z-10 mx-auto h-32 max-w-6xl blur-3xl"
                  style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 24%, transparent) 0, transparent 70%)" }}
                />
                {content.heroVideo ? (
                  <div className="layout-showcase">
                    <HeroVideoDialog
                      animationStyle={content.heroVideo.animationStyle}
                      videoSrc={content.heroVideo.videoSrc}
                      thumbnailSrc={content.heroVideo.thumbnailSrc}
                      thumbnailAlt={content.heroVideo.thumbnailAlt}
                      inline={content.heroVideo.inline}
                    />
                  </div>
                ) : (
                  <DashboardMockup />
                )}

                <div className="mt-8 flex justify-center md:mt-10">
                  <ShinyButton asChild className="min-h-14 px-10 text-[1.02rem] md:min-h-16 md:px-12 md:text-[1.08rem]">
                    <Link href={content.primaryCtaHref}>{content.primaryCta}</Link>
                  </ShinyButton>
                </div>
              </div>
          </AnimatedGroup>
        </section>

        {!content.hideLogoSection ? (
          <section className="section-block-tight">
          <div className="layout-container">
            <section className="relative mx-auto max-w-5xl">
              <div
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute left-1/2 top-0 -z-10 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-b-full",
                  "blur-[30px]",
                )}
                style={{ background: "radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 12%, transparent), transparent 52%)" }}
              />

              <h2 className="text-center text-xl font-medium tracking-tight text-white md:text-3xl">
                <span className="text-slate-400">{content.logoTitleTop}</span>
                <br />
                <span className="font-semibold">{content.logoTitleBottom}</span>
              </h2>
              <div className="mx-auto my-6 h-px max-w-sm bg-white/10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

              {useGridLogoSection ? (
                <LogoCloudGrid logos={logos} className="bg-[rgba(8,13,24,0.42)] backdrop-blur-sm" />
              ) : (
                <LogoCloudSlider logos={logos} />
              )}
            </section>
            <div className="mt-5 text-center text-sm text-slate-400">
              {content.logoDescription}
            </div>
          </div>
        </section>
        ) : null}

        {content.showBrandMarquee ? (
          <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 md:mt-8">
            <BrandMarquee />
          </div>
        ) : null}
      </main>
    </>
  );
}
