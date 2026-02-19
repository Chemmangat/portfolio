"use client";

import { motion } from "framer-motion";
import { RocketOutlined, ThunderboltOutlined, SafetyOutlined } from "@ant-design/icons";

const packages = [
  {
    name: "easy-scroll",
    title: "Easy Scroll",
    description: "I needed scroll animations without bloating my bundle. Built this using native CSS Scroll Timeline API - zero dependencies, just pure performance.",
    problem: "Existing libraries added 50KB+ to bundle size for simple scroll effects",
    solution: "Leveraged native browser APIs to achieve the same results with 0KB overhead",
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
    description: "Tired of users waiting for server responses. Created this to provide instant UI feedback with automatic rollback on failures.",
    problem: "Every form submission felt sluggish, users complained about the lag",
    solution: "Built optimistic updates pattern into a reusable React hook",
    icon: RocketOutlined,
    npmUrl: "https://www.npmjs.com/package/@chemmangat/optimistic-update",
    demoUrl: "https://optimisticupdate.chemmangathari.in",
    gradient: "from-blue-500 to-indigo-500",
    features: ["Instant Feedback", "Auto Rollback", "React Hooks"],
    downloads: null
  },
  {
    name: "msal-next",
    title: "MSAL Next",
    description: "Struggled with MSAL integration in Next.js for weeks. Built this wrapper to simplify enterprise auth for other developers facing the same pain.",
    problem: "MSAL docs were confusing, Next.js integration was a nightmare",
    solution: "Created a clean abstraction following Next.js best practices",
    icon: SafetyOutlined,
    npmUrl: "https://www.npmjs.com/package/@chemmangat/msal-next",
    demoUrl: "https://msal.chemmangathari.in",
    gradient: "from-emerald-500 to-teal-500",
    features: ["Next.js Optimized", "Type Safe", "Easy Setup"],
    downloads: null
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
            Built to Solve Real Problems
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Packages I created when existing solutions didn't cut it. Now available on npm.
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
                className="group relative perspective-1000"
                style={{ perspective: '1000px' }}
              >
                {/* 3D Card Container */}
                <div 
                  className="relative h-full preserve-3d transition-transform duration-200 ease-out group-hover:[transform:rotateX(2deg)_rotateY(-2deg)_translateZ(20px)]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Shadow layer for 3D depth */}
                  <div className="absolute inset-0 bg-slate-900/20 rounded-xl blur-xl translate-y-4 group-hover:translate-y-6 transition-transform duration-200 pointer-events-none" />
                  
                  {/* Main card */}
                  <div className="relative h-full bg-white rounded-xl border-2 border-gray-300 group-hover:border-gray-900 shadow-lg group-hover:shadow-2xl transition-all duration-150 overflow-hidden flex flex-col z-10">
                    {/* Gradient header with 3D effect */}
                    <div className={`h-1 bg-gradient-to-r ${pkg.gradient} group-hover:h-2 transition-all duration-150`} />
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-white/40 via-transparent to-transparent z-20" />
                    
                    <div className="relative p-6 sm:p-8 flex flex-col flex-1 z-10">
                      {/* Icon with 3D pop */}
                      <div className="mb-6">
                        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${pkg.gradient} shadow-lg group-hover:shadow-xl group-hover:translate-z-10 transition-all duration-150`}>
                          <Icon style={{ fontSize: '24px', color: '#ffffff' }} />
                        </div>
                      </div>

                      {/* Title and Downloads */}
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-mono group-hover:translate-x-1 transition-transform duration-150">
                          {pkg.title}
                        </h3>
                        {pkg.downloads && (
                          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-green-50 border border-green-300 rounded text-xs font-mono group-hover:scale-105 transition-transform duration-150">
                            <span className="text-green-600">↓</span>
                            <span className="text-green-700 font-semibold">
                              {pkg.downloads}/week
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-1">
                        {pkg.description}
                      </p>

                      {/* Features with depth */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {pkg.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2.5 py-1 bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-700 text-xs font-mono rounded transition-all duration-150 group-hover:translate-y-[-2px] group-hover:shadow-md"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Links with 3D press effect */}
                      <div className="flex gap-3 mt-auto font-mono text-xs relative z-30">
                        <a
                          href={pkg.npmUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded transition-all duration-150 text-center hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 cursor-pointer"
                        >
                          npm install
                        </a>
                        <a
                          href={pkg.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 px-4 py-2 bg-gradient-to-r ${pkg.gradient} hover:opacity-90 text-white font-semibold rounded transition-all duration-150 text-center hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 cursor-pointer`}
                        >
                          demo →
                        </a>
                      </div>
                    </div>

                    {/* Code grid overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:1rem_1rem]" />
                  </div>
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
