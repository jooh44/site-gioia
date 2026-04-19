# System Architecture: Gioia e Associados

## 1. Resumo Arquitetural

O projeto Gioia opera hoje como um ecossistema leve de presença digital com três camadas principais:

1. **Site institucional estático em Astro**
2. **Sistema de identidade visual e produção social centralizado no Figma**
3. **Ativos e documentação operacional versionados no repositório**

O objetivo deste ciclo não é construir uma plataforma transacional complexa, e sim manter uma base institucional elegante, rápida e consistente com a nova marca, enquanto o escritório lança a identidade nova em todos os canais.

## 2. Stack Real em Produção

- **Frontend:** Astro 6
- **Ilhas interativas:** React 19 com `client:load`
- **Linguagem:** TypeScript
- **Estilos:** Tailwind CSS v4 via `src/styles/globals.css`
- **Componentes UI:** Radix UI / Shadcn adaptados ao sistema Gioia
- **Ícones:** Lucide React
- **Build:** `astro build`
- **Output:** estático

## 3. Regra de Renderização

O site segue uma estratégia de HTML estático por padrão.

- Páginas em `src/pages/` renderizam conteúdo estático.
- Componentes `.astro` são usados sempre que não há necessidade real de estado no cliente.
- Apenas três ilhas React concentram interatividade:
  - `src/components/layout/minimal-navbar.tsx`
  - `src/components/sections/services-section.tsx`
  - `src/components/sections/team-section.tsx`

Essa decisão preserva performance, reduz JS entregue ao navegador e favorece SEO.

## 4. Arquitetura de Conteúdo

O projeto usa **content-as-code** para a camada institucional.

### Fontes primárias do site

- `src/config/site.ts`: NAP, links e navegação
- `src/config/home.ts`: hero e destaques da home
- `src/config/about.ts`: texto institucional
- `src/config/services.ts`: áreas de atuação
- `src/config/faq.ts`: perguntas frequentes

### Fontes complementares

- `src/components/sections/team-section.tsx`: bios e focos da equipe
- `src/components/sections/TestimonialsTicker.astro`: depoimentos e prova social

## 5. Sistema de Marca e Produção Visual

A camada visual da marca não vive apenas no código. O sistema atual é dividido assim:

- **Figma master do projeto:** fonte central de templates, grids, capas e manual visual
- `_cliente/brand/assets/`: exportações de logo e símbolos
- `_cliente/brand/social-media-toolkit-v3-figma.html`: biblioteca HTML preparada para importação no Figma
- `_cliente/brand/social-media-toolkit-v3-final-review.md`: avaliação de fechamento do toolkit

O Figma concentra:

- tokens de cor
- regras tipográficas
- templates de carrossel
- capas e banners
- papelaria
- cartão de visita
- mockup de petição inicial

## 6. SEO, Metadata e Schema

- `BaseLayout.astro` centraliza metadados e JSON-LD
- `src/pages/index.astro` monta o schema principal
- NAP e links devem permanecer consistentes entre:
  - `siteConfig`
  - conteúdo visível
  - metadados e schema

## 7. Estrutura Atual de Pastas

```text
src/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── config/
├── layouts/
├── lib/
├── pages/
└── styles/

_cliente/
├── brand/
├── contratos/
├── gmb/
└── lancamento/

docs/
_bmad-output/
```

## 8. Integrações e Operação

### Ativas

- WhatsApp via link direto
- ativos institucionais locais
- Figma como ambiente de aprovação visual

### Planejadas, mas fora do ciclo atual

- CMS headless
- automação de triagem
- analytics mais robusto
- portal do cliente

## 9. Restrições Importantes

- `rounded-none` em toda UI
- copy em conformidade com o Provimento 205/2021 da OAB
- site preparado para lançamento imediato, sem dependência de backend
- comentários e aprovações visuais devem acontecer no arquivo Figma compartilhado com a cliente

## 10. Fonte de Verdade Arquitetural

Se algum documento antigo ainda mencionar `Next.js`, App Router ou CMS como estado atual, trate isso como histórico de planejamento. A arquitetura vigente deste projeto e desta semana de lançamento é a descrita aqui: **Astro estático + React islands + toolkit visual operacional no Figma**.
