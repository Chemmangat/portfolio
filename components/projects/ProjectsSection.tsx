"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const categories = [
  { title: "Frontend", skills: skills.frontend, gradient: "from-blue-500 to-cyan-500" },
  { title: "Cloud & DevOps", skills: skills.cloud, gradient: "from-purple-500 to-pink-500" },
  { title: "Backend", skills: skills.backend, gradient: "from-green-500 to-emerald-500" },
  { title: "Testing", skills: skills.testing, gradient: "from-orange-500 to-red-500" },
];

export default function SkillsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 dark:from-cyan-600/10 dark:to-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 dark:from-indigo-600/10 dark:to-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent px-2">
            Technical Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium px-2">
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
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className="relative p-6 sm:p-8 glass-effect rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-lg`}>
                    {category.title[0]}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">{category.title}</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-5">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm sm:text-base text-gray-900 dark:text-gray-100 font-bold">{skill.name}</span>
                        <span className={`text-xs sm:text-sm font-black bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>{skill.level}%</span>
                      </div>
                      <div className="relative h-2.5 sm:h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          <div className="relative p-6 sm:p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-2xl sm:rounded-3xl text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-black mb-5 sm:mb-6 flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              <span className="text-3xl sm:text-4xl">🎯</span>
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
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all backdrop-blur-sm border border-white/10"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0 shadow-lg" />
                  <span className="text-xs sm:text-sm font-semibold">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
