import { Film, LayoutDashboard, PenSquare, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { SectionDefinition } from "@/types/templates";

const sectionTypeLabels: Record<SectionDefinition["sectionType"], string> = {
  hero: "Hero",
  "logo-wall": "Logo wall",
  pain: "Dor",
  "feature-grid": "Feature grid",
  "feature-tabs": "Feature tabs",
  comparison: "Comparativo",
  metrics: "Metricas",
  integrations: "Integracoes",
  pricing: "Pricing",
  "persona-grid": "Personas",
  "case-study": "Case study",
  faq: "FAQ",
  "final-cta": "Fechamento",
};

function PreviewPanel({
  section,
  primaryCta,
  secondaryCta,
}: {
  section: SectionDefinition;
  primaryCta: string;
  secondaryCta: string;
}) {
  const featureFocus = section.mediaGuide.featureFocus.slice(0, 3);

  switch (section.sectionType) {
    case "hero":
      return (
        <div className="mockup-frame min-h-[280px]">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <Badge>{section.eyebrow ?? "Acima da dobra"}</Badge>
              <div className="space-y-3">
                <div className="h-4 w-28 rounded-full bg-[var(--accent)]/55" />
                <div className="h-8 max-w-md rounded-full bg-white/15" />
                <div className="h-8 max-w-xs rounded-full bg-white/10" />
                <div className="h-3 max-w-xl rounded-full bg-white/10" />
                <div className="h-3 max-w-lg rounded-full bg-white/8" />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="sm">{primaryCta}</Button>
                <Button size="sm" variant="secondary">
                  {secondaryCta}
                </Button>
              </div>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/4 p-4">
              <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                <LayoutDashboard className="size-4 text-[var(--accent)]" />
                Mockup principal
              </div>
              <div className="grid gap-3">
                <div className="h-28 rounded-[18px] bg-[var(--accent)]/16" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-12 rounded-2xl bg-white/8" />
                  <div className="h-12 rounded-2xl bg-white/8" />
                  <div className="h-12 rounded-2xl bg-white/8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "pricing":
      return (
        <div className="mockup-frame min-h-[260px]">
          <div className="grid gap-3 md:grid-cols-3">
            {[1, 2, 3].map((column) => (
              <div
                key={column}
                className={`rounded-[24px] border p-4 ${
                  column === 2
                    ? "border-[var(--accent)] bg-[var(--accent)]/12"
                    : "border-white/10 bg-white/4"
                }`}
              >
                <div className="mb-3 h-4 w-24 rounded-full bg-white/14" />
                <div className="mb-4 h-8 w-28 rounded-full bg-white/10" />
                <div className="space-y-2">
                  <div className="h-3 rounded-full bg-white/8" />
                  <div className="h-3 rounded-full bg-white/8" />
                  <div className="h-3 rounded-full bg-white/8" />
                </div>
                <div className="mt-5 h-10 rounded-full bg-black/12" />
              </div>
            ))}
          </div>
        </div>
      );
    case "comparison":
      return (
        <div className="mockup-frame min-h-[220px]">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-[24px] border border-rose-300/14 bg-rose-500/6 p-4">
              <div className="mb-3 h-4 w-24 rounded-full bg-rose-300/28" />
              <div className="space-y-2">
                <div className="h-11 rounded-2xl bg-white/6" />
                <div className="h-11 rounded-2xl bg-white/6" />
                <div className="h-11 rounded-2xl bg-white/6" />
              </div>
            </div>
            <div className="rounded-[24px] border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-4">
              <div className="mb-3 h-4 w-24 rounded-full bg-[var(--accent)]/40" />
              <div className="space-y-2">
                <div className="h-11 rounded-2xl bg-white/6" />
                <div className="h-11 rounded-2xl bg-white/6" />
                <div className="h-11 rounded-2xl bg-white/6" />
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="mockup-frame min-h-[230px]">
          <div className="mb-4 flex flex-wrap gap-2">
            {featureFocus.map((item) => (
              <span key={item} className="mockup-chip">
                {item}
              </span>
            ))}
          </div>
          <div className="grid gap-3">
            <div className="h-32 rounded-[24px] bg-[var(--accent)]/12" />
            <div className="grid grid-cols-3 gap-3">
              <div className="h-12 rounded-2xl bg-white/6" />
              <div className="h-12 rounded-2xl bg-white/6" />
              <div className="h-12 rounded-2xl bg-white/6" />
            </div>
          </div>
        </div>
      );
  }
}

export function SectionRenderer({
  section,
  index,
  primaryCta,
  secondaryCta,
}: {
  section: SectionDefinition;
  index: number;
  primaryCta: string;
  secondaryCta: string;
}) {
  const anchorId =
    section.id === "features"
      ? "template-recursos"
      : section.id === "pricing"
        ? "template-trial"
        : section.id === "faq"
          ? "template-faq"
          : `section-${section.id}`;

  return (
    <article
      id={anchorId}
      className="surface-card grid gap-6 scroll-mt-28 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8"
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge>Secao {String(index + 1).padStart(2, "0")}</Badge>
          <Badge>{sectionTypeLabels[section.sectionType]}</Badge>
          <Badge>{section.variant}</Badge>
        </div>

        <div className="space-y-3">
          <p className="section-kicker">{section.title}</p>
          <h3 className="balanced-text text-3xl font-semibold tracking-tight">
            {section.copyGuide.headline}
          </h3>
          <p className="max-w-3xl text-base leading-8 text-[var(--muted-foreground)]">
            {section.summary}
          </p>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          <div className="guide-card">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
              <PenSquare className="size-4" />
              Copy sugerida
            </div>
            <p className="mb-3 text-sm leading-7 text-[var(--muted-foreground)]">
              {section.copyGuide.supportingCopy}
            </p>
            <ul className="guide-list">
              {section.copyGuide.bullets.map((bullet) => (
                <li key={bullet}>- {bullet}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              CTA note
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
              {section.copyGuide.ctaNote}
            </p>
          </div>

          <div className="guide-card">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
              <Sparkles className="size-4" />
              Mockup sugerido
            </div>
            <p className="text-sm leading-7 text-[var(--muted-foreground)]">
              <strong className="text-[var(--foreground)]">Layout:</strong>{" "}
              {section.mockupGuide.layout}
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
              <strong className="text-[var(--foreground)]">Composicao:</strong>{" "}
              {section.mockupGuide.composition}
            </p>
            <ul className="mt-3 guide-list">
              {section.mockupGuide.highlightItems.map((item) => (
                <li key={item}>- Destacar: {item}</li>
              ))}
              {section.mockupGuide.captureNotes.map((note) => (
                <li key={note}>- Nota: {note}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="guide-card">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
            <Film className="size-4" />
            Midia recomendada
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            <div>
              <p className="text-sm leading-7 text-[var(--muted-foreground)]">
                <strong className="text-[var(--foreground)]">Asset ideal:</strong>{" "}
                {section.mediaGuide.preferredAssetType}
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
                <strong className="text-[var(--foreground)]">Contexto:</strong>{" "}
                {section.mediaGuide.productContext}
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
                <strong className="text-[var(--foreground)]">Alt sugerido:</strong>{" "}
                {section.mediaGuide.altSuggestion}
              </p>
            </div>
            <div>
              <ul className="guide-list">
                {section.mediaGuide.featureFocus.map((item) => (
                  <li key={item}>- Foco visual: {item}</li>
                ))}
                <li>
                  - Evitar stock generico:{" "}
                  {section.mediaGuide.avoidGenericStock ? "sim" : "nao"}
                </li>
                <li>- Video: {section.mediaGuide.videoSuggestion}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          <div className="guide-card">
            <p className="mb-3 text-sm font-semibold text-[var(--accent)]">
              Inputs obrigatorios
            </p>
            <ul className="guide-list">
              {section.requiredInputs.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div className="guide-card">
            <p className="mb-3 text-sm font-semibold text-[var(--accent)]">
              Inputs opcionais
            </p>
            <ul className="guide-list">
              {section.optionalInputs.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <PreviewPanel
          section={section}
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
        />
        <div className="cta-strip">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            CTA da secao
          </p>
          <p className="text-sm leading-7 text-[var(--muted-foreground)]">
            Use <strong className="text-[var(--foreground)]">{primaryCta}</strong>{" "}
            como CTA principal e{" "}
            <strong className="text-[var(--foreground)]">{secondaryCta}</strong>{" "}
            como alternativa de menor friccao quando fizer sentido.
          </p>
        </div>
      </div>
    </article>
  );
}
