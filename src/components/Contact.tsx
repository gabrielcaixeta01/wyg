"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Mail, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", bar: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-80 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="orb w-150 h-150 bg-purple/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block glass-card-purple text-purple-light text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
          >
            Cadastro
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4"
          >
            Cadastre seu bar
            <br />
            <span className="gradient-text">gratuitamente.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lavender text-lg max-w-md mx-auto leading-relaxed"
          >
            Nossa equipe entra em contato para configurar tudo.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {submitted ? (
              <div className="glass-card-purple rounded-3xl p-10 border-gradient flex flex-col items-center text-center gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center"
                >
                  <CheckCircle2 size={36} className="text-green-400" />
                </motion.div>
                <div>
                  <h3 className="text-white font-black text-2xl mb-2">Cadastro enviado!</h3>
                  <p className="text-lavender text-base leading-relaxed">
                    Nossa equipe vai entrar em contato em breve pelo e-mail ou WhatsApp
                    informados. Prepare-se para aparecer na WYG.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 border-gradient flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-lavender text-xs font-semibold uppercase tracking-wider block mb-2">
                      Seu nome
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="João Silva"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted text-sm focus:outline-none focus:border-purple/60 focus:bg-purple/5 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-lavender text-xs font-semibold uppercase tracking-wider block mb-2">
                      Nome do bar
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Bar do João"
                      value={form.bar}
                      onChange={(e) => setForm({ ...form, bar: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted text-sm focus:outline-none focus:border-purple/60 focus:bg-purple/5 transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-lavender text-xs font-semibold uppercase tracking-wider block mb-2">
                    E-mail
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="joao@seubar.com.br"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted text-sm focus:outline-none focus:border-purple/60 focus:bg-purple/5 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-lavender text-xs font-semibold uppercase tracking-wider block mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="(61) 99999-9999"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-muted text-sm focus:outline-none focus:border-purple/60 focus:bg-purple/5 transition-all duration-200"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(16,64,200,0.7)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-purple text-white font-bold py-4 rounded-xl btn-shimmer glow-purple transition-all duration-300 cursor-pointer text-base mt-1"
                >
                  Cadastrar gratuitamente
                  <ArrowRight size={18} />
                </motion.button>

                <p className="text-muted text-xs text-center">
                  Seus dados nunca serão compartilhados.
                </p>
              </form>
            )}
          </motion.div>

          {/* ── Right: Contact channels ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div className="glass-card rounded-2xl p-6">
              <p className="text-white font-bold text-base mb-4">Fale com a gente</p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:contato@wyg.com.br"
                  className="flex items-center gap-3 glass-card rounded-xl px-4 py-3.5 hover:border-purple/40 hover:bg-purple/5 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple/20 border border-purple/30 flex items-center justify-center text-purple-light group-hover:bg-purple/40 transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Email</p>
                    <p className="text-muted text-xs">contato@wyg.com.br</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/wygapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass-card rounded-xl px-4 py-3.5 hover:border-purple/40 hover:bg-purple/5 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple/20 border border-purple/30 flex items-center justify-center text-purple-light group-hover:bg-purple/40 transition-colors">
                    <InstagramIcon size={16} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Instagram</p>
                    <p className="text-muted text-xs">@wygapp</p>
                  </div>
                </a>
                <a
                  href="https://tr.ee/VtU_LN2Jfm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass-card rounded-xl px-4 py-3.5 hover:border-purple/40 hover:bg-purple/5 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:bg-green-500/25 transition-colors">
                    <MessageCircle size={16} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Comunidade WhatsApp</p>
                    <p className="text-muted text-xs">Dicas, novidades e rede de bares</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="text-center pt-2">
              <p className="text-muted text-sm">
                Já tem uma conta?{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-light font-semibold hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Fazer login <ExternalLink size={12} />
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
