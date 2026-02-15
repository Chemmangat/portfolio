"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="work" className="py-16 sm:py-20 md:py-24 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent px-2">
            Selected Work
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl font-medium px-2">
            Projects that showcase my capabilities and drive real impact
          </p>
        </motion.div>

        <div className="grid gap-8 sm:gap-10 md:gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group relative"
            >
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* Main project card */}
              <div className="relative glass-effect rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8 md:p-10 backdrop-blur-xl">
                {/* Header Section - Icon, Title, Role */}
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-6 sm:mb-8">
                  {/* Icon Box */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30" />
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-pink-600/80 rounded-3xl flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:1rem_1rem] rounded-3xl" />
                      <span className="relative text-6xl sm:text-7xl drop-shadow-2xl">{project.icon}</span>
                    </div>
                    {/* Timeline badge */}
                    <div className="absolute -top-3 -right-3 glass-effect rounded-xl px-3 py-1.5 shadow-lg border border-white/20">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">⏱️</span>
                        <span className="text-xs font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {project.timeline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Role */}
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 shadow-lg">
                      <span className="text-base">👨‍💻</span>
                      <span>{project.role}</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Content Grid - Tech Stack, Features, Impact */}
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                  {/* Tech Stack Box */}
                  <div className="p-5 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">🛠️</span>
                      <h4 className="text-sm sm:text-base font-black text-white">Tech Stack</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-white/10 text-gray-100 text-xs font-bold rounded-lg border border-white/10 hover:scale-105 transition-transform"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features Box */}
                  <div className="p-5 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">✨</span>
                      <h4 className="text-sm sm:text-base font-black text-white">Key Features</h4>
                    </div>
                    <ul className="space-y-2.5">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 font-medium">
                          <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-md flex items-center justify-center text-[10px] font-bold mt-0.5">
                            ✓
                          </span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Box */}
                  <div className="p-5 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">📈</span>
                      <h4 className="text-sm sm:text-base font-black text-white">Impact</h4>
                    </div>
                    <div className="space-y-2.5">
                      {project.impact.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/10">
                          <span className="text-base">🎯</span>
                          <span className="text-xs sm:text-sm font-bold text-gray-200">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
