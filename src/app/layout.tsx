import type { Metadata, Viewport } from "next";
import { Geist, Bricolage_Grotesque } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import { OG_BASE, SITE_URL } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

/**
 * Display face. An editorial grotesque with slightly irregular shapes — reads
 * closer to a night-out poster than the geometric sans every SaaS dashboard
 * uses, while still holding up at very large weights.
 */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  // 600 for the pull quote, 800 for headings (font-black clamps down to it).
  weight: ["600", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // `template` applies to child segments only — the home page uses `default`.
  title: {
    default: "WYG — Where You Going | Conecte seu bar a quem quer sair agora",
    template: "%s | WYG",
  },
  description:
    "A WYG conecta bares a pessoas que estão decidindo onde ir em tempo real. Mais visibilidade, mais clientes, mais recorrência. Comece grátis.",
  keywords: ["wyg", "ticketeria", "bar", "festa", "clientes", "fidelização"],
  openGraph: {
    ...OG_BASE,
    title: "WYG — Where You Going",
    description: "Conecte seu bar a quem quer sair agora.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "WYG — Where You Going",
    description: "Conecte seu bar a quem quer sair agora.",
  },
};

export const viewport: Viewport = {
  themeColor: "#06070F",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${bricolage.variable} h-full`}>
      <body className="min-h-full antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
