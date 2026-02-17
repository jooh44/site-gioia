"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { User, Scale, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react'
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
}

const teamMembers: TeamMember[] = [
    {
        id: "celso",
        name: "Dr. Celso Gioia",
        role: "Diretor Fundador — Especialista USP",
        oab: "OAB/SP 110.134",
        bio: "Fundador do escritório em 1992, o Dr. Celso Gioia é bacharel em Direito pela Universidade de São Paulo (USP). Com mais de três décadas de atuação, tornou-se referência nacional em casos de alta complexidade no Direito à Saúde, unindo rigor acadêmico a uma visão humanista e estratégica da advocacia.",
        specializations: ["Direito à Saúde de Alta Complexidade", "Estratégia Processual", "Consultoria Institucional"],
        image: "/placeholder-celso.jpg"
    },
    {
        id: "mariana",
        name: "Dra. Mariana Gioia",
        role: "Sócia-Diretora",
        oab: "OAB/SP 286.723",
        bio: "Dedicada à defesa dos direitos fundamentais, Dra. Mariana Gioia coordena as áreas estratégica e digital do escritório. Especialista em Direito Médico e do Trabalho, sua atuação é marcada pela agilidade na obtenção de liminares e por um atendimento personalizado que entende a urgência de cada vida.",
        specializations: ["Direito Médico e Hospitalar", "Direito do Trabalho", "Gestão de Crises Jurídicas"],
        image: "/placeholder-mariana.jpg"
    },
    {
        id: "fabio",
        name: "Dr. Fabio Dreger",
        role: "Advogado Associado",
        oab: "OAB/SP 450.129",
        bio: "Especialista em Direito Civil e Consumerista focado no setor de saúde. Dr. Fabio atua na proteção do consumidor contra abusos contratuais e negativas de cobertura, trazendo uma abordagem moderna e técnica para garantir que os direitos dos pacientes sejam respeitados perante grandes operadoras.",
        specializations: ["Direito do Consumidor na Saúde", "Responsabilidade Civil", "Acompanhamento Processual Ágil"],
        image: "/placeholder-fabio.jpg"
    }
]

export function TeamSection() {
    const [activeTab, setActiveTab] = useState(teamMembers[0].id)
    const activeMember = teamMembers.find(m => m.id === activeTab) || teamMembers[0]

    return (
        <section id="team" className="w-full py-24 md:py-32 bg-stone-50 overflow-hidden">
            <div className="container px-6 md:px-12 lg:px-24 mx-auto">
                <div className="max-w-xl mb-16">
                    <span className="text-xs font-bold text-primary uppercase tracking-[0.25em] block mb-4">Nossa Equipe</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
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
                    <div className="bg-white border border-stone-200 shadow-xl shadow-stone-200/40 p-8 md:p-12 relative z-10 overflow-hidden min-h-[500px] -mt-[1px] rounded-none">
                        {/* Subtle Texture/Gradient */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-50/50 to-transparent pointer-events-none"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                            <div className="lg:col-span-5">
                                <div className="relative aspect-[4/5] bg-stone-100 border border-stone-200 overflow-hidden rounded-none">
                                    {/* Decorative Frame */}
                                    <div className="absolute inset-4 border border-stone-300/30 z-10 pointer-events-none"></div>

                                    {/* Placeholder Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-300">
                                        <User className="w-20 h-20 mb-4 opacity-20" />
                                        <span className="font-serif italic text-sm">Aguardando Foto Oficial</span>
                                    </div>
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
                                    <Button asChild className="bg-primary text-white hover:bg-stone-900 h-16 px-12 text-sm uppercase tracking-[0.2em] font-bold rounded-none shadow-lg w-full sm:w-auto">
                                        <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                                            Agendar horário
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
