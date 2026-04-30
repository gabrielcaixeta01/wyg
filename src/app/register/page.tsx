"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Shield } from "lucide-react";

const inputClass =
  "w-full bg-white/[0.04] border border-white/[0.08] rounded-2xl px-4 py-3.5 text-white placeholder-muted text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/[0.05] transition-all duration-200";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    establishment: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* ── Left: Institutional ── */}
      <div
        className="relative lg:w-1/2 flex flex-col justify-between p-10 lg:p-16 overflow-hidden min-h-[40vh] lg:min-h-screen"
        style={{ background: "linear-gradient(145deg, #04050C 0%, #080D22 45%, #0C0820 100%)" }}
      >
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="orb w-96 h-96 bg-purple/20 -top-20 -left-20" style={{ animationDelay: "0s" }} />
        <div className="orb w-72 h-72 bg-accent/15 bottom-10 -right-10" style={{ animationDelay: "2s" }} />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden glow-purple-sm shrink-0">
            <Image src="/logo.png" alt="WYG" width={40} height={40} className="w-full h-full object-cover" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">WYG</span>
        </div>

        {/* Main content */}
        <div className="relative z-10 my-auto py-12 lg:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight mb-6"
          >
            Leve seu bar
            <br />a outro nível
            <br />
            <span className="gradient-text">com a WYG.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lavender text-lg leading-relaxed max-w-md"
          >
            Nossa equipe comercial entrará em contato para apresentar os benefícios
            e condições de parceria exclusivas para o seu estabelecimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex gap-10 mt-12"
          >
            {[
              { value: "100%", label: "Gratuito para começar" },
              { value: "24h", label: "Resposta garantida" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-white font-black text-2xl">{stat.value}</p>
                <p className="text-muted text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 text-muted text-xs">
          © 2025 WYG · Where You Going
        </div>
      </div>

      {/* ── Right: Form ── */}
      <div
        className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16"
        style={{ background: "#06070F" }}
      >
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full max-w-md"
        >
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-muted hover:text-lavender text-sm transition-colors mb-10 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Voltar para o site
          </Link>

          {/* Small logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0">
              <Image src="/logo.png" alt="WYG" width={32} height={32} className="w-full h-full object-cover" />
            </div>
            <span className="text-lavender text-sm font-medium">WYG</span>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-white font-black text-2xl mb-3">Mensagem enviada!</h2>
              <p className="text-lavender text-base leading-relaxed">
                Nossa equipe vai entrar em contato em breve pelo e-mail ou WhatsApp informados.
                Prepare-se para aparecer na WYG.
              </p>
            </motion.div>
          ) : (
            <>
              <h1 className="text-white font-black text-3xl lg:text-4xl mb-2">Quero ser parceiro</h1>
              <p className="text-lavender text-base mb-8 leading-relaxed">
                Preencha os dados abaixo e entraremos em contato.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-lavender text-xs font-semibold uppercase tracking-wider block mb-2">
                      E-mail
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="joao@bar.com.br"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
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
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-lavender text-xs font-semibold uppercase tracking-wider block mb-2">
                    Nome do estabelecimento
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Bar do João"
                    value={form.establishment}
                    onChange={(e) => setForm({ ...form, establishment: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-lavender text-xs font-semibold uppercase tracking-wider block mb-2">
                    Mensagem{" "}
                    <span className="text-muted normal-case font-normal">(opcional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte um pouco sobre o seu bar..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(109,40,217,0.45)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-2xl btn-shimmer transition-all duration-300 cursor-pointer text-base mt-2"
                  style={{ background: "linear-gradient(135deg, #6D28D9 0%, #1040C8 100%)" }}
                >
                  Enviar mensagem
                  <ArrowRight size={18} />
                </motion.button>

                <div className="flex items-start gap-2 mt-1">
                  <Shield size={13} className="text-muted shrink-0 mt-0.5" />
                  <p className="text-muted text-xs leading-relaxed">
                    Seus dados serão usados apenas para contato e não serão compartilhados com terceiros.
                  </p>
                </div>
              </form>
            </>
          )}

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-muted text-sm">
              Já tem acesso?{" "}
              <Link
                href="/login"
                className="text-purple-light font-semibold hover:text-white transition-colors"
              >
                Entrar na plataforma
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
