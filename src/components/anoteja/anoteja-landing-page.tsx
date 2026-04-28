"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  Check,
  ChevronRight,
  CreditCard,
  Menu,
  Printer,
  Rocket,
  Smartphone,
  Star,
  X,
} from "lucide-react";
import { useState } from "react";

const whatsappHref =
  "https://wa.me/5519982764849?text=Ol%C3%A1!%20Quero%20conhecer%20o%20AnoteJ%C3%A1%20Delivery.";
const signupHref = "https://app.anoteja.com.br/cadastro";

const heroHighlights = [
  { icon: Bot, text: "Atendente IA 24h no WhatsApp" },
  { icon: Printer, text: "Impressao automatica na cozinha" },
  { icon: CreditCard, text: "Pix e cartao integrados" },
  { icon: Smartphone, text: "Cardapio digital proprio" },
];

const partnerLogos = [
  {
    name: "iFood",
    imageUrl: "https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-0.png",
  },
  {
    name: "99Food",
    imageUrl: "https://logodownload.org/wp-content/uploads/2019/07/99-logo.png",
  },
  {
    name: "WhatsApp Business",
    imageUrl: "https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-0.png",
  },
];

const features = [
  {
    icon: Bot,
    title: "Atendente IA no WhatsApp",
    description:
      "A IA recebe pedidos, responde duvidas, faz upsell e encaminha para o cardapio, tudo automaticamente e 24 horas por dia.",
  },
  {
    icon: Printer,
    title: "Impressao automatica na cozinha",
    description:
      "Cada pedido confirmado imprime direto na cozinha. Zero digitacao, zero erro e muito mais agilidade para a equipe.",
  },
  {
    icon: Smartphone,
    title: "Cardapio digital proprio",
    description:
      "Seu cardapio no seu dominio, com fotos, categorias e descricao dos produtos para vender sem intermediarios.",
  },
  {
    icon: CreditCard,
    title: "Pix e cartao integrados",
    description:
      "Pagamento integrado com mais praticidade para o cliente e mais controle para o delivery acompanhar a operacao.",
  },
];

const pricingPlans = [
  {
    name: "Anoteja Facil start",
    price: "R$ 219,90",
    note: "/mes",
    highlight: false,
    features: [
      "1 usuario | 1 WhatsApp",
      "Cadastro de Produtos",
      "Conecta WhatsApp + Chatbot",
      "Contatos",
      "Formas de Pagamento",
      "Gestao de Pedidos",
      "Loja Online (Publica)",
      "PDV Delivery WhatsApp",
      "Taxas de Entrega",
      "Relatorios PDV",
      "WhatsApp Atendimento",
    ],
  },
  {
    name: "Anoteja Facil start + IA",
    price: "R$ 399",
    note: "/mes",
    highlight: true,
    features: [
      "2 usuarios | 1 WhatsApp",
      "Tudo do plano Start",
      "Conecta WhatsApp - IA Assistente",
      "Atendimento automatico com IA",
    ],
  },
];

const testimonials = [
  {
    name: "Rafael Mendes",
    role: "Proprietario",
    company: "Burguer do Chef",
    text:
      "Desde que ativei a IA no WhatsApp, meus pedidos fora do horario comercial aumentaram 40%. A IA atende melhor que eu esperava.",
  },
  {
    name: "Camila Torres",
    role: "Gerente",
    company: "Pizzaria Bella Napoli",
    text:
      "A impressao automatica na cozinha eliminou os erros de pedido. Minha equipe ficou mais tranquila e o cliente mais satisfeito.",
  },
  {
    name: "Joao Paulo Alves",
    role: "Dono",
    company: "Sushi Express",
    text:
      "Parei de pagar 12% de comissao para o iFood. Hoje tenho minha propria plataforma e atendo pelo WhatsApp. Valeu cada centavo.",
  },
];

const steps = [
  {
    icon: Smartphone,
    number: "1",
    title: "Cadastre seu cardapio",
    description:
      "Nossa equipe monta seu cardapio digital em menos de 5 minutos. Voce so envia o PDF ou as fotos.",
  },
  {
    icon: Bot,
    number: "2",
    title: "Ative a IA no WhatsApp",
    description:
      "Conecte seu numero e a IA ja comeca a atender, receber pedidos e fazer upsell automaticamente.",
  },
  {
    icon: Rocket,
    number: "3",
    title: "Receba pedidos no piloto automatico",
    description:
      "Os pedidos chegam na tela, imprimem na cozinha automaticamente e a operacao roda com muito menos trabalho manual.",
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#eadbd2] bg-[#fffaf7]/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/templates/anoteja-delivery" className="flex items-center gap-3">
          <Image
            src="/anoteja-logo.png"
            alt="AnoteJa"
            width={150}
            height={44}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#6f4c3b] lg:flex">
          <Link href="#recursos" className="transition hover:text-[#1A0A00]">
            Recursos
          </Link>
          <Link href="#planos" className="transition hover:text-[#1A0A00]">
            Planos
          </Link>
          <Link href="#como-funciona" className="transition hover:text-[#1A0A00]">
            Como funciona
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="https://app.anoteja.com.br/"
            className="rounded-full px-4 py-2 text-sm font-semibold text-[#6f4c3b] transition hover:bg-[#f5e8df]"
          >
            Entrar
          </Link>
          <Link
            href={whatsappHref}
            className="rounded-full border border-[#e9c9bb] px-4 py-2 text-sm font-semibold text-[#E86A33] transition hover:bg-[#fff1ea]"
          >
            Falar no WhatsApp
          </Link>
          <Link
            href={signupHref}
            className="rounded-full bg-[#E86A33] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d35b27]"
          >
            Teste 7 dias gratis
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-[#eadbd2] p-2 text-[#1A0A00] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#eadbd2] bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-[#6f4c3b]">
            <Link href="#recursos">Recursos</Link>
            <Link href="#planos">Planos</Link>
            <Link href="#como-funciona">Como funciona</Link>
            <Link href={whatsappHref}>Falar no WhatsApp</Link>
            <Link href={signupHref}>Teste 7 dias gratis</Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HeroPhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] rounded-[40px] border border-[#1A0A00]/10 bg-[#0d5f57] p-4 shadow-[0_40px_90px_-45px_rgba(26,10,0,0.45)]">
      <div className="rounded-[32px] bg-[#efe7df] p-0">
        <div className="rounded-t-[28px] bg-[#0d5f57] px-5 pb-5 pt-4 text-white">
          <div className="mb-5 flex items-center justify-between text-xs opacity-90">
            <span>19:43</span>
            <span>5G</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex size-14 items-center justify-center rounded-full bg-[#F58234]">
              <Bot className="size-7" />
            </div>
            <div>
              <p className="text-2xl font-semibold">Atendente IA</p>
              <p className="text-sm text-white/75">digitando...</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 bg-[#f4ede6] px-4 py-5">
          <div className="ml-auto max-w-[78%] rounded-[24px] bg-[#dff6bf] px-5 py-4 text-[#1A0A00] shadow-sm">
            <p className="text-xl font-medium">Quero uma pizza de calabresa sem cebola 🍕</p>
            <p className="mt-3 text-right text-sm text-[#57726b]">19:42</p>
          </div>

          <div className="max-w-[78%] rounded-[24px] bg-white px-5 py-4 text-[#1A0A00] shadow-sm">
            <p className="text-xl leading-9">
              Com certeza! Adicionei uma <strong>Calabresa (Sem Cebola)</strong> ao carrinho.
            </p>
            <p className="mt-4 text-xl leading-9">
              Aceita uma Coca-Cola gelada para acompanhar? 🥤
            </p>
            <p className="mt-3 text-right text-sm text-[#8b8a87]">19:42</p>
          </div>

          <div className="ml-auto max-w-[78%] rounded-[24px] bg-[#dff6bf] px-5 py-4 text-[#1A0A00] shadow-sm">
            <p className="text-xl font-medium">Pode ser! E uma batata frita tambem</p>
            <p className="mt-3 text-right text-sm text-[#57726b]">19:43</p>
          </div>

          <div className="max-w-[82%] rounded-[24px] bg-white px-5 py-4 text-[#1A0A00] shadow-sm">
            <p className="text-xl leading-9">
              Perfeito! 🎉 Seu pedido:
            </p>
            <ul className="mt-3 space-y-2 text-xl leading-9">
              <li>✅ 1x Pizza Calabresa (S/Cebola)</li>
              <li>✅ 1x Coca-Cola 350ml</li>
              <li>✅ 1x Batata Frita</li>
            </ul>
            <p className="mt-3 text-2xl font-bold text-[#E86A33]">Total: R$ 62,90</p>
            <p className="mt-3 text-xl leading-9">
              Confirma? Envio o link de pagamento 💳
            </p>
            <p className="mt-3 text-right text-sm text-[#8b8a87]">19:43</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#E86A33]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-[#1A0A00] md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-8 text-[#6f4c3b] md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function AnotejaLandingPage() {
  return (
    <main className="min-h-screen bg-[#fffaf7] text-[#1A0A00]">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,106,51,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(232,106,51,0.08),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pt-20">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f1d3c5] bg-white px-4 py-2 shadow-sm">
              <span className="rounded-full bg-[#1A0A00] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                AnoteJa Delivery
              </span>
              <span className="text-sm font-medium text-[#6f4c3b]">Teste 7 dias gratis</span>
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[#1A0A00] md:text-6xl md:leading-[1.05]">
              Seu delivery no piloto automatico.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f4c3b] md:text-xl">
              Plataforma propria de delivery com IA no WhatsApp, impressao automatica e gestao de pedidos, sem pagar comissao para ninguem.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={signupHref}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#E86A33] px-7 text-base font-semibold text-white transition hover:bg-[#d35b27]"
              >
                Teste 7 dias gratis
              </Link>
              <Link
                href={whatsappHref}
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#e7c7b8] bg-white px-7 text-base font-semibold text-[#E86A33] transition hover:bg-[#fff1ea]"
              >
                Falar no WhatsApp
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {heroHighlights.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 rounded-[22px] border border-[#f0ddd3] bg-white px-4 py-4 shadow-sm"
                >
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-[#fff1ea] text-[#E86A33]">
                    <Icon className="size-5" />
                  </div>
                  <p className="text-sm font-medium leading-6 text-[#1A0A00]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <HeroPhoneMockup />
          </div>
        </div>
      </section>

      <section className="border-y border-[#f0ddd3] bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Parceiros e integracoes"
            title="Parceiros e integracoes que voce ja conhece"
            subtitle="+300 restaurantes ja confiam no AnoteJa"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {partnerLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex min-h-28 items-center justify-center rounded-[28px] border border-[#f0ddd3] bg-[#fffaf7] px-6 py-6"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.imageUrl} alt={logo.name} className="max-h-10 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="recursos" className="py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Tudo que seu delivery precisa"
            title="Tudo que seu delivery precisa em um so lugar"
            subtitle="Cada funcionalidade foi pensada para aumentar seus pedidos e reduzir seu trabalho."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-[30px] border border-[#f0ddd3] bg-white p-7 shadow-[0_18px_45px_-30px_rgba(26,10,0,0.22)]"
              >
                <div className="flex size-14 items-center justify-center rounded-[18px] bg-[#fff1ea] text-[#E86A33]">
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[#1A0A00]">{title}</h3>
                <p className="mt-3 text-base leading-8 text-[#6f4c3b]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3ed] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Veja a IA em acao"
              title="Experimente a IA do AnoteJa agora"
              subtitle="Digite um pedido como se fosse um cliente e veja como a IA responde."
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href={signupHref}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#E86A33] px-7 text-base font-semibold text-white transition hover:bg-[#d35b27]"
              >
                Comecar teste gratis
              </Link>
              <Link
                href={whatsappHref}
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#e7c7b8] bg-white px-7 text-base font-semibold text-[#E86A33] transition hover:bg-[#fff1ea]"
              >
                Tirar duvidas
              </Link>
            </div>
          </div>

          <HeroPhoneMockup />
        </div>
      </section>

      <section id="planos" className="py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Planos e valores"
            title="Planos para todo tamanho de negocio"
            subtitle="Sem taxas por pedido. Sem comissao. Pague so a mensalidade. Pague anual e ganhe 2 meses gratis."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[32px] border p-7 ${
                  plan.highlight
                    ? "border-[#E86A33] bg-[#fff3ed] shadow-[0_24px_60px_-34px_rgba(232,106,51,0.35)]"
                    : "border-[#f0ddd3] bg-white shadow-[0_18px_45px_-30px_rgba(26,10,0,0.22)]"
                }`}
              >
                {plan.highlight ? (
                  <span className="inline-flex rounded-full bg-[#E86A33] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                    Mais escolhido
                  </span>
                ) : null}
                <h3 className="mt-4 text-2xl font-semibold text-[#1A0A00]">{plan.name}</h3>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-tight text-[#1A0A00]">{plan.price}</span>
                  <span className="pb-2 text-base text-[#6f4c3b]">{plan.note}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-base leading-7 text-[#6f4c3b]">
                      <span className="mt-1 flex size-5 items-center justify-center rounded-full bg-[#fff1ea] text-[#E86A33]">
                        <Check className="size-3.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={signupHref}
                  className={`mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full px-6 text-base font-semibold transition ${
                    plan.highlight
                      ? "bg-[#E86A33] text-white hover:bg-[#d35b27]"
                      : "border border-[#e7c7b8] bg-white text-[#E86A33] hover:bg-[#fff1ea]"
                  }`}
                >
                  Comecar teste gratis
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Depoimentos"
            title="Quem usa, recomenda"
            subtitle="Mais de 300 restaurantes ja aumentaram seus pedidos com o AnoteJa."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[30px] border border-[#f0ddd3] bg-[#fffaf7] p-7 shadow-[0_18px_45px_-30px_rgba(26,10,0,0.18)]"
              >
                <div className="mb-5 flex gap-1 text-[#E86A33]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-8 text-[#3f2a1f]">&quot;{testimonial.text}&quot;</p>
                <div className="mt-6 border-t border-[#ecdcd1] pt-5">
                  <p className="font-semibold text-[#1A0A00]">{testimonial.name}</p>
                  <p className="text-sm text-[#6f4c3b]">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-[#fff3ed] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Como funciona"
            title="Comece a vender em 3 passos"
            subtitle="Nossa equipe cuida de tudo. Voce so precisa receber os pedidos."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map(({ icon: Icon, number, title, description }) => (
              <article
                key={number}
                className="rounded-[30px] border border-[#f0ddd3] bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-semibold tracking-tight text-[#E86A33]">{number}</span>
                  <div className="flex size-14 items-center justify-center rounded-[18px] bg-[#fff1ea] text-[#E86A33]">
                    <Icon className="size-7" />
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-[#1A0A00]">{title}</h3>
                <p className="mt-3 text-base leading-8 text-[#6f4c3b]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="rounded-[36px] border border-[#f0ddd3] bg-[#1A0A00] px-8 py-10 text-center text-white shadow-[0_30px_90px_-45px_rgba(26,10,0,0.6)] md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffb391]">
              CTA Final
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Pronto para decolar suas vendas?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/74 md:text-lg">
              Teste gratis por 7 dias. Sem cartao de credito. Nossa equipe faz o setup para voce.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href={signupHref}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#E86A33] px-7 text-base font-semibold text-white transition hover:bg-[#d35b27]"
              >
                Comecar teste gratis
              </Link>
              <Link
                href={whatsappHref}
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/14 bg-white/6 px-7 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Falar no WhatsApp
              </Link>
            </div>

            <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
              {[
                "7 dias gratis sem cartao",
                "Setup feito pela nossa equipe",
                "Suporte humano no WhatsApp",
                "Cancele quando quiser",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/88"
                >
                  <span className="flex size-6 items-center justify-center rounded-full bg-[#E86A33] text-white">
                    <Check className="size-4" />
                  </span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#f0ddd3] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/anoteja-logo.png"
              alt="AnoteJa"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href={signupHref} className="text-sm font-semibold text-[#1A0A00]">
              Comecar teste gratis
            </Link>
            <ChevronRight className="size-4 text-[#c3a391]" />
            <Link href={whatsappHref} className="text-sm font-semibold text-[#E86A33]">
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
