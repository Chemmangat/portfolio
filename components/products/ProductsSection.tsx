"use client";

import { motion } from "framer-motion";
import { BarChartOutlined, SearchOutlined, LineChartOutlined, RocketOutlined } from "@ant-design/icons";

export default function ProductsSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-violet-100 via-fuchsia-100 to-pink-100">
      {/* Comic-style halftone dots */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle, #a855f7 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Pop art style shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 border-8 border-violet-400 rounded-full opacity-30" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-fuchsia-400/20 rotate-45" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-white border-3 border-violet-400 text-violet-900 rounded-full text-sm font-black shadow-[4px_4px_0px_0px_rgba(139,92,246,0.3)]">
            <RocketOutlined style={{ fontSize: '14px' }} />
            <span>My Product</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-violet-900 mb-3">
            PackFolio
          </h2>
          <p className="text-lg text-violet-800 max-w-2xl mx-auto font-bold">
            Free npm package analytics dashboard for developers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white border-4 border-violet-400 rounded-2xl p-8 md:p-10 shadow-[12px_12px_0px_0px_rgba(139,92,246,0.3)] hover:shadow-[16px_16px_0px_0px_rgba(139,92,246,0.4)] hover:-translate-y-1 hover:-translate-x-1 transition-all">
            {/* Header */}
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center border-3 border-violet-800 rotate-3">
                <BarChartOutlined style={{ fontSize: '32px', color: '#ffffff' }} />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-green-100 border-2 border-green-400 rounded-full text-xs font-black text-green-800 mb-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Live & Free
                </div>
                <p className="text-violet-900 leading-relaxed font-medium">
                  Track downloads, analyze trends, and compare npm packages. No registration, no API keys, no limits.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3 bg-violet-50 border-2 border-violet-300 rounded-lg">
                <SearchOutlined style={{ fontSize: '18px', color: '#7c3aed', marginTop: '2px' }} />
                <div>
                  <h4 className="font-black text-violet-900 text-sm mb-1">Smart Search</h4>
                  <p className="text-xs text-violet-700">Username or package lookup</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-fuchsia-50 border-2 border-fuchsia-300 rounded-lg">
                <LineChartOutlined style={{ fontSize: '18px', color: '#c026d3', marginTop: '2px' }} />
                <div>
                  <h4 className="font-black text-fuchsia-900 text-sm mb-1">Analytics</h4>
                  <p className="text-xs text-fuchsia-700">Interactive charts & trends</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-pink-50 border-2 border-pink-300 rounded-lg">
                <RocketOutlined style={{ fontSize: '18px', color: '#db2777', marginTop: '2px' }} />
                <div>
                  <h4 className="font-black text-pink-900 text-sm mb-1">Zero Friction</h4>
                  <p className="text-xs text-pink-700">No signup required</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Recharts"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-violet-100 border-2 border-violet-300 text-violet-900 text-xs font-mono font-bold rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://packfolio.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black rounded-xl text-center border-3 border-violet-800 shadow-[4px_4px_0px_0px_rgba(109,40,217,1)] hover:shadow-[6px_6px_0px_0px_rgba(109,40,217,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all"
              >
                Launch Dashboard →
              </a>
              <a
                href="https://packfolio.dev/about"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-white text-violet-900 border-3 border-violet-400 font-black rounded-xl text-center hover:bg-violet-50 transition-colors shadow-[4px_4px_0px_0px_rgba(139,92,246,0.3)]"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
