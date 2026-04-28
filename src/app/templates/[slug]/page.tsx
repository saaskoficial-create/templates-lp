import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TemplateShell } from "@/components/template-shell";
import { getTemplateBySlug, templates } from "@/templates";

export async function generateStaticParams() {
  return templates.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    return {
      title: "Template nao encontrado",
    };
  }

  return {
    title: template.name,
    description: template.summary,
  };
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  return <TemplateShell template={template} />;
}
