"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Mail, Lock } from "lucide-react";
import { INPUT_CLASS as inputClass } from "@/lib/forms";

export default function LoginView() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-dvh flex flex-col lg:flex-row">

      {/* ── Top/Left: Institutional ── */}
      <div
        className="relative lg:w-1/2 flex flex-col justify-start lg:justify-between overflow-hidden px-6 pt-8 pb-16 lg:p-16 lg:min-h-dvh"
        style={{ background: "linear-gradient(145deg, #04050C 0%, #080D22 45%, #0C0820 100%)" }}
      >
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="orb w-56 h-56 lg:w-96 lg:h-96 bg-purple/20 -top-16 -left-16 lg:-top-20 lg:-left-20" style={{ animationDelay: "0s" }} />
        <div className="orb w-40 h-40 lg:w-72 lg:h-72 bg-accent/15 bottom-4 -right-6 lg:bottom-10 lg:-right-10" style={{ animationDelay: "2s" }} />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden glow-purple-sm shrink-0">
            <Image src="/logo.png" alt="WYG" width={40} height={40} className="w-full h-full object-cover" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">WYG</span>
        </div>

        {/* Main content */}
        <div className="relative z-10 lg:my-auto mt-6 lg:mt-0 py-0 lg:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl lg:text-5xl xl:text-6xl font-black leading-[1.1] lg:leading-[1.05] tracking-tight mb-3 lg:mb-6"
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
            className="text-lavender text-sm lg:text-lg leading-relaxed max-w-md"
          >
            Acesse os dados de consumo, fidelização e lotação do seu bar em tempo real.
          </motion.p>
        </div>

        <div className="relative z-10 text-muted text-xs hidden lg:block">
          © {new Date().getFullYear()} WYG · Where You Going
        </div>
      </div>

      {/* ── Bottom/Right: Login form (docked sheet on mobile) ── */}
      <div
        className="relative lg:w-1/2 flex items-center justify-center -mt-8 lg:mt-0 rounded-t-4xl lg:rounded-none border-t border-white/10 lg:border-t-0 shadow-[0_-24px_50px_-20px_rgba(0,0,0,0.6)] lg:shadow-none px-6 pt-10 pb-10 lg:p-16"
        style={{ background: "#06070F" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full max-w-md"
        >
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-muted hover:text-lavender text-sm transition-colors mb-6 lg:mb-10 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Voltar para o site
          </Link>

          <h2 className="text-white font-black text-3xl lg:text-4xl mb-2">Entrar</h2>
          <p className="text-lavender text-base mb-8 leading-relaxed">
            Use sua conta de parceiro WYG
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="login-email"
                className="text-lavender text-xs font-semibold uppercase tracking-wider block mb-2"
              >
                E-mail
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                <input
                  id="login-email"
                  name="email"
                  autoComplete="email"
                  required
                  type="email"
                  placeholder="joao@bar.com.br"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="text-lavender text-xs font-semibold uppercase tracking-wider block mb-2"
              >
                Senha
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                <input
                  id="login-password"
                  name="password"
                  autoComplete="current-password"
                  required
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className={inputClass}
                />
              </div>
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

          <p className="mt-8 text-center text-muted text-xs lg:hidden">
            © {new Date().getFullYear()} WYG · Where You Going
          </p>
        </motion.div>
      </div>
    </div>
  );
}
