import Link from "next/link";
import { ArrowUpRight, Target } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getThemeStyle } from "@/themes";
import type { TemplateDefinition } from "@/types/templates";

const conversionLabels = {
  trial: "Trial / lead quente",
  "direct-purchase": "Compra direta",
  "consultative-demo": "Demo consultiva",
  "sales-conversation": "Conversa qualificada",
  "signup-or-demo": "Signup ou demo",
};

export function TemplateCard({ template }: { template: TemplateDefinition }) {
  return (
    <article
      className="surface-card template-theme flex h-full flex-col gap-6 p-6"
      style={getThemeStyle(template.theme)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <Badge>{template.category}</Badge>
          <div>
            <h3 className="text-2xl font-semibold">{template.name}</h3>
            <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--muted-foreground)]">
              {template.summary}
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/6 p-3">
          <Target className="size-5 text-[var(--accent)]" />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="guide-card">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Conversao
          </p>
          <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
            {conversionLabels[template.conversionGoal]}
          </p>
        </div>
        <div className="guide-card">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            CTA principal
          </p>
          <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
            {template.primaryCta}
          </p>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href={`/templates/${template.slug}`}>
            <span className="inline-flex items-center gap-2">
              Abrir showcase
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/templates">Ver todos</Link>
        </Button>
      </div>
    </article>
  );
}
