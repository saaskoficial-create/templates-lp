import type { Metadata } from "next";

import { TemplateCard } from "@/components/template-card";
import { templates } from "@/templates";

export const metadata: Metadata = {
  title: "Catalogo de templates",
  description:
    "Catalogo dos cinco templates de landing page para SaaS usados como base operacional da agencia.",
};

export default function TemplatesPage() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <p className="section-kicker">Catalogo</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Cinco templates, uma base de operacao reutilizavel
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted-foreground)]">
          Cada template abaixo possui rota propria, objetivo de conversao,
          identidade visual, sistema de secoes e guias detalhadas de copy,
          mockup e midia. A expansao deve acontecer somente quando surgir demanda
          repetida fora desses formatos.
        </p>
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        {templates.map((template) => (
          <TemplateCard key={template.slug} template={template} />
        ))}
      </section>
    </main>
  );
}
