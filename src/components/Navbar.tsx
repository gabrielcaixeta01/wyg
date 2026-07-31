"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionLink } from "./MotionLink";
import { SECTIONS as links } from "@/lib/nav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // Track what is currently in the detection band rather than reacting to
    // single entries: an entry leaving has to clear the indicator too, otherwise
    // the last active link stays highlighted forever (e.g. back at the hero).
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }

        // Resolve in document order so overlapping sections are deterministic.
        const current = sections.find((section) => visible.has(section.id));
        setActiveSection(current?.id ?? "");
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // While the mobile panel is open: trap focus inside it, close on Escape, and
  // stop the page behind it from scrolling.
  useEffect(() => {
    if (!menuOpen) return;

    const panel = panelRef.current;
    const toggle = toggleRef.current;
    const focusablesIn = (root: HTMLElement) =>
      Array.from(
        root.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      );

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panel) return;

      const focusables = focusablesIn(panel);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    if (panel) focusablesIn(panel)[0]?.focus();

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      // Send focus back to the toggle, but not on first mount.
      toggle?.focus();
    };
  }, [menuOpen]);

  // Anchors handle the scroll natively (`scroll-behavior: smooth` in globals.css),
  // so this only has to dismiss the mobile panel.
  const closeMenu = () => setMenuOpen(false);

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
              ? "max-w-5xl rounded-full border border-white/10 bg-navy/75 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.45)] px-4 py-2"
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
          <nav className="hidden lg:flex items-center gap-1 mx-4">
            {links.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className="relative px-3 py-2 text-sm font-medium cursor-pointer whitespace-nowrap"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/7 border border-white/10"
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
                </a>
              );
            })}
          </nav>

          {/* CTA + Mobile menu toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <MotionLink
              href="/login"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden lg:flex items-center gap-2 text-lavender hover:text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
            >
              Entrar
            </MotionLink>
            <MotionLink
              href="/register"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden lg:flex items-center gap-2 bg-purple hover:bg-purple-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 btn-shimmer glow-purple-sm"
            >
              Cadastrar grátis
            </MotionLink>
            <button
              ref={toggleRef}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full text-lavender hover:text-white hover:bg-white/5 transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop — Escape and the close button are the accessible paths out,
                so this stays out of the tab order. */}
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden cursor-default"
            />

            {/* Dropdown panel, docked below the floating nav */}
            <motion.div
              ref={panelRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`fixed z-50 inset-x-4 lg:hidden origin-top rounded-3xl border border-white/10 bg-navy/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.55)] p-3 transition-[top] duration-500 ease-out ${
                scrolled ? "top-16" : "top-20"
              }`}
            >
              <nav className="flex flex-col gap-0.5">
                {links.map((link, i) => {
                  const isActive = activeSection === link.href.slice(1);
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      aria-current={isActive ? "true" : undefined}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                      onClick={closeMenu}
                      className="relative flex items-center gap-3 px-4 py-3.5 rounded-2xl cursor-pointer"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="mobile-active-pill"
                          className="absolute inset-0 rounded-2xl bg-white/6 border border-white/10"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      <Icon
                        size={18}
                        className={`relative z-10 shrink-0 ${isActive ? "text-purple-light" : "text-muted"}`}
                      />
                      <span
                        className={`relative z-10 text-base font-semibold ${
                          isActive ? "text-white" : "text-white/85"
                        }`}
                      >
                        {link.label}
                      </span>
                    </motion.a>
                  );
                })}
              </nav>

              <div className="h-px bg-white/5 my-2 mx-1" />

              <div className="flex flex-col gap-2 p-1">
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="w-full glass-card text-lavender font-semibold py-3.5 rounded-2xl text-base text-center block hover:text-white transition-colors"
                >
                  Entrar
                </Link>
                <Link
                  href="/register"
                  onClick={closeMenu}
                  className="w-full bg-purple text-white font-bold py-3.5 rounded-2xl text-base btn-shimmer glow-purple-sm text-center block"
                >
                  Cadastrar meu bar — é grátis
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
