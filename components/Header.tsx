"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [pkgOpen, setPkgOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const packages = [
    { name: "easy-scroll", url: "https://easyscroll.chemmangathari.in" },
    { name: "optimistic-update", url: "https://optimisticupdate.chemmangathari.in" },
    { name: "msal-next", url: "https://msal.chemmangathari.in" },
  ];

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Backdrop — intensifies on scroll */}
        <motion.div
          animate={{ opacity: scrolled ? 1 : 0.85 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-[#0f0f10]/95 backdrop-blur-2xl"
        />

        {/* Gold shimmer line at top */}
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 3, delay: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 6 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#c9a96e]/60 to-transparent"
          />
          <div className="absolute inset-0 bg-[#1e1e1c]" style={{ zIndex: -1 }} />
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1a1a18]" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-16">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <a
              href="#"
              className="relative group text-base font-light tracking-[0.35em] uppercase text-[#c8c5be] hover:text-[#c9a96e] transition-colors duration-500"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              HM
              {/* Gold dot accent */}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#c9a96e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="relative text-[10px] tracking-[0.35em] uppercase text-[#6b6966] hover:text-[#f0ede8] transition-colors duration-300 group py-1"
                >
                  {label}
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#c9a96e] to-[#e8d5a3] group-hover:w-full transition-all duration-500 ease-out" />
                </motion.a>
              ))}

              {/* Packages dropdown — desktop */}
              <div
                className="relative"
                onMouseEnter={() => setPkgOpen(true)}
                onMouseLeave={() => setPkgOpen(false)}
              >
                <motion.button
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-1.5 text-[10px] tracking-[0.35em] uppercase text-[#6b6966] hover:text-[#c9a96e] transition-colors duration-300 py-1"
                >
                  Packages
                  <motion.span
                    animate={{ rotate: pkgOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[7px] mt-px"
                  >
                    ▾
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {pkgOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute right-0 mt-4 w-56 bg-[#111110] border border-[#252523] overflow-hidden"
                    >
                      {/* Gold shimmer top */}
                      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a96e]/60 to-transparent" />
                      {packages.map((pkg, i) => (
                        <motion.a
                          key={pkg.name}
                          href={pkg.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center justify-between px-5 py-3.5 text-[10px] font-mono tracking-wider text-[#6b6966] hover:text-[#c9a96e] hover:bg-[#161614] transition-all duration-200 border-b border-[#1a1a18] last:border-0 group"
                        >
                          <span>{pkg.name}</span>
                          <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-1">→</span>
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block w-5 h-px bg-[#8a8880] group-hover:bg-[#c9a96e] transition-colors duration-300"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-3 h-px bg-[#8a8880] group-hover:bg-[#c9a96e] transition-colors duration-300 self-start"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block w-5 h-px bg-[#8a8880] group-hover:bg-[#c9a96e] transition-colors duration-300"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-[#0f0f10]/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#0f0f10] border-l border-[#1e1e1c] flex flex-col md:hidden"
            >
              {/* Gold shimmer top */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#c9a96e]/50 to-transparent" />

              {/* Drawer header */}
              <div className="flex items-center justify-between px-8 h-16 border-b border-[#1a1a18]">
                <span
                  className="text-sm font-light tracking-[0.35em] uppercase text-[#c9a96e]"
                  style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
                >
                  HM
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-[#5c5a56] hover:text-[#c9a96e] transition-colors duration-300 text-lg leading-none"
                >
                  ✕
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-8 pt-10 gap-1 flex-1">
                {navLinks.map(({ label, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-between py-4 border-b border-[#1a1a18] group"
                  >
                    <span className="text-xs tracking-[0.3em] uppercase text-[#8a8880] group-hover:text-[#f0ede8] transition-colors duration-300">
                      {label}
                    </span>
                    <span className="text-[#3a3835] group-hover:text-[#c9a96e] transition-all duration-300 group-hover:translate-x-1">→</span>
                  </motion.a>
                ))}

                {/* Packages in mobile */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="pt-6"
                >
                  <div className="text-[9px] tracking-[0.4em] uppercase text-[#c9a96e] mb-4">
                    Packages
                  </div>
                  <div className="space-y-1">
                    {packages.map((pkg, i) => (
                      <motion.a
                        key={pkg.name}
                        href={pkg.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.48 + i * 0.06 }}
                        className="flex items-center justify-between py-3 group"
                      >
                        <span className="text-[10px] font-mono tracking-wider text-[#5c5a56] group-hover:text-[#c9a96e] transition-colors duration-300">
                          {pkg.name}
                        </span>
                        <span className="text-[#3a3835] group-hover:text-[#c9a96e] opacity-0 group-hover:opacity-100 transition-all duration-300">↗</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </nav>

              {/* Drawer footer */}
              <div className="px-8 py-6 border-t border-[#1a1a18]">
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#3a3835]">
                  Hari Manoj · SDE-1 · 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
