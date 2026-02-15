"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function HeroSection() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Simple background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Static gradient orbs */}
      <div className="absolute top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 mb-6 sm:mb-8 bg-blue-600 text-white rounded-full text-xs sm:text-sm font-medium shadow-lg"
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>2x Global Award Winner</span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4 sm:mb-6 px-4">
            <span className="block text-gray-900">
              {personalInfo.name.split(" ")[0]}
            </span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name.split(" ")[1]}
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-700 mb-3 sm:mb-4 font-medium px-4">
            {personalInfo.title}
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16 sm:mb-24 px-4">
            <button
              onClick={scrollToWork}
              className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                View my work
                <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-full font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all border-2 border-gray-900"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToWork}
            className="flex flex-col items-center gap-1 sm:gap-2 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
