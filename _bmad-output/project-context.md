---
project: Gioia e Associados Advocacia — Site Institucional + Identidade Visual + Lancamento de Marca
last_updated: 2026-04-19
status: active
---

# Project Context — Gioia e Associados Advocacia

> **Para agentes de IA:** Leia as seções na ordem apresentada.
> As regras na Seção 1 são invioláveis — nunca as questione ou "melhore".
> O contexto nas seções seguintes explica o raciocínio; a lógica não muda as regras.

---

## SECAO 0 - Estado Operacional Atual

### 0.1 Escopo vigente do projeto

O projeto nao deve mais ser lido apenas como "um site institucional".

O escopo ativo agora e composto por:

- site institucional em Astro
- identidade visual consolidada
- toolkit social e manual operacional no Figma
- lancamento coordenado da nova marca nos canais digitais
- base para assessoria continua de marca e presenca digital

### 0.2 Prioridade desta semana

A prioridade imediata e o **lancamento da nova marca da Gioia em todos os canais**.

Isso inclui:

- ajustes finais do site
- publicacao do carrossel principal
- atualizacao de perfis e capas
- comunicacao por e-mail
- comunicacao por lista de transmissao no WhatsApp

### 0.3 Fonte de verdade visual

O arquivo master de design do projeto esta no Figma:

`https://www.figma.com/design/Q3Z4u0sRw6iNkLDwUJLQ75/Gioia?node-id=0-1&p=f&t=OujLyLFKe87EezE1-0`

Use tambem como apoio:

- `_cliente/brand/`
- `_cliente/lancamento/`
- `docs/estado-atual-2026-04-19.md`

### 0.4 Decisoes aprovadas na reuniao de 2026-04-19

- missao, visao e valores voltam ao formato compacto sob a foto da equipe
- rodape continua minimalista e passa a exibir e-mail
- nao usar mapa no rodape
- carrossel de inauguracao da marca foi aprovado conceitualmente
- Figma compartilhado passa a ser ambiente de comentario e aprovacao continua
- deve ser preparado contrato fixo de continuidade

### 0.5 Regra de precedencia

Se houver conflito entre documentos antigos e o estado atual do projeto, considere nesta ordem:

1. `docs/estado-atual-2026-04-19.md`
2. este `project-context.md`
3. o codigo em `src/`
4. o Figma master

---

## SEÇÃO 1 — Regras de Implementação Críticas

### 1.1 Square Mandate (INVIOLÁVEL)

**`border-radius: 0` em TODOS os componentes, sem exceção.**

O CSS define `--radius: 0rem`. Nunca use classes `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl` ou `rounded-full` em elementos de UI.

Checklist obrigatório — cada item DEVE ter `rounded-none`:

| Componente         | Classe obrigatória    |
|--------------------|-----------------------|
| Botões (Button)    | `rounded-none`        |
| Cards              | `rounded-none`        |
| Inputs / Textareas | `rounded-none`        |
| Tabs               | `rounded-none`        |
| Badges             | `rounded-none`        |
| Accordions         | `rounded-none`        |
| Sheets / Drawers   | `rounded-none`        |
| Imagens de pessoas | container `rounded-none` |
| Dropdowns          | `rounded-none`        |
| Tooltips           | `rounded-none`        |

**Exceções legítimas:**
- Ícones Lucide podem ter paths internos arredondados (é o SVG nativo da biblioteca). Containers de ícones ainda devem ser quadrados.
- Onde aplicável em ícones Lucide, use `strokeLinecap="square" strokeLinejoin="miter"`.
- `border-radius` interno de elementos do browser (scrollbar, etc.) — fora do nosso controle.

### 1.2 Astro Islands — Regra de Renderização

**Todo componente é HTML estático por padrão. React só é carregado via `client:load` nos islands interativos.**

- Páginas `.astro` em `src/pages/` são 100% estáticas (zero JS no output).
- Layout em `src/layouts/BaseLayout.astro` — fonts via `<link>`, meta tags, JSON-LD via prop.
- Componentes `.astro` em `src/components/sections/` geram HTML puro sem JS.
- Apenas 3 React islands usam `client:load` (interatividade real):
  - `src/components/layout/minimal-navbar.tsx` (scroll detection, mobile sheet)
  - `src/components/sections/services-section.tsx` (accordion + tabs state)
  - `src/components/sections/team-section.tsx` (tab state)
- Verificação: `npm run build` deve gerar 5 páginas estáticas sem erros.

### 1.3 Data-Driven Pattern (OBRIGATÓRIO)

Dados de conteúdo nunca ficam em componentes. Ficam em `src/config/`.

| Dado                          | Arquivo fonte               |
|-------------------------------|-----------------------------|
| NAP (nome, endereço, telefone)| `src/config/site.ts`        |
| Copy do hero | `src/config/home.ts`    |
| Copy institucional de Quem Somos / Missão / Visão / Valores | `src/config/about.ts` |
| FAQ agrupada | `src/config/faq.ts` |
| 5 grupos de serviços + 9 áreas | `src/config/services.ts`   |
| Membros da equipe             | `src/components/sections/team-section.tsx` (array local) |
| Testimonials             | `src/components/sections/TestimonialsTicker.astro` (frontmatter local) |

Se precisar alterar um texto que aparece no site, **atualize o config** (ou frontmatter), não o template.

### 1.4 Schema Markup e SEO

- JSON-LD passado via prop `jsonLd` ao `BaseLayout.astro`, renderizado como `<script type="application/ld+json">`.
- Schemas ativos: `LegalService` (com NAP e 9 áreas) + `FAQPage` — definidos no frontmatter de `src/pages/index.astro`.
- NAP deve ser idêntico em: `siteConfig`, JSON-LD, e conteúdo visível da página.
- Meta tags (title, description, robots, canonical) definidas como props do `BaseLayout.astro` em cada página.

### 1.5 Smooth Scroll e Âncoras

- `scroll-behavior: smooth` definido em `globals.css` — não adicione JS para isso.
- **Todas as seções com `id` anchor DEVEM ter `scroll-mt-20`** para compensar a navbar fixa.
- Seções com anchor: `#services`, `#saude`, `#trabalho`, `#familia`, `#patrimonio`, `#consumidor`, `#about`, `#team`, `#faq`.

### 1.6 OAB Provimento 205/2021 (Compliance Ético)

O escritório é regulado pela OAB. As seguintes práticas são **proibidas** no copy:

- Promessas de resultado ("Garantimos a vitória", "100% de aprovação")
- Comparações com outros escritórios
- CTAs agressivos ou de urgência artificial ("Ligue agora ou perca seu direito!")
- Depoimentos de clientes em formato de caso ("João recuperou R$50k com a Gioia")
- Títulos como "O melhor advogado de SP"

**Tom permitido:** autoridade técnica, acolhimento, clareza informativa, empatia genuína.

---

## SEÇÃO 2 — Sistema de Design

### 2.1 Paleta de Cores — Valores Exatos

```css
/* Definidos em src/styles/globals.css — @theme inline */

--primary:            #5E0001;               /* Garnet principal */
--primary-foreground: oklch(0.985 0 0);      /* Branco suave */

--secondary:          #d1af66;               /* Dourado Logo */
--secondary-foreground: oklch(0.205 0 0);   /* Quase preto */

--background:         oklch(0.99 0.002 85);  /* Stone levíssimo */
--foreground:         oklch(0.145 0 0);      /* Quase preto */

--border:             oklch(0.922 0 0);      /* Cinza suave */
--muted:              oklch(0.97 0 0);
--muted-foreground:   oklch(0.556 0 0);
```

**Tailwind CSS v4** — não existe `tailwind.config.ts`. Toda configuração vive em `globals.css` via `@theme inline {}`.

Paletas adicionais usadas:
- `stone-50/100/200/400/500/600/900` — fundos, textos e divisórias neutras
- `white/5`, `white/10`, `white/20` — overlays sobre fundos escuros (navbar, hero)

### 2.2 Tipografia — Hierarquia Emocional e Visual

| Fonte          | Variável CSS         | Uso                                   | Papel Emocional                          |
|----------------|----------------------|---------------------------------------|------------------------------------------|
| Playfair Display | `font-serif`       | H1, H2, H3 de seções, títulos de advogados | **Âncora de autoridade** — comunica 34 anos, prestígio, permanência |
| Inter          | `font-sans`          | Body, labels, CTAs, navegação         | **Voz acessível** — clareza e leitura rápida |
| Pinyon Script  | `font-handwriting`   | Assinaturas decorativas, accents sutis (ex: tagline em rodapé) | **Humanidade** — sinal de toque pessoal, não escalar |

**Regras de tipografia:**
- Nunca use `font-serif` em itálico para headers principais ou CTAs.
- `tracking-[0.15em]` a `tracking-[0.25em]` em labels uppercase — é a assinatura tipográfica da marca.
- Tamanhos mínimos de body: `text-sm` (14px) com `leading-relaxed`.
- Nunca use `font-handwriting` (Pinyon Script) para texto funcional ou informativo.

### 2.3 Assets SVG — Regras de Uso

Dois assets vetoriais de marca em `/public/`:

| Asset | Path | Quando usar |
|-------|------|-------------|
| Logo completo (nome + símbolo) | `/logo-gioia-e-associados.svg` | Hero principal, documentos formais, OG Image, rodapé quando há espaço generoso |
| Símbolo / Monograma (GG) | `/simbolo-gioia.svg` | Navbar (ícone pequeno), favicon, watermarks de fundo |

**Padrão de watermark** (como implementado na hero):
```html
<Image
  src="/logo-gioia-e-associados.svg"
  alt=""                          <!-- decorativo: alt vazio -->
  className="opacity-[0.10] brightness-0 invert pointer-events-none select-none"
  aria-hidden="true"
/>
```
- `opacity-[0.10]` — presente mas não intrusivo
- `brightness-0 invert` — força branco sobre fundos escuros
- `pointer-events-none select-none` — puramente decorativo

### 2.4 Componentes e Padrões Visuais

- **Grids com bordas** (não sombras): layout modular com `border border-stone-200`, divisórias internas com `border-r`, `border-b`.
- **Alternância de fundo**: seções ímpares `bg-white`, pares `bg-stone-50` — cria ritmo sem cores fortes.
- **Accent bars**: `w-0.5` ou `w-1` verticais nas listas de serviços, coloridas com `bg-primary` ou `bg-secondary`.
- **Separador desktop nav**: `w-[1px] h-6 bg-white/20` entre nav e CTA.
- **Labels de seção**: sempre uppercase, `text-xs font-bold tracking-[0.25em]`, coloridas com primary ou secondary.

---

## SEÇÃO 3 — Contexto de Marca

### 3.1 Identidade: "Boutique Empática"

O posicionamento da Gioia não é "grande escritório corporativo" nem "advogado popular de bairro". É:

> **Boutique de elite que atende pessoas reais em momentos de vulnerabilidade.**

Implicações para design e copy:
- Sofisticação **não pode ser fria**. Cada escolha visual deve equilibrar autoridade com acolhimento.
- Imagens e layout devem sugerir competência, não intimidação.
- CTAs devem convidar, não pressionar.

### 3.2 Psicologia da Paleta — Por Que Bordô e Dourado

**Bordô (`#primary`)**:
- Cor original da marca por décadas — continuidade deliberada, não rebranding.
- Psicologicamente: poder institucional, herança, seriedade sem agressividade (ao contrário do vermelho puro).
- Diferenciação competitiva: advocacia em SP usa azul corporativo (confiança genérica) ou cinza (neutralidade). Bordô ocupa o espaço de "autoridade com calor humano".
- Por que **não azul**: azul é commodity no setor jurídico. Não diferencia.
- Por que **não verde**: associação com saúde/medicina dilui o posicionamento jurídico.
- Por que **não preto puro**: correto para luxury, mas sem o calor que a marca precisa.

**Dourado (`#d1af66 — #secondary`)**:
- Retirado diretamente do logo existente — consistência com a marca física do escritório.
- Não é amarelo, não é laranja — é o dourado "envelhecido", de patina, não de ostentação nova.
- Usado com parcimônia: labels de destaque, accents, ícones de verificação, CTAs mobile.

### 3.3 Dois Perfis com Necessidades Distintas

#### Visitante do Site (público-alvo do escritório)

Pessoas que chegam ao site geralmente enfrentam uma **crise situacional com carga emocional alta**:
- Plano de saúde negou cobertura para um tratamento urgente.
- Acabaram de ser demitidos de forma injusta.
- Estão no meio de uma separação difícil.
- Receberam um diagnóstico grave e não sabem seus direitos.

Não são cognitivamente prejudicados — são adultos funcionais sob pressão emocional real. A distinção importa para o tom: não simplificar em excesso (isso condescende), mas eliminar atrito desnecessário.

**Implicações de UX:**
- Hierarquia de informação clara — o usuário não tem paciência para "descobrir" o site.
- Parágrafos curtos, espaçamento generoso.
- CTA de WhatsApp sempre visível — nunca enterrado no footer.
- Linguagem direta e humana, sem juridiquês desnecessário.
- Microcopy que reduz ansiedade: "Falar com um advogado" > "Enviar formulário".

#### Dra. Mariana (cliente / produtora de conteúdo)

A Dra. Mariana teve um AVC e trabalha com energia mental limitada em casa. Isso é relevante exclusivamente para a **estratégia de produção de conteúdo** — batches mensais pequenos, sessões curtas de texto e gravação, sem pressão de volume ou consistência forçada.

Não afeta decisões de design do site.

### 3.4 A Alma da Marca — Nota para Calibração de Copy

> **Para agentes que escrevem copy para este site:**

Por trás do "Quiet Luxury" elegante há uma história real de resiliência. A Dra. Mariana, sócia ativa, enfrentou um AVC aos 33 anos e passou cerca de um ano afastada — e voltou. O Dr. Celso construiu o escritório por 34 anos, passou pela instabilidade econômica, pelos ciclos do setor jurídico, e manteve a operação. Esses não são dados para usar diretamente no site (OAB veda esse tipo de apelo emocional), mas são a fonte do tom.

A diferença entre **"sofisticado e frio"** e **"sofisticado e acolhedor"** está nessa consciência. O escritório sabe o que é enfrentar algo difícil. Esse reconhecimento silencioso deve estar presente em cada linha de copy — não dito, mas sentido.

---

## SEÇÃO 4 — Stack Técnica e Arquitetura

### 4.1 Versões e Dependências

```json
{
  "astro": "^6.1.4",
  "@astrojs/react": "^5.0.3",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "tailwindcss": "^4.x",
  "typescript": "^5.x",
  "@radix-ui/react-accordion": "interatividade em ServicesSection",
  "@radix-ui/react-tabs": "tabs em ServicesSection",
  "lucide-react": "ícones",
  "tw-animate-css": "animações utilitárias"
}
```

**Tailwind v4**: sem `tailwind.config.ts`. Toda configuração via `src/styles/globals.css` com `@theme inline {}` e `@import "tailwindcss"`.

### 4.2 Estrutura de Pastas

```
src/
├── layouts/
│   └── BaseLayout.astro    ← fonts, meta tags, JSON-LD, OG/Twitter
├── pages/
│   ├── index.astro         ← homepage
│   ├── blog.astro
│   ├── brandbook.astro
│   ├── politica-de-privacidade.astro
│   └── termos-de-uso.astro
├── components/
│   ├── layout/
│   │   └── minimal-navbar.tsx     ← React island (`client:load`)
│   └── sections/
│       ├── HeroSection.astro
│       ├── AboutSection.astro
│       ├── FaqSection.astro
│       ├── FooterCta.astro
│       ├── TestimonialsTicker.astro
│       ├── services-section.tsx   ← React island (`client:load`)
│       └── team-section.tsx       ← React island (`client:load`)
├── config/
│   ├── site.ts             ← NAP, URLs, links sociais
│   ├── home.ts             ← copy do hero, stats, diferenciais
│   ├── about.ts            ← copy institucional, missão, visão, valores
│   ├── faq.ts              ← FAQ agrupada (3 grupos)
│   └── services.ts         ← 5 grupos, 9 áreas, todos os items
└── styles/
    └── globals.css         ← tokens de design (cores, raio, fontes)
```

### 4.3 Path Alias

```typescript
"@/*" → "./src/*"
// Exemplo: import { siteConfig } from "@/config/site"
```

### 4.4 Build e Deploy

- Build target: `astro build` com `output: "static"` em `astro.config.ts`.
- Verificação obrigatória após mudanças estruturais: `npm run build` deve gerar 5 rotas sem erros:
  - `/`
  - `/blog`
  - `/brandbook`
  - `/politica-de-privacidade`
  - `/termos-de-uso`
- Não há CMS headless (planejado para Fase 2).
- `components.json` existe apenas para o fluxo do shadcn/ui. Em Astro, ele deve permanecer com:
  - `rsc: false`
  - `tailwind.css: "src/styles/globals.css"`

### 4.5 Schema Markup Ativo

Em `src/pages/index.astro` (JSON-LD via prop `jsonLd` para `BaseLayout.astro`):
- `LegalService` — NAP completo, 9 áreas de atuação, 3 advogados com OABs corretas.
- `FAQPage` — 3 perguntas frequentes da seção FAQ.

OABs canônicas (NUNCA alterar sem confirmação com o escritório):
- Dr. Celso Fernando Gioia: **OAB/SP 70.379**
- Dra. Mariana Matheus Gioia: **OAB/SP 351.962**
- Dr. Fábio Dreger da Silva: **OAB/SP 336.451**

---

## SEÇÃO 5 — Arquitetura de Informação

### 5.1 Estrutura da Homepage (ordem das seções)

```
Hero → ServicesSection → About → Team → TestimonialsTicker → FAQ → Footer
```

Cada seção é um componente em `src/components/sections/`.

### 5.1.1 Estado Atual das Seções Principais

- **Hero:** headline institucional curta definida pelo cliente: "Três décadas de história na defesa dos seus direitos." O objetivo é caber em até 4 linhas nos breakpoints principais.
- **ServicesSection:** `"use client"` — desktop com 2 colunas (triggers à esq. via estado, conteúdo à dir.) usando Radix Accordion + Tabs; mobile em accordion vertical com auto-scroll. Header da seção usa mesmo grid `lg:grid-cols-[minmax(320px,1.7fr)_minmax(0,4fr)]` que as colunas de serviços para alinhamento perfeito.
- **About / Quem Somos:** seção escura com imagem de biblioteca em fundo total (`/public/images/bg.webp`) com overlay bordô. Conteúdo dividido em:
  - coluna esquerda (lg:col-span-5, sticky): `Quem Somos` + dois parágrafos curtos + fechamento
  - coluna direita (lg:col-span-7): foto da equipe em destaque + micro-faixa horizontal compacta com Missão/Visão/Valores (ícone + label + frase curta, 3 colunas lado a lado)
- **Team:** fundo branco, separado da faixa escura do About. Componente folder-tabs com 3 advogados.
- **TestimonialsTicker:** desktop mantém ticker contínuo; mobile foi trocado para carrossel horizontal livre com dica "Deslize para ver mais".
- **FAQ:** restaurada como bloco expandido em grupos (`Contratação`, `Trabalho e Família`, `Saúde e Consumo`) usando `src/config/faq.ts`.

### 5.2 Grupos de Serviços — Estrutura de Dados

5 grupos pai → 9 áreas filho. Definidos em `src/config/services.ts`.

| `id` (anchor) | `navLabel` | Filhos |
|--------------|------------|--------|
| `saude`      | Saúde      | Para o Paciente + Para o Médico |
| `trabalho`   | Trabalho   | Trabalhista + Previdenciário |
| `familia`    | Família    | Família + Sucessório |
| `patrimonio` | Patrimônio | Imobiliário + Empresarial + Contratos |
| `consumidor` | Consumidor | Proteção ao Consumidor |

Todos têm `scroll-mt-20` e `id` para smooth scroll a partir da navbar.

### 5.3 Navbar — Estrutura

**Desktop:** Logo (hidden em topo, visível ao scroll) | Dropdown "Áreas" (5 grupos) | Sobre | Dúvidas | [Contato]

**Mobile:** Hamburger → Sheet com:
- Seção "Áreas de Atuação" (5 grupos em serif grande)
- Links secundários (Sobre, Dúvidas)
- CTA "Falar no WhatsApp" (fixo no rodapé do sheet)

---

## SEÇÃO 6 — Estado do Projeto

### 6.1 Concluído ✅

- Setup Astro + @astrojs/react + Tailwind v4 + Shadcn
- Sistema de design completo (`globals.css` com tokens)
- Homepage estruturada (todas as seções principais)
- Square Mandate implementado em 100% dos componentes
- Migração concluída de `src/app/` para `src/pages/` + `src/layouts/`
- `siteConfig` com dados reais (NAP, WhatsApp, endereço)
- Meta tags centralizadas em `BaseLayout.astro`
- JSON-LD LegalService + FAQPage em `src/pages/index.astro`
- Navbar com dropdown desktop + mobile sheet expandido
- `ServicesSection` (Client Component com Radix Accordion+Tabs, 5 grupos, 9 áreas)
- Hero institucional atualizado conforme pedido da cliente
- Seção `Quem Somos` reconstruída com base em `src/config/about.ts`
- Missão/Visão/Valores como micro-faixa horizontal compacta (3 colunas)
- Fundo imagético na seção `About` usando `/public/images/bg.webp`
- `TeamSection` reposicionada em bloco branco separado da seção institucional
- FAQ expandida em grupos via `src/config/faq.ts`
- Ticker de avaliações com comportamento responsivo:
  - desktop: ticker contínuo
  - mobile: carrossel livre por toque
- `scroll-mt-20` em todas as seções com anchor
- Build Astro validado em 2026-04-07 com 5 páginas estáticas
- Páginas legais criadas:
  - `/politica-de-privacidade`
  - `/termos-de-uso`

### 6.2 Pendente / Planejado ⏳

- [x] OG image dedicada publicada em `/og-gioia.jpg`
- [x] Domínio final e URL canônica definidos como `https://gioiaeassociados.com.br`
- [ ] Confirmação URL LinkedIn do escritório
- [ ] Schema `Person` para cada advogado (páginas individuais — Fase 2)
- [ ] Páginas de área por advogado (Fase 2)
- [ ] Cookie banner (LGPD)
- [ ] Google Analytics / Tag Manager
- [ ] GMB integrado (citações NAP consistentes)
- [ ] CMS headless (Fase 2)
- [ ] Testes de performance / Core Web Vitals audit
- [ ] Revisão final visual de `TestimonialsTicker`, `FAQ` e `Footer`
- [ ] Atualizar `_bmad-output/planning-artifacts/architecture.md` ou marcá-lo como histórico; ele ainda descreve a arquitetura antiga em Next.js
- [x] `package.json.name` atualizado para `site-gioia`
- [ ] Remover ou atualizar `homeConfig.hero.image`, hoje sem uso no Hero real

### 6.3 Assets Disponíveis

```
/public/
├── simbolo-gioia.svg              ← Monograma GG (navbar, watermarks)
├── logo-gioia.svg                 ← Logo principal usada no hero
├── og-gioia.jpg                  ← OG image publicada para social preview
├── images/bg.webp                 ← Fundo da seção About / Quem Somos
└── team/
    ├── celso-gioia.webp
    ├── mariana-gioia.webp
    └── fabio-dreger.webp
```

---

## SEÇÃO 7 — Contatos e Links Canônicos

```
Escritório:   Gioia e Associados Advocacia
Endereço:     Rua Barão de Jundiaí, 523, Lapa, São Paulo - SP, CEP: 05073-010
Telefone:     (11) 3835-3200
WhatsApp:     (11) 9 9334-9907  →  https://wa.me/5511993349907
Email:        contato@gioiaeassociados.com.br
URL:          https://gioiaeassociados.com.br
Instagram:    @dragioia (Dra. Mariana — foco principal de conteúdo)
```

**Estes dados são a fonte canônica. Qualquer inconsistência em outros arquivos deve ser corrigida para bater com esses.**

---

## SEÇÃO 8 — Brandbook / Manual de Identidade Visual

### 8.1 Localização e Estrutura de Arquivos

```
_cliente/brand/
├── brandbook.html              ← Entregável principal (HTML auto-contido)
└── assets/
    ├── logo-gioia-e-associados.svg     ← Copiado de /public/logo-gioia.svg
    ├── simbolo-gioia-e-associados.svg  ← Copiado de /public/simbolo-gioia.svg
    └── texture-leather.png             ← Copiado de /public/texture-leather.png
```

**IMPORTANTE:** O brandbook usa caminhos relativos (`assets/`). Para funcionar, o servidor HTTP deve ser iniciado **dentro de** `_cliente/brand/`:

```bash
cd _cliente/brand && python3 -m http.server 8767
# Acessar: http://localhost:8767/brandbook.html
```

Se mover o `brandbook.html` para outro lugar, mover também a pasta `assets/` junto.

### 8.2 Seções do Brandbook

| # | Seção | Conteúdo |
|---|-------|----------|
| — | Capa | Logo + "Manual de Identidade Visual 2026" sobre fundo garnet com textura |
| — | Sumário | Índice clicável com 7 seções |
| 01 | A Marca | Valores, posicionamento, território de marca |
| 02 | O Logo | Versões, símbolo, área de proteção, tamanho mínimo |
| 03 | Paleta de Cores | Primárias, neutros, proporções, tabela WCAG 2.1 |
| 04 | Tipografia | Cinzel, Playfair Display, Inter, Pinyon Script — regras de uso |
| 05 | Voz & Tom | Personalidade verbal, exemplos ✓/✗, restrição OAB 205/2021 |
| 06 | Aplicações | 8 placeholders de mockup nas proporções reais (Nano Banana) |
| 07 | Restrições | O que não fazer + checklist interativo |

### 8.3 Seção Aplicações — Mockups (Placeholders)

Placeholders em proporção real, prontos para substituição por ativos finais do Nano Banana:

| Ativo | Proporção | Observação |
|-------|-----------|------------|
| Papel Timbrado | 794 × 1122 px | Portrait A4 |
| Cartão de Visita · Frente | 1050 × 600 px | Paisagem |
| Cartão de Visita · Verso | 1050 × 600 px | Paisagem |
| Assinatura de E-mail | 600 × 200 px | `grid-column: span 2` |
| Post Instagram · Feed | 1080 × 1080 px | Quadrado |
| Stories / Reels | 1080 × 1920 px | Portrait 9:16 |
| Banner LinkedIn | 1584 × 396 px | `grid-column: span 2` |
| Capa Google Meu Negócio | 2048 × 1152 px | 16:9 |

Para substituir placeholder por ativo real: trocar `<div class="mockup">` por `<img src="...">` mantendo o mesmo `aspect-ratio` inline.

### 8.4 Decisões Técnicas da Capa

- **Textura de couro:** `assets/texture-leather.png` (640×640px) como `background-image` em `#capa`
- **Overlay garnet:** `::before` com `background-color: rgba(66, 0, 1, 0.88)` — 88% opacidade deixa ~12% de textura visível
- **Cor correta:** `#420001` em hex = `rgb(66, 0, 1)` em decimal (não confundir com 42)
- **Gradiente sutil:** radial dourado em 75%/25% e 25%/75% sobre o overlay (`rgba(191,159,91,0.10)`)
- **Logo na capa:** versão original dourada (`logo-gioia-e-associados.svg`) com `filter: drop-shadow(0 2px 12px rgba(0,0,0,0.3))`

### 8.5 Paleta do Brandbook (variáveis CSS próprias do HTML)

```css
--garnet:      #5E0001   /* Garnet principal */
--garnet-deep: #420001   /* Garnet escuro — fundos da capa */
--gold:        #BF9F5B   /* Golden Bronze — destaques */
--gold-logo:   #D1AF66   /* Logo Gold — uso restrito à logomarca */
--ink:         #1A1A1A   /* Near Black — textos */
--silver:      #B8B8B8   /* Silver — textos secundários */
--smoke:       #F5F5F5   /* White Smoke — fundos alternativos */
--white:       #FFFFFF
```
