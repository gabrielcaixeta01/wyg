"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Hash, QrCode, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: Hash,
    title: "Registro simples",
    desc: "O CPF é inserido após o pagamento e os pontos são creditados automaticamente. Sem ficha, sem cartão fidelidade.",
  },
  {
    icon: QrCode,
    title: "Resgate por código",
    desc: "O cliente gera um código no app e o bar valida no painel — os pontos são debitados na hora. Zero burocracia.",
  },
  {
    icon: TrendingUp,
    title: "Incentivo ao ticket maior",
    desc: "Gastos maiores acumulam pontos mais rápido. Quanto mais o cliente consome, mais rápido chega ao benefício — e mais motivo tem para voltar.",
  },
];

const TIERS = [
  { range: "R$0 – R$50", pct: "5%", width: "40%" },
  { range: "R$50 – R$100", pct: "7,5%", width: "60%" },
  { range: "R$100 – R$300", pct: "10%", width: "80%" },
  { range: "Acima de R$300", pct: "12%", width: "100%" },
];

export default function PointsSystem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pontos" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="orb w-100 h-100 bg-purple/20 -top-20 -right-20" />
      <div className="orb w-75 h-75 bg-indigo-800/20 -bottom-20 -left-20" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Copy + steps ── */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block glass-card-purple text-purple-light text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            >
              Sistema de pontos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-5"
            >
              Clientes que gastam mais,{" "}
              <span className="gradient-text">voltam mais.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lavender text-lg leading-relaxed mb-10"
            >
              O bar registra o consumo pelo CPF do cliente. O cliente acumula pontos para
              trocar por benefícios que você mesmo define. Quanto mais consome, mais rápido
              acumula — e mais incentivo tem para voltar.
            </motion.p>

            <div className="flex flex-col gap-6">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-purple/20 border border-purple/40 flex items-center justify-center text-purple-light shrink-0 group-hover:bg-purple/40 transition-colors duration-300">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1">{step.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Right: Conversion table + example ── */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 border-gradient"
            >
              <p className="text-white font-bold text-base mb-1">Conversão de pontos</p>
              <p className="text-muted text-xs mb-5">Quanto maior o consumo, maior o percentual em pontos</p>

              <div className="flex flex-col gap-4">
                {TIERS.map((tier, i) => (
                  <motion.div
                    key={tier.range}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-lavender text-xs">{tier.range}</span>
                      <span className="text-white font-bold text-sm">{tier.pct} em pontos</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-linear-to-r from-purple to-violet-400"
                        initial={{ width: 0 }}
                        animate={inView ? { width: tier.width } : { width: 0 }}
                        transition={{ duration: 0.9, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="glass-card-purple rounded-2xl p-6 border-gradient relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-48 h-48 bg-purple/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <p className="text-purple-light text-xs font-bold uppercase tracking-widest mb-3">Exemplo prático</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="glass-card rounded-xl px-4 py-3 text-center">
                    <p className="text-white font-black text-2xl">R$120</p>
                    <p className="text-muted text-xs mt-0.5">consumido</p>
                  </div>
                  <div className="text-lavender text-xl">→</div>
                  <div className="glass-card rounded-xl px-4 py-3 text-center">
                    <p className="text-white font-black text-2xl">12.000</p>
                    <p className="text-muted text-xs mt-0.5">pontos (10%)</p>
                  </div>
                </div>
                <p className="text-lavender text-sm leading-relaxed">
                  Na próxima visita, o cliente pode trocar os pontos por um benefício que você
                  mesmo configurou — um drink, desconto ou entrada.
                </p>
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-semibold text-sm">Pontos acumulados</span>
                <span className="text-purple-light font-black text-sm">12.000 / 15.000</span>
              </div>
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-linear-to-r from-purple to-violet-400 glow-purple-sm"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "80%" } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" as const }}
                />
              </div>
              <p className="text-muted text-xs mt-2">3.000 pontos para o próximo benefício 🍺</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
