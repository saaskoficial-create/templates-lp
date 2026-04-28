import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Check,
  LayoutTemplate,
  MousePointerClick,
} from "lucide-react";

import { AnotejaLandingPage } from "@/components/anoteja/anoteja-landing-page";
import { HeroSection } from "@/components/ui/hero-section-1";
import { FAQAccordionBlock } from "@/components/ui/faq-accordion-block-shadcnui";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EcosystemSection } from "@/components/ui/ecosystem-section";
import { FeatureVideoSection } from "@/components/ui/feature-video-section";
import { Footer } from "@/components/ui/footer";
import { IntegrationShowcaseSection } from "@/components/ui/integration-showcase-section";
import { SocialProofCta } from "@/components/ui/social-proof-cta";
import { customLandingContentBySlug } from "@/content/custom-landing";
import { SectionRenderer } from "@/sections/section-renderer";
import { getThemeStyle } from "@/themes";
import type { TemplateDefinition } from "@/types/templates";

const conversionLabels = {
  trial: "Trial / lead quente",
  "direct-purchase": "Compra direta",
  "consultative-demo": "Demo consultiva",
  "sales-conversation": "Conversa qualificada",
  "signup-or-demo": "Signup ou demo",
};

export function TemplateShell({ template }: { template: TemplateDefinition }) {
  if (template.slug === "anoteja-delivery") {
    return <AnotejaLandingPage />;
  }

  const customLandingContent = customLandingContentBySlug[template.slug];
  const hasCustomHero = Boolean(customLandingContent);

  return (
    <main
      className={hasCustomHero ? "template-theme min-h-screen" : "page-shell template-theme"}
      style={getThemeStyle(template.theme)}
    >
      {hasCustomHero ? (
        <>
          <HeroSection content={customLandingContent.hero} />
          <IntegrationShowcaseSection content={customLandingContent.integration} />
          <EcosystemSection content={customLandingContent.ecosystem} />
        </>
      ) : (
        <section className="hero-panel">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button asChild variant="ghost" size="sm">
              <Link href="/templates">
                <span className="inline-flex items-center gap-2">
                  <ArrowLeft className="size-4" />
                  Voltar ao catalogo
                </span>
              </Link>
            </Button>
            <div className="flex flex-wrap gap-2">
              <Badge>{template.category}</Badge>
              <Badge>{conversionLabels[template.conversionGoal]}</Badge>
            </div>
          </div>

          <div className="template-grid">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="section-kicker">Showcase de template</p>
                <h1 className="balanced-text text-4xl font-semibold tracking-tight sm:text-6xl">
                  {template.name}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-[var(--muted-foreground)]">
                  {template.summary}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="guide-card">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                    <MousePointerClick className="size-4" />
                    CTA principal
                  </div>
                  <p className="text-lg font-medium">{template.primaryCta}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
                    CTA secundario: {template.secondaryCta}
                  </p>
                </div>
                <div className="guide-card">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                    <LayoutTemplate className="size-4" />
                    Perfil ideal
                  </div>
                  <p className="text-sm leading-7 text-[var(--muted-foreground)]">
                    {template.audience}
                  </p>
                </div>
              </div>
            </div>

            <div className="mockup-frame min-h-[340px]">
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="mockup-chip">Tema proprio</span>
                <span className="mockup-chip">Secoes reutilizaveis</span>
                <span className="mockup-chip">Copy guiada</span>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[24px] border border-white/10 bg-black/10 p-4">
                  <div className="mb-3 h-2.5 w-24 rounded-full bg-[var(--accent)]/70" />
                  <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-3 rounded-[20px] border border-white/8 bg-white/4 p-4">
                      <div className="h-3 w-32 rounded-full bg-white/20" />
                      <div className="h-3 w-48 rounded-full bg-white/10" />
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="h-20 rounded-2xl bg-[var(--accent)]/16" />
                        <div className="h-20 rounded-2xl bg-white/8" />
                        <div className="h-20 rounded-2xl bg-white/8" />
                      </div>
                    </div>
                    <div className="rounded-[20px] border border-white/8 bg-white/4 p-4">
                      <div className="mb-3 h-3 w-24 rounded-full bg-white/20" />
                      <div className="space-y-2">
                        <div className="h-11 rounded-2xl bg-white/6" />
                        <div className="h-11 rounded-2xl bg-white/6" />
                        <div className="h-11 rounded-2xl bg-[var(--accent)]/16" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    "Dashboard real",
                    "Fluxo do sistema",
                    "CTA coerente com conversao",
                  ].map((item) => (
                    <div key={item} className="rounded-[20px] border border-white/8 bg-white/4 p-4">
                      <Check className="mb-3 size-4 text-[var(--success)]" />
                      <p className="text-sm text-[var(--muted-foreground)]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {!hasCustomHero ? (
        <section className="space-y-6">
          <div>
            <p className="section-kicker">Motor do template</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Secoes, copy e briefing visual
            </h2>
          </div>
          <div className="space-y-5">
            {template.sections.map((section, index) => (
              <SectionRenderer
                key={section.id}
                section={section}
                index={index}
                primaryCta={template.primaryCta}
                secondaryCta={template.secondaryCta}
              />
            ))}
          </div>
        </section>
      ) : null}

      {hasCustomHero ? <FeatureVideoSection content={customLandingContent.featureVideo} /> : null}
      {hasCustomHero ? <FAQAccordionBlock content={customLandingContent.faq} /> : null}
      {hasCustomHero ? <SocialProofCta content={customLandingContent.socialProof} /> : null}

      {hasCustomHero ? (
        <section className="layout-container">
          <Footer
            logo={
              <Image
                src={customLandingContent.footer.logoSrc ?? "/saask-logo.webp"}
                alt={customLandingContent.footer.logoAlt ?? "SAASK"}
                width={124}
                height={34}
                className="h-9 w-auto object-contain"
              />
            }
            brandName={customLandingContent.footer.brandName ?? "SAASK"}
            summary={customLandingContent.footer.summary}
            contactHref={customLandingContent.footer.contactHref}
            contactLabel={customLandingContent.footer.ctaLabel}
            socialLinks={customLandingContent.footer.socialLinks}
            copyright="© 2026 SAASK. Template demonstrativo para landing pages de software."
          />
        </section>
      ) : null}
    </main>
  );
}
