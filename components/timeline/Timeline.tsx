"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { Award, TrendingUp, Sparkles } from "lucide-react";

const getIcon = (title: string) => {
  if (title.includes("Award")) return Award;
  if (title.includes("Promoted")) return TrendingUp;
  return Sparkles;
};

export default function Timeline() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Career Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            From start to leadership in record time
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300" />

          <div className="space-y-12 sm:space-y-16">
            {timeline.map((item, index) => {
              const Icon = getIcon(item.title);
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 sm:left-8 md:left-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 -ml-6 sm:-ml-7 md:-ml-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-4rem)] ${isLeft ? 'md:text-right' : 'md:text-left'} pl-20 sm:pl-24 md:pl-0`}>
                    <div className="bg-white hover:bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg transition-colors border-2 border-gray-200">
                      <div className="inline-block px-3 sm:px-4 py-1 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                        {item.date}
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-900 text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                        <span className="text-blue-600 font-bold">→</span>
                        <span>{item.impact}</span>
                      </div>
                    </div>
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
