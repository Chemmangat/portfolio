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
    <section id="work" className="py-16 md:py-20 relative overflow-hidden bg-slate-900">
      {/* Terminal-like grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
      
      {/* Glowing accents */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-400 text-xs font-mono mb-4">
            ~/projects
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-white font-mono">
            Production Projects
          </h2>
          <p className="text-base text-gray-400 max-w-2xl font-mono">
            Enterprise applications deployed to production environments
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
              {/* Terminal-style card */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                {/* Terminal header */}
                <div className="bg-slate-700/50 px-4 py-2 flex items-center gap-2 border-b border-slate-600">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-gray-400 font-mono ml-2">{project.title.toLowerCase().replace(/\s+/g, '-')}.sh</span>
                </div>

                <div className="p-6 md:p-8">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row gap-6 mb-6">
                    {/* Icon Box */}
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center border border-cyan-400/30">
                        {project.icon === "RobotOutlined" && <RobotOutlined style={{ fontSize: '40px', color: '#ffffff' }} />}
                        {project.icon === "CreditCardOutlined" && <CreditCardOutlined style={{ fontSize: '40px', color: '#ffffff' }} />}
                        {project.icon === "EnvironmentOutlined" && <EnvironmentOutlined style={{ fontSize: '40px', color: '#ffffff' }} />}
                        {project.icon === "BarChartOutlined" && <BarChartOutlined style={{ fontSize: '40px', color: '#ffffff' }} />}
                        {project.icon === "ApiOutlined" && <ApiOutlined style={{ fontSize: '40px', color: '#ffffff' }} />}
                      </div>
                    </div>

                    {/* Title & Role */}
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded text-xs font-mono mb-3">
                        <span>{project.role}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white leading-tight font-mono">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Timeline badge */}
                    <div className="lg:flex-shrink-0">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 border border-slate-600 rounded">
                        <ClockCircleOutlined style={{ fontSize: '16px', color: '#06b6d4' }} />
                        <span className="text-sm font-mono text-gray-300">
                          {project.timeline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-3 gap-4">
                    {/* Tech Stack Box */}
                    <div className="p-4 bg-slate-700/30 border border-slate-600 rounded">
                      <div className="flex items-center gap-2 mb-3">
                        <ToolOutlined style={{ fontSize: '14px', color: '#06b6d4' }} />
                        <h4 className="text-sm font-mono text-cyan-400">Tech Stack</h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-slate-800 text-gray-300 text-xs font-mono rounded border border-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features Box */}
                    <div className="p-4 bg-slate-700/30 border border-slate-600 rounded">
                      <div className="flex items-center gap-2 mb-3">
                        <StarOutlined style={{ fontSize: '14px', color: '#10b981' }} />
                        <h4 className="text-sm font-mono text-emerald-400">Key Features</h4>
                      </div>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                            <span className="text-emerald-400 mt-0.5">▸</span>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact Box */}
                    <div className="p-4 bg-slate-700/30 border border-slate-600 rounded">
                      <div className="flex items-center gap-2 mb-3">
                        <RiseOutlined style={{ fontSize: '14px', color: '#f59e0b' }} />
                        <h4 className="text-sm font-mono text-amber-400">Impact</h4>
                      </div>
                      <div className="space-y-2">
                        {project.impact.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                            <span className="text-amber-400">✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
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
