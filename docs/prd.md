# PRD: Transformação Digital da Gioia e Associados Advocacia

## 1. Executive Summary

A **Gioia e Associados**, boutique jurídica com 34 anos de excelência em **Direito da Saúde** e **Direito do Trabalho**, inicia sua transformação digital para consolidar-se como autoridade máxima em São Paulo. O projeto visa criar uma plataforma de alta performance que reconcilie a tradição institucional com uma estratégia de aquisição digital agressiva e ética.

**Visão:** Ser o santuário jurídico digital definitivo para indivíduos em crise (saúde ou trabalho), oferecendo acolhimento imediato, autoridade inquestionável e triagem eficiente.

**Diferenciadores:**

* **Autoridade de Nicho:** Histórico de "nunca perder um caso litigado contra plano de saúde".
* **Empatia Digital:** "Quiet Luxury" visual (Bordô/Dourado) e UX focado em usuários sob estresse cognitivo.
* **Design Mandate:** Estética estritamente quadrada (Square Aesthetic). Nenhuma borda arredondada em componentes UI (botões, cards, tabs, imagens).
* **Conformidade Ética:** Adesão estrita ao Provimento 205/2021 da OAB (sem promessas de resultado, foco educativo).

**Usuários Alvo:**

1. **Paciente/Familiar em Crise:** Busca liminares de urgência (UTI, oncologia, home care).
2. **Trabalhador Lesado:** Busca reparação por demissão injusta, assédio ou acidente.

---

## 2. Success Criteria (SMART)

1. **Performance de Carregamento:** Atingir *First Contentful Paint* (FCP) < 1.5s em redes 3G para garantir acesso em situações de emergência.
2. **Eficiência de Triagem:** Reduzir o tempo médio de primeira resposta para < 5 minutos via automação de triagem no WhatsApp.
3. **Autoridade SEO:** Posicionar-se na 1ª página do Google para 5 palavras-chave de cauda longa (ex: "liminar UTI unimed recusa") em 6 meses.
4. **Taxa de Conversão:** Converter 15% dos visitantes de landing pages de "urgência" em inícios de conversa no WhatsApp.
5. **Conformidade:** Zero infrações éticas identificadas em auditorias de conformidade com o Provimento 205/2021.

---

## 3. Product Scope

### Phase 1: MVP - Autoridade e Triagem (Lançamento)

* **Core:** Estrutura institucional (História, Dr. Celso) e Hubs de Conteúdo (Saúde e Trabalho).
* **Triagem:** Botão flutuante "Plantão de Urgência" com integração WhatsApp Business.
* **Visual Law:** Componentes visuais para explicar processos complexos (ex: linha do tempo de liminar).
* **Admin:** CMS Headless básico para gestão de artigos.

### Phase 2: Growth - Motor de Conteúdo

* **Automação:** Chatbot NLP no WhatsApp para pré-qualificação de leads (coleta de documentos).
* **SEO:** Expansão agressiva de artigos técnicos e "Vitórias Jurídicas" (anonimizadas).
* **Analytics:** Painéis de conversão e origem de tráfego.

### Phase 3: Vision - Ecossistema Transparente

* **Portal do Cliente:** Acesso seguro (MFA) para visualização de status processual em tempo real.
* **Integração Total:** Sincronização automática entre WhatsApp, Site e Software Jurídico interno.

---

## 4. User Journeys

### Journey 1: O Caminho de Emergência (Direito da Saúde)

**Persona:** Familiar de paciente em UTI sob recusa de plano de saúde.

1. **Gatilho:** Recusa de cobertura em momento crítico. Pesquisa "advogado liminar urgente SP" no celular.
2. **Descoberta:** Acessa Landing Page específica. Carregamento instantâneo. Design calmo e autoritário (Bordô).
3. **Educação Rápida:** Vê infográfico de 3 passos: "Como conseguimos sua liminar em horas".
4. **Ação:** Clica em "Plantão de Urgência" (WhatsApp).
5. **Resultado:** Envia foto da negativa. O sistema encaminha para advogado plantonista.

### Journey 2: O Caminho de Validação (Direito do Trabalho)

**Persona:** Gestante demitida buscando seus direitos.

1. **Gatilho:** Dúvida sobre legalidade da demissão. Pesquisa "direitos gestante demitida".
2. **Descoberta:** Encontra artigo detalhado no blog do escritório.
3. **Validação:** Lê sobre a experiência de 34 anos e casos similares. Sente segurança.
4. **Ação:** Preenche formulário "Análise de Viabilidade" com resumo do caso.
5. **Resultado:** Recebe contato agendado para consulta consultiva.

---

## 5. Functional Requirements

### FR-01: Sistema de Conteúdo (CMS)

* **FR-01.1:** O sistema deve permitir que advogados publiquem artigos com formatação rica (texto, imagens, blocos de Visual Law) sem código.
* **FR-01.2:** O sistema deve suportar categorização hierárquica (Área > Tópico > Artigo) amigável para SEO.
* **FR-01.3:** O sistema deve gerar automaticamente sitemaps XML e meta-tags baseadas no conteúdo.

### FR-02: Triagem e Contato

* **FR-02.1:** O sistema deve apresentar um botão de ação flutuante (WhatsApp) visível em 100% das páginas móveis.
* **FR-02.2:** O sistema deve capturar a origem do tráfego (UTM parameters) e repassar ao iniciar a conversa no WhatsApp.
* **FR-02.3:** Os formulários de contato devem validar dados em tempo real e rejeitar submissões incompletas.

### FR-03: Visual Law e UI

* **FR-03.1:** O sistema deve renderizar componentes de "Linha do Tempo Processual" responsivos.
* **FR-03.2:** O sistema deve aplicar o tema "Quiet Luxury" (Bordô, Dourado #d1af66) e o "Square Mandate" (border-radius: 0) consistentemente via tokens de design.

### FR-04: Segurança e Privacidade

* **FR-04.1:** O sistema não deve armazenar documentos médicos sensíveis no servidor web; deve repassar via canal seguro ou criptografar em repouso (AES-256).
* **FR-04.2:** O sistema deve exibir aviso de cookies e política de privacidade conforme LGPD.

---

## 6. Non-Functional Requirements

### NFR-01: Performance

* **Metric:** Core Web Vitals (LCP < 2.5s, CLS < 0.1, FID < 100ms).
* **Condition:** Em dispositivos móveis (3G/4G).

### NFR-02: Acessibilidade

* **Metric:** WCAG 2.1 Nível AA.
* **Condition:** Verificado via auditoria automatizada (Lighthouse/Axe) e contraste de cores (Bordô/Dourado).

### NFR-03: Stack Tecnológico

* **Frontend:** Next.js (React) para SSR/SSG.
* **Estilo:** Tailwind CSS.
* **CMS:** Sanity ou Strapi (Headless).
* **Infra:** Vercel (Recomendado).

---

## 7. Domain Requirements (Legal/OAB)

* **DR-01:** O conteúdo não deve conter promessas de resultado (ex: "Garantimos vitória").
* **DR-02:** O sistema não deve usar termos mercantilistas ("Promoção", "Ligue já", "Preço").
* **DR-03:** Todas as páginas devem exibir o número da OAB do sócio responsável ou da sociedade no rodapé.
