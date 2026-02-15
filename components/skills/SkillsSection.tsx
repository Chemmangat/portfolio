"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const categories = [
  { title: "Frontend", skills: skills.frontend, color: "blue" },
  { title: "Cloud & DevOps", skills: skills.cloud, color: "purple" },
  { title: "Backend", skills: skills.backend, color: "green" },
  { title: "Testing", skills: skills.testing, color: "orange" },
];

const colorClasses = {
  blue: "bg-blue-600",
  purple: "bg-purple-600",
  green: "bg-green-600",
  orange: "bg-orange-600",
};

export default function SkillsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Technologies I work with to build exceptional products
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <div className="p-6 sm:p-8 bg-gray-50 hover:bg-gray-100 rounded-2xl sm:rounded-3xl transition-colors border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${colorClasses[category.color as keyof typeof colorClasses]} flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg`}>
                    {category.title[0]}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-5">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm sm:text-base text-gray-900 font-semibold">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-gray-600 font-medium">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: catIdx * 0.1 + idx * 0.05, ease: "easeOut" }}
                          className={`h-full ${colorClasses[category.color as keyof typeof colorClasses]} rounded-full`}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 sm:mt-8"
        >
          <div className="p-6 sm:p-8 bg-gray-900 rounded-2xl sm:rounded-3xl text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl">🎯</span>
              Leadership & Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {skills.leadership.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
