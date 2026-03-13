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
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-emerald-50 to-teal-50">
      {/* Wavy lines background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        <path d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100" stroke="url(#wave-gradient)" strokeWidth="2" fill="none" />
        <path d="M0,200 Q250,150 500,200 T1000,200 T1500,200 T2000,200" stroke="url(#wave-gradient)" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M0,300 Q250,250 500,300 T1000,300 T1500,300 T2000,300" stroke="url(#wave-gradient)" strokeWidth="2" fill="none" opacity="0.3" />
      </svg>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 text-emerald-900 px-2">
            Professional Timeline
          </h2>
          <p className="text-base sm:text-lg text-emerald-800 font-medium px-2">
            Career progression and key milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - organic wavy style */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-teal-400 to-emerald-600 rounded-full" />

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
                  {/* Timeline dot - playful style */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="absolute left-6 sm:left-8 md:left-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 -ml-6 sm:-ml-7 md:-ml-8 z-10"
                  >
                    <div className="relative w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white rotate-12">
                      <Icon style={{ fontSize: '28px', color: '#ffffff' }} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-4rem)] ${isLeft ? 'md:text-right' : 'md:text-left'} pl-20 sm:pl-24 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02, rotate: isLeft ? -1 : 1 }}
                      className="relative group"
                    >
                      <div className="relative bg-white border-3 border-emerald-300 rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(16,185,129,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all">
                        <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-xs sm:text-sm font-black mb-3 sm:mb-4">
                          {item.date}
                        </div>
                        
                        <h3 className="text-lg sm:text-xl font-black mb-2 sm:mb-3 text-emerald-900">
                          {item.title}
                        </h3>
                        
                        <p className="text-sm sm:text-base text-emerald-800 mb-3 sm:mb-4 leading-relaxed font-medium">
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                          {item.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 sm:px-3 py-1 sm:py-1.5 bg-emerald-100 border-2 border-emerald-300 text-emerald-900 text-xs font-bold rounded-lg"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-start gap-2 text-xs sm:text-sm font-bold">
                          <span className="text-lg sm:text-xl text-emerald-600">→</span>
                          <span className="text-emerald-800">{item.impact}</span>
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
