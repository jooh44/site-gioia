"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon'
import { Scale, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

interface TeamMember {
    id: string
    name: string
    role: string
    oab: string
    bio: string
    specializations: string[]
    image: string
    imageClassName?: string
}

const teamMembers: TeamMember[] = [
    {
        id: "celso",
        name: "Dr. Celso Fernando Gioia",
        role: "Sócio Fundador",
        oab: "OAB/SP 70.379",
        bio: "Fundador da Gioia e Associados em 1992, o Dr. Celso Fernando Gioia é graduado pela Universidade de São Paulo (USP), com sólida especialização em Responsabilidade Civil, Contratos, Direito Empresarial e Trabalhista. Atuou como Diretor Jurídico da RedeTV! e como Presidente da OAB/SP – 96ª Subseção (Lapa) entre 2012 e 2017.",
        specializations: ["Responsabilidade Civil e Contratos", "Direito Empresarial e Trabalhista", "Liderança Institucional OAB/SP"],
        image: "/team/celso-gioia.webp",
        imageClassName: "scale-[1.05] -translate-x-2"
    },
    {
        id: "mariana",
        name: "Dra. Mariana Matheus Gioia",
        role: "Sócia",
        oab: "OAB/SP 351.962",
        bio: "Sócia da Gioia e Associados, a Dra. Mariana Matheus Gioia é especialista com pós-graduação em Direito Empresarial e Direito Médico e Hospitalar. Atuou como defensora junto ao CREMESP e presidiu a Comissão de Assuntos do Judiciário da OAB/SP Lapa. Nossa atuação é pautada pela agilidade e pelo compromisso em oferecer soluções jurídicas que acompanham as transformações da sociedade.",
        specializations: ["Direito Médico e Hospitalar (CREMESP)", "Direito Empresarial", "Consultoria Estratégica"],
        image: "/team/mariana-gioia.webp"
    },
    {
        id: "fabio",
        name: "Dr. Fábio Dreger da Silva",
        role: "Advogado Associado",
        oab: "OAB/SP 336.451",
        bio: "O Dr. Fábio Dreger da Silva integra a equipe com foco no rigor processual e na defesa especializada. Pós-graduado em Processo Civil pela Mackenzie e em Direito Médico e da Saúde pela Faculdade Legale. Foi Vice-Presidente da Comissão de Direito Civil da OAB/SP Lapa (2016–2018).",
        specializations: ["Processo Civil (Mackenzie)", "Direito Médico e da Saúde", "Direito do Consumidor"],
        image: "/team/fabio-dreger.webp"
    }
]

interface TeamSectionProps {
    embedded?: boolean
}

export function TeamSection({ embedded = false }: TeamSectionProps) {
    const [activeTab, setActiveTab] = useState(teamMembers[0].id)
    const activeMember = teamMembers.find(m => m.id === activeTab) || teamMembers[0]

    return (
        <section
            id="team"
            data-nav-theme="light"
            className={cn(
                "w-full overflow-hidden",
                embedded ? "py-0 bg-transparent" : "py-24 md:py-32 bg-white"
            )}
        >
            <div className={cn("container px-6 md:px-12 lg:px-24 mx-auto", embedded && "px-0 md:px-0 lg:px-0")}>
                <div className="max-w-xl mb-16">
                    <span className={cn(
                        "text-xs font-bold uppercase tracking-[0.25em] block mb-4",
                        embedded ? "text-secondary" : "text-primary"
                    )}>Nossa Equipe</span>
                    <h2 className={cn(
                        "font-serif text-4xl md:text-5xl leading-tight",
                        embedded ? "text-white" : "text-stone-900"
                    )}>
                        Excelência Técnica <br />e Atendimento Humano.
                    </h2>
                </div>

                {/* Folder Component */}
                <div className="relative">
                    {/* Tab Header (Folder Labels) */}
                    <div className="grid grid-cols-3 md:flex gap-1 md:gap-3 relative z-10">
                        {teamMembers.map((member) => (
                            <button
                                key={member.id}
                                onClick={() => setActiveTab(member.id)}
                                className={cn(
                                    "flex items-center justify-center px-2 py-4 transition-all duration-300 font-sans text-[10px] md:text-xs font-bold tracking-widest border-t border-x uppercase text-center rounded-none",
                                    activeTab === member.id
                                        ? "bg-white text-primary border-stone-200 relative z-20 translate-y-[1px]"
                                        : "bg-primary text-white/60 border-white/5 hover:text-white relative z-0"
                                )}
                            >
                                {member.id === 'celso' ? 'Dr. Celso' : member.id === 'mariana' ? 'Dra. Mariana' : 'Dr. Fabio'}
                            </button>
                        ))}
                    </div>

                    {/* Content Card (Folder Body) */}
                    <div className={cn(
                        "border p-8 md:p-12 relative z-10 overflow-hidden min-h-[500px] -mt-[1px] rounded-none",
                        embedded
                            ? "bg-[#fbf8f2] border-white/10 shadow-none"
                            : "bg-white border-stone-200 shadow-xl shadow-stone-200/40"
                    )}>
                        {/* Subtle Texture/Gradient */}
                        <div className={cn(
                            "absolute top-0 right-0 w-1/2 h-full pointer-events-none",
                            embedded ? "bg-gradient-to-l from-white/10 to-transparent" : "bg-gradient-to-l from-stone-50/50 to-transparent"
                        )}></div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                            <div className="lg:col-span-5">
                                <div className={cn(
                                    "relative aspect-[4/5] overflow-hidden rounded-none",
                                    embedded ? "bg-[#f1eadf] border border-stone-300/60" : "bg-stone-100 border border-stone-200"
                                )}>
                                    <img
                                        src={activeMember.image}
                                        alt={activeMember.name}
                                        className={cn(
                                            "absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300",
                                            activeMember.imageClassName
                                        )}
                                        loading="lazy"
                                    />
                                    {/* Decorative Frame */}
                                    <div className="absolute inset-4 border border-stone-300/30 z-10 pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Info Side */}
                            <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="space-y-4">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <h3 className="font-serif text-3xl md:text-5xl text-stone-900">{activeMember.name}</h3>
                                        <div className="flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-none">
                                            <Scale className="w-3.5 h-3.5 text-secondary" />
                                            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{activeMember.oab}</span>
                                        </div>
                                    </div>
                                    <p className="text-secondary font-sans font-bold uppercase tracking-[0.2em] text-xs">
                                        {activeMember.role}
                                    </p>
                                </div>

                                <p className="text-stone-600 font-sans text-lg leading-relaxed text-justify lg:text-left">
                                    {activeMember.bio}
                                </p>

                                <div className="space-y-4 pt-4">
                                    <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">Foco de Atuação</span>
                                    <div className="flex flex-wrap gap-3">
                                        {activeMember.specializations.map((spec, i) => (
                                            <div key={i} className="flex items-center gap-2.5 px-4 py-2 bg-stone-50 border border-stone-100 rounded-none text-sm text-stone-700 font-medium hover:border-secondary/20 hover:bg-white transition-all">
                                                <CheckCircle2 className="w-4 h-4 text-secondary/60" />
                                                {spec}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <Button asChild className="bg-secondary text-secondary-foreground hover:bg-[#e1c483] hover:text-primary hover:shadow-[0_0_34px_rgba(209,175,102,0.28)] h-16 px-12 text-sm uppercase tracking-[0.2em] font-bold rounded-none shadow-lg w-full sm:w-auto">
                                        <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                                            Agendar horário
                                            <WhatsAppIcon className="ml-2 size-[1.05rem] opacity-80" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
