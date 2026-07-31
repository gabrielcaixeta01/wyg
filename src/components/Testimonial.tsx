"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   ⛔ CONTEÚDO FICTÍCIO — NÃO PUBLICAR ⛔

   "Quintal da Tia Sandra", a pessoa citada e os números abaixo foram
   INVENTADOS a pedido, apenas para visualizar o layout da prova social.

   Nada aqui aconteceu. Publicar este bloco como está seria atribuir a um
   estabelecimento e a uma pessoa uma declaração que eles nunca deram.

   Antes de qualquer deploy: substitua por um depoimento real e autorizado,
   ou remova <Testimonial /> de src/app/page.tsx.
   ═══════════════════════════════════════════════════════════════════════════ */
export const IS_PLACEHOLDER = true;

const TESTIMONIAL = {
  quote:
    "Terça era o dia morto do Quintal. Depois da WYG, começou a chegar gente que nunca tinha ouvido falar da gente — via a lotação subindo no app e vinha ver o que estava acontecendo. Hoje terça é dia de escala cheia.",
  author: "Sandra Nogueira",
  role: "proprietária do Quintal da Tia Sandra",
  place: "Sudoeste · Brasília, DF",
  initials: "QS",
  stats: [
    { value: "+38%", label: "movimento nas terças" },
    { value: "4 meses", label: "usando a WYG" },
  ],
};

export default function Testimonial() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-ember/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Quote
            size={32}
            aria-hidden="true"
            className="text-ember/50 mx-auto mb-8 rotate-180"
          />

          <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-[1.3] text-balance">
            “{TESTIMONIAL.quote}”
          </blockquote>

          <figcaption className="mt-10 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-ember/30 to-ember/10 border border-ember/30 flex items-center justify-center text-ember font-bold text-sm">
              {TESTIMONIAL.initials}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{TESTIMONIAL.author}</p>
              <p className="text-muted text-sm">{TESTIMONIAL.role}</p>
              <p className="text-muted text-xs mt-0.5">{TESTIMONIAL.place}</p>
            </div>
          </figcaption>

          <div className="flex items-center justify-center divide-x divide-white/10 mt-10">
            {TESTIMONIAL.stats.map((stat) => (
              <div key={stat.label} className="px-8">
                <p className="font-display text-white font-extrabold text-3xl">
                  {stat.value}
                </p>
                <p className="text-muted text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
