import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="page-shell">
      <section className="hero-panel flex flex-col gap-5">
        <p className="section-kicker">404</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Este template ainda nao existe.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
          Volte para o catalogo e escolha um dos modelos ativos da biblioteca.
        </p>
        <div>
          <Button asChild>
            <Link href="/templates">Ir para templates</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
