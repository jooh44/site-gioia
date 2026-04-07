"use client"

import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { siteConfig } from "@/config/site"
import { serviceGroups } from "@/config/services"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"
import { useState, useEffect } from "react"

export function MinimalNavbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
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
                            className="text-sm font-medium text-white/80 hover:text-white uppercase tracking-[0.15em] transition-colors"
                        >
                            {group.navLabel}
                        </a>
                    ))}

                    <span className="w-[1px] h-4 bg-white/20" />

                    <a href="#about" className="text-sm font-medium text-white/80 hover:text-white uppercase tracking-[0.15em] transition-colors">
                        Sobre
                    </a>
                    <a href="#faq" className="text-sm font-medium text-white/80 hover:text-white uppercase tracking-[0.15em] transition-colors">
                        Dúvidas
                    </a>
                </nav>

                <div className="hidden md:block w-[1px] h-6 bg-white/20" />

                {/* Desktop CTA */}
                <Button asChild variant="ghost" className="hidden md:inline-flex text-white hover:bg-white/10 uppercase tracking-[0.2em] text-xs font-bold px-6 h-10 rounded-none border border-white/30 hover:border-white transition-all">
                    <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                        Contato
                        <WhatsAppIcon className="ml-2 size-[1.05rem] opacity-80" />
                    </a>
                </Button>

                {/* Mobile Menu Trigger */}
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="md:hidden text-secondary hover:bg-white/10 w-12 h-12 flex items-center justify-center transition-all rounded-none outline-none border-none">
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
