"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart2, Gift, Eye, Star } from "lucide-react";
import { MotionLink } from "./MotionLink";

const PANEL_STATS = ["Ticket médio", "Bairro de origem", "Faixa etária"];

/** Illustrative movement curve for the panel preview — labelled "Exemplo" in the UI. */
const PEAK_HOURS = [
  { hour: "18h", pct: 20 },
  { hour: "19h", pct: 36 },
  { hour: "20h", pct: 58 },
  { hour: "21h", pct: 82 },
  { hour: "22h", pct: 100 },
  { hour: "23h", pct: 74 },
  { hour: "00h", pct: 41 },
];

const SIDE_BENEFITS = [
  {
    icon: Gift,
    color: "from-violet-600/30 to-violet-600/10",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
    title: "Sistema de fidelização",
    desc: "Crie benefícios personalizados como drinks, entradas e descontos. As regras são definidas pelo próprio bar.",
    tag: "Fidelização",
  },
  {
    icon: Eye,
    color: "from-indigo-600/30 to-indigo-600/10",
    border: "border-indigo-500/30",
    iconColor: "text-indigo-400",
    title: "Visibilidade para quem decide",
    desc: "Seu bar aparece para o público certo no momento exato em que a pessoa está escolhendo onde ir.",
    tag: "Visibilidade",
  },
];

export default function ForTheBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="para-o-bar" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple/40 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-br from-purple/5 via-transparent to-indigo-900/5 pointer-events-none" />
      <div className="orb w-125 h-125 bg-purple/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5"
          >
            O que a WYG entrega
            <br />
            para o seu bar
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lavender text-lg max-w-xl mx-auto leading-relaxed"
          >
            Ferramentas concretas para atrair, fidelizar e entender seus clientes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-5">

          {/* ── Featured: Painel de gestão (large) ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="relative glass-card border-gradient rounded-2xl p-7 sm:p-8 card-hover group overflow-hidden sm:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-linear-to-br from-purple/30 to-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple/30 to-purple/10 border border-purple/30 flex items-center justify-center text-purple-light group-hover:scale-110 transition-transform duration-300">
                  <BarChart2 size={26} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-light opacity-60">
                  Dados
                </span>
              </div>

              <h3 className="text-white font-bold text-2xl leading-tight mb-3 max-w-xs">
                Painel de gestão completo
              </h3>
              <p className="text-muted text-sm leading-relaxed max-w-sm">
                Dados reais dos seus clientes — horário de pico, ticket médio, bairro de
                origem e histórico de consumo, tudo em tempo real num painel simples.
              </p>
            </div>

            {/* Panel preview: the card promises a dashboard, so it shows one. */}
            <div className="relative z-10 mt-8">
              <div className="rounded-xl border border-white/8 bg-black/25 p-5">
                <div className="flex items-baseline justify-between mb-4">
                  <p className="text-white text-sm font-semibold">Horário de pico</p>
                  <span className="text-muted text-[10px] font-semibold uppercase tracking-wider">
                    Exemplo
                  </span>
                </div>

                <div className="flex items-end gap-1.5 h-28">
                  {PEAK_HOURS.map((slot, i) => {
                    const isPeak = slot.pct === 100;
                    return (
                      <div
                        key={slot.hour}
                        className="flex-1 h-full flex flex-col justify-end items-center gap-2"
                      >
                        <div className="w-full flex-1 flex items-end">
                          <motion.div
                            className={`w-full rounded-t-sm ${
                              isPeak ? "bg-purple-light" : "bg-purple/45"
                            }`}
                            initial={{ height: 0 }}
                            animate={inView ? { height: `${slot.pct}%` } : { height: 0 }}
                            transition={{
                              duration: 0.7,
                              delay: 0.3 + i * 0.06,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                        <span
                          className={`text-[10px] ${
                            isPeak ? "text-purple-light font-bold" : "text-muted"
                          }`}
                        >
                          {slot.hour}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {PANEL_STATS.map((stat) => (
                  <span
                    key={stat}
                    className="text-xs text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Side cards ── */}
          {SIDE_BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: "easeOut" as const }}
                className="relative glass-card rounded-2xl p-6 card-hover group overflow-hidden lg:col-span-1"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${benefit.color} border ${benefit.border} flex items-center justify-center ${benefit.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={20} />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${benefit.iconColor} opacity-60`}>
                      {benefit.tag}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg leading-tight mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Avaliações verificadas: wide banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" as const }}
          className="relative glass-card rounded-2xl p-6 sm:p-7 card-hover group overflow-hidden mt-5 flex flex-col sm:flex-row sm:items-center gap-5"
        >
          <div className="absolute inset-0 bg-linear-to-br from-purple/30 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

          <div className="relative z-10 flex items-center justify-between sm:justify-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple/30 to-indigo-600/10 border border-purple/30 flex items-center justify-center text-purple-light shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Star size={22} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-light opacity-60 sm:hidden">
              Confiança
            </span>
          </div>

          <div className="relative z-10 flex-1">
            <h3 className="text-white font-bold text-lg leading-tight mb-1.5">
              Avaliações verificadas
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Só avalia quem esteve no local — verificação por GPS elimina avaliações
              falsas e garante que a reputação do seu bar reflita a realidade.
            </p>
          </div>

          <span className="relative z-10 shrink-0 hidden sm:block text-xs font-bold uppercase tracking-wider text-purple-light opacity-60 sm:self-start">
            Confiança
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between glass-card rounded-2xl px-8 py-6 gap-6"
        >
          <div>
            <p className="text-white font-bold text-lg mb-1">
              Pronto para começar?
            </p>
            <p className="text-muted text-sm">
              Grátis pelos primeiros 3 meses. Sem cartão de crédito.
            </p>
          </div>
          <MotionLink
            href="/register"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(70,34,165,0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0 bg-purple text-white font-bold px-8 py-3.5 rounded-xl btn-shimmer glow-purple-sm transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Cadastrar gratuitamente
          </MotionLink>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple/40 to-transparent" />
    </section>
  );
}
