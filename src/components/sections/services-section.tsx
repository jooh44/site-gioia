"use client"

import { useState, useCallback, useEffect } from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { Check, Plus, X } from "lucide-react"
import { serviceGroups, type ServiceGroup } from "@/config/services"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"

const MAX_VISIBLE_ITEMS = 6

/* ─── Shared: conteúdo das subáreas (tabs ou direto) ─── */

function SubAreaContent({ group }: { group: ServiceGroup }) {
  const hasTabs = group.children.length > 1

  if (!hasTabs) {
    // Subárea única — sem tabs
    const child = group.children[0]
    return (
      <div>
        <ItemList items={child.items} accent={group.accent} />
      </div>
    )
  }

  return (
    <TabsPrimitive.Root defaultValue={group.children[0].id} className="w-full">
      <TabsPrimitive.List className="flex border-b border-stone-200 mb-6 gap-0">
        {group.children.map((child) => (
          <TabsPrimitive.Trigger
            key={child.id}
            value={child.id}
            className={cn(
              "px-4 py-2.5 text-xs font-bold uppercase tracking-[0.15em] transition-colors cursor-pointer",
              "text-stone-400 hover:text-stone-600",
              "border-b-2 border-transparent",
              "data-[state=active]:text-stone-900 data-[state=active]:border-primary"
            )}
          >
            {child.title}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {group.children.map((child) => (
        <TabsPrimitive.Content key={child.id} value={child.id}>
          <ItemList items={child.items} accent={group.accent} />
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  )
}

function ItemList({ items, accent }: { items: string[]; accent: "primary" | "secondary" }) {
  const visible = items.slice(0, MAX_VISIBLE_ITEMS)
  const hiddenCount = items.length - MAX_VISIBLE_ITEMS

  return (
    <div>
      <ul className="space-y-2.5">
        {visible.map((item) => (
          <li key={item} className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed">
            <Check
              className={cn(
                "w-3.5 h-3.5 mt-0.5 shrink-0",
                accent === "primary" ? "text-primary" : "text-secondary"
              )}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {hiddenCount > 0 && (
        <p className="text-xs text-stone-400 mt-3 pl-6">
          + {hiddenCount} {hiddenCount === 1 ? "serviço" : "serviços"}
        </p>
      )}
    </div>
  )
}

function CtaButton({ accent: _accent }: { accent: "primary" | "secondary" }) {
  return (
    <a
      href={siteConfig.links.whatsapp}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center h-12 px-8 text-xs uppercase tracking-[0.2em] font-bold transition-all",
        "bg-secondary text-secondary-foreground shadow-lg shadow-black/10",
        "hover:bg-[#e1c483] hover:text-primary hover:shadow-[0_0_34px_rgba(209,175,102,0.28)]"
      )}
    >
      Falar com especialista
      <WhatsAppIcon className="ml-2 size-[1.05rem] opacity-80" />
    </a>
  )
}

/* ─── Desktop: 2 colunas (triggers esq + conteúdo dir) ─── */

function DesktopServices() {
  const [activeId, setActiveId] = useState(serviceGroups[0].id)
  const activeGroup = serviceGroups.find((g) => g.id === activeId)!

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "")
      if (serviceGroups.some((group) => group.id === hash)) {
        setActiveId(hash)
      }
    }

    syncFromHash()
    window.addEventListener("hashchange", syncFromHash)

    return () => window.removeEventListener("hashchange", syncFromHash)
  }, [])

  return (
    <div className="hidden lg:block border-t border-stone-200">
      <div className="container px-6 md:px-12 lg:px-24 mx-auto">
        <div className="grid lg:grid-cols-[minmax(320px,1.7fr)_minmax(0,4fr)] border-x border-stone-200">
          {/* Coluna esquerda — triggers */}
          <div className="border-r border-stone-200">
            {serviceGroups.map((group, index) => {
              const isActive = group.id === activeId
              const num = String(index + 1).padStart(2, "0")
              const totalItems = group.children.reduce((sum, c) => sum + c.items.length, 0)

              return (
                <button
                  key={group.id}
                  id={group.id}
                  onClick={() => setActiveId(group.id)}
                  className={cn(
                    "w-full scroll-mt-20 text-left px-8 py-5 border-b border-stone-200 transition-colors cursor-pointer",
                    "grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-x-3",
                    isActive
                      ? "bg-primary text-white"
                      : "bg-white text-stone-700 hover:bg-stone-50"
                  )}
                >
                  <span className={cn(
                    "text-xs font-bold tracking-wider",
                    isActive ? "text-white/40" : "text-stone-300"
                  )}>
                    {num}
                  </span>
                  <div className="min-w-0">
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 border mr-3",
                      isActive
                        ? "border-white/20 text-white/70"
                        : "border-stone-200 text-stone-400"
                    )}>
                      {group.navLabel}
                    </span>
                    <span className={cn(
                      "font-serif text-base",
                      isActive ? "text-white" : "text-stone-900"
                    )}>
                      {group.title}
                    </span>
                    <span className={cn(
                      "block text-[11px] mt-1",
                      isActive ? "text-white/50" : "text-stone-400"
                    )}>
                      {group.children.length} {group.children.length === 1 ? "subárea" : "subáreas"} · {totalItems} serviços
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Coluna direita — conteúdo ativo */}
          <div className="p-10 xl:p-14" key={activeId}>
            <p className="text-stone-500 text-base leading-relaxed max-w-2xl mb-8">
              {activeGroup.description}
            </p>

            <SubAreaContent group={activeGroup} />

            <div className="mt-8">
              <CtaButton accent={activeGroup.accent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Mobile: accordion com tabs dentro ─── */

function MobileServices() {
  const handleValueChange = useCallback((value: string) => {
    if (!value) return
    // Pequeno delay para a animação do accordion abrir
    setTimeout(() => {
      const el = document.getElementById(value)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 150)
  }, [])

  return (
    <div className="lg:hidden border-t border-stone-200">
      <div className="container px-6 md:px-12 lg:px-24 mx-auto border-x border-stone-200">
        <AccordionPrimitive.Root
          type="single"
          collapsible
          defaultValue="saude"
          className="w-full"
          onValueChange={handleValueChange}
        >
          {serviceGroups.map((group, index) => {
            const totalItems = group.children.reduce((sum, c) => sum + c.items.length, 0)
            const num = String(index + 1).padStart(2, "0")

            return (
              <AccordionPrimitive.Item
                key={group.id}
                value={group.id}
                id={group.id}
                className="scroll-mt-20 border-b border-stone-200 group"
              >
                {/* Trigger */}
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex w-full items-center gap-3 px-6 py-5 text-left transition-colors cursor-pointer",
                      "hover:bg-stone-50",
                      "data-[state=open]:bg-primary data-[state=open]:text-white data-[state=open]:hover:bg-primary"
                    )}
                  >
                    <span className="text-xs font-bold tracking-wider text-stone-300 shrink-0 hidden sm:block group-[[data-state=open]]:text-white/40">
                      {num}
                    </span>

                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-0.5 shrink-0",
                      "border border-stone-200 text-stone-400",
                      "group-[[data-state=open]]:border-white/20 group-[[data-state=open]]:text-white/70"
                    )}>
                      {group.navLabel}
                    </span>

                    <span className="font-serif text-base text-stone-900 group-[[data-state=open]]:text-white flex-1 min-w-0 truncate">
                      {group.title}
                    </span>

                    <span className="text-[11px] text-stone-400 group-[[data-state=open]]:text-white/60 shrink-0 hidden sm:block whitespace-nowrap">
                      {totalItems} serv.
                    </span>

                    <span className="shrink-0 w-7 h-7 flex items-center justify-center border border-stone-200 group-[[data-state=open]]:border-white/20 transition-colors">
                      <Plus className="w-3.5 h-3.5 text-stone-400 group-[[data-state=open]]:hidden" />
                      <X className="w-3.5 h-3.5 text-white hidden group-[[data-state=open]]:block" />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>

                {/* Content */}
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="border-t border-stone-200 px-6 py-8">
                    <p className="text-stone-500 text-sm leading-relaxed mb-6">
                      {group.description}
                    </p>

                    <SubAreaContent group={group} />

                    <div className="mt-8">
                      <CtaButton accent={group.accent} />
                    </div>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            )
          })}
        </AccordionPrimitive.Root>
      </div>
    </div>
  )
}

/* ─── Seção Principal ─── */

export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-white border-b border-stone-200">

      {/* Header */}
      <div className="border-b border-stone-200">
        <div className="container px-6 md:px-12 lg:px-24 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,1.7fr)_minmax(0,4fr)] md:grid-cols-2">
            <div className="px-6 py-10 md:py-14 md:pr-14 md:pl-8 lg:border-r border-stone-200">
              <span className="text-xs font-bold text-secondary uppercase tracking-[0.25em] block mb-6">
                Áreas de Atuação
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                Especialização <br />que Gera <span className="text-primary">Resultados.</span>
              </h2>
            </div>
            <div className="px-6 py-10 md:p-14 flex flex-col justify-center border-t md:border-t-0 border-stone-200">
              <p className="text-stone-500 font-sans text-lg leading-relaxed">
                Nove áreas de atuação, um único compromisso: restaurar direitos e devolver
                a tranquilidade de quem mais precisa. Atendimento humanizado, estratégia implacável.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: 2 colunas */}
      <DesktopServices />

      {/* Mobile: accordion + tabs */}
      <MobileServices />

    </section>
  )
}
