export interface ServiceChild {
  id: string
  title: string
  items: string[]
}

export interface ServiceGroup {
  id: string
  navLabel: string
  title: string
  description: string
  icon: string
  accent: "primary" | "secondary"
  children: ServiceChild[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: "saude",
    navLabel: "Saúde",
    title: "Direito Médico",
    description:
      "Atuação de emergência para pacientes com direitos negados por planos de saúde e defesa jurídica especializada para profissionais da medicina.",
    icon: "HeartPulse",
    accent: "primary",
    children: [
      {
        id: "saude-paciente",
        title: "Para o Paciente e Familiar",
        items: [
          "Cobertura de tratamentos urgentes e obtenção de liminares",
          "Cirurgias em geral e cirurgias modernas (tratamentos inovadores)",
          "Quimioterapia, radioterapia e tratamentos contra o Câncer",
          "Medicamentos de alto custo e medicamentos importados",
          "Home care (equipamentos, enfermeiros e médicos em casa)",
          "Exames de alta complexidade",
          "Órteses, próteses e outros materiais cirúrgicos",
          "Manutenção do plano para demitido com doença crônica",
          "Restabelecimento do plano para demitidos e/ou aposentados",
          "Reembolso de valores pagos e aumento abusivo de mensalidade",
          "Indenizações por erro médico ou erro da equipe médica",
        ],
      },
      {
        id: "saude-medico",
        title: "Para o Médico",
        items: [
          "Defesa jurídica em processos de responsabilidade civil (erro médico)",
          "Defesa perante o CREMESP em processos administrativos",
          "Contratos com planos e de responsabilidade civil",
          "Contratos de trabalho e prestação de serviços",
          "Cobrança de honorários profissionais",
          "Documentos médico-legais",
        ],
      },
    ],
  },
  {
    id: "trabalho",
    navLabel: "Trabalho",
    title: "Direito do Trabalho e Previdenciário",
    description:
      "Defesa intransigente do trabalhador contra injustiças corporativas e garantia dos benefícios previdenciários devidos pelo INSS.",
    icon: "Scale",
    accent: "secondary",
    children: [
      {
        id: "trabalho-trabalhista",
        title: "Direito Trabalhista",
        items: [
          "Rescisão indireta do contrato de trabalho",
          "Reversão de demissão por justa causa",
          "Assédio moral e sexual",
          "Acidente de trabalho e doenças ocupacionais",
          "Reconhecimento de vínculo empregatício (Pejotização)",
          "Reintegração ou indenização da estabilidade gestante",
          "Horas extras, adicional noturno e adicional de insalubridade",
          "Verbas rescisórias e diferença de FGTS",
          "Dano moral, desvio de função e redução de salário",
          "Dispensa discriminatória",
          "Irregularidades do contrato de trabalho",
        ],
      },
      {
        id: "trabalho-previdenciario",
        title: "Direito Previdenciário",
        items: [
          "Aposentadoria por tempo de contribuição",
          "Aposentadoria por invalidez",
          "Aposentadoria por idade e aposentadoria especial",
          "Auxílio-doença e auxílio-acidente",
          "Pensão por morte",
          "Salário-maternidade",
          "Assistência Social BPC – LOAS",
          "Cálculo previdenciário (tempo de serviço e valor do benefício)",
        ],
      },
    ],
  },
  {
    id: "familia",
    navLabel: "Família",
    title: "Direito de Família e Sucessório",
    description:
      "Acompanhamento humanizado nas questões mais sensíveis: dissolução de vínculos, guarda de filhos, alimentos e planejamento da herança.",
    icon: "Users",
    accent: "secondary",
    children: [
      {
        id: "familia-familia",
        title: "Direito de Família",
        items: [
          "Divórcio e partilha de bens",
          "Guarda de filhos (paterna, materna ou dos avós)",
          "Regime de convivência (guarda compartilhada ou alternada)",
          "Ação de pensão alimentícia e revisão de alimentos",
          "Exoneração de pensão alimentícia",
          "Autorização de viagem e de visitas",
          "Síndrome de alienação parental",
        ],
      },
      {
        id: "familia-sucessorio",
        title: "Direito Sucessório",
        items: [
          "Inventário judicial e extrajudicial",
          "Planejamento sucessório",
          "Herança e partilha",
          "Doação",
        ],
      },
    ],
  },
  {
    id: "patrimonio",
    navLabel: "Patrimônio",
    title: "Patrimônio e Negócios",
    description:
      "Proteção jurídica completa para seu patrimônio imobiliário, estruturação e defesa de empresas, e elaboração de contratos seguros.",
    icon: "Building2",
    accent: "secondary",
    children: [
      {
        id: "patrimonio-imobiliario",
        title: "Direito Imobiliário",
        items: [
          "Ação de despejo e ação reivindicatória",
          "Ação de usucapião",
          "Distrato imobiliário e rescisão contratual",
          "Ação de adjudicação compulsória",
          "Ação renovatória de locação comercial",
          "Revisional de contrato de financiamento imobiliário",
          "Taxa SATI, corretagem e atraso em obras",
          "Sustação de leilões e anulatória de arrematação",
          "Elaboração e revisão de contratos imobiliários",
        ],
      },
      {
        id: "patrimonio-empresarial",
        title: "Direito Empresarial",
        items: [
          "Constituição e dissolução de sociedade empresária",
          "Recuperação de empresas e falência",
          "Responsabilidade civil da empresa",
          "Negociações com credores, bancos e fornecedores",
          "Due diligence e análise de documentos",
          "Medidas contra uso indevido de marcas",
          "Medidas e ações envolvendo títulos de crédito",
          "Ações de prestação de contas",
        ],
      },
      {
        id: "patrimonio-contratos",
        title: "Contratos",
        items: [
          "Elaboração, revisão e negociação de contratos em geral",
          "Contratos empresariais, de seguro e prestação de serviços",
          "Locação e franchising",
          "Promessa de venda e compra",
          "Interpretação, prazos e validade de obrigações",
        ],
      },
    ],
  },
  {
    id: "consumidor",
    navLabel: "Consumidor",
    title: "Direito do Consumidor",
    description:
      "Defesa efetiva nas relações de consumo: cobranças indevidas, contratos abusivos, problemas com produtos, serviços e viagens.",
    icon: "ShieldCheck",
    accent: "primary",
    children: [
      {
        id: "consumidor-geral",
        title: "Proteção ao Consumidor",
        items: [
          "Cobranças indevidas e inscrições indevidas no SERASA/SPC",
          "Juros abusivos em contratos bancários",
          "Entrega de produtos com vício ou defeito",
          "Produtos não entregues ou serviços não prestados",
          "Propaganda enganosa ou abusiva",
          "Problemas em compras pela internet",
          "Atraso em voo, overbooking e extravio de bagagens",
          "Revisional e busca e apreensão",
          "Contratos de planos de saúde",
          "Contrato educacional (liminar)",
          "Multas decorrentes da venda de veículo",
          "Acompanhamento em órgãos de proteção (Procon)",
        ],
      },
    ],
  },
]
