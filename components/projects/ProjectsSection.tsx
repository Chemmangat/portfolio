"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="work" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Selected Work
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
            Projects that showcase my capabilities and drive real impact
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                {/* Project visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                      <div className="text-6xl sm:text-7xl md:text-8xl">{project.icon}</div>
                    </div>
                  </div>
                  
                  {/* Timeline badge */}
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border-2 border-gray-900">
                    <span className="text-xs sm:text-sm font-bold text-gray-900">{project.timeline}</span>
                  </div>
                </div>

                {/* Project details */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="inline-block px-3 sm:px-4 py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                    {project.role}
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-4 sm:mb-6">
                    <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border-2 border-gray-900 text-gray-900 text-xs sm:text-sm font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4 sm:mb-6">
                    <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Key Features</div>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                          <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {project.impact.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                        <span className="text-blue-600 font-bold">→</span>
                        <span>{item}</span>
                      </div>
                    ))}
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
