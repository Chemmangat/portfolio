"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const proficiencyLabel = (level: number) => {
  if (level >= 90) return "Expert";
  if (level >= 75) return "Proficient";
  if (level >= 60) return "Working";
  return "Familiar";
};

const categories = [
  { title: "Frontend", skills: skills.frontend },
  { title: "Cloud & DevOps", skills: skills.cloud },
  { title: "Backend", skills: skills.backend },
  { title: "Testing", skills: skills.testing },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-36 bg-[#0f0f10] border-t border-[#1e1e1c]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e]">Expertise</span>
          <h2
            className="text-4xl md:text-5xl font-light text-[#f0ede8] mt-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Technical Stack
          </h2>
          <p className="text-sm text-[#a8a5a0] mt-3 font-light">Production-tested technologies across frontend, cloud, and backend</p>
        </motion.div>

        <div className="grid md:grid-cols-2 divide-x divide-y md:divide-y-0 divide-[#1e1e1c] border border-[#1e1e1c]">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="p-10"
            >
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e]/70 mb-8">
                {cat.title}
              </div>
              <div className="space-y-6">
                {cat.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-2.5">
                      <span className="text-sm text-[#d8d5cf] font-light">{skill.name}</span>
                      <span className="text-[10px] font-mono text-[#c9a96e]/70 tracking-wider">
                        {proficiencyLabel(skill.level)}
                      </span>
                    </div>
                    <div className="h-[1px] bg-[#252523] relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: catIdx * 0.1 + idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-y-0 left-0"
                        style={{ background: "linear-gradient(90deg, rgba(201,169,110,0.3), #c9a96e)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border border-t-0 border-[#1e1e1c] p-10"
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e]/70 mb-8">
            Leadership & Soft Skills
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.leadership.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.06 }}
                className="group"
              >
                <div className="w-5 h-px bg-[#c9a96e]/30 mb-3 group-hover:w-10 group-hover:bg-[#c9a96e]/70 transition-all duration-500" />
                <span className="text-sm text-[#a8a5a0] font-light group-hover:text-[#d8d5cf] transition-colors duration-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
