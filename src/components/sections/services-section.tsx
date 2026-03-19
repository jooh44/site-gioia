import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { serviceGroups } from "@/config/services"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-white border-b border-stone-200">

      {/* Cabeçalho Geral */}
      <div className="border-b border-stone-200">
        <div className="container px-6 md:px-12 lg:px-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-14 md:border-r border-stone-200">
              <span className="text-xs font-bold text-secondary uppercase tracking-[0.25em] block mb-6">
                Áreas de Atuação
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                Especialização <br />que Gera <span className="text-primary">Resultados.</span>
              </h2>
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center border-t md:border-t-0 border-stone-200">
              <p className="text-stone-500 font-sans text-lg leading-relaxed">
                Nove áreas de atuação, um único compromisso: restaurar direitos e devolver
                a tranquilidade de quem mais precisa. Atendimento humanizado, estratégia implacável.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grupos de Serviços */}
      {serviceGroups.map((group, index) => (
        <div
          key={group.id}
          id={group.id}
          className={`scroll-mt-20 border-b border-stone-200 ${index % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
        >
          <div className="container px-6 md:px-12 lg:px-24 mx-auto py-16 md:py-20">

            {/* Header do Grupo Pai */}
            <div className="mb-12 pb-10 border-b border-stone-200">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-[0.25em] block mb-4 ${
                      group.accent === "primary" ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {group.navLabel}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight mb-4">
                    {group.title}
                  </h3>
                  <p className="text-stone-500 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
                    {group.description}
                  </p>
                </div>
                <Button
                  asChild
                  className={`shrink-0 h-12 px-8 text-xs uppercase tracking-[0.2em] font-bold rounded-none shadow-none ${
                    group.accent === "primary"
                      ? "bg-primary text-white hover:bg-stone-900"
                      : "bg-secondary text-secondary-foreground hover:bg-stone-900 hover:text-white"
                  } transition-colors`}
                >
                  <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                    Consultar <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Grid de Filhos */}
            <div
              className={`grid grid-cols-1 gap-0 border border-stone-200 ${
                group.children.length === 1
                  ? "md:grid-cols-1"
                  : group.children.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {group.children.map((child, childIndex) => (
                <div
                  key={child.id}
                  className={`p-8 md:p-10 ${
                    childIndex < group.children.length - 1
                      ? "border-b md:border-b-0 md:border-r border-stone-200"
                      : ""
                  }`}
                >
                  <h4 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-6">
                    {child.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {child.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed">
                        <Check
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            group.accent === "primary" ? "text-primary" : "text-secondary"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>
      ))}

    </section>
  )
}
