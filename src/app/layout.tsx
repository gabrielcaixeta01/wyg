import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "WYG — Where You Going | Conecte seu bar a quem quer sair agora",
  description:
    "O WYG conecta bares a pessoas que estão decidindo onde ir em tempo real. Mais visibilidade, mais clientes, mais recorrência. Comece grátis.",
  keywords: ["wyg", "ticketeria", "bar", "festa", "clientes", "fidelização"],
  openGraph: {
    title: "WYG — Where You Going",
    description: "Conecte seu bar a quem quer sair agora.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
