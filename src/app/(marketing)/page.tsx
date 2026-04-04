import type { Metadata } from "next"
import { homeConfig } from "@/config/home"
import { aboutConfig } from "@/config/about"
import { faqGroups } from "@/config/faq"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MinimalNavbar } from "@/components/layout/minimal-navbar"
import { TeamSection } from "@/components/sections/team-section"
import { ServicesSection } from "@/components/sections/services-section"
import Image from "next/image"
import { TestimonialsTicker } from "@/components/sections/testimonials-ticker"
import { Scale, Telescope, Gem } from "lucide-react"

export const metadata: Metadata = {
  title: "Advogado Direito Médico e Trabalhista em São Paulo | Gioia e Associados",
  description:
    "Escritório com 34 anos de tradição em Direito Médico e Trabalhista na Lapa, São Paulo. Liminares para planos de saúde em 24h. Defesa do trabalhador. Consulta sem custo inicial.",
  alternates: {
    canonical: "/",
  },
}

const schemaLegalService = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Gioia e Associados Advocacia",
  description:
    "Escritório de advocacia especializado em Direito Médico e Trabalhista com 34 anos de atuação em São Paulo.",
  url: "https://gioiaeassociados.com.br",
  telephone: "+551138353200",
  email: "contato@gioiaeassociados.com.br",
  foundingDate: "1992",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Barão de Jundiaí, 523",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "05073-010",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5275,
    longitude: -46.7068,
  },
  areaServed: { "@type": "State", name: "São Paulo" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Áreas de Atuação",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Direito Médico" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Direito do Trabalho" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Direito do Consumidor" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Direito de Família" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Direito Imobiliário" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Direito Empresarial" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Direito Previdenciário" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Direito Sucessório" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contratos" } },
    ],
  },
  member: [
    {
      "@type": "Person",
      name: "Celso Fernando Gioia",
      jobTitle: "Sócio Fundador",
      identifier: "OAB/SP 70.379",
    },
    {
      "@type": "Person",
      name: "Mariana Matheus Gioia",
      jobTitle: "Sócia",
      identifier: "OAB/SP 351.962",
    },
    {
      "@type": "Person",
      name: "Fábio Dreger da Silva",
      jobTitle: "Advogado Associado",
      identifier: "OAB/SP 336.451",
    },
  ],
}

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é uma liminar e quanto tempo demora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A liminar é uma decisão judicial provisória e urgente. Em casos de saúde com risco de vida, pode ser obtida em 24 a 48 horas. Nossa equipe atua com plantão especializado para garantir essa agilidade.",
      },
    },
    {
      "@type": "Question",
      name: "O escritório cobra consulta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para uma análise preliminar de viabilidade do caso, não cobramos honorários iniciais. Agende uma conversa para entendermos seu cenário.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês atendem em todo o Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Com o processo judicial eletrônico, atuamos em tribunais de todo o país, mantendo o mesmo padrão de atendimento e proximidade através de videoconferências.",
      },
    },
  ],
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans selection:bg-secondary selection:text-secondary-foreground relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLegalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <MinimalNavbar />

      {/* 1. HERO SECTION (Split Layout) */}
      <section className="relative w-full lg:min-h-[100svh] flex flex-col lg:flex-row bg-primary text-primary-foreground overflow-hidden pt-12 md:pt-16 lg:pt-0 pb-0">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none z-0"></div>

        {/* Background Decorative SVG Watermark behind the lawyers */}
        <div className="absolute top-[40%] lg:top-[50%] right-[-10%] lg:right-[-5%] -translate-y-[45%] lg:-translate-y-1/2 w-[120%] md:w-[80%] lg:w-[60%] xl:w-[50%] h-auto opacity-[0.10] lg:opacity-[0.15] pointer-events-none brightness-0 z-0">
          <Image
            src="/simbolo-gioia.svg"
            alt="Símbolo Gioia Background"
            width={1200}
            height={1200}
            className="w-full h-full object-contain"
            priority={false}
          />
        </div>

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
        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-between px-6 md:px-12 lg:px-20 xl:px-24 min-h-screen lg:min-h-0 lg:h-screen">

          {/* Left Column: Text Content */}
          <div className="w-full lg:w-[72%] xl:w-[62%] flex flex-col items-center text-center lg:items-start lg:text-left gap-4 md:gap-7 pb-2 lg:pb-0 pt-0 md:pt-4 lg:pt-12 xl:pt-16 z-20">
            {/* Official Logo (Small) */}
            <div className="w-32 md:w-36 lg:w-36 xl:w-40 mb-1 lg:mb-2 mt-4 lg:mt-0">
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
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.65rem] xl:text-[4.35rem] leading-[1.02] tracking-tight text-white drop-shadow-sm w-full lg:max-w-[19ch]">
              <span className="block">Três décadas</span>
              <span className="block">de história na defesa</span>
              <span className="block text-secondary font-light">dos seus direitos.</span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-base md:text-lg text-stone-300 font-light leading-relaxed max-w-xl">
              {homeConfig.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-[#e1c483] hover:text-primary hover:shadow-[0_0_34px_rgba(209,175,102,0.28)] transition-all duration-300 h-14 sm:h-12 w-full sm:w-auto sm:px-10 text-xs uppercase tracking-[0.2em] font-bold rounded-none shadow-lg">
                <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                  {homeConfig.hero.cta}
                  <WhatsAppIcon className="ml-2 size-[1.05rem] opacity-80" />
                </a>
              </Button>
              <Button asChild variant="ghost" className="text-white hover:bg-secondary/15 hover:text-secondary h-14 sm:h-12 w-full sm:w-auto sm:px-10 text-xs uppercase tracking-[0.2em] font-bold rounded-none border border-white/30 hover:border-secondary/70 transition-all">
                <a href="#services">
                  Ver Serviços
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Image - Solta e Menor */}
          <div className="w-full lg:w-2/5 xl:w-[55%] flex justify-center lg:justify-end items-end z-10 pointer-events-none lg:absolute lg:-right-4 xl:-right-8 lg:bottom-0 lg:h-[80vh] xl:h-[85vh] relative h-[65vh] md:h-[70vh] -mt-8 md:-mt-16 lg:mt-0">
            <div className="relative w-full max-w-[500px] md:max-w-[600px] lg:max-w-[550px] xl:max-w-[700px] h-full">
              <div
                aria-hidden="true"
                className="absolute inset-x-[16%] bottom-[4%] h-[14%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.12)_42%,transparent_78%)] blur-xl"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-[10%] top-[10%] h-[78%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.05)_28%,rgba(255,255,255,0.02)_46%,transparent_70%)] blur-3xl"
              />
              <Image
                src="/gioia-hero-2.webp"
                alt="Pai e filha sorrindo, representando a proteção da família e dignidade"
                width={800}
                height={1000}
                className="relative z-10 w-full h-full object-contain object-bottom md:object-center lg:object-right-bottom drop-shadow-[0_12px_18px_rgba(0,0,0,0.18)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <ServicesSection />

      {/* 3. ABOUT SECTION */}
      <section id="about" className="w-full py-24 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/bg.webp"
            alt=""
            fill
            className="object-cover object-center opacity-24"
            priority={false}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/88 via-primary/68 to-primary/42 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/52 via-primary/28 to-black/48 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_center,rgba(209,175,102,0.06),transparent_28%)] pointer-events-none z-0" />

        <div className="container px-6 md:px-12 lg:px-24 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-24">
              <div className="space-y-4">
                <span className="text-xs font-bold text-secondary uppercase tracking-[0.25em] block">
                  {aboutConfig.eyebrow}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                  {aboutConfig.title}
                </h2>
              </div>
              <div className="space-y-5 text-stone-300 font-sans text-lg leading-relaxed">
                <p>{aboutConfig.intro}</p>
                <p>{aboutConfig.approach}</p>
                <p className="text-white font-medium">{aboutConfig.closing}</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="relative overflow-hidden border border-secondary/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] min-h-[28rem] lg:min-h-[34rem]">
                <Image
                  src="/about-gioia-team.webp"
                  alt="Equipe Gioia e Associados em retrato institucional"
                  fill
                  className="object-cover object-center"
                  priority={false}
                />
              </div>

              <div className="grid grid-cols-3 gap-px bg-secondary/12 border border-secondary/18">
                <div className="bg-primary/55 px-5 py-4 flex items-center gap-3">
                  <Scale className="h-4 w-4 text-secondary/80 shrink-0" strokeWidth={1.4} />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-secondary/80">{aboutConfig.mission.title}</span>
                    <p className="text-sm text-stone-300 leading-snug mt-0.5">Rigor técnico com atendimento humanizado.</p>
                  </div>
                </div>
                <div className="bg-primary/55 px-5 py-4 flex items-center gap-3">
                  <Telescope className="h-4 w-4 text-secondary/80 shrink-0" strokeWidth={1.4} />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-secondary/80">{aboutConfig.vision.title}</span>
                    <p className="text-sm text-stone-300 leading-snug mt-0.5">Excelência sólida, presença contemporânea.</p>
                  </div>
                </div>
                <div className="bg-primary/55 px-5 py-4 flex items-center gap-3">
                  <Gem className="h-4 w-4 text-secondary/80 shrink-0" strokeWidth={1.4} />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-secondary/80">Valores</span>
                    <p className="text-sm text-stone-300 leading-snug mt-0.5">Ética, resultado e compromisso humano.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <TeamSection />

      {/* 5. TESTIMONIALS (Google Reviews Ticker) */}
      <TestimonialsTicker />

      {/* 6. FAQ SECTION */}
      <section id="faq" className="w-full py-24 bg-white scroll-mt-20">
        <div className="container px-6 md:px-12 lg:px-24 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-6">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.25em]">Dúvidas</span>
            <h2 className="font-serif text-4xl text-stone-900">Perguntas Frequentes</h2>
            <p className="text-stone-600">
              Respostas diretas para as dúvidas mais comuns antes do primeiro atendimento.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {faqGroups.map((group, groupIndex) => (
              <div key={group.title} className="border border-stone-200 bg-stone-50/40">
                <div className="border-b border-stone-200 px-6 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                    {String(groupIndex + 1).padStart(2, "0")} · {group.title}
                  </span>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {group.items.map((item, itemIndex) => (
                    <AccordionItem
                      key={item.question}
                      value={`${group.title}-${itemIndex}`}
                      className="border-b border-stone-200 last:border-b-0 px-6"
                    >
                      <AccordionTrigger className="font-serif text-xl text-stone-800 hover:text-primary py-6 text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-stone-600 font-sans pb-6 text-base leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
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
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-[#e1c483] hover:text-primary hover:shadow-[0_0_34px_rgba(209,175,102,0.28)] h-16 px-10 text-sm uppercase tracking-[0.25em] font-medium rounded-none shadow-lg w-full sm:w-auto">
                <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                  <WhatsAppIcon className="ml-2 size-[1.05rem] opacity-80" />
                </a>
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
              &quot;A verdadeira justiça é aquela que restaura a dignidade, protege a vida e não se curva diante da injustiça.&quot;
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
