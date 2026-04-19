# Documentation Index

Estado atual da documentação principal do projeto Gioia.

| Documento | Finalidade |
| :--- | :--- |
| [Estado Atual do Projeto](./estado-atual-2026-04-19.md) | Decisões da reunião, escopo vigente, prioridades da semana e fontes de verdade. |
| [Project Context](../_bmad-output/project-context.md) | Regras operacionais de implementação, linguagem visual e critérios invioláveis do projeto. |
| [PRD Atualizado](./prd.md) | Escopo consolidado do produto e da operação de marca neste ciclo. |
| [Arquitetura Atual](./architecture.md) | Stack real, estrutura de pastas e fluxo entre Astro, configs locais e ativos de marca. |
| [Pesquisa Estratégica](./pesquisa-e-prd.md) | Base de pesquisa, posicionamento e raciocínio estratégico anterior. |
| [Plano de Lançamento](../_cliente/lancamento/lancamento-nova-marca-2026-04-19.md) | Checklist operacional da semana de lançamento, textos-base e entregáveis por canal. |
| [Contrato Fixo](../_cliente/contratos/contrato-fixo-assessoria-mensal-gioia.md) | Minuta de contrato recorrente para assessoria de marca e presença digital. |

---

## Quick Setup

1. `npm install`
2. `npm run dev`
3. `npm run build`

## Key Files

- `src/pages/index.astro`: landing institucional principal.
- `src/components/sections/`: blocos visuais e seções do site.
- `src/config/`: conteúdo estruturado e dados institucionais.
- `_cliente/brand/social-media-toolkit-v3-figma.html`: biblioteca-base do toolkit social exportável para Figma.
- Figma master: `https://www.figma.com/design/Q3Z4u0sRw6iNkLDwUJLQ75/Gioia?node-id=0-1&p=f&t=OujLyLFKe87EezE1-0`

## Nota de Consistência

Se houver conflito entre documentos antigos e o estado atual do projeto, a ordem de precedência é:

1. `docs/estado-atual-2026-04-19.md`
2. `_bmad-output/project-context.md`
3. Código-fonte em `src/`
4. Figma master e ativos em `_cliente/brand/`
