"use client";

import { motion } from "framer-motion";

export default function ProductsSection() {
  return (
    <section className="py-24 md:py-36 bg-[#0f0f10] border-t border-[#1e1e1c]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e]">Product</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#f0ede8] mt-4 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            PackFolio
          </h2>
          <p className="text-sm text-[#a8a5a0] mt-3 max-w-md font-light">
            Free npm package analytics dashboard — no registration, no limits.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-[#1e1e1c] bg-[#141413] p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs text-[#a8a5a0] tracking-widest uppercase">Live & Free</span>
              </div>
              <p className="text-[#d8d5cf] leading-[1.8] mb-8 font-light">
                Track downloads, analyze trends, and compare npm packages. Built for developers who want clean data without friction.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  ["Smart Search", "Username or package lookup"],
                  ["Analytics", "Interactive charts & download trends"],
                  ["Zero Friction", "No signup, no API keys required"],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-px bg-[#c9a96e]/40 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-medium text-[#d8d5cf] mb-0.5">{title}</div>
                      <div className="text-xs text-[#8a8880]">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Recharts"].map((t) => (
                  <span key={t} className="px-3 py-1 text-[10px] font-mono text-[#8a8880] border border-[#252523]">{t}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="text-xs font-mono leading-loose border border-[#252523] p-6 bg-[#0f0f10]">
                <div className="text-[#c9a96e] mb-4">// packfolio.dev</div>
                <div className="text-[#8a8880]"><span className="text-[#a8a5a0]">→ </span>npm analytics dashboard</div>
                <div className="text-[#8a8880]"><span className="text-[#a8a5a0]">→ </span>zero dependencies</div>
                <div className="text-[#8a8880]"><span className="text-[#a8a5a0]">→ </span>open source</div>
              </div>

              <div className="flex flex-col gap-3 mt-8">
                <a href="https://packfolio.dev" target="_blank" rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#c9a96e] text-[#0f0f10] text-xs font-semibold text-center tracking-[0.15em] uppercase hover:bg-[#dfc080] transition-colors duration-300">
                  Launch Dashboard
                </a>
                <a href="https://packfolio.dev/about" target="_blank" rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-[#252523] text-[#a8a5a0] text-xs text-center tracking-[0.15em] uppercase hover:border-[#c9a96e]/50 hover:text-[#c9a96e] transition-all duration-300">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
