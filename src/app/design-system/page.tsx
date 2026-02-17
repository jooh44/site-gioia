import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function DesignSystemPage() {
    return (
        <div className="min-h-screen p-12 space-y-24 bg-stone-50 text-stone-900 font-sans">
            <header className="space-y-6 border-b border-primary/20 pb-12">
                <h1 className="text-6xl font-serif font-medium text-primary tracking-tight">Gioia e Associados</h1>
                <p className="text-3xl font-handwriting text-stone-500">Design System v2.0 • Editorial & Squad</p>
            </header>

            {/* Typography Section */}
            <section className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] border-b border-primary/10 pb-2">Headline (Serif)</h3>
                        <div className="space-y-4">
                            <p className="font-serif text-6xl leading-none text-stone-900">Editorial<br />Elegance.</p>
                            <p className="font-serif text-4xl italic text-primary">Playfair Display</p>
                            <p className="font-sans text-sm text-stone-400">Usado em títulos de alto impacto. Autoritário mas refinado.</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] border-b border-primary/10 pb-2">Body (Sans)</h3>
                        <div className="space-y-4">
                            <p className="font-sans text-xl leading-relaxed text-stone-800">
                                O escritório Gioia e Associados atua na defesa intransigente dos direitos.
                            </p>
                            <p className="font-sans text-sm font-medium uppercase tracking-widest text-stone-500">Inter Regular</p>
                            <p className="font-sans text-sm text-stone-400">Legibilidade técnica e modernidade.</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] border-b border-primary/10 pb-2">Signature (Script)</h3>
                        <div className="space-y-4">
                            <p className="font-handwriting text-6xl text-secondary">
                                Santuário de Justiça
                            </p>
                            <p className="font-sans text-sm font-medium uppercase tracking-widest text-stone-500">Pinyon Script</p>
                            <p className="font-sans text-sm text-stone-400">Assinatura premium, estilo " convite de luxo".</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Colors & UI */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="space-y-8">
                    <h2 className="text-4xl font-serif text-stone-900">Botões Editoriais</h2>
                    <div className="space-y-6">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-stone-500 uppercase tracking-widest">Primary (Solid)</p>
                            <Button className="h-14 px-8 text-base uppercase tracking-widest font-sans font-medium rounded-none w-fit">
                                Agendar Consulta
                            </Button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-stone-500 uppercase tracking-widest">Outline (Fine Lines)</p>
                            <Button variant="outline" className="h-14 px-8 text-base uppercase tracking-widest font-sans font-medium border border-primary text-primary hover:bg-primary hover:text-white rounded-none w-fit">
                                Nossa História
                            </Button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-stone-500 uppercase tracking-widest">Secondary (Gold)</p>
                            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-base uppercase tracking-widest font-sans font-medium rounded-none w-fit">
                                Área do Cliente
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="text-4xl font-serif text-stone-900">Cards & Fine Lines</h2>
                    <Card className="rounded-none border border-stone-200 shadow-none bg-white p-8">
                        <CardHeader className="p-0 mb-6">
                            <div className="w-12 h-[1px] bg-secondary mb-4"></div>
                            <CardTitle className="font-serif text-3xl text-primary font-normal">Tutela de Urgência</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mb-8">
                            <p className="text-stone-600 leading-relaxed font-sans text-lg">
                                Garante o início imediato do tratamento médico enquanto o processo corre, protegendo a vida do paciente com agilidade técnica.
                            </p>
                        </CardContent>
                        <CardFooter className="p-0">
                            <Button variant="link" className="p-0 text-primary font-serif italic text-lg hover:no-underline hover:text-secondary transition-colors">
                                Ler mais sobre liminares &rarr;
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>

            {/* Hero Simulation (Editorial) */}
            <section className="space-y-8 border-t border-primary/20 pt-12">
                <h2 className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">Hero Concept: "The Dark Editorial"</h2>
                <div className="w-full bg-primary text-primary-foreground py-32 px-12 md:px-24 rounded-none relative overflow-hidden">

                    <div className="relative z-10 max-w-4xl space-y-8 mx-auto text-center flex flex-col items-center">
                        {/* Logo Replacement */}
                        <div className="w-64 md:w-96 h-auto mx-auto mb-8">
                            <Image
                                src="/logo-gioia.svg"
                                alt="Gioia e Associados"
                                width={500}
                                height={200}
                                className="w-full h-auto drop-shadow-lg"
                                priority
                            />
                        </div>

                        <div className="w-24 h-[1px] bg-secondary mx-auto opacity-50"></div>

                        <p className="font-sans text-lg md:text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
                            Advocacia de alta complexidade em Direito Médico e Trabalhista.
                            Tradição, ética e técnica refinada há 33 anos.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
                            <Button className="bg-secondary text-secondary-foreground hover:bg-white hover:text-primary transition-all h-14 px-10 text-sm uppercase tracking-[0.2em] font-medium rounded-none">
                                Plantão Urgente
                            </Button>
                            <Button variant="outline" className="border border-white/30 text-white hover:bg-white hover:text-primary h-14 px-10 text-sm uppercase tracking-[0.2em] font-medium rounded-none bg-transparent">
                                Conhecer Escritório
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
