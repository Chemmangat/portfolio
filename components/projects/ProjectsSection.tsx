"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { 
  ToolOutlined, 
  StarOutlined, 
  RiseOutlined, 
  ClockCircleOutlined,
  RobotOutlined,
  CreditCardOutlined,
  EnvironmentOutlined,
  BarChartOutlined,
  ApiOutlined
} from "@ant-design/icons";

export default function ProjectsSection() {
  return (
    <section id="work" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background gradient accents - multiple layers for immersive feel */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/60 via-indigo-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-r from-blue-50/50 to-transparent rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-indigo-100/50 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/60 via-purple-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Blue gradient grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#60a5fa05_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa05_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Selected Work
          </h2>
          <p className="text-base text-slate-600 max-w-2xl font-medium">
            Projects that showcase my capabilities and drive real impact
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="group"
            >
              {/* Main project card */}
              <div className="premium-card rounded-xl p-6 md:p-8 hover:-translate-y-1">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row gap-6 mb-6">
                  {/* Icon Box */}
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center border-2 border-blue-200 shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl" />
                      {project.icon === "RobotOutlined" && <RobotOutlined style={{ fontSize: '48px', color: '#ffffff' }} />}
                      {project.icon === "CreditCardOutlined" && <CreditCardOutlined style={{ fontSize: '48px', color: '#ffffff' }} />}
                      {project.icon === "EnvironmentOutlined" && <EnvironmentOutlined style={{ fontSize: '48px', color: '#ffffff' }} />}
                      {project.icon === "BarChartOutlined" && <BarChartOutlined style={{ fontSize: '48px', color: '#ffffff' }} />}
                      {project.icon === "ApiOutlined" && <ApiOutlined style={{ fontSize: '48px', color: '#ffffff' }} />}
                    </div>
                  </div>

                  {/* Title & Role */}
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-xs font-semibold mb-3 shadow-md">
                      <span>{project.role}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black mb-2 text-slate-900 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* Timeline badge */}
                  <div className="lg:flex-shrink-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 shadow-sm">
                      <ClockCircleOutlined style={{ fontSize: '16px', color: '#2563eb' }} />
                      <span className="text-sm font-bold text-slate-700">
                        {project.timeline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Tech Stack Box */}
                  <div className="p-4 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-lg border border-blue-100/50 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                        <ToolOutlined style={{ fontSize: '14px', color: '#ffffff' }} />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Tech Stack</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-white text-slate-700 text-xs font-semibold rounded-md border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features Box */}
                  <div className="p-4 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-lg border border-purple-100/50 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                        <StarOutlined style={{ fontSize: '14px', color: '#ffffff' }} />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Key Features</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <span className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded flex items-center justify-center shadow-sm">
                            <StarOutlined style={{ fontSize: '8px', color: '#ffffff' }} />
                          </span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Box */}
                  <div className="p-4 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-lg border border-emerald-100/50 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 bg-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
                        <RiseOutlined style={{ fontSize: '14px', color: '#ffffff' }} />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Impact</h4>
                    </div>
                    <div className="space-y-2">
                      {project.impact.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-2.5 py-1.5 bg-white rounded-md border border-gray-200 shadow-sm">
                          <RiseOutlined style={{ fontSize: '12px', color: '#059669' }} />
                          <span className="text-xs font-semibold text-slate-700">{item}</span>
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
