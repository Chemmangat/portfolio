"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="work" className="py-24 md:py-36 bg-[#0f0f10] border-t border-[#1e1e1c]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e]">Experience</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#f0ede8] mt-4 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            Production Projects
          </h2>
          <p className="text-sm text-[#8a8880] mt-3 font-light">Enterprise applications deployed to production environments</p>
        </motion.div>

        <div className="divide-y divide-[#1e1e1c] border-t border-[#1e1e1c]">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group py-10 md:py-12 hover:bg-[#141413] transition-colors duration-500 -mx-6 lg:-mx-16 px-6 lg:px-16"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[10px] font-mono text-[#5c5a56]">{String(i + 1).padStart(2, "0")}</span>
                    <div className="w-px h-3 bg-[#252523]" />
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#6b6966]">{project.role}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-light text-[#f0ede8] leading-snug group-hover:text-[#ffffff] transition-colors duration-300" style={{ fontFamily: "var(--font-playfair)" }}>
                    {project.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 pt-1">
                  <span className="text-[10px] font-mono text-[#5c5a56] border border-[#252523] px-3 py-1.5">{project.timeline}</span>
                </div>
              </div>

              <p className="text-sm text-[#8a8880] leading-relaxed mb-8 max-w-2xl font-light">{project.description}</p>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-[#5c5a56] mb-3">Stack</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono text-[#6b6966] border border-[#252523] px-2 py-0.5 group-hover:border-[#353533] transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-[#5c5a56] mb-3">Features</div>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#8a8880] font-light">
                        <span className="text-[#c9a96e]/60 mt-0.5 flex-shrink-0">—</span>
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-[#5c5a56] mb-3">Impact</div>
                  <ul className="space-y-2">
                    {project.impact.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#8a8880] font-light">
                        <span className="text-[#c9a96e]/70 mt-0.5 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
