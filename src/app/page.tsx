import Link from "next/link";
import { ArrowRight, BookOpenText, Layers3, Rocket } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TemplateCard } from "@/components/template-card";
import { templates } from "@/templates";

const pillars = [
  {
    icon: Layers3,
    title: "Sistema hibrido",
    description:
      "Cada template possui rota propria para showcase, mas compartilha secoes reutilizaveis, temas e dados tipados.",
  },
  {
    icon: BookOpenText,
    title: "Guia operacional",
    description:
      "Cada secao mostra copy sugerida, mockup ideal e briefing de midia para o time produzir LPs com menos improviso.",
  },
  {
    icon: Rocket,
    title: "Pronto para agencia",
    description:
      "O repositorio vira biblioteca interna, vitrine comercial e base para derivar paginas de clientes.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="flex max-w-3xl flex-col gap-6">
          <Badge>Biblioteca de templates SaaS</Badge>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Landing pages para SaaS com foco em conversao, contexto real e reuso
            inteligente.
          </h1>
          <p className="max-w-2xl text-lg text-[var(--muted-foreground)] sm:text-xl">
            Este repositorio concentra cinco templates pensados para o mercado
            brasileiro, cada um com CTA, estrutura, copy e orientacao visual
            propria. O sistema prioriza assets reais do produto: dashboards,
            fluxos, integracoes, telas, videos e provas de uso.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/templates">
                Ver catalogo
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/templates/saas-br-trial">Abrir template inicial</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, description }) => (
          <article key={title} className="surface-card p-6">
            <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/6 p-3">
              <Icon className="size-5 text-[var(--accent)]" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">{title}</h2>
            <p className="text-sm leading-7 text-[var(--muted-foreground)]">
              {description}
            </p>
          </article>
        ))}
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Templates base</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Os 5 modelos iniciais da agencia
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted-foreground)]">
            A recomendacao e expandir apenas quando aparecer recorrencia real de
            briefing fora desses cinco formatos.
          </p>
        </div>
        <div className="grid gap-5 xl:grid-cols-2">
          {templates.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>
      </section>
    </main>
  );
}
