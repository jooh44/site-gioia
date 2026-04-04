import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Gioia e Associados Advocacia.",
}

const sections = [
  {
    title: "1. Coleta de informações",
    content:
      "Podemos coletar dados fornecidos diretamente por você em formulários, contatos por e-mail, telefone ou WhatsApp, como nome, telefone, e-mail e informações relacionadas ao atendimento solicitado.",
  },
  {
    title: "2. Uso dos dados",
    content:
      "Os dados são utilizados para atendimento, retorno de contato, análise preliminar de demandas, melhoria da comunicação institucional e cumprimento de obrigações legais.",
  },
  {
    title: "3. Compartilhamento",
    content:
      "A Gioia e Associados não comercializa dados pessoais. Informações podem ser compartilhadas apenas quando necessário para execução do serviço, cumprimento legal ou proteção de direitos.",
  },
  {
    title: "4. Armazenamento e segurança",
    content:
      "Adotamos medidas razoáveis de segurança para proteger os dados pessoais contra acesso não autorizado, uso indevido, alteração ou divulgação indevida.",
  },
  {
    title: "5. Direitos do titular",
    content:
      "Você pode solicitar informações sobre tratamento de dados, correção, atualização ou exclusão, observadas as hipóteses legais aplicáveis.",
  },
  {
    title: "6. Contato",
    content:
      "Para dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail contato@gioiaeassociados.com.br.",
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="container mx-auto px-6 py-16 md:px-12 lg:px-24 lg:py-20">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Documento Institucional</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl">Política de Privacidade</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-600">
            Esta política descreve, de forma objetiva, como os dados pessoais podem ser tratados nos canais da Gioia e
            Associados Advocacia.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-14 md:px-12 lg:px-24 lg:py-16">
        <div className="max-w-4xl space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="border-b border-stone-200 pb-8 last:border-b-0 last:pb-0">
              <h2 className="font-serif text-2xl">{section.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
