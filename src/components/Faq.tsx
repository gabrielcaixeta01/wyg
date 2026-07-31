"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * ⚠️ COPY PENDENTE DE CONFIRMAÇÃO COMERCIAL.
 *
 * As respostas marcadas com `needsReview` foram inferidas do que a landing já
 * afirma (3 meses grátis, comissão de 4–12% sobre consumo registrado via CPF,
 * regras de benefício definidas pelo bar, avaliação por GPS). As demais
 * descrevem política que ainda não está documentada em lugar nenhum do site —
 * revise antes de publicar.
 */
const FAQ = [
  {
    q: "Como o CPF é registrado no caixa? Isso trava a fila?",
    a: "O operador informa o CPF no painel ao fechar a conta. São alguns segundos e não muda a forma como você já cobra — a WYG registra o consumo em paralelo, não substitui o seu sistema.",
    needsReview: true,
  },
  {
    q: "E se o cliente não quiser informar o CPF?",
    a: "Nada muda na venda. O cliente simplesmente não acumula pontos naquela visita, e aquele consumo não entra na base de cálculo da comissão. Se não foi registrado, não é cobrado.",
  },
  {
    q: "Como vocês definem se eu pago 4% ou 12%?",
    a: "O percentual é acordado antes de qualquer cobrança, junto com a equipe comercial, e leva em conta o porte do bar e o volume de consumo registrado. Ele não muda sozinho depois de fechado.",
  },
  {
    q: "O que acontece quando terminam os 3 meses grátis?",
    a: "A partir do 4º mês a comissão passa a incidir apenas sobre o consumo registrado via CPF no seu bar. Se em um mês nada for registrado, não há cobrança naquele mês.",
  },
  {
    q: "Existe contrato de fidelidade? Posso sair quando quiser?",
    a: "Não há período mínimo de permanência. Você pode encerrar a parceria quando quiser e o bar deixa de aparecer no app, sem multa.",
    needsReview: true,
  },
  {
    q: "Preciso comprar equipamento ou trocar meu sistema de caixa?",
    a: "Não. O painel funciona no navegador, em qualquer computador, tablet ou celular que já esteja no balcão.",
    needsReview: true,
  },
  {
    q: "Quem define os benefícios que os pontos compram?",
    a: "Você. O bar escolhe o que entra no catálogo — drink, entrada, desconto — e quantos pontos cada benefício custa. A WYG não interfere nessa regra.",
  },
  {
    q: "Como vocês impedem avaliação falsa?",
    a: "Só avalia quem esteve no local: a avaliação é liberada por verificação de GPS. Concorrente e cliente que nunca foi ao bar não conseguem avaliar.",
  },
];

export default function Faq() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple/40 to-transparent" />

      {/* Rich snippet: the answers are already in the DOM, this just types them. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-center leading-tight tracking-tight mb-5"
        >
          Perguntas frequentes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lavender text-lg text-center max-w-xl mx-auto leading-relaxed mb-14"
        >
          O que os donos de bar mais perguntam antes de fechar parceria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col divide-y divide-white/8 border-y border-white/8"
        >
          {FAQ.map(({ q, a }) => (
            /* Native <details>: keyboard-accessible and open to crawlers with no JS. */
            <details key={q} className="group py-1">
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none py-5 [&::-webkit-details-marker]:hidden">
                <span className="text-white font-semibold text-base leading-snug">
                  {q}
                </span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 mt-0.5 text-purple-light transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="text-muted text-sm leading-relaxed pb-5 pr-10">{a}</p>
            </details>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple/40 to-transparent" />
    </section>
  );
}
