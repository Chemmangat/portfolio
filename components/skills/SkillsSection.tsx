"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { TrophyOutlined } from "@ant-design/icons";

const categories = [
  { title: "Frontend", skills: skills.frontend, gradient: "from-blue-500 to-blue-600" },
  { title: "Cloud & DevOps", skills: skills.cloud, gradient: "from-blue-600 to-blue-700" },
  { title: "Backend", skills: skills.backend, gradient: "from-blue-400 to-blue-500" },
  { title: "Testing", skills: skills.testing, gradient: "from-blue-500 to-blue-600" },
];

export default function SkillsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Organic shapes */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-rose-200/30 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-2xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Handdrawn-style lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="skills-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 Q 30 30, 50 10 T 90 10" stroke="#ec4899" strokeWidth="1" fill="none" />
            <circle cx="20" cy="80" r="3" fill="#a855f7" />
            <circle cx="70" cy="70" r="2" fill="#f43f5e" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#skills-pattern)" />
      </svg>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 text-rose-900 px-2">
            Technical Stack
          </h2>
          <p className="text-base sm:text-lg text-rose-800 font-medium px-2">
            Production-tested technologies and frameworks
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative p-6 sm:p-8 bg-white/80 backdrop-blur-sm border-3 border-rose-300 rounded-2xl shadow-[8px_8px_0px_0px_rgba(244,63,94,0.2)] hover:shadow-[12px_12px_0px_0px_rgba(244,63,94,0.3)] hover:-translate-y-1 hover:-translate-x-1 transition-all">
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-lg rotate-3`}>
                    {category.title[0]}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-rose-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-5">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm sm:text-base text-rose-900 font-bold">{skill.name}</span>
                        <span className={`text-xs sm:text-sm font-black bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>{skill.level}%</span>
                      </div>
                      <div className="relative h-3 bg-rose-100 rounded-full overflow-hidden border-2 border-rose-200">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: catIdx * 0.1 + idx * 0.08, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 sm:mt-8 relative group"
        >
          <div className="relative p-6 sm:p-8 bg-white/80 backdrop-blur-sm border-3 border-purple-300 rounded-2xl shadow-[8px_8px_0px_0px_rgba(168,85,247,0.2)]">
            <h3 className="text-xl sm:text-2xl font-black mb-5 sm:mb-6 flex items-center gap-2 sm:gap-3 text-purple-900">
              <TrophyOutlined style={{ fontSize: '28px', color: '#7c3aed' }} />
              Leadership & Professional Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {skills.leadership.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.05 }}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-purple-100 border-2 border-purple-300 rounded-xl hover:bg-purple-200 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-purple-900">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
