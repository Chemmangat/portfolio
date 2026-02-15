"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function HeroSection() {
  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient orbs - contained within viewport */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-3xl"
          style={{ willChange: 'transform, opacity' }}
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
          className="absolute top-1/4 right-0 w-80 sm:w-96 md:w-[500px] h-80 sm:h-96 md:h-[500px] bg-gradient-to-br from-purple-500 to-pink-400 rounded-full blur-3xl"
          style={{ willChange: 'transform, opacity' }}
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.2, 0.15] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
          className="absolute bottom-0 left-1/3 w-72 sm:w-80 md:w-[400px] h-72 sm:h-80 md:h-[400px] bg-gradient-to-br from-indigo-500 to-blue-400 rounded-full blur-3xl"
          style={{ willChange: 'transform, opacity' }}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center py-16 sm:py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.4 }} className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full text-xs sm:text-sm font-semibold shadow-2xl shadow-purple-500/30">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="whitespace-nowrap">2x Global Award Winner • SDE-1</span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-4 sm:mb-6 px-2 sm:px-4">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="block text-white">{personalInfo.name.split(" ")[0]}</motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{personalInfo.name.split(" ")[1]}</motion.span>
          </h1>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 px-2 sm:px-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">{personalInfo.title}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4 sm:px-6 font-medium">{personalInfo.tagline}</motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16 sm:mb-24 px-4">
            <button onClick={scrollToWork} className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-2xl font-bold text-base sm:text-lg shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all hover:scale-105">
              <span className="flex items-center justify-center gap-2">View my work<ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform" /></span>
            </button>
            <a href={`mailto:${personalInfo.email}`} className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass-effect hover:bg-white/10 text-white rounded-2xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 gradient-border">Get in touch</a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2">
          <button onClick={scrollToWork} className="flex flex-col items-center gap-1 sm:gap-2 text-gray-400 hover:text-purple-400 transition-colors group">
            <span className="text-xs sm:text-sm font-semibold">Scroll to explore</span>
            <div className="p-1.5 sm:p-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
              <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4 text-white animate-bounce" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
