import type { Metadata } from "next";
import { Playfair_Display, Inter, Pinyon_Script } from "next/font/google"; // Editorial + Premium Signature
import "./globals.css";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif", // Renaming to generic token for easier swapping
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

export const metadata: Metadata = {
  title: "Gioia e Associados",
  description: "Advocacia de excelência em Direito Médico e Trabalhista",
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
