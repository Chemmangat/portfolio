"use client";

import { motion } from "framer-motion";
import { ArrowDownOutlined, StarOutlined } from "@ant-design/icons";
import { personalInfo } from "@/lib/data";

export default function HeroSection() {
  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-16 sm:pt-20 bg-[#0a0e27]">
      {/* Starfield effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.2, duration: 0.4 }} 
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-semibold"
          >
            <StarOutlined style={{ fontSize: '16px' }} />
            <span className="whitespace-nowrap">2x Global Award Winner • SDE-1</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 px-2">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="block text-white">{personalInfo.name.split(" ")[0]}</motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{personalInfo.name.split(" ")[1]}</motion.span>
          </h1>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-base sm:text-lg md:text-xl font-bold mb-2 px-2 text-blue-200">{personalInfo.title}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed px-4 font-medium">{personalInfo.tagline}</motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16 px-4">
            <button 
              onClick={scrollToWork} 
              className="w-full sm:w-auto group relative px-7 py-3 bg-white text-slate-900 hover:bg-gray-100 rounded-xl font-semibold text-base shadow-lg transition-all hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center gap-2">View Projects<ArrowDownOutlined style={{ fontSize: '16px' }} className="group-hover:translate-y-1 transition-transform" /></span>
            </button>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="w-full sm:w-auto px-7 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
