"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "easy-scroll",
    title: "Easy Scroll",
    description: "Lightweight scroll animation library leveraging native CSS Scroll Timeline API. Zero dependencies, TypeScript support.",
    problem: "Existing libraries added 50KB+ to bundle size for simple scroll effects",
    solution: "Leveraged native browser APIs — 0KB overhead",
    npmUrl: "https://www.npmjs.com/package/@chemmangat/easy-scroll",
    demoUrl: "https://easyscroll.chemmangathari.in",
    features: ["Zero Dependencies", "Native CSS API", "TypeScript"],
    downloads: "450",
  },
  {
    name: "optimistic-update",
    title: "Optimistic Update",
    description: "React hook implementing optimistic UI updates with automatic rollback. Instant user feedback with data consistency.",
    problem: "Every form submission felt sluggish — users waited for server round-trips",
    solution: "Optimistic updates pattern in a reusable React hook with rollback",
    npmUrl: "https://www.npmjs.com/package/@chemmangat/optimistic-update",
    demoUrl: "https://optimisticupdate.chemmangathari.in",
    features: ["Instant Feedback", "Auto Rollback", "React Hooks"],
    downloads: "150",
  },
  {
    name: "msal-next",
    title: "MSAL Next",
    description: "Production-ready MSAL authentication wrapper for Next.js. Simplifies Microsoft identity integration with SSR support.",
    problem: "MSAL + Next.js integration was undocumented and fragile in SSR contexts",
    solution: "Clean abstraction following Next.js App Router best practices",
    npmUrl: "https://www.npmjs.com/package/@chemmangat/msal-next",
    demoUrl: "https://msal.chemmangathari.in",
    features: ["Next.js Optimized", "Type Safe", "SSR Support"],
    downloads: "2,450",
  },
];

export default function PackagesSection() {
  return (
    <section className="py-24 md:py-36 bg-[#0f0f10] border-t border-[#1e1e1c]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e]">Open Source</span>
            <h2 className="text-4xl md:text-5xl font-light text-[#f0ede8] mt-4" style={{ fontFamily: "var(--font-playfair)" }}>
              npm Packages
            </h2>
            <p className="text-sm text-[#a8a5a0] mt-3 font-light">Engineering solutions to real problems — published and maintained</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-light text-[#f0ede8]" style={{ fontFamily: "var(--font-playfair)" }}>4k+</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e]">total downloads</span>
            </div>
            <span className="text-[10px] font-mono text-[#6b6966]">across 3 published packages</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 divide-y divide-[#1e1e1c] border border-[#1e1e1c]">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 md:p-8 flex flex-col group hover:bg-[#141413] transition-colors duration-400 md:[&:not(:last-child)]:border-r md:border-[#1e1e1c]"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono text-[#6b6966]">{pkg.name}</span>
                <span className="text-[10px] font-mono text-[#c9a96e]">↓ {pkg.downloads}/wk</span>
              </div>

              <h3 className="text-lg font-light text-[#f0ede8] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{pkg.title}</h3>

              <p className="text-sm text-[#a8a5a0] leading-relaxed mb-6 flex-1 font-light">{pkg.description}</p>

              <div className="space-y-3 mb-6 border-t border-[#1e1e1c] pt-5">
                <div>
                  <div className="text-[9px] tracking-[0.25em] uppercase text-[#7a7870] mb-1">Problem</div>
                  <div className="text-xs text-[#8a8880] leading-relaxed">{pkg.problem}</div>
                </div>
                <div>
                  <div className="text-[9px] tracking-[0.25em] uppercase text-[#c9a96e]/60 mb-1">Solution</div>
                  <div className="text-xs text-[#c8c5be] leading-relaxed">{pkg.solution}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {pkg.features.map((f) => (
                  <span key={f} className="text-[10px] font-mono text-[#8a8880] border border-[#252523] px-2 py-1">
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a href={pkg.npmUrl} target="_blank" rel="noopener noreferrer"
                  className="flex-1 py-2.5 text-[10px] font-mono tracking-wider text-center border border-[#252523] text-[#a8a5a0] hover:border-[#c9a96e]/50 hover:text-[#c9a96e] transition-all duration-300">
                  npm install
                </a>
                <a href={pkg.demoUrl} target="_blank" rel="noopener noreferrer"
                  className="flex-1 py-2.5 text-[10px] font-mono tracking-wider text-center bg-[#161615] text-[#a8a5a0] hover:bg-[#c9a96e]/10 hover:text-[#c9a96e] transition-all duration-300">
                  demo →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a href="https://www.npmjs.com/~chemmangat" target="_blank" rel="noopener noreferrer"
            className="text-[10px] tracking-[0.3em] uppercase text-[#6b6966] hover:text-[#c9a96e] transition-colors duration-300">
            4,000+ downloads · View npm Profile →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
