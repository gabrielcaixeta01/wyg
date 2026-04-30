"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "O que é", href: "#sobre" },
  { label: "Para o bar", href: "#para-o-bar" },
  { label: "Pontos", href: "#pontos" },
  { label: "Preços", href: "#precos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? "py-3 glass-card border-white/5 backdrop-blur-xl"
            : "py-5 bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden glow-purple-sm shrink-0">
              <Image src="/logo.png" alt="WYG logo" width={36} height={36} className="w-full h-full object-cover" priority />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              WYG
              <span className="text-lavender font-normal text-sm ml-1 hidden sm:inline">
                Where You Going
              </span>
            </span>
          </motion.button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-lavender hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer hover:text-glow"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile menu toggle */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleNav("#contato")}
              className="hidden md:flex items-center gap-2 bg-purple hover:bg-purple-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 btn-shimmer glow-purple-sm"
            >
              Cadastrar grátis
            </motion.button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden text-lavender hover:text-white transition-colors p-1"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 pt-20 pb-8 px-6 flex flex-col glass-card backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-2xl font-semibold text-white hover:text-purple-light transition-colors cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="mt-auto">
              <button
                onClick={() => handleNav("#contato")}
                className="w-full bg-purple text-white font-bold py-4 rounded-2xl text-lg btn-shimmer glow-purple"
              >
                Cadastrar meu bar — é grátis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
