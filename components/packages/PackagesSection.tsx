"use client";

import { motion } from "framer-motion";
import { RocketOutlined, ThunderboltOutlined, SafetyOutlined } from "@ant-design/icons";

const packages = [
  {
    name: "easy-scroll",
    title: "Easy Scroll",
    description: "Lightweight scroll-driven animations using native CSS Scroll Timeline API. Zero dependencies, pure performance.",
    problem: "Complex scroll animation libraries add unnecessary bundle size and performance overhead",
    solution: "Native CSS Scroll Timeline API with zero dependencies for optimal performance",
    icon: ThunderboltOutlined,
    npmUrl: "https://www.npmjs.com/package/@chemmangat/easy-scroll",
    demoUrl: "https://easyscroll.chemmangathari.in",
    gradient: "from-amber-500 to-orange-500",
    features: ["Zero Dependencies", "Native CSS API", "TypeScript Support"],
    downloads: "79"
  },
  {
    name: "optimistic-update",
    title: "Optimistic Update",
    description: "Instant UI updates with automatic rollback on failure. Built for modern React applications with seamless state management.",
    problem: "Users experience lag waiting for server responses, leading to poor UX",
    solution: "Optimistic updates with automatic rollback provide instant feedback",
    icon: RocketOutlined,
    npmUrl: "https://www.npmjs.com/package/@chemmangat/optimistic-update",
    demoUrl: "https://optimisticupdate.chemmangathari.in",
    gradient: "from-blue-500 to-indigo-500",
    features: ["Instant Feedback", "Auto Rollback", "React Hooks"],
    downloads: "0"
  },
  {
    name: "msal-next",
    title: "MSAL Next",
    description: "Simplified Microsoft Authentication Library integration for Next.js. Enterprise-grade auth made developer-friendly.",
    problem: "MSAL integration in Next.js is complex with poor documentation",
    solution: "Streamlined MSAL wrapper with Next.js best practices built-in",
    icon: SafetyOutlined,
    npmUrl: "https://www.npmjs.com/package/@chemmangat/msal-next",
    demoUrl: "https://msal.chemmangathari.in",
    gradient: "from-emerald-500 to-teal-500",
    features: ["Next.js Optimized", "Type Safe", "Easy Setup"],
    downloads: "0"
  }
];

export default function PackagesSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-40 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-40 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-sm font-semibold shadow-lg shadow-blue-500/30">
            <RocketOutlined style={{ fontSize: '16px' }} />
            <span>Open Source Contributions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4">
            NPM Packages
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Developer tools built to solve real-world problems I encountered. Published on npm for the community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient header */}
                  <div className={`h-2 bg-gradient-to-r ${pkg.gradient}`} />
                  
                  <div className="p-6 sm:p-8">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${pkg.gradient} shadow-lg`}>
                        <Icon style={{ fontSize: '28px', color: '#ffffff' }} />
                      </div>
                    </div>

                    {/* Title and Downloads */}
                    <div className="mb-3">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {pkg.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500">
                          {pkg.downloads} weekly downloads
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {pkg.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={pkg.npmUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg text-center"
                      >
                        View on NPM
                      </a>
                      <a
                        href={pkg.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 px-4 py-2.5 bg-gradient-to-r ${pkg.gradient} hover:opacity-90 text-white text-sm font-semibold rounded-lg transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg text-center`}
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-4">
            All packages are open source and available on npm
          </p>
          <a
            href="https://www.npmjs.com/~chemmangat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-slate-900 border-2 border-gray-200 hover:border-blue-300 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            View All Packages
          </a>
        </motion.div>
      </div>
    </section>
  );
}
