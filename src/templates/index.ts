import type { SectionDefinition, TemplateDefinition, TemplateTheme } from "@/types/templates";

const trialTheme: TemplateTheme = {
  background: "#0d1220",
  foreground: "#f8fafc",
  card: "rgba(11, 18, 32, 0.74)",
  cardBorder: "rgba(34, 211, 238, 0.16)",
  mutedForeground: "#97a8bc",
  accent: "#22d3ee",
  accentStrong: "#06b6d4",
  accentSoft: "rgba(34, 211, 238, 0.16)",
  success: "#86efac",
  shadowColor: "rgba(6, 12, 24, 0.42)",
};

const directTheme: TemplateTheme = {
  background: "#0b1322",
  foreground: "#f8fafc",
  card: "rgba(11, 18, 32, 0.78)",
  cardBorder: "rgba(34, 211, 238, 0.16)",
  mutedForeground: "#9fb2c9",
  accent: "#22d3ee",
  accentStrong: "#06b6d4",
  accentSoft: "rgba(34, 211, 238, 0.18)",
  success: "#7dd3fc",
  shadowColor: "rgba(5, 10, 22, 0.44)",
};

const consultiveTheme: TemplateTheme = {
  background: "#0f172a",
  foreground: "#eff6ff",
  card: "rgba(15, 23, 42, 0.78)",
  cardBorder: "rgba(96, 165, 250, 0.18)",
  mutedForeground: "#afbdd3",
  accent: "#60a5fa",
  accentStrong: "#3b82f6",
  accentSoft: "rgba(96, 165, 250, 0.18)",
  success: "#93c5fd",
  shadowColor: "rgba(2, 6, 23, 0.4)",
};

const fintechTheme: TemplateTheme = {
  background: "#091411",
  foreground: "#ecfeff",
  card: "rgba(8, 20, 17, 0.78)",
  cardBorder: "rgba(45, 212, 191, 0.2)",
  mutedForeground: "#a5d6d1",
  accent: "#14b8a6",
  accentStrong: "#0f766e",
  accentSoft: "rgba(20, 184, 166, 0.18)",
  success: "#5eead4",
  shadowColor: "rgba(3, 10, 8, 0.45)",
};

const categoryTheme: TemplateTheme = {
  background: "#171225",
  foreground: "#faf5ff",
  card: "rgba(27, 19, 41, 0.78)",
  cardBorder: "rgba(244, 114, 182, 0.18)",
  mutedForeground: "#d6c9e8",
  accent: "#f472b6",
  accentStrong: "#ec4899",
  accentSoft: "rgba(244, 114, 182, 0.18)",
  success: "#f9a8d4",
  shadowColor: "rgba(14, 8, 23, 0.44)",
};

const anotejaTheme: TemplateTheme = {
  background: "#fffaf7",
  foreground: "#1A0A00",
  card: "rgba(255, 255, 255, 0.95)",
  cardBorder: "rgba(232, 106, 51, 0.18)",
  mutedForeground: "#6f4c3b",
  accent: "#E86A33",
  accentStrong: "#c84e19",
  accentSoft: "rgba(232, 106, 51, 0.16)",
  success: "#E86A33",
  shadowColor: "rgba(26, 10, 0, 0.18)",
};

function createSection(section: SectionDefinition): SectionDefinition {
  return section;
}

const saasBrTrialSections = [
  createSection({
    id: "hero",
    title: "Hero com promessa direta",
    sectionType: "hero",
    variant: "split-proof",
    eyebrow: "Template 01",
    summary:
      "Acima da dobra com beneficio principal, CTA de teste gratis e prova rapida de aderencia para PMEs.",
    copyGuide: {
      headline: "Troque processos soltos por um sistema que acelera vendas e operacao.",
      supportingCopy:
        "Use headline direta, nomeie a dor principal do nicho e prometa ganho mensuravel em tempo, previsibilidade ou receita.",
      bullets: [
        "Cite o principal modulo ja no subtitulo.",
        "Acrescente uma prova rapida como numero de clientes, volume processado ou integracoes nativas.",
        "Use CTA com verbo claro: teste, experimentar, comecar.",
      ],
      ctaNote: "CTA principal sempre orientado a trial ou demo curta; CTA secundario para WhatsApp.",
    },
    mockupGuide: {
      layout: "Split screen com texto a esquerda e mockup principal a direita.",
      composition:
        "Mostrar dashboard real com cards de funil, atendimentos, tarefas ou modulos chave.",
      highlightItems: [
        "Indicadores de resultado",
        "Lista de leads ou tickets",
        "Automacoes visiveis",
      ],
      captureNotes: [
        "Evitar dashboard vazio.",
        "Preferir estado preenchido com dados plausiveis do nicho.",
      ],
    },
    mediaGuide: {
      preferredAssetType: "dashboard",
      productContext: "Tela inicial do produto com o fluxo central ativo.",
      featureFocus: ["visao geral", "gestao comercial", "automacao"],
      avoidGenericStock: true,
      videoSuggestion:
        "Loop curto mostrando navegação entre dashboard, funil e automacao.",
      altSuggestion:
        "Dashboard do SaaS exibindo pipeline, indicadores e automacoes em tempo real.",
    },
    requiredInputs: ["headline", "subheadline", "cta principal", "print principal"],
    optionalInputs: ["logos", "micro prova", "video loop"],
  }),
  createSection({
    id: "problem",
    title: "Dor operacional atual",
    sectionType: "pain",
    variant: "pain-to-outcome",
    summary:
      "Mostra o caos atual antes de apresentar a estrutura do software.",
    copyGuide: {
      headline: "Sua empresa nao precisa crescer em cima de planilha, retrabalho e perda de lead.",
      supportingCopy:
        "Use linguagem de impacto comercial e operacional. O leitor precisa sentir que o sistema organiza o que hoje esta espalhado.",
      bullets: [
        "Listar 3 dores concretas e recorrentes.",
        "Conectar a dor ao custo financeiro ou perda de produtividade.",
        "Fechar com a promessa de centralizacao.",
      ],
      ctaNote: "Nao usar CTA forte aqui; foco em consciencia de problema.",
    },
    mockupGuide: {
      layout: "Cards com problemas de um lado e ganhos correspondentes do outro.",
      composition:
        "Se houver imagem, usar comparativo visual entre fluxo manual e fluxo centralizado.",
      highlightItems: ["lead perdido", "estoque inconsistente", "atraso de resposta"],
      captureNotes: [
        "Pode usar mini prints de antes e depois.",
        "Evitar ilustrações abstratas demais.",
      ],
    },
    mediaGuide: {
      preferredAssetType: "workflow",
      productContext: "Fluxo operacional saindo de atendimento para funil e tarefas.",
      featureFocus: ["centralizacao", "automacao", "visibilidade"],
      avoidGenericStock: true,
      videoSuggestion:
        "Sequencia de 6 a 8 segundos mostrando evento entrando e virando acao.",
      altSuggestion:
        "Fluxo do software conectando atendimento, pipeline e tarefas operacionais.",
    },
    requiredInputs: ["3 dores principais", "ganho esperado"],
    optionalInputs: ["comparativo antes e depois"],
  }),
  createSection({
    id: "features",
    title: "Modulos e funcionalidades",
    sectionType: "feature-grid",
    variant: "icon-grid-with-proof",
    summary:
      "Secao para apresentar os modulos do produto em linguagem orientada a beneficio.",
    copyGuide: {
      headline: "Tudo o que o time precisa para vender, acompanhar e escalar em um so lugar.",
      supportingCopy:
        "Escreva cada funcionalidade como ganho. O modulo existe para entregar visibilidade, velocidade ou controle.",
      bullets: [
        "Misturar beneficio curto com evidencias do modulo.",
        "Usar nomes familiares ao nicho.",
        "Evitar texto tecnico demais neste template.",
      ],
      ctaNote: "Inserir mini CTA apos a grade se o bloco estiver acima da dobra.",
    },
    mockupGuide: {
      layout: "Grade de 4 a 6 cards com um mockup lateral complementar.",
      composition:
        "Cada card deve poder apontar para uma area especifica do print principal.",
      highlightItems: [
        "CRM ou funil",
        "WhatsApp e IA",
        "relatorios",
        "integracoes",
      ],
      captureNotes: [
        "Separar prints por modulo se o sistema for muito amplo.",
        "Dar zoom em telas de uso real.",
      ],
    },
    mediaGuide: {
      preferredAssetType: "module-screenshot",
      productContext: "Telas reais de modulos centrais do produto.",
      featureFocus: ["crm", "tarefas", "atendimento", "relatorios"],
      avoidGenericStock: true,
      videoSuggestion:
        "Carrossel ou sequencia curta navegando entre modulos prioritarios.",
      altSuggestion:
        "Conjunto de telas do SaaS exibindo modulos de vendas, atendimento e relatorios.",
    },
    requiredInputs: ["4 a 6 funcionalidades", "print dos modulos"],
    optionalInputs: ["icones", "microcases"],
  }),
  createSection({
    id: "metrics",
    title: "Numeros e prova rapida",
    sectionType: "metrics",
    variant: "stats-band",
    summary:
      "Faixa com metricas confiaveis para reforcar tracao ou capacidade operacional.",
    copyGuide: {
      headline: "Resultados que ajudam a encurtar a decisao.",
      supportingCopy:
        "Escolha numeros que apoiem confianca: clientes, oportunidades geradas, horas economizadas, transacoes ou atendimento.",
      bullets: [
        "Usar ate 4 numeros.",
        "Evitar inflar metricas sem contexto.",
        "Adicionar legenda curta explicando o indicador.",
      ],
      ctaNote: "Pode ancorar mini CTA de teste abaixo da faixa.",
    },
    mockupGuide: {
      layout: "Faixa de estatisticas com fundo forte e chips de apoio.",
      composition:
        "Se houver imagem, usar screenshot com indicadores que se conectem aos numeros exibidos.",
      highlightItems: ["volume processado", "tempo medio", "base ativa"],
      captureNotes: ["Usar fontes grandes e leitura imediata."],
    },
    mediaGuide: {
      preferredAssetType: "dashboard",
      productContext: "Indicadores visiveis do sistema em tempo real.",
      featureFocus: ["volume", "performance", "uso"],
      avoidGenericStock: true,
      videoSuggestion:
        "Animacao curta de contadores subindo ao lado do print do dashboard.",
      altSuggestion:
        "Painel do software exibindo indicadores de operacao e crescimento.",
    },
    requiredInputs: ["3 a 4 metricas reais"],
    optionalInputs: ["legenda de origem", "selo de cliente"],
  }),
  createSection({
    id: "pricing",
    title: "Oferta e planos",
    sectionType: "pricing",
    variant: "trial-offer",
    summary:
      "Bloco de conversao para trial, com valor percebido alto e baixa friccao.",
    copyGuide: {
      headline: "Comece com risco baixo e clareza sobre o valor da plataforma.",
      supportingCopy:
        "Priorize trial, onboarding simples e suporte proximo. Se houver preco, manter leitura leve.",
      bullets: [
        "Explicar o que entra no periodo de teste.",
        "Destacar tempo de ativacao ou setup.",
        "Trazer algum gatilho de suporte ou acompanhamento.",
      ],
      ctaNote: "CTA principal deve repetir o mesmo texto do hero.",
    },
    mockupGuide: {
      layout: "Cartao de oferta com destaque visual e checklist ao lado.",
      composition:
        "Se usar imagem, mostrar onboarding, tela inicial ou configuracao rapida.",
      highlightItems: ["trial", "setup rapido", "suporte"],
      captureNotes: ["Evitar tabelas densas demais nesse template."],
    },
    mediaGuide: {
      preferredAssetType: "pricing-visual",
      productContext: "Oferta inicial e percepcao de facilidade para comecar.",
      featureFocus: ["trial", "ativacao", "suporte"],
      avoidGenericStock: true,
      videoSuggestion:
        "Mini demo da primeira configuracao ou dos primeiros 30 segundos de uso.",
      altSuggestion:
        "Visao da oferta inicial do SaaS com checklist de implementacao e trial.",
    },
    requiredInputs: ["texto de oferta", "periodo de trial", "CTA"],
    optionalInputs: ["preco", "garantia", "onboarding"],
  }),
  createSection({
    id: "faq",
    title: "FAQ de objecoes comuns",
    sectionType: "faq",
    variant: "supportive",
    summary:
      "Perguntas frequentes para reduzir incerteza antes da conversao.",
    copyGuide: {
      headline: "As duvidas que mais travam a decisao antes do teste.",
      supportingCopy:
        "Responder em linguagem objetiva, comercial e honesta. FAQ deve aliviar risco percebido.",
      bullets: [
        "Cobrir implantacao, integracoes, suporte e cancelamento.",
        "Evitar respostas vagas.",
        "Manter de 5 a 8 perguntas no maximo.",
      ],
      ctaNote: "Fechar com CTA para teste ou WhatsApp.",
    },
    mockupGuide: {
      layout: "Accordion simples com CTA de contato ao final.",
      composition: "Sem mockup obrigatorio; foco em legibilidade.",
      highlightItems: ["implantacao", "integracao", "suporte"],
      captureNotes: ["Manter leitura limpa em mobile."],
    },
    mediaGuide: {
      preferredAssetType: "team-photo",
      productContext: "Se usar imagem, preferir time de suporte ou especialista real.",
      featureFocus: ["suporte", "implantacao"],
      avoidGenericStock: true,
      videoSuggestion:
        "Opcional: video curto do especialista explicando o processo de ativacao.",
      altSuggestion:
        "Especialista de onboarding do SaaS apresentando suporte e implementacao.",
    },
    requiredInputs: ["perguntas e respostas"],
    optionalInputs: ["foto do especialista", "link para contato"],
  }),
  createSection({
    id: "final-cta",
    title: "Fechamento de conversao",
    sectionType: "final-cta",
    variant: "reassurance",
    summary:
      "Bloco final para repetir promessa, reduzir risco e chamar para acao.",
    copyGuide: {
      headline: "Coloque o sistema para trabalhar pelo seu time ainda esta semana.",
      supportingCopy:
        "Reforcar ganho principal e senso de simplicidade para comecar.",
      bullets: [
        "Retomar beneficio central do hero.",
        "Repetir CTA principal.",
        "Oferecer CTA secundario conversacional.",
      ],
      ctaNote: "Sempre usar o mesmo CTA principal do template.",
    },
    mockupGuide: {
      layout: "Faixa de fechamento com um print ou video a direita.",
      composition: "Mostrar tela mais bonita do produto ou fluxo final desejado.",
      highlightItems: ["visao geral", "resultado final"],
      captureNotes: ["Usar ativo de maior apelo visual do software."],
    },
    mediaGuide: {
      preferredAssetType: "product-video",
      productContext: "Resumo visual da plataforma em acao.",
      featureFocus: ["resultado final", "uso fluido"],
      avoidGenericStock: true,
      videoSuggestion: "Video curto de 8 a 12 segundos com cenas do produto.",
      altSuggestion:
        "Resumo visual do SaaS em funcionamento com foco em ganho de produtividade.",
    },
    requiredInputs: ["headline final", "cta principal", "cta secundario"],
    optionalInputs: ["video", "prova final"],
  }),
];

const saasBrDirectSections = [
  createSection({
    id: "hero",
    title: "Hero de oferta forte",
    sectionType: "hero",
    variant: "offer-first",
    eyebrow: "Template 02",
    summary:
      "Hero para venda direta com argumento economico, ganho rapido e CTA de assinatura.",
    copyGuide: {
      headline: "Pare de pagar por varias ferramentas para fazer o que um sistema resolve sozinho.",
      supportingCopy:
        "A promessa aqui deve conversar com economia, escala e velocidade. O usuario precisa ver um retorno financeiro rapido.",
      bullets: [
        "Explorar substituicao de ferramentas ou custo evitado.",
        "Inserir ancoragem de economia mensal.",
        "Usar CTA comercial mais forte.",
      ],
      ctaNote: "CTA principal orientado a compra imediata.",
    },
    mockupGuide: {
      layout: "Texto de oferta a esquerda, mockup principal e cartao de plano a direita.",
      composition: "Misturar tela real do produto com bloco de economia ou oferta.",
      highlightItems: ["preco", "economia", "resultado"],
      captureNotes: ["Visual mais agressivo e comercial."],
    },
    mediaGuide: {
      preferredAssetType: "dashboard",
      productContext: "Tela principal + destaque de ROI ou economia comparada.",
      featureFocus: ["economia", "substituicao de stack", "volume"],
      avoidGenericStock: true,
      videoSuggestion:
        "Demo rapida mostrando como o sistema centraliza tarefas antes fragmentadas.",
      altSuggestion:
        "Tela do software destacando economia e operacao centralizada em um unico sistema.",
    },
    requiredInputs: ["headline", "oferta", "cta", "prova de economia"],
    optionalInputs: ["urgencia", "parcelamento"],
  }),
  createSection({
    id: "comparison",
    title: "Antes vs depois",
    sectionType: "comparison",
    variant: "stack-replacement",
    summary:
      "Comparativo entre o jeito antigo e a operacao ideal com a plataforma.",
    copyGuide: {
      headline: "Sem a plataforma voce improvisa. Com a plataforma voce opera com previsibilidade.",
      supportingCopy:
        "Comparativo direto, sem excesso de texto. O objetivo e tornar a troca obvia.",
      bullets: [
        "Usar 3 a 5 linhas de contraste.",
        "Apontar retrabalho, atraso e custo oculto.",
        "Mostrar ganho em controle, escala e margem.",
      ],
      ctaNote: "Inserir CTA curto logo abaixo do comparativo.",
    },
    mockupGuide: {
      layout: "Tabela ou colunas paralelas com destaque visual no depois.",
      composition: "Se usar mockup, o lado positivo deve apontar para uma tela real.",
      highlightItems: ["tempo", "custo", "resultado"],
      captureNotes: ["Nao deixar a tabela densa demais."],
    },
    mediaGuide: {
      preferredAssetType: "workflow",
      productContext: "Fluxo de operacao antes fragmentado e depois centralizado.",
      featureFocus: ["centralizacao", "velocidade", "redução de custo"],
      avoidGenericStock: true,
      videoSuggestion:
        "Animacao do fluxo antigo quebrado se transformando em fluxo unico.",
      altSuggestion:
        "Comparativo visual entre operacao manual fragmentada e operacao centralizada no SaaS.",
    },
    requiredInputs: ["coluna sem sistema", "coluna com sistema"],
    optionalInputs: ["ganho monetario", "tempo economizado"],
  }),
  createSection({
    id: "persona-grid",
    title: "Para quem e",
    sectionType: "persona-grid",
    variant: "buyer-clarity",
    summary:
      "Clareza de aderencia para perfis de cliente que mais convertem.",
    copyGuide: {
      headline: "Feito para quem precisa vender, executar e ganhar controle sem inflar a operacao.",
      supportingCopy:
        "Use 3 perfis claros de usuario ou negocio. Isso ajuda o visitante a se enxergar na oferta.",
      bullets: [
        "Nomear perfis com linguagem de mercado.",
        "Descrever quando o template encaixa e quando nao encaixa.",
        "Trazer micro-beneficio por persona.",
      ],
      ctaNote: "Pode levar para assinatura direta ou conversa com consultor.",
    },
    mockupGuide: {
      layout: "Tres cards com personas e mini provas.",
      composition: "Adicionar print ou bloco lateral com modulo que cada persona mais usa.",
      highlightItems: ["agencia", "operacao comercial", "gestor"],
      captureNotes: ["Usar icones ou fotos somente se fizer sentido real."],
    },
    mediaGuide: {
      preferredAssetType: "module-screenshot",
      productContext: "Recortes de modulos diferentes por perfil de uso.",
      featureFocus: ["uso por persona", "modulos aderentes"],
      avoidGenericStock: true,
      videoSuggestion:
        "Sequencia curta de 3 recortes do sistema, um para cada perfil.",
      altSuggestion:
        "Modulos do SaaS destacados de acordo com diferentes perfis de cliente.",
    },
    requiredInputs: ["3 personas", "beneficios por persona"],
    optionalInputs: ["microprovas", "segmentos"],
  }),
  createSection({
    id: "pricing",
    title: "Pricing de conversao",
    sectionType: "pricing",
    variant: "direct-sale",
    summary:
      "Tabela comercial com parcelamento, ancoragem e diferenca entre planos.",
    copyGuide: {
      headline: "Escolha o plano que faz mais sentido para o seu momento e comece agora.",
      supportingCopy:
        "O bloco precisa ser legivel, orientado a acao e com ancoragem clara de melhor oferta.",
      bullets: [
        "Dar destaque visual ao plano recomendado.",
        "Se houver parcelamento, manter transparencia.",
        "Explicar o que entra em cada faixa.",
      ],
      ctaNote: "CTA principal deve apontar para assinatura ou checkout.",
    },
    mockupGuide: {
      layout: "Tres cards de planos com selo no recomendado.",
      composition: "Pode incluir mini recorte do produto acima ou abaixo para reforcar valor.",
      highlightItems: ["plano recomendado", "economia anual", "beneficios"],
      captureNotes: ["Evitar ruído visual no bloco de pricing."],
    },
    mediaGuide: {
      preferredAssetType: "pricing-visual",
      productContext: "Visual de oferta clara, com planos e beneficios reais.",
      featureFocus: ["planos", "economia", "recursos inclusos"],
      avoidGenericStock: true,
      videoSuggestion:
        "Nao obrigatorio; se usar, mostrar rapidamente o que cada plano destrava.",
      altSuggestion:
        "Tabela de planos do SaaS com destaque para a melhor opcao de custo-beneficio.",
    },
    requiredInputs: ["planos", "precos", "diferencas"],
    optionalInputs: ["parcelamento", "garantia", "bonus"],
  }),
  createSection({
    id: "faq",
    title: "FAQ de compra",
    sectionType: "faq",
    variant: "sales-objection",
    summary:
      "FAQ mais longa para reduzir objecoes de compra e explicar oferta.",
    copyGuide: {
      headline: "As perguntas que normalmente aparecem antes de assinar.",
      supportingCopy:
        "Priorizar objecoes ligadas a pagamento, cancelamento, suporte, setup e limites do plano.",
      bullets: [
        "De 6 a 10 perguntas.",
        "Responder sem jargao.",
        "Se houver checkout externo, explicar processo.",
      ],
      ctaNote: "Fechar com CTA de compra ou atendimento humano.",
    },
    mockupGuide: {
      layout: "Accordion com bloco lateral de atendimento humano.",
      composition: "Sem mockup obrigatorio; foco em clareza.",
      highlightItems: ["pagamento", "cancelamento", "suporte"],
      captureNotes: ["Mobile precisa ficar muito limpo."],
    },
    mediaGuide: {
      preferredAssetType: "team-photo",
      productContext: "Atendimento ou especialista real, se existir ativo adequado.",
      featureFocus: ["suporte", "ajuda na compra"],
      avoidGenericStock: true,
      videoSuggestion:
        "Video curto de fundador ou consultor respondendo objecoes mais comuns.",
      altSuggestion:
        "Especialista do SaaS tirando duvidas sobre compra, setup e suporte.",
    },
    requiredInputs: ["faq comercial"],
    optionalInputs: ["foto do consultor", "canal direto"],
  }),
  saasBrTrialSections[5],
];

const consultiveSections = [
  createSection({
    id: "hero",
    title: "Hero consultivo",
    sectionType: "hero",
    variant: "strategic-enterprise",
    eyebrow: "Template 03",
    summary:
      "Abertura centrada em problema complexo, visibilidade operacional e CTA para demo.",
    copyGuide: {
      headline: "Do caos operacional a uma operacao conectada, previsivel e pronta para escalar.",
      supportingCopy:
        "Linguagem mais estrategica, menos promocional. O foco e maturidade operacional e alinhamento entre equipes.",
      bullets: [
        "Nomear a complexidade do contexto.",
        "Prometer visibilidade e colaboracao.",
        "Evitar desconto ou urgencia agressiva.",
      ],
      ctaNote: "CTA principal sempre orientado a agendar demonstracao.",
    },
    mockupGuide: {
      layout: "Texto forte a esquerda, mockup sofisticado a direita, logos abaixo.",
      composition:
        "Mostrar tela de operacao ou dashboard executivo com dados reais e multiplas camadas.",
      highlightItems: ["ativos", "times", "status", "indicadores"],
      captureNotes: ["Visual mais premium e limpo."],
    },
    mediaGuide: {
      preferredAssetType: "dashboard",
      productContext: "Painel executivo com operacao, status e visao integrada.",
      featureFocus: ["visibilidade", "colaboracao", "predictive insights"],
      avoidGenericStock: true,
      videoSuggestion:
        "Video elegante mostrando troca entre visao executiva e detalhe operacional.",
      altSuggestion:
        "Painel executivo do SaaS mostrando operacao conectada e indicadores estrategicos.",
    },
    requiredInputs: ["headline", "subheadline", "CTA", "logos"],
    optionalInputs: ["selo enterprise", "case principal"],
  }),
  createSection({
    id: "pain",
    title: "Complexidade do cenario atual",
    sectionType: "pain",
    variant: "operational-complexity",
    summary:
      "Explica por que sistemas fragmentados criam atrasos, falhas e custo invisivel.",
    copyGuide: {
      headline: "Quando equipes, fornecedores e operacao falam linguas diferentes, o custo cresce em silencio.",
      supportingCopy:
        "Essa secao precisa mostrar entendimento real do problema e preparar terreno para a narrativa consultiva.",
      bullets: [
        "Citar fragmentacao e falta de visibilidade.",
        "Apontar risco, atraso e retrabalho.",
        "Encerrar com necessidade de plataforma unificada.",
      ],
      ctaNote: "Sem CTA agressivo neste ponto.",
    },
    mockupGuide: {
      layout: "Cards ou timeline mostrando atritos do processo atual.",
      composition: "Pode usar diagrama simples em vez de screenshot.",
      highlightItems: ["fornecedores", "ativos", "tarefas", "conformidade"],
      captureNotes: ["Valorizar clareza e leitura executiva."],
    },
    mediaGuide: {
      preferredAssetType: "workflow",
      productContext: "Mapa operacional com múltiplos atores e pontos de falha.",
      featureFocus: ["fragmentacao", "falta de visibilidade", "risco"],
      avoidGenericStock: true,
      videoSuggestion:
        "Animacao simples mostrando processo travando em diversos pontos.",
      altSuggestion:
        "Mapa da operacao com equipes e etapas desconectadas gerando gargalos.",
    },
    requiredInputs: ["dores operacionais", "impacto"],
    optionalInputs: ["dados de mercado", "microcase"],
  }),
  createSection({
    id: "features",
    title: "Capacidades da plataforma",
    sectionType: "feature-tabs",
    variant: "strategic-capabilities",
    summary:
      "Apresenta capacidades em blocos mais robustos, com foco em operacao, decisao e automacao.",
    copyGuide: {
      headline: "Uma plataforma para conectar operacao, decisao e melhoria continua.",
      supportingCopy:
        "Cada bloco deve mostrar uma capacidade de negocio, nao apenas uma feature isolada.",
      bullets: [
        "Usar capacidade -> como funciona -> impacto.",
        "Priorizar automacao, previsibilidade e padronizacao.",
        "Adicionar termos do mercado do cliente.",
      ],
      ctaNote: "Pode inserir CTA de demo apos o segundo bloco.",
    },
    mockupGuide: {
      layout: "Tabs ou seções alternadas com mockups amplos.",
      composition:
        "Cada capacidade deve ter sua propria tela contextualizada: ordens, compliance, analytics, planejamento.",
      highlightItems: ["planejamento", "execucao", "insights"],
      captureNotes: ["Usar prints sofisticados e completos."],
    },
    mediaGuide: {
      preferredAssetType: "module-screenshot",
      productContext: "Telas mais maduras do produto com informacao real e camadas de uso.",
      featureFocus: ["analytics", "workflow", "compliance", "colaboracao"],
      avoidGenericStock: true,
      videoSuggestion:
        "Capacidade por capacidade em cortes de 4 a 6 segundos cada.",
      altSuggestion:
        "Telas do software mostrando planejamento, execucao operacional e analytics.",
    },
    requiredInputs: ["3 a 4 capacidades", "prints por capacidade"],
    optionalInputs: ["integrações", "beneficio por area"],
  }),
  createSection({
    id: "integrations",
    title: "Ecossistema e integracoes",
    sectionType: "integrations",
    variant: "ecosystem",
    summary:
      "Mostra conectividade com sistemas, parceiros, sensores, ERPs ou fontes externas.",
    copyGuide: {
      headline: "Sua operacao funciona melhor quando o software conversa com o restante do ecossistema.",
      supportingCopy:
        "A secao deve reforcar continuidade operacional e evitar a percepcao de ilha tecnologica.",
      bullets: [
        "Mostrar tipos de integrações mais relevantes.",
        "Explicar o ganho de dados centralizados.",
        "Se possivel, citar APIs ou conectores nativos.",
      ],
      ctaNote: "Bom ponto para CTA consultivo secundario.",
    },
    mockupGuide: {
      layout: "Mapa de integrações com logos e card de fluxo de dados.",
      composition: "Combinar logos de sistemas com um diagrama simples de troca de dados.",
      highlightItems: ["ERP", "BI", "sensores", "tickets"],
      captureNotes: ["Nao exagerar no numero de logos."],
    },
    mediaGuide: {
      preferredAssetType: "integration-map",
      productContext: "Mapa de integrações e fluxo de dados da plataforma.",
      featureFocus: ["APIs", "conectores", "dados centralizados"],
      avoidGenericStock: true,
      videoSuggestion:
        "Video de data flow acendendo integrações e consolidando informacao no painel.",
      altSuggestion:
        "Mapa da plataforma conectando diferentes sistemas e fontes de dados.",
    },
    requiredInputs: ["lista de integrações ou tipos", "ganho operacional"],
    optionalInputs: ["logos", "api docs"],
  }),
  createSection({
    id: "case-study",
    title: "Prova enterprise",
    sectionType: "case-study",
    variant: "executive-proof",
    summary:
      "Case ou depoimento executivo com impacto relevante e credibilidade alta.",
    copyGuide: {
      headline: "Resultados concretos para operacoes que nao podem falhar.",
      supportingCopy:
        "Traga depoimento de cargo relevante, com mudanca operacional ou financeira claramente descrita.",
      bullets: [
        "Nomear empresa, cargo e contexto.",
        "Mostrar antes e depois.",
        "Adicionar numero ou ganho de tempo/controle.",
      ],
      ctaNote: "CTA consultivo ao final do case.",
    },
    mockupGuide: {
      layout: "Card de quote grande + bloco com resultado e logo do cliente.",
      composition: "Pode combinar foto real do porta-voz com screenshot do modulo usado.",
      highlightItems: ["depoimento", "resultado", "marca"],
      captureNotes: ["Evitar depoimento genérico."],
    },
    mediaGuide: {
      preferredAssetType: "testimonial-video",
      productContext: "Depoimento real de cliente ou visual do case em uso.",
      featureFocus: ["resultado", "credibilidade", "contexto real"],
      avoidGenericStock: true,
      videoSuggestion:
        "Video curto de cliente ou especialista citando o ganho principal.",
      altSuggestion:
        "Caso de sucesso de cliente usando a plataforma em um contexto operacional complexo.",
    },
    requiredInputs: ["case", "quote", "resultado"],
    optionalInputs: ["foto", "video", "logo"],
  }),
  saasBrTrialSections[6],
];

const fintechSections = [
  createSection({
    id: "hero",
    title: "Hero de infraestrutura",
    sectionType: "hero",
    variant: "technical-trust",
    eyebrow: "Template 04",
    summary:
      "Abertura com linguagem de robustez, liquidez, white label e controle.",
    copyGuide: {
      headline: "Pagamentos, subadquirencia e operacao financeira com a sua marca e a sua regra.",
      supportingCopy:
        "Combinar linguagem comercial com sinais de infra e confianca. O visitante precisa sentir capacidade tecnica.",
      bullets: [
        "Citar liquidação, controle e modularidade.",
        "Inserir trust signals logo cedo.",
        "Trazer uma prova de escala se houver.",
      ],
      ctaNote: "CTA principal orientado a falar com especialista.",
    },
    mockupGuide: {
      layout: "Texto tecnico-comercial a esquerda e mockup dark com operacao financeira a direita.",
      composition:
        "Usar dashboard com repasses, liquidacao, split, taxas, aprovacoes e saldo.",
      highlightItems: ["D+1", "split", "taxas", "saldo"],
      captureNotes: ["Visual de alta confianca e pouco ruído."],
    },
    mediaGuide: {
      preferredAssetType: "dashboard",
      productContext: "Painel financeiro com transacoes, repasses e monitoramento.",
      featureFocus: ["liquidacao", "split", "conciliação", "white label"],
      avoidGenericStock: true,
      videoSuggestion:
        "Fluxo do pagamento aprovado ate liquidacao no painel do cliente.",
      altSuggestion:
        "Painel financeiro da plataforma exibindo liquidacao, taxas e conciliacao em tempo real.",
    },
    requiredInputs: ["headline", "subheadline", "trust signals"],
    optionalInputs: ["metricas de escala", "compliance"],
  }),
  createSection({
    id: "features",
    title: "Modulos de infraestrutura",
    sectionType: "feature-grid",
    variant: "infra-modules",
    summary:
      "Grid com modulos de infra financeira, sempre ligados a uma aplicacao real.",
    copyGuide: {
      headline: "Infraestrutura modular para montar o produto financeiro certo para o seu negocio.",
      supportingCopy:
        "A secao deve traduzir termos de infra em oportunidades comerciais: monetizacao, controle, velocidade e autonomia.",
      bullets: [
        "Usar modulos reais e aplicacoes praticas.",
        "Misturar recursos e impacto no negocio.",
        "Se o publico nao for tecnico, simplificar sem perder credibilidade.",
      ],
      ctaNote: "Mini CTA para falar com especialista apos a grade.",
    },
    mockupGuide: {
      layout: "Cards modulares com capturas reais ou mini diagrams.",
      composition:
        "Cada card pode apontar para uma tela ou fluxo: POS, link, API, conciliação, split.",
      highlightItems: ["POS", "TEF", "boletos", "api", "conciliação"],
      captureNotes: ["Usar recortes de tela ou diagrams pequenos."],
    },
    mediaGuide: {
      preferredAssetType: "module-screenshot",
      productContext: "Modulos reais da operação financeira ou gestão técnica.",
      featureFocus: ["POS", "link de pagamento", "API", "conciliação"],
      avoidGenericStock: true,
      videoSuggestion:
        "Sequencia modular mostrando cada capacidade principal em 3 a 4 segundos.",
      altSuggestion:
        "Conjunto de modulos da infraestrutura financeira exibindo pagamentos, APIs e conciliacao.",
    },
    requiredInputs: ["4 a 6 modulos", "aplicacao real"],
    optionalInputs: ["icones", "regras de negocio"],
  }),
  createSection({
    id: "integrations",
    title: "Arquitetura e conectividade",
    sectionType: "integrations",
    variant: "api-first",
    summary:
      "Mapa de integrações e camadas da infraestrutura.",
    copyGuide: {
      headline: "Conecte sua operacao financeira ao stack que ja move o seu negocio.",
      supportingCopy:
        "A narrativa deve reduzir medo de implantacao e reforcar flexibilidade tecnica.",
      bullets: [
        "Mostrar APIs, adquirentes, ERPs ou parceiros relevantes.",
        "Explicar a camada de orquestracao.",
        "Falar em autonomia e velocidade de setup.",
      ],
      ctaNote: "CTA consultivo ou pedido de arquitetura.",
    },
    mockupGuide: {
      layout: "Mapa de blocos com plataforma no centro e integrações ao redor.",
      composition: "Misturar logos com um fluxo simples de request e settlement.",
      highlightItems: ["API", "adquirentes", "CIP", "clientes white label"],
      captureNotes: ["Diagrama deve ser legivel em mobile."],
    },
    mediaGuide: {
      preferredAssetType: "integration-map",
      productContext: "Arquitetura simplificada da plataforma e seus conectores.",
      featureFocus: ["API", "multiadquirencia", "settlement"],
      avoidGenericStock: true,
      videoSuggestion:
        "Animacao curta do request indo da captura ate a conciliacao.",
      altSuggestion:
        "Arquitetura da plataforma conectando APIs, adquirentes e repasses financeiros.",
    },
    requiredInputs: ["integrações", "camadas", "ganho tecnico"],
    optionalInputs: ["api docs", "logos de parceiros"],
  }),
  createSection({
    id: "metrics",
    title: "Sinais de confianca",
    sectionType: "metrics",
    variant: "trust-band",
    summary:
      "Metricas, SLAs, compliance e sinais de robustez para reduzir risco percebido.",
    copyGuide: {
      headline: "Infra para crescer sem abrir mao de previsibilidade e controle.",
      supportingCopy:
        "Use numeros que sustentem confianca: volume, uptime, tempo de setup, clientes ou transacoes.",
      bullets: [
        "Acrescentar certificacoes e conformidade quando houver.",
        "Mostrar performance ou tempo de ativacao.",
        "Contextualizar o numero.",
      ],
      ctaNote: "Pode repetir CTA para contato tecnico-comercial.",
    },
    mockupGuide: {
      layout: "Faixa com estatisticas e selos de conformidade.",
      composition: "Usar pequenos badges ou cards para trust signals.",
      highlightItems: ["uptime", "tempo de setup", "transacoes", "compliance"],
      captureNotes: ["Nao poluir com selos demais."],
    },
    mediaGuide: {
      preferredAssetType: "dashboard",
      productContext: "Painel com volume e monitoramento operacional.",
      featureFocus: ["escala", "estabilidade", "controle"],
      avoidGenericStock: true,
      videoSuggestion:
        "Painel de monitoramento em tempo real com aprovacoes e repasses entrando.",
      altSuggestion:
        "Monitoramento da infraestrutura financeira com indicadores de escala e estabilidade.",
    },
    requiredInputs: ["4 metricas ou selos"],
    optionalInputs: ["uptime", "tempo de deploy"],
  }),
  consultiveSections[4],
  saasBrTrialSections[6],
];

const categorySections = [
  createSection({
    id: "hero",
    title: "Hero de categoria",
    sectionType: "hero",
    variant: "category-maker",
    eyebrow: "Template 05",
    summary:
      "Hero amplo, orientado a marca e a narrativa de categoria lider.",
    copyGuide: {
      headline: "A plataforma que conecta pessoas, processos e IA em uma operacao de verdade.",
      supportingCopy:
        "A copy deve soar maior que uma ferramenta isolada. O usuario precisa perceber categoria, escala e flexibilidade.",
      bullets: [
        "Usar linguagem mais ampla e aspiracional.",
        "Citar beneficio macro da categoria.",
        "Dar espaco para produto e marca dividirem protagonismo.",
      ],
      ctaNote: "CTA principal pode ser comecar gratis ou solicitar demo.",
    },
    mockupGuide: {
      layout: "Grande composicao de telas, chips e blocos de produto ao redor do hero.",
      composition:
        "Combinar multiples recortes do produto para mostrar abrangencia e diferentes casos de uso.",
      highlightItems: ["workspace", "IA", "produtividade", "colaboracao"],
      captureNotes: ["Visual mais expressivo e memoravel."],
    },
    mediaGuide: {
      preferredAssetType: "dashboard",
      productContext: "Conjunto de telas mostrando amplitude da plataforma.",
      featureFocus: ["workspace", "IA", "casos de uso", "produtividade"],
      avoidGenericStock: true,
      videoSuggestion:
        "Montagem dinamica com transicao entre modulos, views e automacoes.",
      altSuggestion:
        "Montagem de diferentes telas da plataforma exibindo colaboracao, IA e produtividade.",
    },
    requiredInputs: ["headline", "subheadline", "proposta de categoria"],
    optionalInputs: ["logos", "premios", "video"],
  }),
  createSection({
    id: "logo-wall",
    title: "Prova de mercado",
    sectionType: "logo-wall",
    variant: "brand-strip",
    summary:
      "Faixa com marcas, setores ou equipes que usam a categoria.",
    copyGuide: {
      headline: "Confianca de equipes que precisam operar com consistencia e velocidade.",
      supportingCopy:
        "Pode usar logos, setores atendidos ou volume de usuarios. O objetivo e sinalizar tracao ampla.",
      bullets: [
        "Preferir logos reais.",
        "Se nao houver logos, usar numeros e categorias de clientes.",
        "Nao exagerar na quantidade.",
      ],
      ctaNote: "Sem CTA forte; prova social institucional.",
    },
    mockupGuide: {
      layout: "Faixa horizontal de logos ou badges.",
      composition: "Elementos leves, foco em credibilidade.",
      highlightItems: ["logos", "categorias", "selos"],
      captureNotes: ["Manter legibilidade e contraste."],
    },
    mediaGuide: {
      preferredAssetType: "team-photo",
      productContext: "Nao ha mockup obrigatorio; se usar imagem, priorizar contexto real de uso do produto.",
      featureFocus: ["credibilidade", "mercado"],
      avoidGenericStock: true,
      videoSuggestion: "Nao necessario.",
      altSuggestion:
        "Faixa com marcas e categorias de empresas que usam a plataforma.",
    },
    requiredInputs: ["logos ou categorias"],
    optionalInputs: ["metricas de tracao"],
  }),
  createSection({
    id: "persona-grid",
    title: "Casos de uso por time",
    sectionType: "persona-grid",
    variant: "multi-team",
    summary:
      "Mostra como a plataforma atende diferentes perfis ou equipes.",
    copyGuide: {
      headline: "Uma plataforma, varios jeitos de criar resultado.",
      supportingCopy:
        "A secao ajuda a ampliar entendimento de produto sem perder clareza. Cada card deve mostrar um time, caso de uso e ganho.",
      bullets: [
        "Listar 3 a 5 times ou perfis.",
        "Amarrar cada um a um fluxo real.",
        "Usar linguagem menos vertical e mais horizontal.",
      ],
      ctaNote: "Pode levar para pagina de demo ou signup.",
    },
    mockupGuide: {
      layout: "Cards por time com uma tela correspondente para cada caso de uso.",
      composition:
        "Misturar pequenos screenshots, chips e labels de area: marketing, produto, CS, operacoes.",
      highlightItems: ["marketing", "produto", "cs", "operacoes"],
      captureNotes: ["Cada card precisa ter um caso de uso claro."],
    },
    mediaGuide: {
      preferredAssetType: "module-screenshot",
      productContext: "Telas adaptadas a diferentes times e formas de uso.",
      featureFocus: ["casos de uso", "flexibilidade", "amplitude"],
      avoidGenericStock: true,
      videoSuggestion:
        "Troca rapida de views mostrando o mesmo produto em usos diferentes.",
      altSuggestion:
        "Diferentes telas da plataforma adaptadas a varios times e casos de uso.",
    },
    requiredInputs: ["3 a 5 times", "ganhos por time"],
    optionalInputs: ["prints dedicados", "canais ou integrações"],
  }),
  createSection({
    id: "features",
    title: "Capacidades amplas",
    sectionType: "feature-tabs",
    variant: "broad-platform",
    summary:
      "Bloco com varias capacidades agrupadas por tema, sem parecer lista infinita.",
    copyGuide: {
      headline: "Coordene tarefas, contexto, automacao e inteligencia sem trocar de plataforma.",
      supportingCopy:
        "Agrupar as funcionalidades em blocos logicos: trabalho, IA, colaboracao, relatórios, automacao.",
      bullets: [
        "Evitar despejar features sem agrupamento.",
        "Reforcar plataforma unica.",
        "Conectar cada bloco a um resultado.",
      ],
      ctaNote: "CTA de experimentar ou ver como funciona.",
    },
    mockupGuide: {
      layout: "Tabs ou faixas alternadas com mockups expressivos.",
      composition: "Cada capacidade principal deve ter uma tela ou composicao especifica.",
      highlightItems: ["workspace", "automacao", "IA", "dashboards"],
      captureNotes: ["Valorizar dinamismo visual."],
    },
    mediaGuide: {
      preferredAssetType: "module-screenshot",
      productContext: "Mix de telas com uso horizontal e alta percepcao de produto.",
      featureFocus: ["automacao", "IA", "dashboards", "colaboracao"],
      avoidGenericStock: true,
      videoSuggestion:
        "Montagem dinâmica alternando visoes do produto e automacoes acontecendo.",
      altSuggestion:
        "Conjunto de telas do produto exibindo IA, automacao, workspace e dashboards.",
    },
    requiredInputs: ["capacidades", "prints"],
    optionalInputs: ["videos", "microcopys"],
  }),
  createSection({
    id: "case-study",
    title: "Prova de escala",
    sectionType: "case-study",
    variant: "brand-led-proof",
    summary:
      "Combina depoimento, numero expressivo e contexto de escala.",
    copyGuide: {
      headline: "Quando a plataforma vira camada central de trabalho, o ganho aparece em toda a operacao.",
      supportingCopy:
        "Usar uma prova mais macro, combinando numero forte com depoimento ou caso.",
      bullets: [
        "Adicionar numero de usuarios, projetos ou ganho operacional.",
        "Usar nome e cargo quando possivel.",
        "Contextualizar como a plataforma encaixa na rotina.",
      ],
      ctaNote: "CTA para comecar gratis ou agendar demo.",
    },
    mockupGuide: {
      layout: "Grande quote + bloco de metrica + print secundario.",
      composition: "Pode usar foto do cliente se houver alta qualidade.",
      highlightItems: ["resultado", "quote", "uso continuo"],
      captureNotes: ["Prova deve soar lideranca de categoria."],
    },
    mediaGuide: {
      preferredAssetType: "testimonial-video",
      productContext: "Case com uso horizontal, escala e impacto em mais de um time.",
      featureFocus: ["escala", "adoção", "resultado"],
      avoidGenericStock: true,
      videoSuggestion:
        "Cliente mostrando rapidamente como diferentes equipes usam o produto.",
      altSuggestion:
        "Caso de sucesso com varios times usando a plataforma em alta escala.",
    },
    requiredInputs: ["case", "numero de impacto"],
    optionalInputs: ["video", "foto", "logo"],
  }),
  saasBrTrialSections[6],
];

export const templates: TemplateDefinition[] = [
  {
    slug: "saas-br-trial",
    name: "SaaS BR Trial",
    category: "PMEs / Growth / Operacao comercial",
    audience: "SaaS de ticket acessivel com foco em trial, lead quente ou demo curta.",
    summary:
      "Estrutura para softwares de vendas, atendimento, CRM, ERP leve e IA aplicada com promessa direta e forte orientacao a conversao.",
    conversionGoal: "trial",
    primaryCta: "Comecar teste gratis",
    secondaryCta: "Falar no WhatsApp",
    theme: trialTheme,
    sections: saasBrTrialSections,
  },
  {
    slug: "anoteja-delivery",
    name: "AnoteJa Delivery",
    category: "Delivery / Cardapio digital / WhatsApp",
    audience: "Restaurantes, lanchonetes e operacoes de delivery que querem canal proprio.",
    summary:
      "Landing page inspirada no AnoteJa com teste gratis, preco visivel, CTA para cadastro e saida direta para WhatsApp.",
    conversionGoal: "trial",
    primaryCta: "Comecar teste gratis",
    secondaryCta: "Falar no WhatsApp",
    theme: anotejaTheme,
    sections: saasBrTrialSections,
  },
  {
    slug: "saas-br-venda-direta",
    name: "SaaS BR Venda Direta",
    category: "Oferta comercial / Checkout / Assinatura",
    audience: "SaaS com compra imediata, ticket acessivel e apelo forte de ROI ou economia.",
    summary:
      "Modelo longo, orientado a oferta e comparativos, ideal para assinatura direta com pricing visivel e FAQ comercial.",
    conversionGoal: "direct-purchase",
    primaryCta: "Assinar agora",
    secondaryCta: "Falar com consultor",
    theme: directTheme,
    sections: saasBrDirectSections,
  },
  {
    slug: "saas-consultivo-b2b",
    name: "SaaS Consultivo B2B",
    category: "Mid-market / Enterprise / Operacao complexa",
    audience: "Plataformas com implantacao, integrações e venda consultiva.",
    summary:
      "Template de narrativa mais estrategica, com foco em visibilidade, colaboracao e prova de maturidade operacional.",
    conversionGoal: "consultative-demo",
    primaryCta: "Agendar demonstracao",
    secondaryCta: "Falar com especialista",
    theme: consultiveTheme,
    sections: consultiveSections,
  },
  {
    slug: "fintech-infra-white-label",
    name: "Fintech / Infra / White Label",
    category: "BaaS / Pagamentos / Infraestrutura",
    audience: "Produtos financeiros, APIs, subadquirencia e operacoes white label.",
    summary:
      "Template tecnico-comercial para empresas que precisam transmitir confianca, robustez e capacidade de integracao.",
    conversionGoal: "sales-conversation",
    primaryCta: "Falar com especialista",
    secondaryCta: "Solicitar demonstracao",
    theme: fintechTheme,
    sections: fintechSections,
  },
  {
    slug: "category-leader",
    name: "Category Leader",
    category: "Plataforma horizontal / Marca / Escala",
    audience: "SaaS mais amplo, com multiplos casos de uso e narrativa de categoria.",
    summary:
      "Template para posicionamento lider, combinando amplitude de produto, marca forte e varias entradas de valor.",
    conversionGoal: "signup-or-demo",
    primaryCta: "Comecar gratis",
    secondaryCta: "Ver como funciona",
    theme: categoryTheme,
    sections: categorySections,
  },
];

export function getTemplateBySlug(slug: string) {
  return templates.find((template) => template.slug === slug);
}
