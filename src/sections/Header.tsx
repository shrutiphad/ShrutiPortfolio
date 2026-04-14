"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home",     href: "#home"     },
  { label: "Projects", href: "#projects" },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

export const Header = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState("home");
  const [menuOpen, setMenuOpen]   = useState(false);

  /* ── scroll listener ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      /* scroll-spy */
      const sections = ["home", "projects", "about", "contact"];
      for (const id of sections.slice().reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── smooth scroll helper ── */
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ─── Desktop pill nav ─── */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-4 inset-x-0 z-50
          hidden md:flex justify-center items-center
          transition-all duration-500
          pointer-events-none
        `}
      >
        <nav
          className={`
            flex gap-1 p-1.5 rounded-full border
            transition-all duration-500
            pointer-events-auto
            ${scrolled
              ? "bg-black/70 backdrop-blur-xl border-white/15 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
              : "bg-white/5  backdrop-blur-md  border-white/10"}
          `}
        >
          {navLinks.map(({ label, href }) => {
            const isActive  = active === href.replace("#", "");
            const isContact = href === "#contact";
            return (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`
                  relative px-5 py-1.5 rounded-full text-sm font-semibold
                  transition-colors duration-300 cursor-pointer
                  ${isContact
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/30 hover:from-pink-400 hover:to-purple-500"
                    : isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"}
                `}
              >
                {/* active pill background */}
                {!isContact && isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                {/* hover underline */}
                <span className="relative z-10 group">
                  {label}
                  {!isContact && (
                    <span
                      className={`
                        absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-pink-400 to-purple-400
                        transition-all duration-300
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </nav>
      </motion.div>

      {/* ─── Mobile top bar ─── */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-0 inset-x-0 z-50 flex md:hidden items-center justify-between
          px-5 py-3 transition-all duration-500
          ${scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_2px_30px_rgba(168,85,247,0.12)]"
            : "bg-transparent"}
        `}
      >
        {/* logo wordmark */}
        <span className="text-sm font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text tracking-wider">
          Shruti.dev
        </span>

        {/* hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-1.5 rounded-lg hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-5 bg-white rounded-full origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-5 bg-white rounded-full"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-5 bg-white rounded-full origin-center"
          />
        </button>
      </motion.div>

      {/* ─── Mobile drawer ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              fixed top-[56px] inset-x-4 z-40 md:hidden
              bg-black/90 backdrop-blur-2xl border border-white/10
              rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.2)]
              overflow-hidden
            "
          >
            <div className="flex flex-col p-3 gap-1">
              {navLinks.map(({ label, href }) => {
                const isContact = href === "#contact";
                const isActive  = active === href.replace("#", "");
                return (
                  <button
                    key={href}
                    onClick={() => scrollTo(href)}
                    className={`
                      w-full text-left px-4 py-3 rounded-xl text-sm font-semibold
                      transition-all duration-200 cursor-pointer
                      ${isContact
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                        : isActive
                          ? "bg-white/10 text-white"
                          : "text-white/60 hover:bg-white/5 hover:text-white"}
                    `}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* backdrop close */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};
