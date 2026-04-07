"use client"

import type { MouseEvent } from "react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { siteConfig } from "@/config/site"
import { serviceGroups } from "@/config/services"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef } from "react"

export function MinimalNavbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [navTheme, setNavTheme] = useState<"light" | "dark">("dark")
    const headerRef = useRef<HTMLElement | null>(null)

    const handleServiceNavigation = (event: MouseEvent<HTMLAnchorElement>, groupId: string) => {
        event.preventDefault()

        window.history.replaceState(null, "", `#${groupId}`)
        window.dispatchEvent(new HashChangeEvent("hashchange"))

        const servicesSection = document.getElementById("services")
        if (!servicesSection) return

        const offset = window.innerWidth >= 1024 ? 92 : 84
        const top = servicesSection.getBoundingClientRect().top + window.scrollY - offset

        window.scrollTo({
            top,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        const updateNavbarState = () => {
            setIsScrolled(window.scrollY > 10)

            const header = headerRef.current
            if (!header) return

            const sampleY = Math.max(12, Math.round(header.getBoundingClientRect().height / 2))
            const elements = document.elementsFromPoint(window.innerWidth / 2, sampleY)
            const themedSection = elements
                .find((element) => !header.contains(element))
                ?.closest<HTMLElement>("[data-nav-theme]")

            setNavTheme(themedSection?.dataset.navTheme === "light" ? "light" : "dark")
        }

        updateNavbarState()
        window.addEventListener("scroll", updateNavbarState, { passive: true })
        window.addEventListener("resize", updateNavbarState)
        window.addEventListener("hashchange", updateNavbarState)

        return () => {
            window.removeEventListener("scroll", updateNavbarState)
            window.removeEventListener("resize", updateNavbarState)
            window.removeEventListener("hashchange", updateNavbarState)
        }
    }, [])

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-12 md:py-3 transition-all duration-300 ${isScrolled
                ? "bg-transparent"
                : "bg-transparent border-transparent"
                }`}
        >
            {/* Logo */}
            <div className="flex items-center gap-12">
                <div className={`${isScrolled ? "block" : "hidden md:block"} pointer-events-auto hover:scale-105 transition-transform`}>
                    <a href="/" className="block">
                        <img
                            src="/simbolo-gioia.svg"
                            alt="Gioia e Associados - Início"
                            width={48}
                            height={48}
                            className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md"
                        />
                    </a>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-8 pointer-events-auto">

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {serviceGroups.map((group) => (
                        <a
                            key={group.id}
                            href={`#${group.id}`}
                            onClick={(event) => handleServiceNavigation(event, group.id)}
                            className={cn(
                                "text-sm font-medium uppercase tracking-[0.15em] transition-colors",
                                navTheme === "light"
                                    ? "text-stone-600 hover:text-primary"
                                    : "text-white/80 hover:text-white"
                            )}
                        >
                            {group.navLabel}
                        </a>
                    ))}

                    <span className={cn("w-[1px] h-4", navTheme === "light" ? "bg-stone-300/80" : "bg-white/20")} />

                    <a
                        href="#about"
                        className={cn(
                            "text-sm font-medium uppercase tracking-[0.15em] transition-colors",
                            navTheme === "light"
                                ? "text-stone-600 hover:text-primary"
                                : "text-white/80 hover:text-white"
                        )}
                    >
                        Sobre
                    </a>
                    <a
                        href="#faq"
                        className={cn(
                            "text-sm font-medium uppercase tracking-[0.15em] transition-colors",
                            navTheme === "light"
                                ? "text-stone-600 hover:text-primary"
                                : "text-white/80 hover:text-white"
                        )}
                    >
                        Dúvidas
                    </a>
                </nav>

                <div className={cn("hidden md:block w-[1px] h-6", navTheme === "light" ? "bg-stone-300/80" : "bg-white/20")} />

                {/* Desktop CTA */}
                <Button
                    asChild
                    variant="ghost"
                    className={cn(
                        "hidden md:inline-flex uppercase tracking-[0.2em] text-xs font-bold px-6 h-10 rounded-none transition-all",
                        navTheme === "light"
                            ? "text-primary border border-stone-300 hover:border-primary hover:bg-primary/5"
                            : "text-white border border-white/30 hover:border-white hover:bg-white/10"
                    )}
                >
                    <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                        Contato
                        <WhatsAppIcon className="ml-2 size-[1.05rem] opacity-80" />
                    </a>
                </Button>

                {/* Mobile Menu Trigger */}
                <Sheet>
                    <SheetTrigger asChild>
                        <button
                            className={cn(
                                "md:hidden w-12 h-12 flex items-center justify-center transition-all rounded-none outline-none border-none",
                                navTheme === "light"
                                    ? "text-primary hover:bg-primary/5"
                                    : "text-secondary hover:bg-white/10"
                            )}
                        >
                            <Menu size={32} className="shrink-0" strokeWidth={2.5} strokeLinecap="square" strokeLinejoin="miter" />
                            <span className="sr-only">Menu</span>
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[85vw] sm:w-[400px] h-screen bg-primary border-l border-white/10 text-white p-0 [&>button]:hidden flex flex-col z-[150]">
                        <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>

                        {/* Mobile Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                            <SheetClose asChild>
                                <a href="/">
                                    <img
                                        src="/simbolo-gioia.svg"
                                        alt="Gioia"
                                        width={48}
                                        height={48}
                                        className="w-10 h-10 drop-shadow-md"
                                    />
                                </a>
                            </SheetClose>
                            <SheetClose asChild>
                                <button className="text-secondary hover:bg-white/10 w-12 h-12 flex items-center justify-center transition-all rounded-none outline-none border-none">
                                    <X size={32} className="shrink-0" strokeWidth={2.5} strokeLinecap="square" strokeLinejoin="miter" />
                                    <span className="sr-only">Fechar</span>
                                </button>
                            </SheetClose>
                        </div>

                        <div className="flex flex-col h-full overflow-y-auto">

                            {/* Áreas de Atuação */}
                            <div className="flex flex-col px-6 py-6 border-b border-white/10">
                                <h3 className="text-secondary/80 text-xs font-bold uppercase tracking-[0.25em] mb-4">
                                    Áreas de Atuação
                                </h3>
                                {serviceGroups.map((group) => (
                                    <SheetClose asChild key={group.id}>
                                        <a
                                            href={`#${group.id}`}
                                            onClick={(event) => handleServiceNavigation(event, group.id)}
                                            className="flex items-center gap-3 py-3 border-b border-white/5 last:border-b-0 group"
                                        >
                                            <span
                                                className={`w-0.5 h-5 shrink-0 transition-colors ${group.accent === "primary" ? "bg-primary-foreground/30 group-hover:bg-primary-foreground" : "bg-secondary/40 group-hover:bg-secondary"}`}
                                            />
                                            <span className="font-serif text-2xl text-white/90 group-hover:text-white transition-colors leading-tight">
                                                {group.navLabel}
                                            </span>
                                        </a>
                                    </SheetClose>
                                ))}
                            </div>

                            {/* Links Secundários */}
                            <div className="flex flex-col">
                                <SheetClose asChild>
                                    <a href="#about" className="block px-6 py-4 text-xl font-sans font-light text-stone-200 hover:text-white hover:bg-white/5 transition-all border-b border-white/10">
                                        Sobre o Escritório
                                    </a>
                                </SheetClose>
                                <SheetClose asChild>
                                    <a href="#faq" className="block px-6 py-4 text-xl font-sans font-light text-stone-200 hover:text-white hover:bg-white/5 transition-all border-b border-white/10">
                                        Dúvidas Frequentes
                                    </a>
                                </SheetClose>
                            </div>

                            {/* WhatsApp CTA */}
                            <div className="mt-auto">
                                <Button asChild className="bg-secondary text-secondary-foreground hover:bg-white hover:text-primary uppercase tracking-[0.2em] text-sm font-bold h-16 w-full rounded-none shadow-none border-t border-white/10">
                                    <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                                        Falar no WhatsApp
                                        <WhatsAppIcon className="ml-2 size-[1.05rem] opacity-80" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
