---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
inputDocuments: ['docs/prd.md', 'docs/pesquisa-e-prd.md']
workflowType: 'architecture'
project_name: 'site-gioia'
user_name: 'Johny'
date: '2026-02-16T22:20:00Z'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**

- **Conteúdo (FR-01):** Hardcoded content for MVP (No CMS initially). Focus on structure for future migration.
- **Triagem & Contato (FR-02):** WhatsApp integration is the primary conversion funnel. Requires persistent floating action button and origin tracking.
- **Visual Law (FR-03):** Custom components (Timelines, Infographics) to simplify legal complexity.
- **Segurança (FR-04):** Strict adherence to LGPD and medical data privacy. No sensitive data storage on frontend.

**Non-Functional Requirements:**

- **Performance (NFR-01):** FCP < 1.5s on 3G is a hard requirement for emergency scenarios.
- **SEO (Success Criteria):** Server-Side Rendering (SSR) is non-negotiable for organic reach.
- **Acessibilidade (NFR-02):** WCAG 2.1 AA compliance (Contrast ratios for Burgundy/Gold theme).

**Scale & Complexity:**

- Primary domain: **Web Application (Legal Tech)**
- Complexity level: **Low-Medium** (Static Content + Interactive Components)
- Estimated architectural components: ~10 (Pages, UI Components, API Routes)

### Starter Template Evaluation

**Primary Technology Domain:**
Web Application (Next.js) - Based on requirement for high performance, SEO, and "Quiet Luxury" bespoke design.

**Starter Options Considered:**

1. **Direct Setup (`create-next-app`)**
    - _Pros:_ Zero architectural debt, exact control over dependencies, latest Next.js 14+ features (App Router).
    - _Cons:_ Requires manual setup of linting, testing, and folder structure.

2. **Shadcn/UI Starters**
    - _Pros:_ Rapid UI development.
    - _Cons:_ Often come with opinionated choices (auth, database) that might conflict with our "No-CMS" MVP constraint.

**Platform & Architecture Debate (Party Mode Results):**

> **🧑‍💼 Mary (Analyst/SEO):** "Para autoridade e AIO, o código precisa ser semântico e rápido. Templates pesados prejudicam o _Crawl Budget_. Precisamos de controle total sobre o HTML e Schema.org."
>
> **🏗️ Winston (Architect):** "Concordo. `create-next-app` é a única garantia de que não teremos scripts inúteis carregando. Para o problema do 'No-CMS', sugiro uma arquitetura de **Content-as-Code**."
>
> **📋 John (PM):** "O time criativo precisa de autonomia. Se eles tiverem que pedir PR para mudar uma vírgula, travamos o marketing."
>
> **🔬 Dr. Quinn (Problem Solver):** "A solução é **MDX + Config Files**. Criamos arquivos de texto/configuração separados da lógica. O time criativo edita `hero-copy.ts` ou `artigo-01.mdx`, e o Next.js compila isso como site estático. Zero banco de dados, performance máxima, e edição fácil."

**Selected Strategy: Custom "Authority" Architecture**

**Rationale:**
Avoid generic templates to ensure pixel-perfect "Quiet Luxury" implementation. Use a "Content-as-Code" pattern to allow the creative team to manage text/SEO without a database, maintaining extreme performance for AIO.

**Initialization Command:**

```bash
npx create-next-app@latest site-gioia --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
# Post-init: Install Shadcn UI manually for granular control
npx shadcn-ui@latest init
```

### Core Architectural Decisions

**Decision Priority Analysis:**

- **Critical:** No-CMS Approach (MDX/Content-as-Code), Next.js App Router, Tailwind CSS.
- **Important:** Shadcn UI for accessibility, Vercel Deployment.
- **Deferred:** Backend/Database (Post-MVP), Complex Auth (Post-MVP).

**Data Architecture:**

- **Source of Truth:** Git Repository (Filesystem) for Institutional Content.
- **Institutional Content:** Typed TypeScript objects in `src/config/` (Home, About, Services).
- **Blog/Articles:** DEFERRED (Future Patch). Will be integrated with a Headless CMS (e.g., Strapi/Sanity). The frontend will have a prepared route `/blog` returning a "Coming Soon" or hidden state, ready to fetch from an API later.
- **Schema:** Defined via Zod for `src/config` to ensure rigid type safety for the creative team's text.

**Authentication & Security:**

- **Auth:** None needed for MVP (Public Site).
- **Security:** Strict Content Security Policy (CSP), No external scripts (except GA/Pixel via Next.js Script), Contact forms sanitized via Zod.

**API & Communication Patterns:**

- **Internal:** Direct Function Calls (Server Components -> File System).
- **External:** WhatsApp API (Direct Link), Google Analytics 4.
- **Future CMS:** The architecture will allow plugging in a `lib/cms.ts` client later without refactoring the whole site.

**Frontend Architecture:**

- **State Management:** React Server Components (RSC) for fetching. URL Search Params for minimal client state (filters).
- **Routing:** Next.js App Router.
- **Performance:** Static Exports (SSG) where possible, or aggressive ISR. Main threat: Large JS bundles (mitigated by RSC).

## Project Structure & Boundaries

### Complete Project Directory Structure

```
site-gioia/
├── public/                 # Static Assets (Images, fonts, favicon)
│   ├── assets/             # Brand Assets (Logos, Icons)
│   └── images/             # Institutional visuals
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── (marketing)/    # Route Group for Institutional Pages
│   │   │   ├── page.tsx    # Home
│   │   │   ├── sobre/      # About
│   │   │   └── servicos/   # Services
│   │   ├── blog/           # [FUTURE] Blog Route (Placeholder)
│   │   │   └── page.tsx    # "Coming Soon" / Hidden
│   │   ├── layout.tsx      # Root Layout (Fonts, Metadata)
│   │   └── global.css      # Tailwind Directives
│   ├── components/
│   │   ├── ui/             # Shadcn Primitives (Button, Card)
│   │   ├── visual-law/     # Custom Legal Components (Timeline, Alert)
│   │   └── sections/       # Page Sections (Hero, Features, Footer)
│   ├── config/             # CONTENT REPOSITORY (Creative Team Focus)
│   │   ├── site.ts         # Global Strings (Footer, Titles, Contact)
│   │   ├── home.ts         # Homepage Copy
│   │   ├── about.ts        # About and Team Copy
│   │   └── services.ts     # Services Description Copy
│   └── lib/
│       ├── utils.ts        # CN helper
│       # cms.ts            # [FUTURE] Integration with Headless CMS
├── next.config.mjs
├── tailwind.config.ts
└── package.json
```

### Requirements to Structure Mapping

**Features:**

- **Visual Law:** Components live in `src/components/visual-law/`. Used inside Institutional Sections.
- **Content Creation:** Creative team edits `src/config/*.ts` files (Type-safe content).
- **Blog/CMS:** Routes prepared but empty (`src/app/blog`). Ready for `npm install @strapi/client` later.

**Integration Points:**

- **WhatsApp:** `src/components/ui/whatsapp-button.tsx` (Global Floating Component).
- **Analytics:** `src/components/analytics-provider.tsx` (Client Component wrapper).

**Infrastructure & Deployment:**

- **Host:** Vercel.
- **CI/CD:** Automatic deploy on git push to `main`.
- **Domain:** `site-gioia` (Production).

### Technical Constraints & Dependencies

- **Compliance:** OAB Provimento 205/2021 restricts marketing language and promises.
- **Deployment:** Vercel via GitHub (User Requirement).
- **Integrations:** WhatsApp Business API (via webhook/vendor).

### Cross-Cutting Concerns Identified

- **Theming:** "Quiet Luxury" design system must be consistent across all pages.
- **Analytics:** Privacy-focused analytics to track conversion without compromising trust.
- **Content Management:** Decoupled content workflow for legal team.
