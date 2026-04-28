# Design: Template AnoteJa Delivery

## Objetivo

Criar uma landing page de conversao para o AnoteJa equilibrando tres intencoes:

- captacao com teste gratis de 7 dias
- percepcao de venda direta com preco visivel
- saida rapida para atendimento via WhatsApp

## Direcao escolhida

Foi adotado um modelo `lead-first com oferta visivel`, inspirado no site publico do AnoteJa.

Essa direcao prioriza:

- headline comercial acima da dobra
- CTA principal para cadastro gratis
- CTA secundario para WhatsApp
- reforco de valor com modulos e operacao integrada
- bloco de oferta com mencao a trial e faixa de preco
- FAQ para quebrar objecoes sobre taxas, comissao e escopo do sistema

## Estrutura da pagina

1. Hero com promessa principal, logo do cliente e CTA duplo
2. Bloco de integracao mostrando pedidos, WhatsApp, IA, relatorios e PDV
3. Ecossistema com os modulos centrais do delivery
4. Bloco de oferta com trial, preco e decisao comercial
5. FAQ orientado a objecoes de compra
6. Fechamento com CTA para WhatsApp
7. Footer com branding do cliente

## Decisoes de interface

- Paleta aplicada: `#FFFFFF`, `#E86A33`, `#1A0A00`
- Componentes custom hero passam a aceitar branding e links externos
- CTAs do template usam os links reais do cliente
- A pagina esconde a secao de logos genericos do template base
- O layout reaproveita a infraestrutura dos templates customizados da base

## Copy e oferta

- Teste gratis: `7 dias gratis`
- Faixa de preco refletida na LP: `a partir de R$ 219,90/mês`
- Posicionamento central: delivery com canal proprio, sem comissao por pedido, com WhatsApp, IA, PDV e gestao

## Observacoes

- O workspace nao esta em um repositorio Git, entao nao foi possivel registrar commit do design.
- O template final foi integrado como nova rota estatica em `/templates/anoteja-delivery`.
