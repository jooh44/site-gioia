export interface FaqItem {
  question: string
  answer: string
}

export const faqGroups: { title: string; items: FaqItem[] }[] = [
  {
    title: "Contratação",
    items: [
      {
        question: "Quanto custa para entrar com um processo?",
        answer:
          "Os honorários variam conforme a complexidade do caso e seguem os parâmetros da OAB/SP. A análise inicial serve justamente para orientar com clareza sobre viabilidade, estratégia e custos.",
      },
      {
        question: "Quais documentos preciso para a primeira consulta?",
        answer:
          "Em geral, RG, CPF, comprovante de residência e os documentos ligados ao caso, como contratos, exames, holerites, certidões, conversas, notificações ou comprovantes de pagamento.",
      },
      {
        question: "O escritório atende apenas em São Paulo?",
        answer:
          "Não. Embora a estrutura física esteja na Lapa, em São Paulo, o processo digital permite atendimento em todo o estado e também em outras regiões do país.",
      },
    ],
  },
  {
    title: "Trabalho e Família",
    items: [
      {
        question: "Fui demitido e não recebi nada. Quais são os meus direitos?",
        answer:
          "Cada rescisão precisa ser analisada com cuidado. Verificamos verbas rescisórias, saldo de salário, férias, FGTS, multas e eventuais irregularidades para identificar o que ainda pode ser exigido.",
      },
      {
        question: "Sofri acidente de trabalho ou doença ocupacional. O que fazer?",
        answer:
          "O ideal é reunir documentos médicos, CAT, exames e provas do vínculo com a atividade exercida. A partir disso, avaliamos estabilidade, indenização e demais medidas cabíveis.",
      },
      {
        question: "Quanto tempo demora um processo de divórcio ou inventário?",
        answer:
          "Depende do caso. Quando há consenso e os requisitos legais estão preenchidos, a via extrajudicial costuma ser mais rápida. Quando existe conflito, o processo judicial exige uma análise mais detalhada.",
      },
      {
        question: "Como funciona o cálculo da pensão alimentícia?",
        answer:
          "Não existe valor fixo universal. O cálculo considera a necessidade de quem recebe e a possibilidade financeira de quem paga, sempre de acordo com a realidade concreta da família.",
      },
    ],
  },
  {
    title: "Saúde e Consumo",
    items: [
      {
        question: "O plano de saúde negou um exame ou cirurgia. O que o advogado pode fazer?",
        answer:
          "Em situações urgentes, é possível buscar medidas judiciais rápidas, inclusive liminares, para garantir o tratamento, exame, cirurgia, medicamento ou internação necessários.",
      },
      {
        question: "Tive um problema com uma compra ou serviço mal prestado. Vale a pena processar?",
        answer:
          "Antes de judicializar, avaliamos a viabilidade do caso, a prova disponível e o resultado prático esperado. O objetivo é evitar desgaste e direcionar apenas demandas que realmente façam sentido.",
      },
    ],
  },
]
