import type { Metadata } from "next";
import { Playfair_Display, Inter, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

const siteUrl = "https://gioiaeassociados.com.br"; // TODO: confirmar domínio final

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gioia e Associados Advocacia | Direito Médico e Trabalhista – Lapa, São Paulo",
    template: "%s | Gioia e Associados Advocacia",
  },
  description:
    "Escritório de advocacia com 34 anos de excelência em Direito Médico e Trabalhista em São Paulo. Liminares para planos de saúde em 24h, defesa do trabalhador e atendimento humanizado. Lapa – SP.",
  keywords: [
    "advogado direito médico São Paulo",
    "liminar plano de saúde",
    "advogado trabalhista Lapa SP",
    "negativa de cobertura plano de saúde",
    "Gioia e Associados",
    "advogado Lapa São Paulo",
    "direito médico hospitalar",
  ],
  authors: [{ name: "Gioia e Associados Advocacia" }],
  creator: "Gioia e Associados Advocacia",
  publisher: "Gioia e Associados Advocacia",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Gioia e Associados Advocacia",
    title: "Gioia e Associados Advocacia | Direito Médico e Trabalhista – Lapa, SP",
    description:
      "34 anos de excelência em Direito Médico e Trabalhista em São Paulo. Liminares em 24h. Atendimento humanizado. Lapa – SP.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Gioia e Associados Advocacia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gioia e Associados Advocacia | Direito Médico e Trabalhista",
    description: "34 anos de excelência em Direito Médico e Trabalhista em São Paulo.",
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-stone-50 font-sans antialiased",
          playfair.variable,
          inter.variable,
          pinyon.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
