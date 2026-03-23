"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col px-6 lg:px-16 overflow-hidden bg-[#0f0f10] pt-16">

      {/* Gold radial — top right */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 80% 20%, rgba(201,169,110,0.07) 0%, transparent 60%)" }} />

      {/* Gold radial — bottom left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 20% 80%, rgba(201,169,110,0.05) 0%, transparent 60%)" }} />

      {/* Top gold rule */}
      <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/20 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-6xl mx-auto">

          {/* Eyebrow — with top margin so it breathes */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-10 mt-8"
          >
            <div className="w-6 h-px bg-[#c9a96e]/70 flex-shrink-0" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a96e] font-medium whitespace-nowrap">
              2× Global Award Winner
            </span>
            <div className="w-1 h-1 rounded-full bg-[#c9a96e]/40 flex-shrink-0" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a96e]/70 font-medium">
              SDE-1 · Terawe Technologies
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.6rem,5.5vw,5rem)] font-extralight tracking-[-0.02em] text-[#f0ede8] leading-[1.05] mb-3"
          >
            {personalInfo.name.split(" ")[0]}&nbsp;
            <span className="font-light italic" style={{ fontFamily: "var(--font-playfair)", color: "#c9a96e" }}>
              {personalInfo.name.split(" ")[1]}
            </span>
          </motion.h1>

          {/* Gold separator */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left w-16 h-px bg-[#c9a96e]/50 mb-5"
          />

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs tracking-[0.3em] uppercase text-[#a8a5a0] mb-4"
          >
            {personalInfo.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-base text-[#a8a5a0] max-w-lg leading-[1.8] mb-8 font-light"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="#work"
              className="px-8 py-3 bg-[#c9a96e] text-[#0f0f10] text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#dfc080] transition-colors duration-300"
            >
              View Work
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-3 border border-[#353533] text-[#a8a5a0] text-[11px] font-medium tracking-[0.2em] uppercase hover:border-[#c9a96e]/60 hover:text-[#c9a96e] transition-all duration-300"
            >
              Contact
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap items-center gap-6 sm:gap-10 pt-6 border-t border-[#1e1e1c]"
          >
            {[
              { n: "8+", label: "Projects Delivered" },
              { n: "5+", label: "B2B Platforms" },
              { n: "2×", label: "Global Awards" },
            ].map(({ n, label }) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="text-xl font-light text-[#f0ede8]" style={{ fontFamily: "var(--font-playfair)" }}>{n}</span>
                <span className="text-[10px] tracking-widest uppercase text-[#7a7870]">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 flex items-center justify-between pb-6 pt-3 max-w-6xl mx-auto w-full"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-[#4a4845]">
          Portfolio · 2026
        </span>
        <div className="flex items-center gap-3">
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#4a4845]">Scroll</span>
          <motion.div
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#c9a96e]/40 to-transparent origin-top"
          />
        </div>
      </motion.div>
    </section>
  );
}
