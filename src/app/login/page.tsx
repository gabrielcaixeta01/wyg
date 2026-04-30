"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

const inputClass =
  "w-full bg-white/[0.04] border border-white/[0.08] rounded-2xl px-4 py-3.5 text-white placeholder-muted text-sm focus:outline-none focus:border-accent/60 focus:bg-accent/[0.05] transition-all duration-200";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            Bem-vindo
            <br />de volta ao
            <br />
            <span className="gradient-text">seu painel.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lavender text-lg leading-relaxed max-w-md"
          >
            Acesse os dados de consumo, fidelização e lotação do seu bar em tempo real.
          </motion.p>
        </div>

        <div className="relative z-10 text-muted text-xs">
          © 2025 WYG · Where You Going
        </div>
      </div>

      {/* ── Right: Login form ── */}
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

          <h1 className="text-white font-black text-3xl lg:text-4xl mb-2">Entrar</h1>
          <p className="text-lavender text-base mb-8 leading-relaxed">
            Use sua conta de parceiro WYG
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                Senha
              </label>
              <input
                required
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className={inputClass}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(109,40,217,0.45)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-2xl btn-shimmer transition-all duration-300 cursor-pointer text-base mt-2"
              style={{ background: "linear-gradient(135deg, #6D28D9 0%, #1040C8 100%)" }}
            >
              Entrar
              <ArrowRight size={18} />
            </motion.button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-muted text-sm">
              Ainda não é parceiro?{" "}
              <Link
                href="/register"
                className="text-purple-light font-semibold hover:text-white transition-colors"
              >
                Cadastrar meu bar
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
