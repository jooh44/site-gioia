# Final Review — Social Media Toolkit V3 Figma

## Consenso final

Status geral: **quase pronto, mas ainda não 100% pronto para exportar ao Figma como biblioteca operacional**.

O arquivo [`social-media-toolkit-v3-figma.html`](/home/johny/Documentos/projetos/gioia/site-gioia/_cliente/brand/social-media-toolkit-v3-figma.html) está forte em tokens, tipografia, componentes-base, safe zones, grid de lançamento, compliance e templates principais.

O ponto de atenção é simples: **alguns itens críticos existem só como classes CSS ou referência de dimensão, mas não como frames instanciados no HTML**. Para `HTML to Design`, isso conta como lacuna.

## O que está coberto

- Tokens de cor, tipografia e spacing: **pronto**
- Componentes-base reutilizáveis: **pronto**
- Safe zones e size reference multiplataforma: **pronto**
- Sistema de layout para prompt e composição: **pronto**
- Grid 3x3 e mapa editorial: **pronto**
- Templates T12–T24: **pronto**
- Compliance OAB e regras visuais: **pronto**

## Validação dos pontos do Claude

### Confirmado como faltante ou parcial

1. `Highlight covers`
Definições existem em `hl-grid`, `hl-circle`, `f-highlight` nas linhas 168 e 188, mas não há seção renderizada com esses elementos no HTML.
Veredito: **faltando na versão Figma-import**

2. `Foto de perfil`
Definições existem em `f-pfp` e `pfp-grid` nas linhas 169 e 197, mas não há bloco instanciado com variantes de avatar.
Veredito: **faltando na versão Figma-import**

3. `Banner LinkedIn / YouTube`
Há referência de dimensão na tabela nas linhas 581 e 590, e há classe visual `f-banner` na linha 163, mas não existe template visual renderizado para banner pessoal LinkedIn nem banner de canal YouTube.
Veredito: **parcial**

4. `Legendas / bio / hashtags`
Não há estrutura de copy para legenda, bio, CTA textual ou set de hashtags no arquivo.
Veredito: **faltando**

5. `Slide miolo de carrossel`
Há peças soltas suficientes para compor um slide: `eyebrow`, FAQ block e CTA final, inclusive com referências em torno das linhas 449, 495 e 529. Mas falta um **template completo de slide interno** já montado.
Veredito: **parcial**

6. `Stories variados`
Existe apenas o `Template 22` nas linhas 1291–1308.
Veredito: **parcial**

### Ajuste no review do Claude

O Claude acertou o diagnóstico funcional, mas superestimou alguns “faltantes absolutos”.

- `Highlight covers`: não estão prontos neste HTML para Figma, mas o sistema visual está esboçado no CSS.
- `Foto de perfil`: idem.
- `Banner`: existe base visual e tabela, mas não o frame final reutilizável.

Ou seja: **não é ausência total de direção; é ausência de instanciação final no arquivo que vai para o plugin**.

## Parecer final

### Go / No-Go

**Go condicional.**

Você já pode exportar esse arquivo e aproveitar boa parte da biblioteca no Figma.
Mas, para considerar o toolkit realmente fechado como biblioteca de produção social, ainda faltam **5 entregáveis curtos**:

1. Uma seção renderizada de `highlight covers` com as 9 capas.
2. Uma seção renderizada de `profile avatars` com pelo menos 1 avatar master.
3. Dois templates visuais de banner:
LinkedIn pessoal 1584×396 e YouTube 2560×1440.
4. Um template completo de `slide miolo` de carrossel.
5. Dois stories adicionais:
story texto puro e story derivado de carrossel/CTA.

## Prioridade real

### Crítico antes do Figma

- Highlight covers
- Profile avatar
- Banner LinkedIn
- Banner YouTube
- Slide miolo de carrossel

### Pode entrar depois

- Estrutura de legenda
- Sets de hashtags
- Bio templates

## Conclusão enxuta

O toolkit está **85–90% fechado**.

Para exportar e usar no Figma sem remendos, falta transformar os itens acima em **frames visuais reais dentro do HTML**, porque o plugin não converte intenção, só converte o que estiver efetivamente montado.
