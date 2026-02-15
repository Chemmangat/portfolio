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
    <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl" />
      </div>
      
      {/* Blue gradient grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#60a5fa08_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa08_1px,transparent_1px)] bg-[size:1rem_1rem] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center pb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.2, duration: 0.4 }} 
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-sm font-semibold shadow-lg shadow-blue-500/30"
          >
            <StarOutlined style={{ fontSize: '16px' }} />
            <span className="whitespace-nowrap">2x Global Award Winner • SDE-1</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 px-2">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="block text-slate-900">{personalInfo.name.split(" ")[0]}</motion.span>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">{personalInfo.name.split(" ")[1]}</motion.span>
          </h1>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-base sm:text-lg md:text-xl font-bold mb-2 px-2 text-slate-700">{personalInfo.title}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed px-4 font-medium">{personalInfo.tagline}</motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16 px-4">
            <button 
              onClick={scrollToWork} 
              className="w-full sm:w-auto group relative px-7 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl font-semibold text-base shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center gap-2">View my work<ArrowDownOutlined style={{ fontSize: '16px', color: '#ffffff' }} className="group-hover:translate-y-1 transition-transform" /></span>
            </button>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="w-full sm:w-auto px-7 py-3 bg-white hover:bg-gray-50 text-slate-900 border-2 border-gray-200 hover:border-blue-300 rounded-xl font-semibold text-base shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button onClick={scrollToWork} className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-blue-600 transition-colors group">
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="p-1.5 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 group-hover:from-blue-700 group-hover:to-blue-600 shadow-lg transition-all">
            <ArrowDownOutlined style={{ fontSize: '12px', color: '#ffffff' }} className="animate-bounce" />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
