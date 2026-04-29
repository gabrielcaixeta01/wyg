"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart2, Gift, Eye, Star } from "lucide-react";

const BENEFITS = [
  {
    icon: BarChart2,
    color: "from-purple/30 to-purple/10",
    border: "border-purple/30",
    iconColor: "text-purple-light",
    title: "Painel de gestão completo",
    desc: "Dados reais dos seus clientes: horário de pico, bairros de origem, ticket médio e histórico de consumo — tudo em tempo real, num painel simples.",
    tag: "Dados",
  },
  {
    icon: Gift,
    color: "from-violet-600/30 to-violet-600/10",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
    title: "Sistema de fidelização",
    desc: "Crie benefícios personalizados como drinks, entradas e descontos. As regras são definidas pelo próprio bar — você decide o que faz sentido para o seu negócio.",
    tag: "Fidelização",
  },
  {
    icon: Eye,
    color: "from-indigo-600/30 to-indigo-600/10",
    border: "border-indigo-500/30",
    iconColor: "text-indigo-400",
    title: "Visibilidade para quem decide",
    desc: "Seu bar aparece para o público certo no momento exato em que a pessoa está escolhendo onde ir — não é impressão, é intenção real de sair.",
    tag: "Visibilidade",
  },
  {
    icon: Star,
    color: "from-purple/30 to-indigo-600/10",
    border: "border-purple/30",
    iconColor: "text-purple-light",
    title: "Avaliações verificadas",
    desc: "Só avalia quem esteve no local. A verificação é feita por GPS, o que elimina avaliações falsas e garante que a reputação do seu bar reflita a realidade.",
    tag: "Confiança",
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
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block glass-card-purple text-purple-light text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
          >
            Para o seu bar
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5"
          >
            O que o WYG entrega
            <br />
            <span className="gradient-text">para o seu bar</span>
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

        <div className="grid sm:grid-cols-2 gap-5">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: "easeOut" as const }}
                className="relative glass-card rounded-2xl p-6 card-hover group overflow-hidden"
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
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(70,34,165,0.7)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
            className="shrink-0 bg-purple text-white font-bold px-8 py-3.5 rounded-xl btn-shimmer glow-purple-sm transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Cadastrar gratuitamente
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple/40 to-transparent" />
    </section>
  );
}
