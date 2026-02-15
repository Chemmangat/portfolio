"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useEffect, useState } from "react";
import { MailOutlined, PhoneOutlined, GithubOutlined, LinkedinOutlined, DownloadOutlined, ArrowUpOutlined } from '@ant-design/icons';

export default function ContactSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateEyePosition = (botX: number, botY: number) => {
    const deltaX = mousePosition.x - botX;
    const deltaY = mousePosition.y - botY;
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 100, 8);
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Hari_Manoj_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/60 via-purple-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-100/50 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Blue gradient grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Single Bot - Right side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10"
      >
        <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl flex items-center justify-center">
          <div className="absolute inset-0 bg-white/10 rounded-2xl" />
          <div className="relative flex gap-3">
            <div className="w-3 h-3 bg-white rounded-full relative overflow-hidden">
              <motion.div
                className="w-1.5 h-1.5 bg-slate-900 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  x: calculateEyePosition(typeof window !== 'undefined' ? window.innerWidth - 100 : 0, typeof window !== 'undefined' ? window.innerHeight / 2 : 0).x,
                  y: calculateEyePosition(typeof window !== 'undefined' ? window.innerWidth - 100 : 0, typeof window !== 'undefined' ? window.innerHeight / 2 : 0).y,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
            <div className="w-3 h-3 bg-white rounded-full relative overflow-hidden">
              <motion.div
                className="w-1.5 h-1.5 bg-slate-900 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  x: calculateEyePosition(typeof window !== 'undefined' ? window.innerWidth - 100 : 0, typeof window !== 'undefined' ? window.innerHeight / 2 : 0).x,
                  y: calculateEyePosition(typeof window !== 'undefined' ? window.innerWidth - 100 : 0, typeof window !== 'undefined' ? window.innerHeight / 2 : 0).y,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-5 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
              <MailOutlined className="text-3xl sm:text-4xl text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent px-2">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium px-2">
            Open to new opportunities and exciting projects. Let's build something amazing!
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="group p-6 sm:p-8 glass-effect hover:bg-white/95 rounded-xl sm:rounded-2xl transition-all gradient-border hover:scale-105"
          >
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <MailOutlined className="text-xl sm:text-2xl text-white" />
              </div>
              <ArrowUpOutlined className="text-base text-slate-400 group-hover:text-blue-600 transition-colors" />
            </div>
            
            <div className="text-xs sm:text-sm text-slate-500 mb-1 font-medium">Email</div>
            <div className="text-base sm:text-lg font-black text-slate-800 break-all">
              {personalInfo.email}
            </div>
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="group p-6 sm:p-8 glass-effect hover:bg-white/95 rounded-xl sm:rounded-2xl transition-all gradient-border hover:scale-105"
          >
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <PhoneOutlined className="text-xl sm:text-2xl text-white" />
              </div>
              <ArrowUpOutlined className="text-base text-slate-400 group-hover:text-blue-600 transition-colors" />
            </div>
            
            <div className="text-xs sm:text-sm text-slate-500 mb-1 font-medium">Phone</div>
            <div className="text-base sm:text-lg font-black text-slate-800">
              {personalInfo.phone}
            </div>
          </a>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-2xl transition-all shadow-xl hover:shadow-2xl text-sm sm:text-base font-bold hover:scale-105"
          >
            <GithubOutlined className="text-lg" />
            <span>GitHub</span>
            <ArrowUpOutlined className="text-sm" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl transition-all shadow-xl hover:shadow-2xl text-sm sm:text-base font-bold hover:scale-105"
          >
            <LinkedinOutlined className="text-lg" />
            <span>LinkedIn</span>
            <ArrowUpOutlined className="text-sm" />
          </a>

          <button
            onClick={handleDownloadResume}
            className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl transition-all shadow-xl hover:shadow-2xl text-sm sm:text-base font-bold hover:scale-105"
          >
            <DownloadOutlined className="text-lg" />
            <span>Resume</span>
          </button>
        </motion.div>

        {/* Availability badge - Fixed visibility */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-green-500 rounded-full shadow-lg">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-slate-900 font-black text-xs sm:text-sm md:text-base">Available for new opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
