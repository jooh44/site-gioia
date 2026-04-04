"use client"

import Image from "next/image"

interface Testimonial {
  name: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: "Marilda I. Machado",
    text: "Fui muitíssimo bem atendida! A Dra. Mariana é muito eficaz, guerreira. O trabalho é primoroso. Estou muito satisfeita.",
    rating: 5,
  },
  {
    name: "Gustavo Ruiz",
    text: "Gostaria de expressar minha satisfação com a experiência que tive com o escritório, e especialmente com a atuação da Dra. Mariana Gioia. Cuidou do meu processo com grande destreza, resultando em uma negociação impecável.",
    rating: 5,
  },
  {
    name: "Efigênia A. Evangelista",
    text: "Fui prontamente e muito bem atendida pela Dra. Gioia, num momento muito crítico em relação a minha saúde. Precisei entrar na justiça e em menos de 15 dias já estava marcado o procedimento. Só tenho muita gratidão.",
    rating: 5,
  },
  {
    name: "Patricia Lucarelli",
    text: "Minha experiência com a Dra. Gioia foi além das minhas expectativas! Ela é muito competente, atenciosa, está sempre atenta aos prazos e sempre dá um feedback sobre o andamento do processo! Achei uma advogada para levar para a vida!",
    rating: 5,
  },
  {
    name: "Irlanda Cavalcante",
    text: "Um dos melhores escritórios, com certeza. Atendimento de ponta, com explicações claras e altíssimo índice de resolução de problemas. Agradeço e indico sempre.",
    rating: 5,
  },
  {
    name: "Jonathan M. Carrião",
    text: "Precisei dos serviços mais de uma vez e fui muito bem atendido! E, o melhor, fizeram um trabalho excelente em tempo recorde! Recomendo muito!",
    rating: 5,
  },
  {
    name: "Rafaela Arcuri",
    text: "Não tenho dúvidas, se preciso de suporte jurídico é Dra. Mariana Gioia que procuro. Atendimento excelente e excepcional sempre!",
    rating: 5,
  },
  {
    name: "Alessandro Aparecido",
    text: "Profissionais de excelência. Eles realmente entregam os serviços, são advogados responsáveis e íntegros. Recomendo!",
    rating: 5,
  },
  {
    name: "Ana Ligia",
    text: "Minha experiência foi maravilhosa. Minha advogada foi extremamente atenciosa e eficiente e eu só tenho a agradecer a ela!",
    rating: 5,
  },
  {
    name: "Marília Lopes",
    text: "Prestação de serviço de qualidade e honestidade.",
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FBBC04]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleLogo() {
  return (
    <Image
      src="/google-logo.svg"
      alt="Google"
      width={60}
      height={20}
      className="h-5 w-auto opacity-60"
    />
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-[340px] md:w-[400px] bg-white border border-stone-200 p-8 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Stars count={testimonial.rating} />
        <GoogleLogo />
      </div>
      <p className="text-stone-600 font-sans text-sm leading-relaxed line-clamp-4">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <p className="text-stone-900 font-sans text-xs font-bold uppercase tracking-[0.15em] mt-auto pt-2 border-t border-stone-100">
        {testimonial.name}
      </p>
    </div>
  )
}

export function TestimonialsTicker() {
  // Duplicate for seamless loop
  const items = [...testimonials, ...testimonials]

  return (
    <section className="w-full py-20 md:py-24 bg-stone-50 overflow-hidden border-y border-stone-200">
      <div className="container px-6 md:px-12 lg:px-24 mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-[0.25em] block mb-4">
              Avaliações Reais
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
              O que nossos clientes dizem
            </h2>
          </div>
        </div>
      </div>

      {/* Mobile: free carousel */}
      <div className="md:hidden overflow-x-auto px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-4 pb-2">
          {testimonials.map((t, i) => (
            <TestimonialCard key={`mobile-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
      <div className="md:hidden px-6 mt-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-stone-400">
          Deslize para ver mais
        </p>
      </div>

      {/* Desktop ticker */}
      <div className="hidden md:block">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />
          <div
            className="flex gap-6 animate-ticker-left md:[animation-duration:30s]"
          >
            {items.map((t, i) => (
              <TestimonialCard key={`row1-${i}`} testimonial={t} />
            ))}
          </div>
        </div>

        <div className="relative mt-6">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />
          <div
            className="flex gap-6 animate-ticker-right md:[animation-duration:32s]"
          >
            {[...items].reverse().map((t, i) => (
              <TestimonialCard key={`row2-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
