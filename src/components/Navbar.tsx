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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500 ease-out ${
          scrolled ? "pt-3 px-4" : "pt-0 px-0"
        }`}
      >
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`w-full flex items-center justify-between transition-all duration-500 ease-out ${
            scrolled
              ? "max-w-4xl rounded-full border border-white/10 bg-navy/75 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.45)] px-4 py-2"
              : "max-w-7xl mx-auto rounded-none border border-transparent bg-transparent px-6 py-5"
          }`}
        >
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 cursor-pointer shrink-0"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden glow-purple-sm shrink-0">
              <Image src="/logo.png" alt="WYG logo" width={32} height={32} className="w-full h-full object-cover" priority />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              WYG
              <span
                className={`text-lavender font-normal text-sm ml-1 hidden transition-opacity duration-300 ${
                  scrolled ? "" : "sm:inline"
                }`}
              >
                Where You Going
              </span>
            </span>
          </motion.button>

          {/* Desktop links with sliding active pill */}
          <nav className="hidden md:flex items-center gap-1 mx-4">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="relative px-4 py-2 text-sm font-medium cursor-pointer"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.07] border border-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive ? "text-white" : "text-lavender hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* CTA + Mobile menu toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <motion.a
              href="/login"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:flex items-center gap-2 text-lavender hover:text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
            >
              Entrar
            </motion.a>
            <motion.a
              href="/register"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:flex items-center gap-2 bg-purple hover:bg-purple-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 btn-shimmer glow-purple-sm"
            >
              Cadastrar grátis
            </motion.a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-lavender hover:text-white hover:bg-white/5 transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 pt-24 pb-8 px-6 flex flex-col bg-navy/90 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-1 mt-4">
              {links.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
                    onClick={() => handleNav(link.href)}
                    className={`text-left text-2xl font-semibold py-2.5 transition-colors cursor-pointer ${
                      isActive ? "text-purple-light" : "text-white hover:text-purple-light"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <a
                href="/login"
                className="w-full glass-card text-lavender font-semibold py-4 rounded-2xl text-lg text-center block hover:text-white transition-colors"
              >
                Entrar
              </a>
              <a
                href="/register"
                className="w-full bg-purple text-white font-bold py-4 rounded-2xl text-lg btn-shimmer glow-purple text-center block"
              >
                Cadastrar meu bar — é grátis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
