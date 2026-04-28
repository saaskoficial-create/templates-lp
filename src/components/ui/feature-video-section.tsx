"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CheckCircle2,
  Play,
  Settings2,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

import type { CustomLandingContent } from "@/content/custom-landing";

const featureCards = [
  {
    icon: Zap,
    title: "Eficiencia",
    description:
      "Tenha [controle] e mais eficiencia sobre [processo principal], com visibilidade centralizada do que acontece na operacao.",
  },
  {
    icon: TrendingUp,
    title: "Agilidade",
    description:
      "Torne a tomada de decisao mais [assertiva], com dados em tempo real e acompanhamento claro do que gera resultado.",
  },
  {
    icon: Settings2,
    title: "Controle",
    description:
      "Gerencie [modulos, tarefas ou estoque] com mais inteligencia, mantendo a base sempre integrada e atualizada.",
  },
];

const howItWorksSteps = [
  {
    step: "01",
    title: "Configure sua base financeira",
    description:
      "Cadastre contas, categorias e regras principais para que a plataforma organize o ponto de partida da operacao.",
    metricLabel: "Setup guiado",
    metricValue: "5 min",
  },
  {
    step: "02",
    title: "Registre entradas e saidas",
    description:
      "Acompanhe receitas, despesas, pagamentos e recebimentos em um fluxo simples de atualizar no dia a dia.",
    metricLabel: "Fluxo atualizado",
    metricValue: "24h",
  },
  {
    step: "03",
    title: "Visualize tudo no painel",
    description:
      "Veja saldo, movimentacoes e indicadores importantes em uma tela clara para entender a saude financeira rapidamente.",
    metricLabel: "Visao geral",
    metricValue: "100%",
  },
  {
    step: "04",
    title: "Analise relatorios e previsoes",
    description:
      "Use graficos, comparativos e historico para identificar oportunidades, riscos e tendencias antes de decidir.",
    metricLabel: "Relatorios",
    metricValue: "+12",
  },
  {
    step: "05",
    title: "Decida com mais seguranca",
    description:
      "Transforme dados financeiros em proximas acoes, mantendo a gestao mais previsivel e menos dependente de improviso.",
    metricLabel: "Controle",
    metricValue: "Real time",
  },
];

const pricingPlans = [
  {
    name: "Start",
    description: "Para comecar a organizar a gestao financeira com clareza.",
    monthlyPrice: "R$ 97",
    annualPrice: "R$ 77",
    period: "/mes",
    badge: "Essencial",
    cta: "Comecar teste gratis",
    featured: false,
    features: [
      "Dashboard financeiro",
      "Receitas e despesas",
      "Categorias personalizadas",
      "Relatorios basicos",
    ],
  },
  {
    name: "Growth",
    description: "Para equipes que precisam de mais controle e previsibilidade.",
    monthlyPrice: "R$ 197",
    annualPrice: "R$ 157",
    period: "/mes",
    badge: "Mais escolhido",
    cta: "Testar plano Growth",
    featured: true,
    features: [
      "Tudo do plano Start",
      "Fluxo de caixa projetado",
      "Relatorios avancados",
      "Suporte prioritario",
    ],
  },
  {
    name: "Scale",
    description: "Para operacoes com mais usuarios, rotinas e acompanhamento.",
    monthlyPrice: "Sob consulta",
    annualPrice: "Sob consulta",
    period: "",
    badge: "Avancado",
    cta: "Falar com consultor",
    featured: false,
    features: [
      "Tudo do plano Growth",
      "Multiusuarios e permissoes",
      "Integracoes personalizadas",
      "Onboarding assistido",
    ],
  },
];

function StepVideoMockup({
  step,
  title,
  metricLabel,
  metricValue,
}: {
  step: string;
  title: string;
  metricLabel: string;
  metricValue: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black shadow-[0_28px_70px_-42px_rgba(0,0,0,0.95)]">
      <div className="aspect-video w-full">
        <div className="relative flex h-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
          <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-400/80" />
              <span className="size-3 rounded-full bg-amber-300/80" />
              <span className="size-3 rounded-full bg-emerald-300/80" />
            </div>
            <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold text-slate-300">
              Video {step}
            </span>
          </div>

          <div className="grid w-full max-w-[34rem] gap-4 pt-8">
            <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr]">
              <div className="rounded-[22px] border border-white/10 bg-white/8 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  {metricLabel}
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {metricValue}
                </p>
                <div
                  className="mt-5 h-24 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in srgb, var(--accent) 42%, transparent), rgba(255,255,255,0.06))",
                  }}
                />
              </div>
              <div className="grid gap-4">
                <div className="rounded-[22px] bg-white/8 p-4">
                  <p className="text-xs text-slate-400">Receitas</p>
                  <p className="mt-2 text-xl font-semibold text-white">+18%</p>
                </div>
                <div className="rounded-[22px] bg-white/8 p-4">
                  <p className="text-xs text-slate-400">Despesas</p>
                  <p className="mt-2 text-xl font-semibold text-white">-7%</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-16 rounded-2xl bg-white/8" />
              <div className="h-16 rounded-2xl bg-white/8" />
              <div className="h-16 rounded-2xl bg-white/8" />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex size-16 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md"
              aria-label={`Assistir demonstracao: ${title}`}
            >
              <Play className="ml-1 size-6 fill-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HowItWorksVideoBlock({
  content,
}: {
  content: CustomLandingContent["featureVideo"];
}) {
  return (
    <section className="pt-20 md:pt-24">
      <div className="mx-auto mb-12 max-w-[44rem] text-center">
        <p className="section-kicker mb-3">Como Funciona</p>
        <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {content.galleryHeading}
        </h3>
        <p className="mt-5 text-base leading-8 text-slate-400">
          {content.gallerySupportingText}
        </p>
      </div>

      <div className="space-y-8 md:space-y-10">
        {howItWorksSteps.map((item, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={item.step}
              className="grid items-center gap-7 rounded-[28px] border border-white/10 bg-white/[0.06] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_60px_-36px_rgba(2,6,23,0.9)] backdrop-blur-xl sm:p-7 lg:grid-cols-2 lg:p-8"
            >
              <div
                className={`space-y-5 ${isReversed ? "lg:order-2" : ""}`}
              >
                <span
                  className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 16%, transparent)",
                    color: "var(--accent)",
                  }}
                >
                  Passo {item.step}
                </span>
                <div className="space-y-3">
                  <h4 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {item.title}
                  </h4>
                  <p className="max-w-[34rem] text-base leading-8 text-slate-400">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0"
                    style={{ color: "var(--accent)" }}
                  />
                  <span>
                    Ideal para demonstrar a experiencia em um print ou video
                    curto do produto real.
                  </span>
                </div>
              </div>

              <div className={isReversed ? "lg:order-1" : ""}>
                <StepVideoMockup
                  step={item.step}
                  title={item.title}
                  metricLabel={item.metricLabel}
                  metricValue={item.metricValue}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PricingSection({ ctaHref }: { ctaHref: string }) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly",
  );
  const isAnnual = billingCycle === "annual";

  return (
    <section id="template-trial" className="pt-20 md:pt-24">
      <div className="mx-auto mb-12 max-w-[46rem] text-center">
        <p className="section-kicker mb-3">Planos</p>
        <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Escolha o plano ideal para comecar
        </h3>
        <p className="mt-5 text-base leading-8 text-slate-400">
          Comece pelo plano que combina com sua rotina financeira e evolua
          quando precisar de mais controle, automacao e suporte.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <div className="grid w-full max-w-[280px] grid-cols-2 rounded-full border border-white/10 bg-white/[0.06] p-1 text-sm text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`min-h-11 cursor-pointer rounded-full px-4 font-semibold transition ${
                !isAnnual
                  ? "bg-white text-slate-950"
                  : "text-slate-300 hover:bg-white/8 hover:text-white"
              }`}
              aria-pressed={!isAnnual}
            >
              Mensal
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`min-h-11 cursor-pointer rounded-full px-4 font-semibold transition ${
                isAnnual
                  ? "bg-white text-slate-950"
                  : "text-slate-300 hover:bg-white/8 hover:text-white"
              }`}
              aria-pressed={isAnnual}
            >
              Anual
            </button>
          </div>
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--accent) 18%, transparent)",
              color: "var(--accent)",
            }}
          >
            Economize 2 meses
          </span>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex min-h-[540px] flex-col overflow-hidden rounded-[28px] border p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_60px_-38px_rgba(2,6,23,0.9)] backdrop-blur-xl sm:p-7 ${
              plan.featured
                ? "border-[var(--accent)] bg-white pt-9 text-slate-950 lg:-mt-4 lg:min-h-[570px]"
                : "border-white/10 bg-white/[0.06] text-white"
            }`}
          >
            <div
              className={`pointer-events-none absolute inset-x-0 top-0 h-28 ${
                plan.featured
                  ? "bg-[linear-gradient(180deg,rgba(15,23,42,0.08),transparent)]"
                  : "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]"
              }`}
            />
            {plan.featured ? (
              <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2">
                <span
                  className="inline-flex whitespace-nowrap items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-sm"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--background)",
                  }}
                >
                  <Sparkles className="size-3.5" />
                  Recomendado
                </span>
              </div>
            ) : null}

            <div className="relative mb-7">
              <span
                className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--accent) 14%, transparent)",
                  color: "var(--accent)",
                }}
              >
                {plan.badge}
              </span>
              <h4
                className={`mt-5 text-2xl font-semibold tracking-tight ${
                  plan.featured ? "text-slate-950" : "text-white"
                }`}
              >
                {plan.name}
              </h4>
              <p
                className={`mt-3 min-h-[56px] text-sm leading-7 ${
                  plan.featured ? "text-slate-600" : "text-slate-400"
                }`}
              >
                {plan.description}
              </p>
            </div>

            <div
              className={`relative mb-7 rounded-[22px] border p-4 ${
                plan.featured
                  ? "border-slate-200 bg-slate-50"
                  : "border-white/10 bg-black/10"
              }`}
            >
              <p
                className={`mb-2 text-xs font-semibold uppercase tracking-[0.18em] ${
                  plan.featured ? "text-slate-500" : "text-slate-500"
                }`}
              >
                Investimento
              </p>
              <div className="flex items-end gap-2">
              <span
                className={`text-4xl font-semibold tracking-tight ${
                  plan.featured ? "text-slate-950" : "text-white"
                }`}
              >
                {isAnnual ? plan.annualPrice : plan.monthlyPrice}
              </span>
              {plan.period ? (
                <span
                  className={`pb-1 text-sm ${
                    plan.featured ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {plan.period}
                </span>
              ) : null}
              </div>
              {isAnnual && plan.period ? (
                <p
                  className={`mt-3 text-xs ${
                    plan.featured ? "text-slate-500" : "text-slate-500"
                  }`}
                >
                  Cobrado anualmente com desconto aplicado.
                </p>
              ) : null}
            </div>

            <ul
              className={`mb-8 grid flex-1 gap-3 text-sm ${
                plan.featured ? "text-slate-700" : "text-slate-300"
              }`}
            >
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0"
                    style={{ color: "var(--accent)" }}
                  />
                  <span className="leading-6">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={ctaHref}
              className={`inline-flex min-h-12 w-full items-center justify-center rounded-full px-4 text-center text-sm font-semibold leading-tight transition sm:px-5 ${
                plan.featured
                  ? "bg-[var(--accent)] text-[var(--background)] hover:opacity-90"
                  : "border border-white/12 bg-white text-slate-950 hover:bg-slate-200 hover:text-slate-950"
              }`}
              style={plan.featured ? undefined : { color: "#020617" }}
            >
              {plan.cta}
            </Link>

            <p
              className={`mt-4 text-center text-xs leading-6 ${
                plan.featured ? "text-slate-500" : "text-slate-500"
              }`}
            >
              Teste gratis antes de escolher o plano definitivo.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-3 text-center text-xs font-medium text-slate-400 sm:grid-cols-3">
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3">
          Sem taxas escondidas
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3">
          Cancele quando quiser
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3">
          Suporte em portugues
        </span>
      </div>
    </section>
  );
}

export function FeatureVideoSection({
  content,
}: {
  content: CustomLandingContent["featureVideo"];
}) {
  const cards = featureCards.map((card, index) => ({
    ...card,
    title: content.cards[index]?.title ?? card.title,
    description: content.cards[index]?.description ?? card.description,
  }));
  return (
    <section className="section-block relative">
      <div className="layout-container">
        <div className="relative mb-6 flex flex-col items-center overflow-hidden rounded-2xl bg-black p-4 sm:mb-8 sm:rounded-3xl sm:p-6 md:mb-14 md:flex-row md:p-8 lg:p-16">
          <div className="z-10 max-w-[26rem] text-left md:max-w-[22rem] lg:max-w-[24rem]">
            <p className="section-kicker mb-3">{content.eyebrow}</p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-2xl lg:text-3xl">
              {content.title}
            </h2>
            <p className="mb-6 text-base text-white/80">
              {content.description}
            </p>
            <Link
              href={content.ctaHref}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition"
              style={{
                border: "1px solid color-mix(in srgb, var(--accent) 30%, white 8%)",
                backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
                color: "var(--accent)",
              }}
            >
              {content.ctaLabel}
            </Link>
          </div>

          <div className="mt-6 w-full sm:mt-8 md:ml-auto md:mt-0 md:w-[38rem]">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/4">
              <div className="aspect-[16/10] w-full">
                {content.videoSrc ? (
                  <iframe
                    className="h-full w-full rounded-xl shadow-xl"
                    src={content.videoSrc}
                    title={content.videoTitle ?? "Demo do produto"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full flex-col justify-between bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {(content.mockupItems ?? []).map((item) => (
                        <div
                          key={item}
                          className="rounded-[22px] border p-4 text-sm font-medium text-white"
                          style={{
                            borderColor: "color-mix(in srgb, var(--accent) 22%, white 8%)",
                            backgroundColor: "color-mix(in srgb, var(--accent) 9%, transparent)",
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 rounded-[24px] border border-white/10 bg-black/14 p-5">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-sm font-semibold text-white">Oferta pensada para conversao</p>
                        <span
                          className="rounded-full px-3 py-1 text-xs font-semibold"
                          style={{ backgroundColor: "var(--accent)", color: "var(--background)" }}
                        >
                          CTA ativo
                        </span>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[20px] bg-white/6 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Entrada</p>
                          <p className="mt-2 text-lg font-semibold text-white">Teste gratis + preco visivel</p>
                        </div>
                        <div className="rounded-[20px] bg-white/6 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Saida</p>
                          <p className="mt-2 text-lg font-semibold text-white">Cadastro ou WhatsApp</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative flex min-h-[280px] cursor-pointer flex-col overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.08] p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_50px_-30px_rgba(2,6,23,0.85)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-white/[0.1] sm:p-8 md:p-10"
              style={{ borderColor: "color-mix(in srgb, var(--accent) 12%, white 12%)" }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_70%)]" />
              <div
                className="pointer-events-none absolute -right-10 top-10 h-24 w-24 rounded-full blur-2xl transition duration-300"
                style={{ backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)" }}
              />
              <div
                className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ease-out group-hover:scale-110"
                style={{ backgroundColor: "var(--accent)", color: "var(--background)" }}
              >
                <Icon className="text-black transition-colors duration-300 ease-out" />
              </div>
              <h3 className="mb-4 text-lg font-semibold text-white transition-colors duration-300 ease-out">
                {title}
              </h3>
              <p className="flex-1 text-sm leading-7 text-slate-400 transition-colors duration-300 ease-out group-hover:text-slate-300">
                {description}
              </p>
            </div>
          ))}
        </div>

        <HowItWorksVideoBlock content={content} />
        <PricingSection ctaHref={content.ctaHref} />
      </div>
    </section>
  );
}
