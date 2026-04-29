"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, BarChart2, MapPin } from "lucide-react";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const, delay } },
});

const CARDS = [
  {
    icon: <Eye size={20} />,
    title: "Visibilidade real",
    desc: "Seu bar aparece no mapa e na lista de quem está próximo — com foto, lotação ao vivo e informações sempre atualizadas. Presença no momento em que a decisão acontece.",
  },
  {
    icon: <MapPin size={20} />,
    title: "Lotação ao vivo",
    desc: "Usuários votam na escala de vazio a cheio enquanto estão no local. Bares movimentados ganham destaque automático no app.",
  },
  {
    icon: <BarChart2 size={20} />,
    title: "Dados dos clientes",
    desc: "Seu bar acessa dados reais: horários de pico, faixa etária do público, ticket médio e comportamento de consumo — tudo no painel.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center mb-5"
        >
          <span className="glass-card-purple text-purple-light text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
            O que é o WYG
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-center leading-tight tracking-tight mb-6"
        >
          O que é o WYG?
        </motion.h2>

        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-lavender text-lg sm:text-xl text-center max-w-2xl mx-auto leading-relaxed mb-16"
        >
          Um aplicativo que ajuda pessoas a decidirem{" "}
          <strong className="text-white">onde sair em Brasília</strong> com base em
          localização, lotação ao vivo e preferências. Para o seu bar, isso significa
          aparecer para usuários próximos, ativos e prontos para sair naquele momento.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-5 mb-20">
          {CARDS.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp(0.1 + i * 0.12)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass-card rounded-2xl p-6 card-hover group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple/20 border border-purple/30 flex items-center justify-center text-purple-light mb-4 group-hover:bg-purple/40 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual: radar */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative glass-card border-gradient rounded-3xl p-8 sm:p-12 overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-purple-light text-sm font-bold uppercase tracking-widest mb-4">
                Como o WYG pensa
              </p>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
                Não é anúncio.
                <br />
                É presença no{" "}
                <span className="gradient-text">momento certo.</span>
              </h3>
              <p className="text-lavender leading-relaxed mb-6">
                O WYG só aparece para pessoas{" "}
                <strong className="text-white">que já decidiram sair</strong> e estão
                próximas do seu bar agora. É público qualificado, convertendo em tempo real.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Usuários próximos e prontos para consumir",
                  "Lotação e atividade atualizadas ao vivo",
                  "Dados reais de quem frequenta seu bar",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-purple/30 border border-purple/50 flex items-center justify-center text-purple-light text-xs shrink-0 mt-0.5">✓</span>
                    <span className="text-white text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center h-64">
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl overflow-hidden glow-purple">
                  <Image src="/logo.png" alt="WYG" width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-xs font-semibold bg-navy px-2 py-0.5 rounded-full border border-purple/30">
                  Seu bar
                </span>
              </div>

              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute rounded-full border border-purple/20"
                  style={{ width: ring * 90, height: ring * 90 }}
                  animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.2, 0.4] }}
                  transition={{ duration: 2.5, delay: ring * 0.4, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}

              {[
                { top: "10%", left: "20%", delay: 0.2 },
                { top: "15%", right: "15%", delay: 0.5 },
                { bottom: "20%", left: "15%", delay: 0.8 },
                { bottom: "15%", right: "20%", delay: 1.1 },
                { top: "40%", left: "5%", delay: 0.4 },
                { top: "35%", right: "8%", delay: 0.9 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-5 h-5 rounded-full bg-lavender/40 border border-lavender/60 flex items-center justify-center"
                  style={pos as React.CSSProperties}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: pos.delay, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
