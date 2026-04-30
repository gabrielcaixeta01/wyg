/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Flame, Map, Search, User } from "lucide-react";

type Particle = {
  id: number;
  size: number;
  left: string;
  delay: string;
  duration: string;
  opacity: number;
};

const LIVE_BARS = [
  { name: "Bar do Conde", occupancy: "Bombando", pct: 87 },
  { name: "Boteco Escuro", occupancy: "Lotado", pct: 96 },
  { name: "La Cave", occupancy: "Agitado", pct: 62 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

/* ── Inline map pins for the mini-map ── */
const MAP_PINS = [
  { top: "28%", left: "24%", delay: 0, color: "#3F6CF5", shadow: "rgba(63,108,245,0.9)" },
  { top: "58%", left: "62%", delay: 0.5, color: "#8B5CF6", shadow: "rgba(139,92,246,0.9)" },
  { top: "38%", left: "72%", delay: 1.0, color: "#F97316", shadow: "rgba(249,115,22,0.9)" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 1,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${8 + Math.random() * 12}s`,
        opacity: Math.random() * 0.4 + 0.1,
      }))
    );
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden animated-gradient-bg grid-pattern">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="orb w-150 h-150 bg-purple/20 -top-50 -left-37.5" style={{ animationDelay: "0s" }} />
      <div className="orb w-100 h-100 bg-purple/30 -bottom-25 -right-25" style={{ animationDelay: "3s" }} />
      <div className="orb w-75 h-75 bg-indigo-600/15 top-[40%] left-[60%]" style={{ animationDelay: "1.5s" }} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden" ref={canvasRef}>
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle bg-purple/60"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              bottom: "-10px",
              animationDelay: p.delay,
              animationDuration: p.duration,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div className="flex flex-col items-start">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            >
              Conecte seu bar a quem{" "}
              <span className="gradient-text text-glow">quer sair agora.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lavender text-lg sm:text-xl leading-relaxed mb-10 max-w-lg"
            >
              A WYG mostra seu bar em{" "}
              <strong className="text-white">tempo real</strong> para pessoas que estão
              decidindo onde ir — com{" "}
              <strong className="text-white">lotação ao vivo</strong>, sistema de pontos e
              dados reais dos seus clientes em um painel simples.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto"
            >
              <motion.a
                href="/register"
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(16,64,200,0.7)" }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-2 bg-purple text-white font-bold px-8 py-4 rounded-2xl text-base btn-shimmer glow-purple transition-all duration-300 cursor-pointer"
              >
                Cadastrar Meu Bar
                <ArrowRight size={18} />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center justify-center gap-2 glass-card text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all duration-300 hover:border-purple/40 cursor-pointer"
              >
                Entender o produto
              </motion.button>
            </motion.div>
          </div>

          {/* ── Right: iPhone Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" as const, delay: 0.3 }}
            className="relative hidden lg:flex flex-col items-center justify-center"
          >
            {/* Glow behind phone */}
            <div
              className="absolute w-64 h-64 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(16,64,200,0.18)" }}
            />

            {/* Phone frame + buttons wrapper */}
            <div className="relative">

              {/* Silent switch */}
              <div className="absolute -left-1.25 top-27 w-1.25 h-7 rounded-l-sm"
                style={{ background: "linear-gradient(to right, #3a3a3c, #2c2c2e)" }} />
              {/* Volume up */}
              <div className="absolute -left-1.25 top-37.5 w-1.25 h-13 rounded-l-sm"
                style={{ background: "linear-gradient(to right, #3a3a3c, #2c2c2e)" }} />
              {/* Volume down */}
              <div className="absolute -left-1.25 top-53.5 w-1.25 h-13 rounded-l-sm"
                style={{ background: "linear-gradient(to right, #3a3a3c, #2c2c2e)" }} />
              {/* Power button */}
              <div className="absolute -right-1.25 top-41 w-1.25 h-18 rounded-r-sm"
                style={{ background: "linear-gradient(to left, #3a3a3c, #2c2c2e)" }} />

              {/* Phone body */}
              <div
                className="w-67.5 h-142.5 rounded-[44px] p-0.75"
                style={{
                  background: "linear-gradient(160deg, #3a3a3c 0%, #1c1c1e 45%, #2c2c2e 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.4), 0 40px 100px rgba(0,0,0,0.75), 0 0 60px rgba(16,64,200,0.2)",
                }}
              >
                {/* Screen */}
                <div className="w-full h-full rounded-[42px] overflow-hidden flex flex-col"
                  style={{ background: "#06070F" }}>

                  {/* Dynamic Island */}
                  <div className="flex justify-center pt-3 shrink-0">
                    <div
                      className="w-29 h-8.25 rounded-full flex items-center justify-center gap-1.5"
                      style={{ background: "#000000" }}
                    >
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 mt-1 shrink-0">
                    <span className="text-white text-[11px] font-semibold">9:41</span>
                    <div className="flex items-center gap-1.5">
                      {/* Signal */}
                      <div className="flex items-end gap-0.5 h-3">
                        {[4, 6, 8, 10].map((h, i) => (
                          <div
                            key={i}
                            className="w-0.75 rounded-sm"
                            style={{
                              height: h,
                              background: i < 3 ? "white" : "rgba(255,255,255,0.3)",
                            }}
                          />
                        ))}
                      </div>
                      {/* Battery */}
                      <div className="flex items-center gap-0.5">
                        <div className="w-6 h-2.75 rounded-[3px] border border-white/60 flex items-center px-0.5">
                          <div className="w-4 h-1.5 bg-white rounded-[1px]" />
                        </div>
                        <div className="w-0.5 h-1.5 bg-white/40 rounded-r-sm" />
                      </div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-4 mt-2 flex items-center justify-between shrink-0">
                    <div>
                      <p className="text-white font-black text-base tracking-tight leading-none">WYG</p>
                      <p className="text-lavender text-[10px] flex items-center gap-0.5 mt-0.5">
                        <MapPin size={8} />
                        Asa Norte · Brasília, DF
                      </p>
                    </div>
                  </div>

                  {/* Mini map */}
                  <div
                    className="mx-3 mt-2.5 rounded-2xl overflow-hidden shrink-0 relative"
                    style={{ height: 138, background: "#080C1C" }}
                  >
                    {/* Street grid */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(16,64,200,0.14) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(16,64,200,0.14) 1px, transparent 1px)
                        `,
                        backgroundSize: "28px 28px",
                      }}
                    />
                    {/* Streets */}
                    <div className="absolute inset-0">
                      <div className="absolute h-0.5 left-0 right-0" style={{ top: "38%", background: "#0F1E3E" }} />
                      <div className="absolute h-0.5 left-0 right-0" style={{ top: "68%", background: "#0F1E3E" }} />
                      <div className="absolute w-0.5 top-0 bottom-0" style={{ left: "32%", background: "#0F1E3E" }} />
                      <div className="absolute w-0.5 top-0 bottom-0" style={{ left: "66%", background: "#0F1E3E" }} />
                    </div>

                    {/* Bar pins */}
                    {MAP_PINS.map((pin, i) => (
                      <div key={i} className="absolute" style={{ top: pin.top, left: pin.left }}>
                        <motion.div
                          animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2.2, repeat: Infinity, delay: pin.delay }}
                          className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
                          style={{ width: 20, height: 20, background: pin.color, opacity: 0.3 }}
                        />
                        <div
                          className="w-3 h-3 rounded-full border-2 border-white relative z-10"
                          style={{
                            background: pin.color,
                            boxShadow: `0 0 10px ${pin.shadow}`,
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      </div>
                    ))}

                    {/* User location */}
                    <div className="absolute top-1/2 left-[48%]">
                      <motion.div
                        animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
                        style={{ width: 22, height: 22, background: "#3F6CF5" }}
                      />
                      <div
                        className="w-4 h-4 rounded-full border-2 border-white relative z-10"
                        style={{
                          background: "#3F6CF5",
                          boxShadow: "0 0 10px rgba(63,108,245,0.9)",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    </div>

                    {/* Map label */}
                    <div
                      className="absolute top-2 right-2 px-2 py-0.5 rounded-md"
                      style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
                    >
                      <p className="text-white/50 text-[8px] font-medium">Brasília · DF</p>
                    </div>
                  </div>

                  {/* Bar list */}
                  <div className="px-3 mt-2.5 flex-1 overflow-hidden">
                    <p className="text-lavender text-[9px] font-bold uppercase tracking-wider mb-1.5">
                      Bares perto de você
                    </p>

                    {LIVE_BARS.map((bar, i) => (
                      <motion.div
                        key={bar.name}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.15 }}
                        className="flex items-center gap-2 mb-1.5 rounded-xl px-2.5 py-2"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: "rgba(16,64,200,0.25)" }}
                        >
                          <MapPin size={11} className="text-purple-light" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-[11px] font-semibold truncate leading-none mb-1">
                            {bar.name}
                          </p>
                          <div className="flex items-center gap-1.5">
                            <div
                              className="flex-1 h-1 rounded-full overflow-hidden"
                              style={{ background: "rgba(255,255,255,0.06)" }}
                            >
                              <motion.div
                                className="h-full rounded-full"
                                style={{
                                  background: "linear-gradient(to right, #1040C8, #8B5CF6)",
                                }}
                                initial={{ width: 0 }}
                                animate={{ width: `${bar.pct}%` }}
                                transition={{ delay: 1 + i * 0.15, duration: 0.8 }}
                              />
                            </div>
                            <span className="text-lavender text-[9px] shrink-0">{bar.pct}%</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 shrink-0">
                          <Flame size={9} className="text-orange-400" />
                          <span className="text-orange-400 text-[9px] font-semibold">{bar.occupancy}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom nav */}
                  <div
                    className="px-8 py-2.5 flex justify-around shrink-0"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div className="flex flex-col items-center gap-0.5">
                      <Map size={16} className="text-purple-light" />
                      <div className="w-1 h-1 rounded-full bg-purple-light" />
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Search size={16} className="text-muted" />
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <User size={16} className="text-muted" />
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div className="flex justify-center pb-2 shrink-0">
                    <div className="w-28 h-1.25 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
                  </div>

                </div>
              </div>
            </div>{/* /phone frame */}

            

          </motion.div>
        </div>
      </div>
    </section>
  );
}
