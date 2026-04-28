# SAASK Templates LPs

Biblioteca e showcase de templates de landing pages para SaaS, desenhada para uso interno da agencia e para demonstracao comercial.

## Stack
- Next.js
- React
- Tailwind CSS
- TypeScript
- shadcn/ui como base de primitives

## Objetivo do repositorio
- Centralizar 5 templates principais de landing pages para SaaS
- Exibir cada template em rota propria
- Reutilizar secoes, temas e estruturas tipadas
- Guiar copy, mockup e midia por secao
- Priorizar assets reais do software: dashboards, fluxos, modulos, integracoes e videos

## Rotas principais
- `/` resumo do sistema e acesso rapido
- `/templates` catalogo dos templates
- `/templates/[slug]` showcase individual de cada template

## Templates ativos
- `saas-br-trial`
- `saas-br-venda-direta`
- `saas-consultivo-b2b`
- `fintech-infra-white-label`
- `category-leader`

## Estrutura principal
- `src/app` rotas do showcase
- `src/templates` definicoes tipadas dos templates
- `src/sections` renderizacao das secoes reutilizaveis
- `src/themes` temas e tokens
- `src/types` contratos do sistema
- `docs` playbook operacional
- `AGENT.md` diretrizes permanentes do projeto

## Desenvolvimento
```bash
npm install
npm run dev
```

## Validacao
```bash
npm run lint
npm run build
```

## Operacao
Use os templates como base de showcase e como ponto de partida para paginas de clientes. O criterio para criar novos templates e recorrencia real de briefing fora dos cinco modelos atuais.
