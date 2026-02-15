"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { TrophyOutlined, RiseOutlined, StarOutlined } from "@ant-design/icons";

const getIcon = (title: string) => {
  if (title.includes("Award")) return TrophyOutlined;
  if (title.includes("Promoted")) return RiseOutlined;
  return StarOutlined;
};

export default function Timeline() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background gradient accents - immersive blue scales */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 via-indigo-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-blue-50/60 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-tr from-indigo-100/40 to-transparent rounded-full blur-2xl pointer-events-none" />
      
      {/* Blue gradient grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent px-2">
            Career Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium px-2">
            From start to leadership in record time
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />

          <div className="space-y-12 sm:space-y-16">
            {timeline.map((item, index) => {
              const Icon = getIcon(item.title);
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Timeline dot with gradient */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="absolute left-6 sm:left-8 md:left-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 -ml-6 sm:-ml-7 md:-ml-8 z-10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-lg opacity-30" />
                    <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                      <Icon style={{ fontSize: '32px', color: '#ffffff' }} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-4rem)] ${isLeft ? 'md:text-right' : 'md:text-left'} pl-20 sm:pl-24 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
                      <div className="relative glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all gradient-border">
                        <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-xs sm:text-sm font-black mb-3 sm:mb-4 shadow-lg">
                          {item.date}
                        </div>
                        
                        <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 text-slate-800">
                          {item.title}
                        </h3>
                        
                        <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed font-medium">
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                          {item.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-50/70 text-slate-700 text-xs font-bold rounded-full shadow-sm border border-blue-200/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-start gap-2 text-xs sm:text-sm font-bold">
                          <span className="text-lg sm:text-xl bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">→</span>
                          <span className="text-slate-600">{item.impact}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-[calc(50%-4rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
