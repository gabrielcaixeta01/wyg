"use client";

import { MessageCircle, Mail } from "lucide-react";
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

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0">
            <Image src="/logo.png" alt="WYG logo" width={32} height={32} className="w-full h-full object-cover" />
          </div>
          <span className="text-white font-bold">WYG</span>
          <span className="text-muted text-sm hidden sm:inline">— Where You Going</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:contato@wyg.com.br"
            className="text-muted hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://instagram.com/wygapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href="https://tr.ee/VtU_LN2Jfm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        <p className="text-muted text-xs">
          © {new Date().getFullYear()} WYG. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
