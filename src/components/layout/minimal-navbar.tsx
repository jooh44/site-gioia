"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { serviceGroups } from "@/config/services"
import { Menu, X, ChevronDown } from "lucide-react"
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
                ? "bg-black/20 backdrop-blur-md border-b border-white/5"
                : "bg-transparent border-transparent"
                }`}
        >
            {/* Logo */}
            <div className="flex items-center gap-12">
                <div className={`${isScrolled ? "block" : "hidden md:block"} pointer-events-auto hover:scale-105 transition-transform`}>
                    <Link href="/" className="block">
                        <Image
                            src="/simbolo-gioia.svg"
                            alt="Gioia e Associados - Início"
                            width={48}
                            height={48}
                            className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md"
                            priority
                        />
                    </Link>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-8 pointer-events-auto">

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">

                    {/* Dropdown: Áreas de Atuação */}
                    <div className="group relative">
                        <button className="flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white uppercase tracking-[0.15em] transition-colors">
                            Áreas
                            <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                        </button>

                        {/* Dropdown Panel */}
                        <div className="absolute top-full right-0 mt-3 w-52 hidden group-hover:flex flex-col bg-primary border border-white/10 shadow-2xl z-50">
                            {serviceGroups.map((group) => (
                                <a
                                    key={group.id}
                                    href={`#${group.id}`}
                                    className="flex items-center gap-3 px-5 py-3.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0"
                                >
                                    <span
                                        className={`w-1 h-4 shrink-0 ${group.accent === "primary" ? "bg-primary-foreground/40" : "bg-secondary/60"}`}
                                    />
                                    <span className="font-sans tracking-wide">{group.navLabel}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <Link href="#about" className="text-sm font-medium text-white/80 hover:text-white uppercase tracking-[0.15em] transition-colors">
                        Sobre
                    </Link>
                    <Link href="#faq" className="text-sm font-medium text-white/80 hover:text-white uppercase tracking-[0.15em] transition-colors">
                        Dúvidas
                    </Link>
                </nav>

                <div className="hidden md:block w-[1px] h-6 bg-white/20" />

                {/* Desktop CTA */}
                <Button asChild variant="ghost" className="hidden md:inline-flex text-white hover:bg-white/10 uppercase tracking-[0.2em] text-xs font-bold px-6 h-10 rounded-none border border-white/30 hover:border-white transition-all">
                    <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                        Contato
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
                                <Link href="/">
                                    <Image
                                        src="/simbolo-gioia.svg"
                                        alt="Gioia"
                                        width={48}
                                        height={48}
                                        className="w-10 h-10 drop-shadow-md"
                                    />
                                </Link>
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
                                    <Link href="#about" className="block px-6 py-4 text-xl font-sans font-light text-stone-200 hover:text-white hover:bg-white/5 transition-all border-b border-white/10">
                                        Sobre o Escritório
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href="#faq" className="block px-6 py-4 text-xl font-sans font-light text-stone-200 hover:text-white hover:bg-white/5 transition-all border-b border-white/10">
                                        Dúvidas Frequentes
                                    </Link>
                                </SheetClose>
                            </div>

                            {/* WhatsApp CTA */}
                            <div className="mt-auto">
                                <Button asChild className="bg-secondary text-secondary-foreground hover:bg-white hover:text-primary uppercase tracking-[0.2em] text-sm font-bold h-16 w-full rounded-none shadow-none border-t border-white/10">
                                    <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                                        Falar no WhatsApp
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
