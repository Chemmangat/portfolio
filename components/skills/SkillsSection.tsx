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
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background gradient accents - immersive blue scales */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-gradient-to-r from-indigo-100/60 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-l from-blue-50/40 to-transparent rounded-full blur-2xl pointer-events-none" />
      
      {/* Blue gradient grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent px-2">
            Technical Expertise
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium px-2">
            Technologies I work with to build exceptional products
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
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />
              <div className="relative p-6 sm:p-8 glass-effect rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-lg`}>
                    {category.title[0]}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-800">{category.title}</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-5">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm sm:text-base text-slate-700 font-bold">{skill.name}</span>
                        <span className={`text-xs sm:text-sm font-black bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>{skill.level}%</span>
                      </div>
                      <div className="relative h-2.5 sm:h-3 bg-blue-100 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: catIdx * 0.1 + idx * 0.08, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full shadow-lg`}
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl sm:rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
          <div className="relative p-6 sm:p-8 glass-effect rounded-2xl sm:rounded-3xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-black mb-5 sm:mb-6 flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              <TrophyOutlined style={{ fontSize: '28px', color: '#2563eb' }} />
              Leadership & Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {skills.leadership.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-blue-50/50 hover:bg-blue-50/70 rounded-xl transition-all backdrop-blur-sm border border-blue-200/30"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex-shrink-0 shadow-lg" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
