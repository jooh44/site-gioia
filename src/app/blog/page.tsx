export default function BlogPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-4">
                Em Breve
            </h1>
            <p className="text-stone-500 max-w-[600px] text-lg">
                Nossos artigos e atualizações jurídicas estarão disponíveis aqui em breve.
            </p>
            {/* 
        TODO: Future CMS Integration
        - This page will eventually fetch articles from Strapi/Sanity
        - Use getStaticProps/generateStaticParams for SSG
      */}
        </div>
    )
}
