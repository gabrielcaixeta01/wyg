"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight, Info } from "lucide-react";

const INCLUDED = [
  "Painel de gestão com dados reais",
  "Sistema de pontos e fidelização",
  "Visibilidade no app para usuários próximos",
  "Avaliações verificadas por GPS",
  "Suporte direto",
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="precos" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple/40 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block glass-card-purple text-purple-light text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
          >
            Modelo de cobrança
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5"
          >
            Simples, transparente
            <br />
            <span className="gradient-text">e ligado ao resultado</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lavender text-lg max-w-xl mx-auto leading-relaxed"
          >
            A comissão WYG incide apenas sobre o consumo registrado via CPF — e só começa
            a partir do 4º mês.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* ── Left: Main card ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card-purple rounded-3xl p-8 border-gradient relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="glass-card rounded-2xl p-6 mb-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-muted text-xs uppercase tracking-widest">Primeiros 3 meses</p>
                  <span className="bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold px-3 py-1 rounded-full">Grátis</span>
                </div>
                <p className="text-white font-black text-5xl mb-2">R$0</p>
                <p className="text-muted text-sm leading-relaxed">
                  Cadastre, configure o painel e comece a aparecer para os usuários.
                  Nenhuma cobrança no período de cortesia.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-muted text-xs uppercase tracking-widest">A partir do mês 4</p>
                  <span className="glass-card-purple text-purple-light text-xs font-bold px-3 py-1 rounded-full border border-purple/30">Comissão</span>
                </div>
                <p className="text-white font-black text-4xl mb-2">4% – 12%</p>
                <p className="text-muted text-sm leading-relaxed">
                  Sobre o consumo registrado via CPF no seu bar.
                  O percentual exato é negociado previamente — sem surpresas.
                </p>
              </div>

              <div className="flex items-start gap-3 mb-7 glass-card rounded-xl p-4">
                <Info size={15} className="text-purple-light shrink-0 mt-0.5" />
                <p className="text-lavender text-xs leading-relaxed">
                  A cobrança está diretamente ligada ao que é registrado no painel via CPF.
                  Se não registrou, não cobra. Controle total do seu lado.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(70,34,165,0.7)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full flex items-center justify-center gap-2 bg-purple text-white font-bold py-4 rounded-xl btn-shimmer glow-purple transition-all duration-300 cursor-pointer text-base"
              >
                Cadastrar gratuitamente
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>

          {/* ── Right: Included + timeline ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col gap-5"
          >
            <div className="glass-card rounded-2xl p-6">
              <p className="text-white font-bold text-base mb-5">Sempre incluso, sem custo adicional</p>
              <div className="flex flex-col gap-3">
                {INCLUDED.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-green-400 shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-white font-bold text-base mb-5">Como funciona na prática</p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    period: "Meses 1 – 3",
                    color: "bg-green-500/20 border-green-500/30 text-green-400",
                    desc: "Grátis. Cadastre, configure e apareça no app sem nenhuma cobrança.",
                  },
                  {
                    period: "A partir do mês 4",
                    color: "bg-purple/20 border-purple/30 text-purple-light",
                    desc: "Comissão de 4% a 12% sobre o consumo registrado via CPF, conforme acordado previamente.",
                  },
                  {
                    period: "Sempre incluso",
                    color: "bg-indigo-500/20 border-indigo-500/30 text-indigo-400",
                    desc: "Painel, pontos, avaliações e suporte fazem parte da plataforma — sem cobranças extras.",
                  },
                ].map((row, i) => (
                  <motion.div
                    key={row.period}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-full border ${row.color} whitespace-nowrap`}>
                      {row.period}
                    </span>
                    <p className="text-muted text-sm leading-relaxed pt-0.5">{row.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple/40 to-transparent" />
    </section>
  );
}
