import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check, MoveRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { serviceGroups } from "@/config/services"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Propostas Visuais para Areas de Atuacao",
  description:
    "Exploracao visual com seis caminhos de design para a secao de areas de atuacao da Gioia e Associados.",
}

const proposalSummaries = [
  {
    id: "capitulos",
    label: "Proposta A",
    name: "Capitulos Editoriais",
    description:
      "Transforma cada macroarea em um capitulo de revista: numeracao grande, alternancia de atmosfera e leitura mais cerimonial.",
    mood: "Mais institucional, sofisticada e autoral.",
    author: "Codex",
  },
  {
    id: "diretorio",
    label: "Proposta B",
    name: "Diretorio Curado",
    description:
      "Parte de um indice premium e organiza o excesso de conteudo como curadoria, nao como repeticao de blocos.",
    mood: "Mais clara, navegavel e estrategica.",
    author: "Codex",
  },
  {
    id: "atlas",
    label: "Proposta C",
    name: "Atlas Premium",
    description:
      "Assume uma linguagem mais contemporanea e cenografica, com mosaicos, contrastes de profundidade e cartoes com presenca.",
    mood: "Mais impactante, comercial e memoravel.",
    author: "Codex",
  },
  {
    id: "accordion",
    label: "Proposta D",
    name: "Acordeão Elegante",
    description:
      "Progressive disclosure com accordion: todas as areas visiveis como index, detalhes revelados sob demanda. Controle total do usuario.",
    mood: "Limpa, respeitosa com o tempo, navegacao precisa.",
    author: "Opus",
  },
  {
    id: "tabs",
    label: "Proposta E",
    name: "Painel de Especialidades",
    description:
      "Tabs horizontais com transicao suave. Apenas uma macroarea por vez — foco total sem scroll infinito.",
    mood: "Focada, moderna, sem fadiga visual.",
    author: "Opus",
  },
  {
    id: "timeline",
    label: "Proposta F",
    name: "Trilha de Expertise",
    description:
      "Linha do tempo vertical com waypoints. Cada area e uma parada na trilha, revelando conteudo conforme o scroll.",
    mood: "Narrativa, premium, progressiva.",
    author: "Opus",
  },
]

export default function PropostasServicosPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-stone-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.24),rgba(0,0,0,0.05))]" />
        <div
          className="absolute inset-y-0 right-0 w-[42%] opacity-20 mix-blend-screen"
          style={{ backgroundImage: "url('/brand-burgundy-leather-flat.png')", backgroundSize: "cover" }}
        />

        <div className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-12 px-6 py-20 md:px-10 lg:px-20 lg:py-24">
          <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl space-y-6">
              <span className="inline-flex w-fit items-center gap-3 border border-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary">
                Exploracao Visual
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Areas de Atuacao
              </span>
              <div className="space-y-5">
                <h1 className="max-w-5xl font-serif text-4xl leading-none text-white sm:text-5xl lg:text-7xl">
                  Seis caminhos para a pagina parecer
                  <span className="block text-secondary">curada, cara e intencional.</span>
                </h1>
                <p className="max-w-3xl text-base leading-relaxed text-stone-200 md:text-lg">
                  Tres propostas originais do Codex + tres novas direcoes do Opus focadas em <strong className="text-white">progressive disclosure</strong> —
                  mostrar tudo sem cansar, usando interacao para revelar profundidade sob demanda.
                </p>
              </div>
            </div>

            <div className="grid gap-3 text-sm text-stone-200 md:grid-cols-3 lg:max-w-[640px]">
              <div className="border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[0.24em] text-secondary">Meta</p>
                <p className="mt-2 text-sm leading-relaxed">9 areas em 1 pagina sem fadiga visual.</p>
              </div>
              <div className="border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[0.24em] text-secondary">Problema</p>
                <p className="mt-2 text-sm leading-relaxed">Propostas A-C despejam tudo aberto. Opus resolve com interacao.</p>
              </div>
              <div className="border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[0.24em] text-secondary">Foco</p>
                <p className="mt-2 text-sm leading-relaxed">Luxo discreto + controle do usuario sobre profundidade.</p>
              </div>
            </div>
          </div>

          {/* Summary cards — 2 rows: Codex + Opus */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-stone-400">Propostas do Codex</p>
            <div className="grid gap-4 lg:grid-cols-3">
              {proposalSummaries.filter(p => p.author === "Codex").map((proposal) => (
                <a
                  key={proposal.id}
                  href={`#${proposal.id}`}
                  className="group border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-stone-400">{proposal.label}</p>
                      <h2 className="font-serif text-3xl leading-tight text-white">{proposal.name}</h2>
                      <p className="max-w-md text-sm leading-relaxed text-stone-300">{proposal.description}</p>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-stone-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="mt-6 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.22em] text-stone-400">
                    {proposal.mood}
                  </p>
                </a>
              ))}
            </div>

            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.24em] text-secondary">Novas propostas — Opus</p>
            <div className="grid gap-4 lg:grid-cols-3">
              {proposalSummaries.filter(p => p.author === "Opus").map((proposal) => (
                <a
                  key={proposal.id}
                  href={`#${proposal.id}`}
                  className="group border border-secondary/30 bg-secondary/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-secondary">{proposal.label}</p>
                      <h2 className="font-serif text-3xl leading-tight text-white">{proposal.name}</h2>
                      <p className="max-w-md text-sm leading-relaxed text-stone-200">{proposal.description}</p>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-secondary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="mt-6 border-t border-secondary/20 pt-4 text-xs uppercase tracking-[0.22em] text-stone-300">
                    {proposal.mood}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky nav */}
      <section className="sticky top-0 z-40 border-b border-stone-200 bg-[#f8f5ef]/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[1600px] items-center gap-6 overflow-x-auto px-6 py-3 md:px-10 lg:px-20">
          <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.24em] text-primary">Ir para</p>
          <div className="flex gap-2">
            {proposalSummaries.map((proposal) => (
              <Button
                key={proposal.id}
                asChild
                variant="outline"
                className={`h-9 shrink-0 rounded-none border-primary/15 bg-white px-4 text-[10px] font-bold uppercase tracking-[0.22em] text-primary hover:bg-primary hover:text-white ${
                  proposal.author === "Opus" ? "border-secondary/30" : ""
                }`}
              >
                <a href={`#${proposal.id}`}>
                  {proposal.label}: {proposal.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Codex proposals */}
      <ProposalEditorial />
      <ProposalDirectory />
      <ProposalAtlas />

      {/* Opus proposals */}
      <ProposalAccordion />
      <ProposalTabs />
      <ProposalTimeline />
    </main>
  )
}

/* ═══════════════════════════════════════════
   CODEX PROPOSALS (A, B, C) — Original
   ═══════════════════════════════════════════ */

function ProposalEditorial() {
  return (
    <section id="capitulos" className="border-b border-stone-200 bg-[#f3efe8] scroll-mt-16">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-20 md:px-10 lg:px-20 lg:py-24">
        <div className="mb-14 grid gap-8 border-b border-stone-300/80 pb-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary">Proposta A — Codex</p>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
              Capítulos Editoriais para transformar lista em narrativa.
            </h2>
          </div>
          <div className="space-y-4 pt-1 text-stone-600">
            <p className="text-lg leading-relaxed">
              Aqui cada macroarea parece uma abertura de capitulo. O ganho esta em dar mais cerimonia aos titulos e
              reduzir a sensacao de blocos identicos.
            </p>
            <div className="flex flex-wrap gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
              <span className="border border-stone-300 bg-white px-3 py-2">Numero gigante</span>
              <span className="border border-stone-300 bg-white px-3 py-2">Alternancia claro/vinho</span>
              <span className="border border-stone-300 bg-white px-3 py-2">Leitura lenta e nobre</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {serviceGroups.map((group, index) => {
            const isDark = index % 2 === 1

            return (
              <article
                key={group.id}
                className={`grid overflow-hidden border ${
                  isDark ? "border-white/10 bg-primary text-white" : "border-stone-300 bg-[#fbf9f4] text-stone-900"
                } lg:grid-cols-[320px_1fr]`}
              >
                <div className={`relative flex flex-col justify-between gap-16 p-8 md:p-10 ${isDark ? "border-b border-white/10 lg:border-b-0 lg:border-r lg:border-r-white/10" : "border-b border-stone-300 lg:border-b-0 lg:border-r"}`}>
                  <div>
                    <p className={`text-[11px] font-bold uppercase tracking-[0.25em] ${isDark ? "text-secondary" : "text-primary"}`}>
                      {group.navLabel}
                    </p>
                    <div className={`mt-6 font-serif text-7xl leading-none ${isDark ? "text-white/15" : "text-primary/12"}`}>
                      0{index + 1}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-serif text-3xl leading-tight md:text-4xl">{group.title}</h3>
                    <p className={`max-w-sm text-sm leading-relaxed md:text-base ${isDark ? "text-stone-200" : "text-stone-600"}`}>
                      {group.description}
                    </p>
                    <Button
                      asChild
                      className={`mt-3 h-12 rounded-none px-6 text-[11px] font-bold uppercase tracking-[0.22em] ${
                        isDark
                          ? "bg-secondary text-secondary-foreground hover:bg-white hover:text-primary"
                          : "bg-primary text-white hover:bg-stone-900"
                      }`}
                      >
                      <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                        Falar com a equipe
                        <WhatsAppIcon className="ml-2 size-[1.05rem] opacity-80" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-px bg-black/10 lg:grid-cols-2">
                  {group.children.map((child) => (
                    <div key={child.id} className={`${isDark ? "bg-[#65090b]" : "bg-white"} p-8 md:p-10`}>
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <h4 className={`max-w-[18ch] text-[11px] font-bold uppercase tracking-[0.24em] ${isDark ? "text-secondary" : "text-stone-500"}`}>
                          {child.title}
                        </h4>
                        <div className={`h-px flex-1 ${isDark ? "bg-white/10" : "bg-stone-200"}`} />
                      </div>
                      <ul className="space-y-3">
                        {child.items.slice(0, 6).map((item) => (
                          <li
                            key={item}
                            className={`flex items-start gap-3 text-sm leading-relaxed ${isDark ? "text-stone-100" : "text-stone-700"}`}
                          >
                            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${isDark ? "text-secondary" : "text-primary"}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {child.items.length > 6 ? (
                        <p className={`mt-5 text-[11px] uppercase tracking-[0.24em] ${isDark ? "text-white/45" : "text-stone-400"}`}>
                          + {child.items.length - 6} itens complementares
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProposalDirectory() {
  return (
    <section id="diretorio" className="border-b border-stone-200 bg-white scroll-mt-16">
      <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-6 py-20 md:px-10 lg:grid-cols-[320px_1fr] lg:px-20 lg:py-24">
        <aside className="lg:sticky lg:top-20 lg:h-fit">
          <div className="border border-stone-200 bg-[#faf7f1] p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary">Proposta B — Codex</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-stone-900">Diretorio Curado</h2>
            <p className="mt-5 text-sm leading-relaxed text-stone-600">
              Em vez de insistir que todas as areas merecem o mesmo peso visual, essa direcao organiza a leitura como
              um indice premium com destaques e expansao progressiva.
            </p>

            <div className="mt-8 space-y-2 border-t border-stone-200 pt-6">
              {serviceGroups.map((group, index) => (
                <a
                  key={group.id}
                  href={`#diretorio-${group.id}`}
                  className="group flex items-center justify-between border-b border-stone-200 py-3 text-sm text-stone-700 transition-colors hover:text-primary"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-serif text-xl text-stone-400 group-hover:text-primary">0{index + 1}</span>
                    <span>{group.navLabel}</span>
                  </span>
                  <MoveRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </a>
              ))}
            </div>

            <div className="mt-8 border border-primary/10 bg-primary px-5 py-5 text-white">
              <p className="text-[10px] uppercase tracking-[0.24em] text-secondary">Quando escolher</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-200">
                Se a prioridade for parecer organizado, premium e facil de navegar sem perder completude.
              </p>
            </div>
          </div>
        </aside>

        <div className="space-y-8">
          {serviceGroups.map((group, index) => (
            <article
              key={group.id}
              id={`diretorio-${group.id}`}
              className="overflow-hidden border border-stone-200 bg-[#fcfbf7] scroll-mt-16"
            >
              <div className="grid gap-px bg-stone-200 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="bg-white p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary">0{index + 1}</span>
                    <span
                      className={`inline-flex border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] ${
                        group.accent === "primary"
                          ? "border-primary/15 bg-primary/5 text-primary"
                          : "border-secondary/30 bg-secondary/10 text-stone-800"
                      }`}
                    >
                      {group.navLabel}
                    </span>
                  </div>

                  <h3 className="mt-6 max-w-3xl font-serif text-3xl leading-tight text-stone-900 md:text-5xl">
                    {group.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600">{group.description}</p>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {group.children.map((child) => (
                      <div key={child.id} className="border border-stone-200 bg-[#faf8f3] p-6">
                        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-stone-500">{child.title}</p>
                        <ul className="mt-5 space-y-3">
                          {child.items.slice(0, 4).map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-700">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        {child.items.length > 4 ? (
                          <p className="mt-5 text-[11px] uppercase tracking-[0.24em] text-primary">
                            + explorar mais {child.items.length - 4} frentes
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between bg-[#f5efe3] p-8 md:p-10">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-stone-500">Leitura recomendada</p>
                    <div className="mt-5 space-y-4">
                      <div className="border-b border-stone-300 pb-4">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-stone-400">Tom visual</p>
                        <p className="mt-2 font-serif text-2xl text-stone-900">Luxo discreto, sem excesso cenografico.</p>
                      </div>
                      <div className="border-b border-stone-300 pb-4">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-stone-400">Vantagem</p>
                        <p className="mt-2 text-sm leading-relaxed text-stone-700">
                          Facilita a leitura por bloco e deixa o conteudo denso mais elegante.
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-stone-400">Detalhe premium</p>
                        <p className="mt-2 text-sm leading-relaxed text-stone-700">
                          Funciona muito bem com fotos em preto e branco ou retratos institucionais no lugar deste painel.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-8 h-12 rounded-none border-primary/15 bg-transparent px-6 text-[11px] font-bold uppercase tracking-[0.22em] text-primary hover:bg-primary hover:text-white"
                  >
                    <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                      Validar direcao
                      <WhatsAppIcon className="ml-2 size-[1.05rem] opacity-80" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProposalAtlas() {
  return (
    <section id="atlas" className="scroll-mt-16 border-b border-stone-200 bg-[#efe7dc]">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-20 md:px-10 lg:px-20 lg:py-24">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
          <div className="space-y-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary">Proposta C — Codex</p>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
              Atlas Premium com mais presenca comercial e cenografia.
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-stone-600">
              Essa opcao assume que a secao precisa impressionar mais rapido. O conteudo continua juridico, mas a
              apresentacao ganha contraste forte, mosaicos e superficies mais nobres.
            </p>
          </div>

          <div className="border border-primary/10 bg-primary p-8 text-white">
            <p className="text-[10px] uppercase tracking-[0.24em] text-secondary">Melhor uso</p>
            <p className="mt-4 text-sm leading-relaxed text-stone-200">
              Quando o objetivo for parecer um escritorio de alto valor desde o scroll medio da pagina.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="overflow-hidden border border-primary/10 bg-primary text-white lg:col-span-7">
            <div className="grid h-full gap-px bg-white/10 md:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-secondary">Visao geral</p>
                  <h3 className="mt-5 max-w-xl font-serif text-4xl leading-tight md:text-5xl">
                    Todas as areas aparecem, mas com atmosfera de flagship.
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-200">
                    O fundo escuro ganha profundidade, o ouro entra como ritmo e as areas viram paineis de expertise,
                    nao apenas cards em sequencia.
                  </p>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  <div className="border border-white/10 bg-white/5 px-5 py-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-secondary">Forca</p>
                    <p className="mt-2 text-sm text-stone-200">Presenca de marca mais forte no meio da pagina.</p>
                  </div>
                  <div className="border border-white/10 bg-white/5 px-5 py-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-secondary">Cuidado</p>
                    <p className="mt-2 text-sm text-stone-200">Exige boa curadoria de foto para nao parecer pesado.</p>
                  </div>
                </div>
              </div>

              <div
                className="min-h-[280px] bg-[#6c0c11] p-8 md:p-10"
                style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.32)), url('/brand-burgundy-leather-flat.png')", backgroundSize: "cover" }}
              >
                <div className="flex h-full flex-col justify-between border border-white/10 p-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-secondary">Assinatura</p>
                    <p className="mt-4 font-serif text-3xl leading-tight text-white">
                      Um escritorio com varias frentes sem parecer fragmentado.
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-200">
                    O ouro deixa de ser so acento e passa a costurar o sistema visual.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:col-span-5">
            <div className="border border-stone-300 bg-[#fbf8f2] p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">Mosaico de macroareas</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {serviceGroups.map((group, index) => (
                  <div
                    key={group.id}
                    className={`border p-4 ${
                      group.accent === "primary"
                        ? "border-primary/15 bg-primary/5"
                        : "border-secondary/30 bg-secondary/10"
                    }`}
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500">0{index + 1}</p>
                    <p className="mt-2 font-serif text-2xl text-stone-900">{group.navLabel}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {serviceGroups.slice(0, 4).map((group) => (
                <div
                  key={group.id}
                  className={`flex min-h-[240px] flex-col justify-between border p-6 ${
                    group.accent === "primary"
                      ? "border-primary/15 bg-white"
                      : "border-stone-300 bg-[#f6f0e5]"
                  }`}
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500">{group.title}</p>
                    <ul className="mt-5 space-y-3">
                      {group.children[0].items.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-700">
                          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${group.accent === "primary" ? "bg-primary" : "bg-secondary"}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4 text-[11px] uppercase tracking-[0.22em] text-stone-500">
                    <span>Card de expertise</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-stone-300 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-sm leading-relaxed text-stone-600">
            Se essa direcao vencer, eu recomendo aplicar apenas em duas ou tres faixas da home para nao sobrecarregar
            a narrativa inteira.
          </p>
          <Button asChild className="h-12 rounded-none bg-primary px-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white hover:bg-stone-900">
            <Link href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
              Escolher conceito
              <WhatsAppIcon className="ml-2 size-[1.05rem] opacity-80" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   OPUS PROPOSALS (D, E, F) — New Directions
   ═══════════════════════════════════════════ */

function ProposalAccordion() {
  return (
    <section id="accordion" className="scroll-mt-16 border-b border-stone-200 bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-20 md:px-10 lg:px-20 lg:py-24">
        {/* Header */}
        <div className="mb-14 grid gap-8 border-b border-stone-300/80 pb-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-secondary">Proposta D — Opus</p>
              <span className="border border-secondary/30 bg-secondary/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-secondary">Nova</span>
            </div>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
              Acordeão Elegante — revele profundidade sob demanda.
            </h2>
          </div>
          <div className="space-y-4 pt-1 text-stone-600">
            <p className="text-lg leading-relaxed">
              Todas as 5 macroareas visiveis como index compacto. O usuario clica para expandir detalhes.
              Pagina curta por padrao, profunda quando necessario.
            </p>
            <div className="flex flex-wrap gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
              <span className="border border-secondary/30 bg-secondary/10 px-3 py-2">Progressive disclosure</span>
              <span className="border border-secondary/30 bg-secondary/10 px-3 py-2">Controle do usuario</span>
              <span className="border border-secondary/30 bg-secondary/10 px-3 py-2">Zero fadiga</span>
            </div>
          </div>
        </div>

        {/* Accordion Preview */}
        <div className="space-y-0">
          {serviceGroups.map((group, index) => {
            const isExpanded = index === 0 // First one open as demo

            return (
              <article
                key={group.id}
                className="border border-b-0 last:border-b border-stone-200"
              >
                {/* Collapsed header — always visible */}
                <div className={`flex cursor-pointer items-center gap-6 p-6 md:p-8 transition-colors ${
                  isExpanded ? "bg-primary text-white" : "bg-[#faf8f3] hover:bg-[#f5f0e6]"
                }`}>
                  <span className={`font-serif text-3xl leading-none md:text-4xl ${
                    isExpanded ? "text-white/20" : "text-primary/15"
                  }`}>
                    0{index + 1}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-bold uppercase tracking-[0.24em] ${
                        isExpanded ? "text-secondary" : "text-primary"
                      }`}>
                        {group.navLabel}
                      </span>
                      <div className={`h-px flex-1 max-w-24 ${isExpanded ? "bg-white/15" : "bg-stone-300"}`} />
                    </div>
                    <h3 className={`mt-2 font-serif text-2xl leading-tight md:text-3xl ${
                      isExpanded ? "text-white" : "text-stone-900"
                    }`}>
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className={`hidden text-[11px] uppercase tracking-[0.2em] md:block ${
                      isExpanded ? "text-stone-300" : "text-stone-400"
                    }`}>
                      {group.children.length} {group.children.length === 1 ? "subarea" : "subareas"} · {group.children.reduce((acc, c) => acc + c.items.length, 0)} servicos
                    </span>
                    <div className={`flex h-10 w-10 items-center justify-center border transition-transform ${
                      isExpanded
                        ? "rotate-45 border-white/20 bg-white/10"
                        : "border-stone-300 bg-white"
                    }`}>
                      <span className={`text-lg leading-none ${isExpanded ? "text-white" : "text-primary"}`}>+</span>
                    </div>
                  </div>
                </div>

                {/* Expanded content — shown for first item as demo */}
                {isExpanded && (
                  <div className="border-t border-stone-200 bg-white">
                    <div className="p-6 md:p-8">
                      <p className="mb-6 max-w-3xl text-base leading-relaxed text-stone-600">
                        {group.description}
                      </p>

                      <div className="grid gap-6 md:grid-cols-2">
                        {group.children.map((child) => (
                          <div key={child.id} className="border border-stone-200 bg-[#faf8f3] p-6">
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
                              {child.title}
                            </h4>
                            <ul className="mt-5 space-y-3">
                              {child.items.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-700">
                                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-col gap-4 border-t border-stone-200 pt-6 md:flex-row md:items-center md:justify-between">
                        <p className="text-sm text-stone-500">
                          Precisa de orientacao nessa area?
                        </p>
                        <Button
                          asChild
                          className="h-11 rounded-none bg-primary px-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white hover:bg-stone-900"
                        >
                          <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                            Falar com especialista
                            <WhatsAppIcon className="ml-2 size-[1.05rem] opacity-80" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        {/* Annotation */}
        <div className="mt-10 border border-secondary/20 bg-secondary/5 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-secondary/30 bg-secondary/10">
              <span className="text-xs font-bold text-secondary">i</span>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-secondary">Por que essa abordagem</p>
              <p className="max-w-3xl text-sm leading-relaxed text-stone-600">
                Nenhuma das propostas A-C usa progressive disclosure. Todas despejam 50+ bullets na tela de uma vez.
                O accordion mantém a visão geral compacta (5 linhas) e só abre profundidade sob demanda.
                A pagina carrega leve e o usuario controla quanto quer ver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProposalTabs() {
  return (
    <section id="tabs" className="scroll-mt-16 border-b border-stone-200 bg-[#f3efe8]">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-20 md:px-10 lg:px-20 lg:py-24">
        {/* Header */}
        <div className="mb-14 grid gap-8 border-b border-stone-300/80 pb-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-secondary">Proposta E — Opus</p>
              <span className="border border-secondary/30 bg-secondary/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-secondary">Nova</span>
            </div>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
              Painel de Especialidades — uma area por vez, foco total.
            </h2>
          </div>
          <div className="space-y-4 pt-1 text-stone-600">
            <p className="text-lg leading-relaxed">
              Tabs horizontais no topo. Clicar em cada aba revela apenas aquela macroarea.
              Sem scroll infinito, sem comparacao visual entre blocos — atencao plena em cada especialidade.
            </p>
            <div className="flex flex-wrap gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
              <span className="border border-secondary/30 bg-secondary/10 px-3 py-2">Foco singular</span>
              <span className="border border-secondary/30 bg-secondary/10 px-3 py-2">Zero scroll</span>
              <span className="border border-secondary/30 bg-secondary/10 px-3 py-2">Navegacao rapida</span>
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="mb-0 flex gap-0 overflow-x-auto border-b border-stone-300">
          {serviceGroups.map((group, index) => {
            const isActive = index === 0
            return (
              <button
                key={group.id}
                className={`relative shrink-0 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-white text-stone-500 hover:bg-stone-100 hover:text-primary"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={`font-serif text-lg ${isActive ? "text-secondary" : "text-stone-400"}`}>0{index + 1}</span>
                  {group.navLabel}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary" />
                )}
              </button>
            )
          })}
        </div>

        {/* Active tab content — showing first group as demo */}
        {(() => {
          const group = serviceGroups[0]
          return (
            <div className="border border-t-0 border-stone-200 bg-white">
              <div className="grid gap-px bg-stone-200 lg:grid-cols-[1fr_400px]">
                {/* Main content */}
                <div className="bg-white p-8 md:p-10 lg:p-12">
                  <div className="mb-8 flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">{group.navLabel}</p>
                      <h3 className="mt-3 font-serif text-4xl leading-tight text-stone-900 md:text-5xl">{group.title}</h3>
                      <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600">{group.description}</p>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {group.children.map((child) => (
                      <div key={child.id}>
                        <h4 className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-stone-500">
                          {child.title}
                          <span className="h-px flex-1 bg-stone-200" />
                        </h4>
                        <ul className="mt-5 space-y-3">
                          {child.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-stone-700">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Side panel */}
                <div className="flex flex-col justify-between bg-primary p-8 text-white md:p-10">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-secondary">Especialistas</p>
                    <div className="mt-6 space-y-6">
                      <div className="border-b border-white/10 pb-6">
                        <p className="font-serif text-2xl text-white">Dra. Mariana Gioia</p>
                        <p className="mt-2 text-sm text-stone-300">OAB/SP 351.962 · Especialista em Direito Medico</p>
                      </div>
                      <div className="border-b border-white/10 pb-6">
                        <p className="font-serif text-2xl text-white">Dr. Fabio Dreger</p>
                        <p className="mt-2 text-sm text-stone-300">OAB/SP 336.451 · Especialista em Direito Medico</p>
                      </div>
                    </div>

                    <div className="mt-8 border border-white/10 bg-white/5 p-5">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-secondary">Destaque</p>
                      <p className="mt-3 font-serif text-xl leading-snug text-white">
                        Liminares para planos de saude obtidas em ate 24 horas.
                      </p>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="mt-8 h-12 rounded-none bg-secondary px-6 text-[11px] font-bold uppercase tracking-[0.22em] text-secondary-foreground hover:bg-white hover:text-primary"
                  >
                    <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                      Falar com especialista
                      <WhatsAppIcon className="ml-2 size-[1.05rem] opacity-80" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )
        })()}

        {/* Other tabs preview (collapsed) */}
        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {serviceGroups.slice(1).map((group, index) => (
            <div
              key={group.id}
              className="group cursor-pointer border border-stone-200 bg-white p-5 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <span className="font-serif text-xl text-stone-400">0{index + 2}</span>
              <h4 className="mt-2 font-serif text-xl text-stone-900 group-hover:text-primary">{group.title}</h4>
              <p className="mt-2 text-xs text-stone-500">
                {group.children.length} {group.children.length === 1 ? "subarea" : "subareas"} · {group.children.reduce((acc, c) => acc + c.items.length, 0)} servicos
              </p>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Ver detalhes <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Annotation */}
        <div className="mt-10 border border-secondary/20 bg-secondary/5 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-secondary/30 bg-secondary/10">
              <span className="text-xs font-bold text-secondary">i</span>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-secondary">Por que essa abordagem</p>
              <p className="max-w-3xl text-sm leading-relaxed text-stone-600">
                Tabs eliminam o scroll como mecanismo de navegacao. O usuario vê UMA area com foco total,
                depois navega lateralmente. O painel lateral permite contextualizar com advogados responsaveis e
                diferenciais especificos de cada area — algo que nenhuma proposta anterior explora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProposalTimeline() {
  return (
    <section id="timeline" className="scroll-mt-16 bg-[#f8f5ef]">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-20 md:px-10 lg:px-20 lg:py-24">
        {/* Header */}
        <div className="mb-14 grid gap-8 border-b border-stone-300/80 pb-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-secondary">Proposta F — Opus</p>
              <span className="border border-secondary/30 bg-secondary/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-secondary">Nova</span>
            </div>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
              Trilha de Expertise — cada area e uma parada na jornada.
            </h2>
          </div>
          <div className="space-y-4 pt-1 text-stone-600">
            <p className="text-lg leading-relaxed">
              Uma timeline vertical elegante. Cada macroarea e um waypoint na trilha do escritorio.
              Alternancia esquerda/direita cria ritmo visual natural. Itens abrem sob clique.
            </p>
            <div className="flex flex-wrap gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
              <span className="border border-secondary/30 bg-secondary/10 px-3 py-2">Narrativa visual</span>
              <span className="border border-secondary/30 bg-secondary/10 px-3 py-2">Ritmo alternado</span>
              <span className="border border-secondary/30 bg-secondary/10 px-3 py-2">Waypoints</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-stone-300 lg:left-1/2 lg:-translate-x-px" />

          <div className="space-y-12 lg:space-y-16">
            {serviceGroups.map((group, index) => {
              const isLeft = index % 2 === 0
              const isExpanded = index === 0

              return (
                <article key={group.id} className="relative">
                  {/* Waypoint dot */}
                  <div className={`absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center border-2 lg:left-1/2 ${
                    isExpanded
                      ? "border-secondary bg-primary"
                      : "border-stone-300 bg-white"
                  }`}>
                    <span className={`font-serif text-sm ${isExpanded ? "text-secondary" : "text-primary"}`}>
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content card */}
                  <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-48px)] ${
                    isLeft ? "lg:mr-auto lg:pr-0" : "lg:ml-auto lg:pl-0"
                  }`}>
                    <div className={`border transition-all ${
                      isExpanded
                        ? "border-primary/20 bg-white shadow-sm"
                        : "border-stone-200 bg-[#fcfbf7] hover:border-primary/15 hover:shadow-sm"
                    }`}>
                      {/* Card header */}
                      <div className="flex cursor-pointer items-center justify-between gap-4 p-6 md:p-8">
                        <div>
                          <div className="flex items-center gap-3">
                            <span className={`text-[10px] font-bold uppercase tracking-[0.24em] ${
                              isExpanded ? "text-secondary" : "text-primary"
                            }`}>
                              {group.navLabel}
                            </span>
                            {group.accent === "primary" && (
                              <span className="border border-primary/15 bg-primary/5 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-primary">
                                Destaque
                              </span>
                            )}
                          </div>
                          <h3 className="mt-2 font-serif text-2xl leading-tight text-stone-900 md:text-3xl">
                            {group.title}
                          </h3>
                          <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-600">
                            {group.description}
                          </p>
                        </div>
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-transform ${
                          isExpanded
                            ? "rotate-45 border-primary/20 bg-primary/5"
                            : "border-stone-300 bg-white"
                        }`}>
                          <span className="text-sm leading-none text-primary">+</span>
                        </div>
                      </div>

                      {/* Expanded detail — demo for first */}
                      {isExpanded && (
                        <div className="border-t border-stone-200 p-6 md:p-8">
                          <div className="grid gap-6 md:grid-cols-2">
                            {group.children.map((child) => (
                              <div key={child.id}>
                                <h4 className="text-[11px] font-bold uppercase tracking-[0.24em] text-stone-500">
                                  {child.title}
                                </h4>
                                <ul className="mt-4 space-y-2.5">
                                  {child.items.slice(0, 5).map((item) => (
                                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-700">
                                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                  {child.items.length > 5 && (
                                    <li className="text-[11px] uppercase tracking-[0.2em] text-primary">
                                      + {child.items.length - 5} servicos
                                    </li>
                                  )}
                                </ul>
                              </div>
                            ))}
                          </div>

                          <div className="mt-6 border-t border-stone-200 pt-6">
                            <Button
                              asChild
                              className="h-11 rounded-none bg-primary px-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white hover:bg-stone-900"
                            >
                              <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                                Falar com especialista
                                <WhatsAppIcon className="ml-2 size-[1.05rem] opacity-80" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Collapsed summary — for non-expanded */}
                      {!isExpanded && (
                        <div className="flex flex-wrap gap-2 border-t border-stone-200 px-6 py-4 md:px-8">
                          {group.children.map((child) => (
                            <span
                              key={child.id}
                              className="border border-stone-200 bg-stone-50 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-stone-500"
                            >
                              {child.title} · {child.items.length}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Connector line to dot — horizontal */}
                    <div className={`absolute top-6 hidden h-px bg-stone-300 lg:block ${
                      isLeft ? "right-[calc(50%-48px)] left-[calc(50%+24px)]" : "left-[calc(50%-48px)] right-[calc(50%+24px)]"
                    }`} style={{ top: "30px" }} />
                  </div>
                </article>
              )
            })}
          </div>

          {/* End marker */}
          <div className="absolute bottom-0 left-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center border border-secondary bg-secondary lg:left-1/2">
            <span className="text-xs font-bold text-secondary-foreground">G</span>
          </div>
        </div>

        {/* Annotation */}
        <div className="mt-16 border border-secondary/20 bg-secondary/5 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-secondary/30 bg-secondary/10">
              <span className="text-xs font-bold text-secondary">i</span>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-secondary">Por que essa abordagem</p>
              <p className="max-w-3xl text-sm leading-relaxed text-stone-600">
                A timeline cria uma narrativa visual de competencia — como se voce estivesse percorrendo o territorio
                de expertise do escritorio. A alternancia esquerda/direita quebra a monotonia sem precisar de
                alternancia de cor (claro/escuro). Combina bem com a identidade "quiet luxury" por ser sóbria
                mas visualmente sofisticada.
              </p>
            </div>
          </div>
        </div>

        {/* Final comparison */}
        <div className="mt-16 border-t border-stone-300 pt-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary">Resumo comparativo</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "A — Capítulos", pros: "Alternância visual forte", cons: "Tudo aberto, página longa, repetitivo" },
              { label: "B — Diretório", pros: "Sidebar navegável, organizado", cons: "Painel lateral desperdiça espaço com meta-texto" },
              { label: "C — Atlas", pros: "Layout assimétrico criativo", cons: "Incompleto (corta áreas), hierarquia confusa" },
              { label: "D — Acordeão", pros: "Compacto + profundo sob demanda", cons: "Menos impacto visual inicial" },
              { label: "E — Tabs", pros: "Foco total, sem scroll, painel contextual", cons: "Conteúdo oculto pode ser ignorado" },
              { label: "F — Timeline", pros: "Narrativa premium, ritmo elegante", cons: "Funciona melhor em desktop que mobile" },
            ].map((item) => (
              <div key={item.label} className="border border-stone-200 bg-white p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">{item.label}</p>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Força</p>
                    <p className="mt-1 text-sm text-stone-700">{item.pros}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Fragilidade</p>
                    <p className="mt-1 text-sm text-stone-700">{item.cons}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-sm leading-relaxed text-stone-600">
              Minha recomendacao: <strong className="text-stone-900">Proposta D (Acordeao)</strong> ou <strong className="text-stone-900">E (Tabs)</strong> como base,
              com elementos visuais da <strong className="text-stone-900">F (Timeline)</strong> para ritmo.
              O principio central e: <em>progressive disclosure</em> — o usuario decide a profundidade.
            </p>
            <Button asChild className="h-12 shrink-0 rounded-none bg-primary px-6 text-[11px] font-bold uppercase tracking-[0.22em] text-white hover:bg-stone-900">
              <Link href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                Discutir proposta
                <WhatsAppIcon className="ml-2 size-[1.05rem] opacity-80" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
