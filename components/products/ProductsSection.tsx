"use client";

import { motion } from "framer-motion";
import { BarChartOutlined, SearchOutlined, LineChartOutlined, RocketOutlined } from "@ant-design/icons";

export default function ProductsSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold">
            <RocketOutlined style={{ fontSize: '14px' }} />
            <span>My Product</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3">
            PackFolio
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 p-8 md:p-10">
            {/* Header */}
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <BarChartOutlined style={{ fontSize: '32px', color: '#ffffff' }} />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-green-100 border border-green-300 rounded-full text-xs font-semibold text-green-700 mb-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Live & Free
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Track downloads, analyze trends, and compare npm packages. No registration, no API keys, no limits.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <SearchOutlined style={{ fontSize: '18px', color: '#9333ea', marginTop: '2px' }} />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Smart Search</h4>
                  <p className="text-xs text-slate-600">Username or package lookup</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <LineChartOutlined style={{ fontSize: '18px', color: '#9333ea', marginTop: '2px' }} />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Analytics</h4>
                  <p className="text-xs text-slate-600">Interactive charts & trends</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RocketOutlined style={{ fontSize: '18px', color: '#9333ea', marginTop: '2px' }} />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Zero Friction</h4>
                  <p className="text-xs text-slate-600">No signup required</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Recharts"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white text-slate-700 text-xs font-mono rounded-lg border border-purple-200"
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
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl text-center transition-opacity hover:opacity-90"
              >
                Launch Dashboard →
              </a>
              <a
                href="https://packfolio.dev/about"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-white text-slate-900 border-2 border-purple-300 font-bold rounded-xl text-center hover:bg-purple-50 transition-colors"
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
