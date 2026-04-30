"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Mail, ExternalLink } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.01" fill="currentColor" strokeWidth="3"/>
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-80 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="orb w-150 h-150 bg-purple/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block glass-card-purple text-purple-light text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
          >
            Contato
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4"
          >
            Fale com a
            <br />
            <span className="gradient-text">equipe WYG.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lavender text-lg max-w-md mx-auto leading-relaxed"
          >
            Estamos prontos para tirar suas dúvidas e apresentar o que a WYG pode fazer pelo seu bar.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="glass-card rounded-3xl p-8 border-gradient flex flex-col gap-3"
        >
          <a
            href="mailto:contato@wyg.com.br"
            className="flex items-center gap-4 glass-card rounded-xl px-5 py-4 hover:border-purple/40 hover:bg-purple/5 transition-all duration-200 group"
          >
            <div className="w-11 h-11 rounded-xl bg-purple/20 border border-purple/30 flex items-center justify-center text-purple-light group-hover:bg-purple/40 transition-colors shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">E-mail</p>
              <p className="text-muted text-sm">contato@wyg.com.br</p>
            </div>
          </a>
          <a
            href="https://instagram.com/wygapp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 glass-card rounded-xl px-5 py-4 hover:border-purple/40 hover:bg-purple/5 transition-all duration-200 group"
          >
            <div className="w-11 h-11 rounded-xl bg-purple/20 border border-purple/30 flex items-center justify-center text-purple-light group-hover:bg-purple/40 transition-colors shrink-0">
              <InstagramIcon size={18} />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Instagram</p>
              <p className="text-muted text-sm">@wygapp</p>
            </div>
          </a>
          <a
            href="https://tr.ee/VtU_LN2Jfm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 glass-card rounded-xl px-5 py-4 hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-200 group"
          >
            <div className="w-11 h-11 rounded-xl bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:bg-green-500/25 transition-colors shrink-0">
              <MessageCircle size={18} />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Comunidade WhatsApp</p>
              <p className="text-muted text-sm">Dicas, novidades e rede de bares</p>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center mt-8"
        >
          <p className="text-muted text-sm">
            Já tem uma conta?{" "}
            <a
              href="/login"
              className="text-purple-light font-semibold hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Entrar na plataforma <ExternalLink size={12} />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
