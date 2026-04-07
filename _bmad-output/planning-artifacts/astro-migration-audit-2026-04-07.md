---
title: Auditoria da Migração Astro
date: 2026-04-07
status: active
---

# Auditoria da Migração Astro

## Resumo

A migração de Next.js para Astro está funcional e validada com `npm run build` em 2026-04-07. O site gera 5 rotas estáticas e mantém apenas 3 React islands para interatividade real.

## Validado

- `astro build` concluindo sem erros
- 5 páginas geradas em `dist/`
- Homepage em `src/pages/index.astro`
- Layout base consolidado em `src/layouts/BaseLayout.astro`
- Seções estáticas em `.astro` e islands React limitadas a:
  - `src/components/layout/minimal-navbar.tsx`
  - `src/components/sections/services-section.tsx`
  - `src/components/sections/team-section.tsx`

## Corrigido nesta revisão

- `components.json` ainda apontava para `src/app/globals.css`
- `components.json` ainda marcava `rsc: true`, sobra do setup Next.js
- `BaseLayout.astro` referenciava `/favicon.ico`, mas esse arquivo não existe mais
- `BaseLayout.astro` hardcodava OG image inexistente (`/og.jpg`)

## Pendente real

- Criar uma OG image dedicada em proporção social.
  - Hoje o layout usa um placeholder existente em `/public/brand/assets/logo-gioia-e-associados.png`
- Confirmar `siteConfig.url` final antes do lançamento
- Confirmar `siteConfig.links.linkedin` do escritório
- Remover ou atualizar sobras editoriais:
  - `package.json` ainda usa o nome `temp-app`
  - `src/config/home.ts` mantém `hero.image` com TODO, mas o hero atual usa `/gioia-hero-2.webp`
- Revisar analytics/LGPD antes do lançamento:
  - cookie banner
  - GA4 / GTM

## Documentação legada

- [`_bmad-output/project-context.md`](/home/johny/Documentos/projetos/gioia/site-gioia/_bmad-output/project-context.md) foi atualizado para Astro e passa a ser a referência operacional
- `_bmad-output/planning-artifacts/architecture.md` continua descrevendo a arquitetura pré-migração em Next.js e deve ser tratado como documento histórico até ser refeito
