"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"
import { useState, useEffect } from "react"

export function MinimalNavbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
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
            {/* Left Side - Logo & Primary Nav */}
            <div className="flex items-center gap-12">
                {/* Logo */}
                <div className="pointer-events-auto hover:scale-105 transition-transform">
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

                {/* Left Nav Links */}
                <nav className="hidden md:flex items-center gap-8 pointer-events-auto">
                    <Link href="#saude" className="text-sm font-medium text-white/80 hover:text-white uppercase tracking-[0.15em] transition-colors">
                        Direito da Saúde
                    </Link>
                    <Link href="#trabalho" className="text-sm font-medium text-white/80 hover:text-white uppercase tracking-[0.15em] transition-colors">
                        Direito do Trabalho
                    </Link>
                </nav>
            </div>

            {/* Right Side - Secondary Nav & Actions */}
            <div className="flex items-center gap-8 pointer-events-auto">
                {/* Right Nav Links */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#about" className="text-sm font-medium text-white/80 hover:text-white uppercase tracking-[0.15em] transition-colors">
                        Sobre
                    </Link>
                    <Link href="#faq" className="text-sm font-medium text-white/80 hover:text-white uppercase tracking-[0.15em] transition-colors">
                        Dúvidas
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
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
                            {/* Mobile Header (Matches Navbar) */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                                <Link href="/" onClick={() => document.querySelector('[data-state="open"]')?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))}>
                                    <Image
                                        src="/simbolo-gioia.svg"
                                        alt="Gioia"
                                        width={48}
                                        height={48}
                                        className="w-10 h-10 drop-shadow-md"
                                    />
                                </Link>
                                <SheetClose asChild>
                                    <button className="text-secondary hover:bg-white/10 w-12 h-12 flex items-center justify-center transition-all rounded-none outline-none border-none">
                                        <X size={32} className="shrink-0" strokeWidth={2.5} strokeLinecap="square" strokeLinejoin="miter" />
                                        <span className="sr-only">Fechar</span>
                                    </button>
                                </SheetClose>
                            </div>

                            <div className="flex flex-col h-full overflow-y-auto">
                                {/* Primary Section */}
                                <div className="flex flex-col space-y-4 px-6 py-6 border-b border-white/10">
                                    <h3 className="text-secondary/80 text-xs font-bold uppercase tracking-[0.25em] mb-2">Áreas de Atuação</h3>
                                    <SheetClose asChild>
                                        <Link href="#saude" className="text-3xl font-serif text-white hover:text-secondary transition-colors block leading-tight">
                                            Direito da Saúde
                                        </Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link href="#trabalho" className="text-3xl font-serif text-white hover:text-secondary transition-colors block leading-tight">
                                            Direito do Trabalho
                                        </Link>
                                    </SheetClose>
                                </div>

                                {/* Secondary Links (Lined) */}
                                <div className="flex flex-col">
                                    <SheetClose asChild>
                                        <Link href="#services" className="block px-6 py-4 text-xl font-sans font-light text-stone-200 hover:text-white hover:bg-white/5 transition-all border-b border-white/10">
                                            Nossos Serviços
                                        </Link>
                                    </SheetClose>
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

                                {/* Full Width Action Button */}
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
            </div>
        </header>
    )
}
