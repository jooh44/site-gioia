"use client"

import Link from "next/link"
import { homeConfig } from "@/config/home"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MinimalNavbar } from "@/components/layout/minimal-navbar"
import { TeamSection } from "@/components/sections/team-section"
import Image from "next/image"
import { Check, ArrowRight, Scale, HeartPulse, Building2, Gavel, FileText, UserCheck, Phone, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans selection:bg-secondary selection:text-secondary-foreground relative">
      <MinimalNavbar />

      {/* 1. HERO SECTION (Split Layout) */}
      <section className="relative w-full lg:min-h-[100svh] flex flex-col lg:flex-row bg-primary text-primary-foreground overflow-hidden pt-20 md:pt-24 lg:pt-0 pb-0">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none z-0"></div>

        {/* Background Graphics (Discrete Symbol Texture) */}
        <div className="absolute -left-[10%] lg:-left-[5%] top-[50%] lg:top-[80%] -translate-y-1/2 opacity-[0.10] lg:opacity-[0.15] pointer-events-none brightness-0 z-0">
          <Image
            src="/simbolo-gioia.svg"
            alt=""
            width={500}
            height={500}
            className="w-[180px] lg:w-[450px] h-auto"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-between px-6 md:px-12 lg:px-24 min-h-screen lg:min-h-0 lg:h-screen">

          {/* Left Column: Text Content */}
          <div className="w-full lg:w-3/5 xl:w-[50%] flex flex-col items-center text-center lg:items-start lg:text-left gap-4 md:gap-7 pt-2 pb-10 lg:pb-0 lg:pt-12 xl:pt-16 z-20">
            {/* Official Logo (Small) */}
            <div className="w-24 md:w-32 lg:w-36 xl:w-40 mb-0 lg:mb-2">
              <Image
                src="/logo-gioia.svg"
                alt="Gioia e Associados"
                width={200}
                height={100}
                className="w-full h-auto drop-shadow-xl"
                priority
              />
            </div>

            {/* Main Headline (Playfair Display) */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[4rem] leading-[1.1] tracking-tight text-white drop-shadow-sm w-full lg:max-w-[800px]">
              Quando a <span className="text-secondary font-light">Saúde</span> ou o <span className="text-secondary font-light">Trabalho</span> estão em risco, <span className="font-light">nós somos a sua <span className="border-b-2 border-secondary pb-1 lg:pb-2 whitespace-nowrap">defesa.</span></span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-base md:text-lg text-stone-300 font-light leading-relaxed max-w-xl">
              {homeConfig.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-white hover:text-primary transition-all duration-300 h-14 sm:h-12 w-full sm:w-auto sm:px-10 text-xs uppercase tracking-[0.2em] font-bold rounded-none shadow-lg">
                <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                  Agendar consulta
                </a>
              </Button>
              <Button asChild variant="ghost" className="text-white hover:bg-white/10 h-14 sm:h-12 w-full sm:w-auto sm:px-10 text-xs uppercase tracking-[0.2em] font-bold rounded-none border border-white/30 hover:border-white transition-all">
                <a href="#services">
                  Ver Serviços
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Image - Solta e Menor */}
          <div className="w-full lg:w-2/5 xl:w-[55%] flex justify-center lg:justify-end items-end z-10 pointer-events-none lg:absolute lg:right-0 lg:bottom-0 lg:h-[85vh] xl:pr-12 relative h-[60vh] md:h-[65vh]">
            <div className="relative w-full max-w-[420px] md:max-w-[480px] lg:max-w-[550px] xl:max-w-[650px] h-full">
              <Image
                src="/gioia-hero-1.webp"
                alt="Pai e filha sorrindo, representando a proteção da família e dignidade"
                width={800}
                height={1000}
                className="w-full h-full object-contain object-bottom md:object-center lg:object-right-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION (Modular Grid - Anytype Style) */}
      <section id="services" className="w-full py-24 md:py-32 bg-white border-b border-stone-200">
        <div className="container px-6 md:px-12 lg:px-24 mx-auto">

          {/* Main Grid Container */}
          <div className="flex flex-col border border-stone-200">

            {/* Row 1: Header & Intro */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 md:p-14 border-b md:border-r border-stone-200">
                <span className="text-xs font-bold text-secondary uppercase tracking-[0.25em] block mb-6">Áreas de Atuação</span>
                <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                  Especialização <br />que Gera <span className="text-primary">Resultados.</span>
                </h2>
              </div>
              <div className="p-10 md:p-14 border-b border-stone-200 flex flex-col justify-center">
                <p className="text-stone-500 font-sans text-lg leading-relaxed">
                  "Não defendemos empresas. Nossa missão é restaurar a dignidade e o patrimônio de quem dedica a vida ao trabalho ou luta pela saúde."
                </p>
              </div>
            </div>

            {/* Row 2: Services Content */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Health Law */}
              <div id="saude" className="group relative p-10 md:p-14 md:border-r border-stone-200 hover:bg-stone-50 transition-colors">
                <div className="mb-10">
                  <div className="mb-8">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Direito da Saúde</span>
                  </div>

                  <h3 className="font-serif text-3xl text-stone-900 mb-4 group-hover:text-primary transition-colors">
                    Contra Abusos de Planos de Saúde
                  </h3>
                  <p className="text-stone-600 font-sans text-base leading-relaxed mb-8">
                    Atuação de emergência. Quando a saúde não pode esperar, derrubamos negativas abusivas com liminares judiciais em tempo recorde.
                  </p>

                  <ul className="space-y-3 mb-10">
                    {[
                      "Negativa de Cirurgia e Home Care",
                      "Medicamentos de Alto Custo (Zolgensma)",
                      "Tratamentos Autismo (Método ABA)",
                      "Reajustes Abusivos em Planos"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="link" className="p-0 text-stone-400 group-hover:text-primary transition-colors uppercase tracking-widest text-xs font-bold absolute bottom-10">
                  Agendar uma consulta <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                {/* Spacer for absolute button */}
                <div className="h-6"></div>
              </div>

              {/* Labor Law */}
              <div id="trabalho" className="group relative p-10 md:p-14 border-t md:border-t-0 border-stone-200 hover:bg-stone-50 transition-colors">
                <div className="mb-10">
                  <div className="mb-8">
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">Direito do Trabalho</span>
                  </div>

                  <h3 className="font-serif text-3xl text-stone-900 mb-4 group-hover:text-secondary transition-colors">
                    Defesa Exclusiva do Trabalhador
                  </h3>
                  <p className="text-stone-600 font-sans text-base leading-relaxed mb-8">
                    Especialistas em reverter injustiças no ambiente corporativo, bancário e industrial. Restauramos seu patrimônio e direitos.
                  </p>

                  <ul className="space-y-3 mb-10">
                    {[
                      "Rescisão Indireta e Assédio",
                      "Bancários, Financiários e Industrial",
                      "Doenças Ocupacionais e Acidentes",
                      "Vínculo de Emprego (Pejotização)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="link" className="p-0 text-stone-400 group-hover:text-secondary transition-colors uppercase tracking-widest text-xs font-bold absolute bottom-10">
                  Agendar uma consulta <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                {/* Spacer for absolute button */}
                <div className="h-6"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION (Authority & Tradition - Dark Brand Style) */}
      <section id="about" className="w-full py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 md:from-black/50 md:to-black/50 pointer-events-none z-0"></div>

        <div className="container px-6 md:px-12 lg:px-24 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Text Content */}
            <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-24">
              <div className="space-y-4">
                <span className="text-xs font-bold text-secondary uppercase tracking-[0.25em] block">Nossa Essência — Desde 1992</span>
                <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                  34 Anos de <br /><span className="text-secondary">História e Luta</span>.
                </h2>
              </div>
              <div className="space-y-6 text-stone-300 font-sans text-lg leading-relaxed text-justify">
                <p>
                  O escritório <strong className="text-white">Gioia & Associados</strong> não nasceu ontem. Fundado em 1992 e liderado pelo Dr. Celso Gioia, especialista graduado pela <strong className="text-secondary">USP</strong>, construímos nossa reputação ao longo de três décadas enfrentando grandes corporações e sistemas de saúde para garantir o direito de quem mais precisa.
                </p>
                <p>
                  Não somos uma "lawtech" impessoal. Somos advogados de batalha, estrategistas que olham no olho do cliente e entendem que, por trás de cada processo, existe uma vida que não pode esperar.
                </p>

                <div className="pt-6">
                  <Button variant="link" className="p-0 text-secondary font-serif italic text-xl hover:no-underline hover:text-white transition-colors group">
                    Conheça nossa trajetória completa
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Visuals / Stats */}
            <div className="lg:col-span-7 relative h-full min-h-[500px] bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
              <span className="text-white/20 font-serif italic text-2xl px-8 text-center">[Placeholder para Composição de Arquivo Pessoal + Equipe]</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS / METHODOLOGY (Modular Grid - Clean Style) */}
      <section className="w-full py-24 md:py-32 bg-stone-50 text-stone-900 border-t border-stone-200">
        <div className="container px-6 md:px-12 lg:px-24 mx-auto">

          {/* Main Grid Container */}
          <div className="flex flex-col border border-stone-200 bg-white">

            {/* Row 1: Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-14 border-b lg:border-r border-stone-200">
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary block mb-6">
                  Metodologia
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                  Processo Transparente <br />e Ágil
                </h2>
              </div>
              <div className="p-10 md:p-14 border-b border-stone-200 flex flex-col justify-center">
                <p className="text-stone-500 font-sans text-lg font-light leading-relaxed">
                  Entendemos a urgência. Nosso fluxo é desenhado para agir rápido, transformando complexidade jurídica em passos claros e resultados concretos.
                </p>
              </div>
            </div>

            {/* Row 2: Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

              {/* Step 1 */}
              <div className="group p-10 md:p-12 border-b lg:border-b-0 md:border-r border-stone-200 hover:bg-stone-50 transition-all duration-500 cursor-default">
                <span className="block text-6xl font-serif text-stone-200 mb-8 group-hover:text-primary transition-colors duration-500 group-hover:scale-110 origin-left transform">
                  01
                </span>
                <h3 className="font-serif text-xl mb-4 text-stone-900 group-hover:text-primary transition-colors">
                  Análise
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed font-light">
                  Avaliação técnica imediata das provas, contrato e viabilidade jurídica do caso.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group p-10 md:p-12 border-b lg:border-b-0 lg:border-r md:border-r-0 border-stone-200 hover:bg-stone-50 transition-all duration-500 cursor-default">
                <span className="block text-6xl font-serif text-stone-200 mb-8 group-hover:text-primary transition-colors duration-500 group-hover:scale-110 origin-left transform">
                  02
                </span>
                <h3 className="font-serif text-xl mb-4 text-stone-900 group-hover:text-primary transition-colors">
                  Estratégia
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed font-light">
                  Definição do melhor caminho: pedido de liminar (urgência) ou via administrativa.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group p-10 md:p-12 border-b md:border-b-0 md:border-r border-stone-200 hover:bg-stone-50 transition-all duration-500 cursor-default">
                <span className="block text-6xl font-serif text-stone-200 mb-8 group-hover:text-primary transition-colors duration-500 group-hover:scale-110 origin-left transform">
                  03
                </span>
                <h3 className="font-serif text-xl mb-4 text-stone-900 group-hover:text-primary transition-colors">
                  Ação
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed font-light">
                  Ajuizamento do processo com todos os argumentos para decisão rápida do juiz.
                </p>
              </div>

              {/* Step 4 */}
              <div className="group p-10 md:p-12 hover:bg-stone-50 transition-all duration-500 cursor-default">
                <span className="block text-6xl font-serif text-stone-200 mb-8 group-hover:text-primary transition-colors duration-500 group-hover:scale-110 origin-left transform">
                  04
                </span>
                <h3 className="font-serif text-xl mb-4 text-stone-900 group-hover:text-primary transition-colors">
                  Resultado
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed font-light">
                  Acompanhamento integral até o cumprimento da decisão e a entrega do direito.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. CASES / SUCCESS STORIES (Dark Section - Editorial Style) */}
      <section className="w-full py-24 md:py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2 z-0"></div>

        <div className="container px-6 md:px-12 lg:px-24 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6 border-b border-white/10 pb-8">
            <div>
              <span className="block font-sans text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
                Resultados Comprovados
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white">
                Casos de Sucesso
              </h2>
            </div>
            <Button variant="link" className="text-white hover:text-secondary p-0 h-auto text-sm uppercase tracking-widest" asChild>
              <Link href="/casos">
                Ver todos os casos &rarr;
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Case 1 */}
            <div className="group relative bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors duration-500 shadow-lg backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <span className="text-xs uppercase tracking-widest text-secondary font-bold bg-secondary/10 px-2 py-1">Direito Médico</span>
                <span className="text-stone-300 font-serif italic text-sm">24h para Liminar</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 group-hover:text-secondary transition-colors relative z-10">
                Cirurgia Cardíaca de Urgência Liberada
              </h3>
              <p className="text-stone-200 font-sans text-lg font-light leading-relaxed mb-8 relative z-10">
                "Plano de saúde negou cobertura alegando carência contratual. Conseguimos a liminar em menos de 24 horas, garantindo a realização do procedimento vital para o paciente."
              </p>
              <div className="w-full h-[1px] bg-white/10 group-hover:bg-secondary/30 transition-colors relative z-10"></div>
            </div>

            {/* Case 2 */}
            <div className="group relative bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors duration-500 shadow-lg backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <span className="text-xs uppercase tracking-widest text-secondary font-bold bg-secondary/10 px-2 py-1">Trabalhista</span>
                <span className="text-stone-300 font-serif italic text-sm">Reversão Total</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 group-hover:text-secondary transition-colors relative z-10">
                Reversão de Justa Causa e Indenização
              </h3>
              <p className="text-stone-200 font-sans text-lg font-light leading-relaxed mb-8 relative z-10">
                "Bancário com 15 anos de casa foi demitido por justa causa indevida. Provamos a perseguição e revertemos a demissão, garantindo todas as verbas rescisórias e danos morais."
              </p>
              <div className="w-full h-[1px] bg-white/10 group-hover:bg-secondary/30 transition-colors relative z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 TEAM SECTION */}
      <TeamSection />

      {/* 6. FAQ SECTION */}
      <section id="faq" className="w-full py-24 bg-white scroll-mt-20">
        <div className="container px-6 md:px-12 lg:px-24 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-6">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.25em]">Dúvidas</span>
            <h2 className="font-serif text-4xl text-stone-900">Perguntas Frequentes</h2>
            <p className="text-stone-600">Esclareça suas dúvidas iniciais antes de falar com nosso time.</p>
            <Button variant="link" className="p-0 text-primary uppercase text-xs tracking-widest font-bold mt-4">
              Ver todas as perguntas &rarr;
            </Button>
          </div>

          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-stone-200 px-6 rounded-sm">
                <AccordionTrigger className="font-serif text-xl text-stone-800 hover:text-primary py-6 text-left">
                  O que é uma liminar e quanto tempo demora?
                </AccordionTrigger>
                <AccordionContent className="text-stone-600 font-sans pb-6 text-base leading-relaxed">
                  A liminar é uma decisão judicial provisória e urgente. Em casos de saúde (risco de vida), pode ser obtida em 24 a 48 horas. Nossa equipe atua com plantão especializado para garantir essa agilidade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-stone-200 px-6 rounded-sm">
                <AccordionTrigger className="font-serif text-xl text-stone-800 hover:text-primary py-6 text-left">
                  O escritório cobra consulta?
                </AccordionTrigger>
                <AccordionContent className="text-stone-600 font-sans pb-6 text-base leading-relaxed">
                  Para uma análise preliminar de viabilidade do caso, não cobramos honorários iniciais. Agende uma conversa para entendermos seu cenário.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-stone-200 px-6 rounded-sm">
                <AccordionTrigger className="font-serif text-xl text-stone-800 hover:text-primary py-6 text-left">
                  Vocês atendem em todo o Brasil?
                </AccordionTrigger>
                <AccordionContent className="text-stone-600 font-sans pb-6 text-base leading-relaxed">
                  Sim. Com o processo judicial eletrônico, atuamos em tribunais de todo o país, mantendo o mesmo padrão de atendimento e proximidade através de videoconferências.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* 7. FOOTER / CONTACT CTA */}
      <section className="w-full py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none"></div>
        <div className="container px-6 md:px-12 lg:px-24 mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight">Vamos lutar pelo <br /><span className="text-secondary">seu direito?</span></h2>
            <p className="text-stone-200 text-xl font-light leading-relaxed max-w-lg">
              Não deixe para depois o que pode ser irreversível. Nossa equipe está pronta para ouvir sua história e traçar a melhor estratégia.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="bg-secondary text-secondary-foreground hover:bg-white hover:text-primary h-16 px-10 text-sm uppercase tracking-[0.25em] font-medium rounded-none shadow-lg w-full sm:w-auto">
                Falar no WhatsApp
              </Button>
              <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white hover:text-primary h-16 px-10 text-sm uppercase tracking-[0.25em] font-medium rounded-none w-full sm:w-auto transition-all">
                Ligar Agora
              </Button>
            </div>

            <div className="pt-12 space-y-4 border-t border-white/10 mt-12 text-stone-300 font-sans text-sm">
              <p className="flex items-center gap-3">
                <span className="text-secondary font-bold uppercase tracking-widest text-[10px]">Endereço:</span>
                Rua Barão de Jundiaí, 523 – Lapa, São Paulo – SP
              </p>
              <p className="flex items-center gap-3">
                <span className="text-secondary font-bold uppercase tracking-widest text-[10px]">Telefone:</span>
                (11) 3835-3200
              </p>
            </div>
          </div>

          <div className="relative border-l border-white/10 pl-12 py-8 hidden lg:block">
            <blockquote className="font-serif text-2xl leading-relaxed text-white/80 italic">
              "A verdadeira justiça é aquela que restaura a dignidade, protege a vida e não se curva diante da injustiça."
            </blockquote>
            <cite className="block font-sans text-xs uppercase tracking-[0.2em] text-secondary not-italic mt-6">
              Princípio Gioia
            </cite>
          </div>
        </div>
      </section>

    </main>
  )
}
