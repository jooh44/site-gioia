# Plano de UX e Evolucao do Editor de Templates Juridicos

## Objetivo

Transformar `src/pages/templates.astro` de um documento com trechos editaveis em uma ferramenta de trabalho juridico que seja:

- util para advogado em uso real
- previsivel para preenchimento e revisao
- segura contra perda de conteudo
- rapida para gerar PDF final
- coerente com a linguagem institucional da Gioia

---

## Problema Atual

Hoje a pagina funciona melhor como um `template HTML editavel` do que como um `editor juridico`.

Os principais atritos atuais sao:

- o usuario precisa procurar campos dentro do texto corrido
- o preenchimento nao e guiado por importancia
- a edicao estrutural fica escondida em hover e mouse
- o desfazer cobre bloco, mas nao transmite confianca de edicao
- a acao de limpar modelo e forte demais para o nivel atual de protecao
- a insercao de novas secoes nao respeita uma logica juridica de numeracao automatica
- no mobile/tablet a folha A4 vira uma area grande de scroll horizontal, ruim para editar

---

## Principios de UX

### 1. O advogado nao deve cacar placeholders

Os campos essenciais precisam estar expostos em uma interface guiada, com preenchimento por contexto.

### 2. O documento continua sendo o centro, mas nao o unico ponto de entrada

O preview A4 continua importante para confianca visual e exportacao, mas o preenchimento principal nao deve depender apenas dele.

### 3. Estrutura juridica precisa ser automatizada

Numeracao, ordem de secoes e consistencia formal nao devem depender da memoria do usuario.

### 4. Acao destrutiva precisa de protecao

Excluir, limpar, resetar ou renumerar deve ser previsivel, reversivel quando possivel, e claro no feedback.

### 5. Exportacao deve ser consequencia natural do fluxo

O usuario precisa chegar ao PDF com sensacao de controle e checklist minimo concluido.

---

## Fluxo Proposto

## Etapa 1 - Escolha do modelo

O usuario escolhe:

- Peticao inicial
- Procuracao
- Contrato

Ao escolher, o sistema:

- ativa o template
- carrega o ultimo rascunho local daquele template
- mostra um resumo do progresso do preenchimento
- abre o painel de campos essenciais do modelo

### Informacoes visiveis nessa etapa

- nome do modelo
- status do rascunho
- quantidade de campos pendentes
- acao principal: `Continuar preenchimento`

---

## Etapa 2 - Preenchimento guiado

Essa deve ser a camada principal de uso para advogado.

### Estrutura do painel lateral

O painel lateral deixa de ser apenas um conjunto de botoes e passa a ter 4 blocos:

1. `Modelo`
2. `Campos essenciais`
3. `Estrutura do documento`
4. `Exportacao`

### Bloco `Campos essenciais`

Cada template exibe um formulario resumido com os campos mais importantes.

#### Exemplo para peticao

- Vara / Foro / Comarca / Estado
- Numero do processo
- Nome da parte autora
- Qualificacao da parte autora
- Nome da acao
- Nome da parte re
- CPF/CNPJ da parte re
- Endereco da parte re
- Sintese fatica
- Fundamento de tutela
- Fundamentacao juridica
- Pedido principal
- Valor da causa
- Data

#### Exemplo para procuracao

- Nome do outorgante
- Nacionalidade / estado civil / profissao
- RG
- CPF
- E-mail
- Endereco
- Referencia do caso
- Data

#### Exemplo para contrato

- Nome do cliente
- Qualificacao
- Endereco
- Objeto
- Foro / orgao
- Parte adversa
- Honorarios
- Quota litis
- Clausula de rescisao
- Data

### Comportamento esperado

- ao focar um campo do painel, o trecho correspondente no documento e destacado
- ao focar um campo do documento, o item correspondente no painel e destacado
- campos preenchidos mudam de estado visual
- campos vazios continuam visiveis em lista de pendencias
- campos longos podem usar textarea no painel, mesmo que no preview virem texto corrido

### Beneficio

O advogado consegue preencher o que importa primeiro sem navegar linha por linha no documento.

---

## Etapa 3 - Edicao estrutural do documento

Depois do preenchimento essencial, o usuario entra na camada de composicao.

### Acoes permitidas

- adicionar secao
- adicionar paragrafo
- adicionar item de lista
- adicionar campo livre
- excluir bloco
- duplicar secao
- mover secao para cima
- mover secao para baixo

### Regra

Essas acoes devem ficar agrupadas no bloco `Estrutura do documento`, separadas visualmente do preenchimento e da exportacao.

### Mudanca importante

Excluir bloco nao deve depender apenas de hover.

Alternativas aceitaveis:

- botao visivel ao selecionar o bloco
- mini toolbar contextual fixa
- menu `Acoes da secao`

---

## Etapa 4 - Revisao e exportacao

Antes da exportacao, o editor deve permitir revisao minima.

### Checklist de revisao

- campos essenciais preenchidos
- nenhuma secao com placeholder residual
- nenhuma secao vazia adicionada por engano
- numeracao estrutural consistente

### Acoes finais

- `Revisar pendencias`
- `Visualizar impressao`
- `Exportar PDF`

---

## Nova Arquitetura da Sidebar

## Ordem dos blocos

1. Identificacao do editor
2. Seletor de modelo
3. Resumo do rascunho
4. Campos essenciais
5. Estrutura do documento
6. Revisao e exportacao
7. Acoes destrutivas

## Exemplo de hierarquia visual

### Topo

- `Templates juridicos`
- nome do modelo ativo
- status: `Rascunho salvo neste navegador`

### Resumo

- `12 campos preenchidos`
- `3 pendencias`
- `ultima alteracao salva automaticamente`

### Campos essenciais

- lista navegavel de inputs por grupo

### Estrutura do documento

- adicionar secao
- adicionar paragrafo
- adicionar item
- duplicar secao atual
- mover secao

### Revisao e exportacao

- revisar pendencias
- visualizar impressao
- exportar PDF

### Acoes destrutivas

- desfazer
- limpar modelo

`Limpar modelo` deve ficar isolado visualmente e exigir confirmacao.

---

## Estados de Interface

## 1. Estado inicial

- modelo ativo carregado
- documento visivel
- painel com campos principais
- status neutro

Mensagem recomendada:

`Preencha os campos principais para montar o documento.`

## 2. Estado editando campo

- campo ativo destacado no painel
- trecho correspondente destacado no documento
- a viewport do documento pode rolar ate o ponto se necessario

Mensagem recomendada:

`Editando: Nome da parte autora`

## 3. Estado alteracao salva

- feedback discreto
- sem interromper digitacao
- com `aria-live="polite"`

Mensagem recomendada:

`Rascunho salvo`

## 4. Estado pendencia encontrada

- campo vazio marcado
- placeholder residual marcado
- acao para ir ate o campo

Mensagem recomendada:

`Ha 3 campos essenciais sem preenchimento`

## 5. Estado exportacao

- documento pronto para impressao
- UI lateral nao participa da impressao

Mensagem recomendada:

`Visualizacao pronta para exportacao em PDF`

## 6. Estado destrutivo

- confirmar antes de limpar
- permitir cancelar

Mensagem recomendada:

`Limpar este modelo removera o rascunho salvo deste navegador.`

---

## Regra Funcional: Numeracao Sequencial de Titulos

Essa regra passa a ser obrigatoria para novas secoes.

## Objetivo

Quando o usuario criar uma nova secao, o titulo deve ser gerado com numeracao sequencial coerente com o bloco anterior.

### Exemplo

Se o documento tiver:

- `I. Sintese Fatica`
- `II. Da Tutela de Urgencia`
- `III. Do Direito`

Ao inserir nova secao depois de `III`, o sistema deve criar:

- `IV. [NOVA SECAO]`

---

## Regra de responsabilidade

O usuario edita apenas o `texto do titulo`.

O sistema controla:

- prefixo numerico
- renumeracao
- consistencia da ordem

### Exemplo correto

Interface mostra:

- prefixo travado: `IV.`
- titulo editavel: `[NOVA SECAO]`

O usuario altera apenas:

- `Dos Pedidos Complementares`

Resultado final:

- `IV. Dos Pedidos Complementares`

---

## Regras de negocio para numeracao

### 1. Insercao de secao principal

Ao inserir uma secao principal:

- localizar todas as secoes principais do template ativo
- identificar a posicao de insercao
- recalcular os indices a partir dali
- aplicar numeracao romana sequencial

### 2. Exclusao de secao principal

Ao excluir uma secao principal:

- remover a secao e seu conteudo associado, se a regra estrutural assim exigir
- renumerar todas as secoes principais posteriores

### 3. Reordenacao

Ao mover uma secao para cima ou para baixo:

- recalcular toda a numeracao das secoes principais

### 4. Edicao do titulo

Editar o titulo nao altera a numeracao.

### 5. Template sem secoes numeradas

Se o template atual nao usar esse padrao estrutural, a regra deve ser desativada para aquele tipo de bloco.

---

## Escopo tecnico recomendado da numeracao

Cada secao principal deve ter metadados explicitos, por exemplo:

- `data-block-type="section"`
- `data-section-level="1"`
- `data-section-index="4"`

O titulo pode ser dividido em:

- `<span data-section-prefix>IV.</span>`
- `<span data-section-title contenteditable="true">[NOVA SECAO]</span>`

Isso evita parsing fragil de texto completo do `h3`.

---

## Regras para subtitulos no futuro

Nao precisa entrar agora, mas a estrutura deve permitir evolucao.

Fases futuras possiveis:

- secoes principais com romano: `I`, `II`, `III`
- subtitulos com arabico: `1.`, `2.`, `3.`
- subitens com letra: `a)`, `b)`, `c)`

Para esta iteracao, basta suportar bem o primeiro nivel.

---

## Mudancas de Comportamento Recomendadas no Codigo

## 1. Separar preenchimento de composicao

Hoje:

- o documento e ao mesmo tempo formulario e canvas

Proposto:

- o painel lateral vira formulario principal
- o documento vira preview e area de refinamento

## 2. Criar mapa de campos por template

Estruturar uma configuracao por modelo com:

- id do campo
- label
- tipo
- grupo
- obrigatorio ou opcional
- seletor de destino no documento

Isso permite:

- renderizar o painel dinamicamente
- validar pendencias
- navegar por campo

## 3. Introduzir modelo de dados para blocos

Hoje a pagina depende fortemente de `innerHTML`.

Proposto no medio prazo:

- manter fallback em HTML se necessario
- mas criar pelo menos uma camada de metadados para secoes e blocos estruturais

## 4. Melhorar persistencia

Persistencia deve guardar:

- template ativo
- valores dos campos
- estrutura do body
- estado de ordem das secoes

## 5. Melhorar desfazer

O ideal:

- desfazer de alteracoes estruturais
- desfazer de exclusao
- desfazer com feedback claro

Se necessario, primeira etapa:

- manter undo para estrutura
- melhorar a comunicacao do que pode ou nao ser desfeito

---

## Priorizacao por Fases

## Fase 1 - Base de confianca

Objetivo: reduzir risco e aumentar clareza sem reescrever tudo.

Entradas:

- confirmacao para `Limpar modelo`
- melhoria do status com mensagens reais
- separacao visual de acoes destrutivas
- melhor affordance dos campos editaveis
- botao de exclusao sem dependencia exclusiva de hover

## Fase 2 - Numeracao automatica de secoes

Objetivo: adequar o editor a logica juridica real.

Entradas:

- nova estrutura de `h3` com prefixo controlado
- funcao de numeracao romana
- renumeracao ao inserir, excluir e mover
- insercao de secao principal com proximo indice automatico

## Fase 3 - Painel de campos essenciais

Objetivo: transformar o editor em fluxo guiado.

Entradas:

- configuracao de campos por template
- formulario lateral
- highlight sincronizado painel <-> documento
- contador de pendencias

## Fase 4 - Edicao estrutural madura

Objetivo: tornar a montagem do documento realmente util.

Entradas:

- duplicar secao
- mover secao
- checklist de revisao
- validacao antes do PDF

## Fase 5 - Responsividade de uso real

Objetivo: melhorar tablet e telas menores.

Entradas:

- modo formulario em telas menores
- preview da folha em segunda camada
- menos dependencia de scroll horizontal

---

## Ordem Recomendada de Implementacao

Se for executar em `src/pages/templates.astro`, a ordem mais segura e:

1. reorganizar sidebar e estados
2. proteger acoes destrutivas
3. remodelar `h3` para suportar prefixo separado
4. implementar motor de numeracao sequencial
5. ajustar insercao e exclusao de secoes
6. criar mapa de campos essenciais por template
7. renderizar painel guiado
8. sincronizar foco e highlight
9. adicionar checklist de revisao antes da exportacao

---

## Decisao de Produto

O editor deve otimizar o trabalho do advogado em 3 momentos:

- preencher rapidamente
- manter estrutura formal correta
- sair com PDF sem revisar manualmente toda a hierarquia

Se uma decisao de interface for boa para demo, mas ruim para uso repetido em rotina juridica, ela deve ser descartada.
