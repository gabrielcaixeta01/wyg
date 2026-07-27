"use client";

import { MessageCircle, Mail, ArrowUp } from "lucide-react";
import Image from "next/image";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.01" fill="currentColor" strokeWidth="3"/>
    </svg>
  );
}

const quickLinks = [
  { label: "O que é", href: "#sobre" },
  { label: "Para o bar", href: "#para-o-bar" },
  { label: "Pontos", href: "#pontos" },
  { label: "Preços", href: "#precos" },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-8">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0">
                <Image src="/logo.png" alt="WYG logo" width={32} height={32} className="w-full h-full object-cover" />
              </div>
              <span className="text-white font-bold">WYG</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Conecte seu bar a quem quer sair agora — visibilidade em tempo real para
              bares em Brasília.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-col gap-3">
            <span className="text-muted text-xs font-semibold uppercase tracking-widest mb-1">
              Navegação
            </span>
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lavender hover:text-white text-sm transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <span className="text-muted text-xs font-semibold uppercase tracking-widest mb-1">
              Contato
            </span>
            <div className="flex items-center gap-3">
              <a
                href="mailto:contato@wyg.com.br"
                aria-label="Email"
                className="w-9 h-9 flex items-center justify-center rounded-full text-muted hover:text-white hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://instagram.com/wygapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full text-muted hover:text-white hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://tr.ee/VtU_LN2Jfm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 flex items-center justify-center rounded-full text-muted hover:text-white hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} WYG. Todos os direitos reservados.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-muted hover:text-white text-xs transition-colors cursor-pointer group"
          >
            Voltar ao topo
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
