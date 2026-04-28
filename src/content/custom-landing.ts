export type CustomLandingContent = {
  hero: {
    brandName?: string;
    logoSrc?: string;
    logoAlt?: string;
    navItems: Array<{ label: string; href: string }>;
    logoSectionVariant?: "slider" | "grid";
    showBrandMarquee?: boolean;
    hideLogoSection?: boolean;
    badge: string;
    badgeMobile: string;
    badgeText: string;
    title: string;
    description: string;
    primaryCta: string;
    primaryCtaHref: string;
    navPrimaryCta: string;
    navPrimaryCtaHref: string;
    navSecondaryCta: string;
    navSecondaryCtaHref: string;
    logoTitleTop: string;
    logoTitleBottom: string;
    logoDescription: string;
    heroVideo?: {
      videoSrc: string;
      thumbnailSrc: string;
      thumbnailAlt: string;
      animationStyle?: "from-center" | "top-in-bottom-out";
      inline?: boolean;
    };
  };
  integration: {
    logoSrc?: string;
    logoAlt?: string;
    eyebrow: string;
    title: string;
    description: string;
    benefits: string[];
    ctaLabel: string;
    ctaHref: string;
    diagramDescription: string;
    nodeLabels: {
      crm: string;
      automation: string;
      whatsapp: string;
      ai: string;
      dados: string;
      integracoes: string;
    };
    footnote: string;
  };
  ecosystem: {
    logoSrc?: string;
    logoAlt?: string;
    title: string;
    description: string;
    centerTag: string;
    centerDescription: string;
    items: Array<{ title: string; description: string }>;
  };
  featureVideo: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
    videoSrc?: string;
    videoTitle?: string;
    mockupItems?: string[];
    cards: Array<{ title: string; description: string }>;
    galleryHeading: string;
    gallerySupportingText: string;
  };
  faq: {
    title: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };
  socialProof: {
    showAvatars?: boolean;
    bannerText: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
  footer: {
    brandName?: string;
    logoSrc?: string;
    logoAlt?: string;
    summary: string;
    ctaLabel: string;
    contactHref: string;
    socialLinks?: Array<{ href: string; label: string }>;
  };
};

const trialContent: CustomLandingContent = {
  hero: {
    brandName: "SAASK",
    logoSrc: "/saask-logo.webp",
    logoAlt: "SAASK",
    navItems: [
      { label: "Visao geral", href: "#template-hero" },
      { label: "Recursos", href: "#template-recursos" },
      { label: "Trial", href: "#template-trial" },
      { label: "FAQ", href: "#template-faq" },
    ],
    logoSectionVariant: "slider",
    showBrandMarquee: false,
    badge: "Powered by SAASK Trial Template",
    badgeMobile: "Trial SaaS",
    badgeText: "Teste gratis por 30 dias",
    title:
      "O ecossistema ideal para centralizar [processo principal] e acelerar [resultado desejado]",
    description:
      "Automatize e otimize [etapas, tarefas e operacoes] com uma plataforma unica que conecta [modulo central], [integracoes] e [automacoes] sem depender de processos dispersos.",
    primaryCta: "Teste gratis agora",
    primaryCtaHref: "#template-trial",
    navPrimaryCta: "Comecar teste gratis",
    navPrimaryCtaHref: "#template-trial",
    navSecondaryCta: "Falar com consultor",
    navSecondaryCtaHref: "#template-recursos",
    logoTitleTop: "Empresas com quem colaboramos.",
    logoTitleBottom: "Estruturas usadas pelos lideres.",
    logoDescription:
      "Logos, parceiros e marcas podem entrar aqui como prova visual de confianca e afinidade com o mercado.",
  },
  integration: {
    logoSrc: "/saask-logo.webp",
    logoAlt: "SAASK",
    eyebrow: "Integracoes e automacoes conectadas",
    title: "Acelere [processo principal] e traga mais produtividade para todo o time",
    description:
      "Conecte [modulo central], [canais], [automacoes] e [dados] em uma mesma operacao para reduzir retrabalho, dar mais visibilidade e acelerar a tomada de decisao.",
    benefits: [
      "Tomada de decisao mais assertiva",
      "Mais controle e eficiencia no atendimento",
      "Fluxos, canais e dados trabalhando juntos",
    ],
    ctaLabel: "Teste gratis",
    ctaHref: "#template-trial",
    diagramDescription:
      "Um hub visual mais limpo para mostrar como [canais], [dados] e [automacoes] convergem para a mesma plataforma.",
    nodeLabels: {
      crm: "CRM",
      automation: "Automacao",
      whatsapp: "WhatsApp",
      ai: "IA",
      dados: "Dados",
      integracoes: "Integracoes",
    },
    footnote: "Estrutura pronta para adaptar com canais, parceiros e plataformas reais",
  },
  ecosystem: {
    logoSrc: "/saask-logo.webp",
    logoAlt: "SAASK",
    title: "Ecossistema",
    description:
      "Uma visao de como [modulos], [canais] e [automacoes] podem se ligar a plataforma central e formar uma operacao mais clara, integrada e escalavel.",
    centerTag: "Plataforma central",
    centerDescription:
      "Ponto central da operacao, onde [dados], [canais] e [modulos] se conectam.",
    items: [
      { title: "[Canal com IA]", description: "Automatize [atendimento, qualificacao ou suporte] com contexto e continuidade." },
      { title: "[Canal integrado]", description: "Conecte [canais, entradas ou atendimentos] e direcione cada contato com agilidade." },
      { title: "[BI e relatorios]", description: "Use [dados, metas e indicadores] para decidir com mais clareza." },
      { title: "[Operacao integrada]", description: "Tenha visibilidade em tempo real sobre [pipeline, estoque ou operacao]." },
      { title: "[Campanhas e automacoes]", description: "Automatize jornadas para acelerar [ativacao] e [vendas]." },
      { title: "[Pos-venda]", description: "Mantenha relacionamento continuo com [clientes] e aumente [retencao]." },
      { title: "[CRM ou tarefas]", description: "De ao time mais clareza sobre [prioridades, etapas e proximas acoes]." },
    ],
  },
  featureVideo: {
    eyebrow: "Destaque de produto",
    title: "Transforme [processo principal] em uma maquina de conversao e operacao",
    description:
      "Integre [modulos], acompanhe [resultado desejado] e mostre o sistema funcionando em uma experiencia visual mais proxima do produto real.",
    ctaLabel: "Agendar demonstracao",
    ctaHref: "#template-trial",
    cards: [
      { title: "Eficiencia", description: "Tenha [controle] e mais eficiencia sobre [processo principal], com visibilidade centralizada do que acontece na operacao." },
      { title: "Agilidade", description: "Torne a tomada de decisao mais [assertiva], com dados em tempo real e acompanhamento claro do que gera resultado." },
      { title: "Controle", description: "Gerencie [modulos, tarefas ou estoque] com mais inteligencia, mantendo a base sempre integrada e atualizada." },
    ],
    galleryHeading: "Como Funciona",
    gallerySupportingText:
      "Conheca o funcionamento da plataforma e veja como e simples gerenciar suas financas.",
  },
  faq: {
    title: "Perguntas frequentes antes de comecar o trial",
    description:
      "Esta secao existe para quebrar objecoes, reduzir risco percebido e dar clareza sobre ativacao, suporte, integracoes e condicoes da oferta.",
    items: [
      {
        question: "O que entra no teste gratis?",
        answer:
          "O teste gratis pode incluir os modulos principais do sistema, acesso inicial para o time, configuracoes basicas e um periodo suficiente para validar aderencia ao seu processo.",
      },
      {
        question: "Preciso pagar taxa de setup ou assinar contrato longo?",
        answer:
          "Nao. A copy desta secao foi pensada para reduzir friccao comercial. Ao adaptar para um cliente real, substitua este texto pelas regras de onboarding, setup e permanencia da oferta.",
      },
      {
        question: "Posso integrar com ferramentas que ja uso hoje?",
        answer:
          "Sim, esta landing presume um SaaS com potencial de integracao ou centralizacao. Aqui vale listar CRMs, ERPs, WhatsApp, gateways, BI ou qualquer stack que reduza a percepcao de retrabalho.",
      },
      {
        question: "Quanto tempo leva para comecar a usar?",
        answer:
          "Use esta resposta para reforcar velocidade de ativacao. Exemplos: no mesmo dia, em poucos minutos, com apoio do time, ou apos uma configuracao inicial simples.",
      },
      {
        question: "E se eu tiver duvidas durante o trial?",
        answer:
          "A secao final da FAQ deve reduzir risco. Voce pode posicionar suporte humano, onboarding guiado, base de ajuda, WhatsApp ou acompanhamento do time comercial.",
      },
    ],
  },
  socialProof: {
    showAvatars: true,
    bannerText: "Validado por equipes que precisam de mais controle, velocidade e previsibilidade",
    title: "Transforme [processo principal] em uma operacao muito mais previsivel",
    description:
      "Este bloco final combina prova social com CTA para reforcar confianca, reduzir objecoes e abrir caminho para uma conversa comercial mais qualificada.",
    ctaLabel: "Agendar demonstracao",
    ctaHref: "#template-trial",
  },
  footer: {
    brandName: "SAASK",
    logoSrc: "/saask-logo.webp",
    logoAlt: "SAASK",
    summary:
      "Este template foi pensado para SaaS com trial, copy orientada a conversao e estrutura visual facil de adaptar para diferentes nichos sem perder clareza comercial.",
    ctaLabel: "Comecar teste gratis",
    contactHref: "#template-trial",
    socialLinks: [],
  },
};

const directContent: CustomLandingContent = {
  hero: {
    brandName: "SAASK",
    logoSrc: "/saask-logo.webp",
    logoAlt: "SAASK",
    navItems: [
      { label: "Oferta", href: "#template-hero" },
      { label: "Demo", href: "#template-recursos" },
      { label: "Beneficios", href: "#template-trial" },
      { label: "FAQ", href: "#template-faq" },
    ],
    logoSectionVariant: "grid",
    showBrandMarquee: true,
    badge: "Powered by SAASK Direct Template",
    badgeMobile: "Venda SaaS",
    badgeText: "Assine e comece hoje",
    title:
      "A forma mais direta de transformar [processo principal] em receita previsivel",
    description:
      "Substitua ferramentas soltas por uma plataforma unica que organiza [operacao], acelera [resultado desejado] e deixa a decisao de compra mais simples desde o primeiro acesso.",
    primaryCta: "Assinar agora",
    primaryCtaHref: "#template-trial",
    navPrimaryCta: "Assinar agora",
    navPrimaryCtaHref: "#template-trial",
    navSecondaryCta: "Ver demo",
    navSecondaryCtaHref: "#template-recursos",
    logoTitleTop: "Marcas e operacoes que inspiram confianca.",
    logoTitleBottom: "Estruturas semelhantes as usadas por lideres de mercado.",
    logoDescription:
      "Use esta faixa para logos, parceiros ou players de referencia que reforcem a percepcao de credibilidade da oferta.",
    heroVideo: {
      videoSrc: "https://www.youtube.com/embed/qh3NGpYRG3I?autoplay=1&mute=1&loop=1&playlist=qh3NGpYRG3I&controls=1&modestbranding=1&rel=0",
      thumbnailSrc: "https://startup-template-sage.vercel.app/hero-dark.png",
      thumbnailAlt: "Video de apresentacao do produto",
      animationStyle: "from-center",
      inline: true,
    },
  },
  integration: {
    logoSrc: "/saask-logo.webp",
    logoAlt: "SAASK",
    eyebrow: "Operacao centralizada e pronta para vender",
    title: "Conecte [canais], [automacoes] e [modulo central] em uma oferta facil de entender e comprar",
    description:
      "Mostre como a plataforma reduz custo operacional, organiza o fluxo comercial e entrega uma experiencia unica para quem precisa decidir rapido.",
    benefits: [
      "Mais clareza comercial para acelerar a compra",
      "Menos retrabalho na operacao e no atendimento",
      "Dados e canais reunidos em uma unica plataforma",
    ],
    ctaLabel: "Assinar agora",
    ctaHref: "#template-trial",
    diagramDescription:
      "Este hub visual ajuda a mostrar como canais, automacoes e dados se conectam a plataforma e ampliam o valor percebido da oferta.",
    nodeLabels: {
      crm: "Oferta",
      automation: "Fluxos",
      whatsapp: "WhatsApp",
      ai: "Suporte",
      dados: "Dados",
      integracoes: "Checkout",
    },
    footnote: "Bloco pronto para adaptar com canais, parceiros ou integracoes comerciais reais",
  },
  ecosystem: {
    logoSrc: "/saask-logo.webp",
    logoAlt: "SAASK",
    title: "Ecossistema",
    description:
      "Uma leitura visual de como [produto], [canais] e [automacoes] podem trabalhar juntos para vender mais e operar melhor sem aumentar complexidade.",
    centerTag: "Plataforma central",
    centerDescription:
      "Centro da oferta, conectando aquisicao, atendimento, conversao e acompanhamento.",
    items: [
      { title: "[Canal de aquisicao]", description: "Capture demanda em [midia, inbound ou canais proprietarios] com mais eficiencia." },
      { title: "[Atendimento comercial]", description: "Conecte contato, contexto e historico para acelerar a conversao." },
      { title: "[Relatorios de receita]", description: "Acompanhe [margem, conversao e volume] com mais previsibilidade." },
      { title: "[Operacao financeira]", description: "Organize [pagamentos, oferta ou entrega] em um fluxo mais claro." },
      { title: "[Campanhas de venda]", description: "Ative jornadas para vender mais sem aumentar o time na mesma proporcao." },
      { title: "[Retencao e expansao]", description: "Crie continuidade para aumentar recompra, adesao ou LTV." },
      { title: "[Gestao comercial]", description: "Dê ao time uma visao mais objetiva sobre metas, prioridades e proximas acoes." },
    ],
  },
  featureVideo: {
    eyebrow: "Destaque de produto",
    title: "Mostre a plataforma em acao e deixe a oferta mais facil de comprar",
    description:
      "Use a demo para aproximar o visitante do produto real, evidenciar valor rapido e reduzir a friccao entre interesse e assinatura.",
    ctaLabel: "Assinar agora",
    ctaHref: "#template-trial",
    cards: [
      { title: "Conversao", description: "Apresente [oferta], [modulos] e [resultado] de um jeito que aumente confianca e acelere a decisao." },
      { title: "Velocidade", description: "Encurte o caminho entre descoberta e compra com uma narrativa visual mais comercial e objetiva." },
      { title: "Retorno", description: "Deixe claro como a plataforma melhora [operacao], reduz desperdicio e aumenta resultado." },
    ],
    galleryHeading: "Mockups comerciais do produto",
    gallerySupportingText:
      "Uma galeria para reforcar valor percebido, destacar as telas mais fortes da plataforma e sustentar a decisao de compra com mais clareza.",
  },
  faq: {
    title: "Perguntas frequentes antes de assinar",
    description:
      "Este bloco ajuda a reduzir objecoes comerciais, explicar condicoes da oferta e dar seguranca para quem esta pronto para decidir.",
    items: [
      {
        question: "O que esta incluso no plano inicial?",
        answer:
          "Use esta resposta para explicar o que entra na assinatura, quais modulos ja estao disponiveis e o que faz parte da oferta principal.",
      },
      {
        question: "Preciso de setup complexo para comecar?",
        answer:
          "O ideal aqui e reforcar simplicidade: onboarding rapido, configuracao guiada e tempo curto para ativacao do primeiro valor percebido.",
      },
      {
        question: "Existe contrato longo ou taxa escondida?",
        answer:
          "Esta e a resposta que reduz friccao comercial. Vale deixar claro se ha fidelidade, setup, taxas adicionais ou liberdade para cancelar.",
      },
      {
        question: "Consigo integrar com ferramentas que ja uso?",
        answer:
          "Sim. Use este ponto para listar integracoes relevantes e diminuir a percepcao de troca dificil ou risco de migracao.",
      },
      {
        question: "E se eu precisar de ajuda depois da compra?",
        answer:
          "Reforce suporte, onboarding, canais de contato e qualquer camada de acompanhamento que ajude a converter com mais confianca.",
      },
    ],
  },
  socialProof: {
    showAvatars: true,
    bannerText: "Usado por equipes que querem vender com mais clareza e operar com menos friccao",
    title: "Leve [processo principal] para um nivel mais comercial, previsivel e escalavel",
    description:
      "Use este fechamento para reforcar valor percebido, reduzir risco e convidar o visitante a concluir a compra ou falar com o time.",
    ctaLabel: "Assinar agora",
    ctaHref: "#template-trial",
  },
  footer: {
    brandName: "SAASK",
    logoSrc: "/saask-logo.webp",
    logoAlt: "SAASK",
    summary:
      "Este template foi montado para venda direta, com copy mais orientada a oferta, valor percebido e decisao comercial mais rapida.",
    ctaLabel: "Assinar agora",
    contactHref: "#template-trial",
    socialLinks: [],
  },
};

const anotejaContent: CustomLandingContent = {
  hero: {
    brandName: "AnoteJa",
    logoSrc: "/anoteja-logo.png",
    logoAlt: "AnoteJa",
    navItems: [
      { label: "Beneficios", href: "#template-recursos" },
      { label: "Planos", href: "#template-trial" },
      { label: "FAQ", href: "#template-faq" },
    ],
    logoSectionVariant: "grid",
    showBrandMarquee: false,
    hideLogoSection: true,
    badge: "Delivery sem comissao",
    badgeMobile: "7 dias gratis",
    badgeText: "Teste 7 dias gratis e veja o sistema rodando no seu delivery",
    title:
      "Plataforma propria de [delivery] com [IA no WhatsApp], [PDV] e [gestao de pedidos] sem pagar comissao por pedido.",
    description:
      "Monte seu canal proprio de vendas com cardapio digital, loja online, impressao automatica e atendimento no WhatsApp. Tudo em um so lugar para vender mais e depender menos dos apps de terceiros.",
    primaryCta: "Comecar teste gratis",
    primaryCtaHref: "https://app.anoteja.com.br/cadastro",
    navPrimaryCta: "Cadastrar gratis",
    navPrimaryCtaHref: "https://app.anoteja.com.br/cadastro",
    navSecondaryCta: "Falar no WhatsApp",
    navSecondaryCtaHref:
      "https://wa.me/5519982764849?text=Ol%C3%A1!%20Quero%20conhecer%20o%20AnoteJ%C3%A1%20Delivery.",
    logoTitleTop: "",
    logoTitleBottom: "",
    logoDescription: "",
  },
  integration: {
    logoSrc: "/anoteja-logo.png",
    logoAlt: "AnoteJa",
    eyebrow: "Tudo conectado em uma operacao so",
    title: "Receba pedidos, automatize o WhatsApp e acompanhe a operacao do delivery sem depender de varias ferramentas",
    description:
      "O AnoteJa junta cardapio digital, loja online, PDV delivery, automacao no WhatsApp e relatorios em uma plataforma unica. O resultado e mais controle do atendimento, menos erro no pedido e mais agilidade para vender.",
    benefits: [
      "Sem taxas por pedido e sem comissao sobre suas vendas",
      "WhatsApp com atendimento automatizado e mais velocidade no retorno",
      "Pedidos, taxas de entrega, produtos e relatorios em um unico painel",
    ],
    ctaLabel: "Comecar teste gratis",
    ctaHref: "https://app.anoteja.com.br/cadastro",
    diagramDescription:
      "Uma visao simples de como o AnoteJa conecta atendimento, pedidos, automacao e dados para o delivery vender com mais autonomia.",
    nodeLabels: {
      crm: "Pedidos",
      automation: "Automacao",
      whatsapp: "WhatsApp",
      ai: "IA",
      dados: "Relatorios",
      integracoes: "PDV",
    },
    footnote:
      "Estrutura pensada para restaurantes, lanchonetes, pizzarias e operacoes de delivery que querem vender no canal proprio.",
  },
  ecosystem: {
    logoSrc: "/anoteja-logo.png",
    logoAlt: "AnoteJa",
    title: "O ecossistema do seu delivery em um so sistema",
    description:
      "Cada modulo ajuda a tirar o delivery do improviso e colocar sua operacao em um fluxo mais claro, mais rapido e muito mais lucrativo.",
    centerTag: "AnoteJa Delivery",
    centerDescription:
      "Centro da operacao para cardapio, loja online, atendimento, pedidos e acompanhamento dos resultados.",
    items: [
      { title: "Cardapio digital", description: "Deixe seu cliente pedir com facilidade, direto do seu canal, com mais praticidade para comprar." },
      { title: "Loja online publica", description: "Tenha um endereco proprio para receber pedidos sem depender apenas de marketplaces." },
      { title: "WhatsApp com IA", description: "Atenda mais rapido, responda duvidas e agilize o fechamento dos pedidos com automacao." },
      { title: "Gestao de pedidos", description: "Acompanhe os pedidos em tempo real e reduza falhas no fluxo entre atendimento e cozinha." },
      { title: "PDV Delivery WhatsApp", description: "Centralize o atendimento e a operacao em um painel pensado para quem vende todos os dias." },
      { title: "Taxas de entrega", description: "Configure regras de entrega com mais clareza para proteger margem e evitar cobrancas erradas." },
      { title: "Relatorios PDV", description: "Entenda volume, operacao e resultado com mais visibilidade para decidir melhor." },
    ],
  },
  featureVideo: {
    eyebrow: "Oferta e percepcao de valor",
    title: "Teste por 7 dias, veja os planos e escolha o formato ideal para o seu delivery crescer com canal proprio",
    description:
      "A proposta aqui e simples: voce testa, entende a operacao funcionando no seu negocio e ja enxerga como o sistema reduz dependencia de app, organiza o atendimento e melhora a rotina da equipe.",
    ctaLabel: "Ver planos e comecar",
    ctaHref: "https://app.anoteja.com.br/cadastro",
    mockupItems: [
      "Teste 7 dias gratis",
      "Sem taxas por pedido",
      "Planos a partir de R$ 219,90/mês",
      "WhatsApp com IA e PDV Delivery",
    ],
    cards: [
      { title: "Teste real", description: "Comece com 7 dias gratis para validar o fluxo do atendimento, dos pedidos e da rotina do delivery sem friccao." },
      { title: "Preco claro", description: "Mostre que o cliente pode testar e ja entender o valor da mensalidade sem surpresa e sem comissao sobre pedido." },
      { title: "Atendimento rapido", description: "Deixe o WhatsApp sempre acessivel para quem quer tirar duvidas antes de cadastrar ou comparar os planos." },
    ],
    galleryHeading: "Blocos que sustentam a decisao comercial",
    gallerySupportingText:
      "Teste gratis, preco visivel, automacao no WhatsApp, PDV delivery e cardapio digital entram juntos para reforcar uma oferta direta, clara e facil de entender.",
  },
  faq: {
    title: "Perguntas frequentes antes de testar o AnoteJa",
    description:
      "Essa secao ajuda a quebrar objecoes sobre preco, trial, taxas e operacao para facilitar a decisao de quem esta avaliando o sistema.",
    items: [
      {
        question: "O AnoteJa tem teste gratis?",
        answer:
          "Sim. O site trabalha com a proposta de 7 dias gratis para voce testar a plataforma e entender como o delivery pode operar com mais autonomia no canal proprio.",
      },
      {
        question: "Existe taxa por pedido ou comissao sobre as vendas?",
        answer:
          "A narrativa principal da oferta e justamente vender sem taxas por pedido e sem comissao. A proposta comercial fica centrada na mensalidade do plano.",
      },
      {
        question: "Quais planos aparecem hoje na oferta?",
        answer:
          "Na referencia publica, o plano Start aparece por R$ 219,90 por mes e a versao Start + IA aparece por R$ 399 por mes, com destaque para o teste gratis e para a ausencia de comissao por pedido.",
      },
      {
        question: "O sistema atende so cardapio digital ou vai alem disso?",
        answer:
          "Vai alem. O posicionamento do AnoteJa combina cardapio digital, loja online, gestao de pedidos, PDV delivery, taxas de entrega, relatorios e automacao no WhatsApp.",
      },
      {
        question: "Se eu quiser falar com alguem antes de cadastrar, tem atendimento?",
        answer:
          "Sim. A LP tambem abre caminho para o WhatsApp, o que ajuda bastante quem prefere tirar duvidas comerciais antes de iniciar o teste.",
      },
    ],
  },
  socialProof: {
    showAvatars: false,
    bannerText: "Modelo pensado para restaurantes e operacoes de delivery que querem vender no canal proprio",
    title: "Teste gratis, veja o valor com clareza e fale no WhatsApp quando quiser agilizar a decisao",
    description:
      "Esse fechamento mistura captacao e venda direta: o visitante entende o valor da oferta, inicia o teste e ainda tem um caminho facil para falar com o time comercial.",
    ctaLabel: "Falar no WhatsApp",
    ctaHref:
      "https://wa.me/5519982764849?text=Ol%C3%A1!%20Quero%20conhecer%20o%20AnoteJ%C3%A1%20Delivery.",
  },
  footer: {
    brandName: "AnoteJa",
    logoSrc: "/anoteja-logo.png",
    logoAlt: "AnoteJa",
    summary:
      "Template comercial inspirado na oferta publica do AnoteJa, com foco em 7 dias gratis, preco visivel, WhatsApp e narrativa de delivery sem comissao por pedido.",
    ctaLabel: "Cadastrar gratis",
    contactHref: "https://app.anoteja.com.br/cadastro",
    socialLinks: [
      {
        href: "https://wa.me/5519982764849?text=Ol%C3%A1!%20Quero%20conhecer%20o%20AnoteJ%C3%A1%20Delivery.",
        label: "WhatsApp",
      },
    ],
  },
};

export const customLandingContentBySlug: Record<string, CustomLandingContent> = {
  "saas-br-trial": trialContent,
  "saas-br-venda-direta": directContent,
  "anoteja-delivery": anotejaContent,
};
