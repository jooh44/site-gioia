import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso da Gioia e Associados Advocacia.",
}

const sections = [
  {
    title: "1. Finalidade do site",
    content:
      "Este site possui caráter institucional e informativo, com o objetivo de apresentar a atuação da Gioia e Associados Advocacia, seus canais de contato e conteúdos gerais sobre serviços jurídicos.",
  },
  {
    title: "2. Uso das informações",
    content:
      "O conteúdo disponibilizado não substitui consulta jurídica individualizada. Cada caso exige análise própria, de acordo com seus documentos, fatos e contexto específico.",
  },
  {
    title: "3. Propriedade intelectual",
    content:
      "Textos, marcas, elementos visuais e demais conteúdos publicados neste site não podem ser reproduzidos ou utilizados sem autorização prévia, salvo quando permitido por lei.",
  },
  {
    title: "4. Responsabilidades",
    content:
      "A Gioia e Associados busca manter as informações atualizadas, mas não garante que todo o conteúdo permaneça completo ou aplicável a todos os casos concretos em todos os momentos.",
  },
  {
    title: "5. Links e canais externos",
    content:
      "O site pode conter links para canais externos, como redes sociais e WhatsApp. O uso dessas plataformas também está sujeito às políticas e termos próprios de cada serviço.",
  },
  {
    title: "6. Contato",
    content:
      "Para informações adicionais, utilize os canais oficiais da Gioia e Associados Advocacia disponíveis neste site.",
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 bg-white">
        <div className="container mx-auto px-6 py-16 md:px-12 lg:px-24 lg:py-20">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Documento Institucional</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl">Termos de Uso</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-600">
            Estes termos regulam o uso institucional deste site e a consulta das informações disponibilizadas pela
            Gioia e Associados Advocacia.
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
