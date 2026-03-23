"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export default function ContactSection() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Hari_Manoj_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#0f0f10] border-t border-[#1e1e1c]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e]">Contact</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#f0ede8] mt-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Get In Touch
          </h2>
          <p className="text-sm text-[#a8a5a0] mt-3 font-light">
            Available for full-time opportunities and consulting projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 divide-x divide-[#1e1e1c] border border-[#1e1e1c]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-10 md:p-12"
          >
            <div className="space-y-8">
              <a href={`mailto:${personalInfo.email}`} className="flex flex-col gap-1.5 group">
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#7a7870]">Email</span>
                <span className="text-sm text-[#d8d5cf] group-hover:text-[#c9a96e] transition-colors duration-300 font-light">
                  {personalInfo.email}
                </span>
              </a>

              <a href={`tel:${personalInfo.phone}`} className="flex flex-col gap-1.5 group">
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#7a7870]">Phone</span>
                <span className="text-sm text-[#d8d5cf] group-hover:text-[#c9a96e] transition-colors duration-300 font-light">
                  {personalInfo.phone}
                </span>
              </a>

              <div className="pt-4 border-t border-[#1e1e1c]">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-xs text-[#8a8880] tracking-wide">Open to opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-10 md:p-12"
          >
            <div className="divide-y divide-[#1e1e1c]">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between py-4 group">
                <span className="text-sm text-[#d8d5cf] group-hover:text-[#f0ede8] transition-colors duration-300 font-light">GitHub</span>
                <span className="text-[#6b6966] group-hover:text-[#c9a96e] transition-colors duration-300">→</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between py-4 group">
                <span className="text-sm text-[#d8d5cf] group-hover:text-[#f0ede8] transition-colors duration-300 font-light">LinkedIn</span>
                <span className="text-[#6b6966] group-hover:text-[#c9a96e] transition-colors duration-300">→</span>
              </a>
              <button onClick={handleDownloadResume}
                className="flex items-center justify-between py-4 w-full group">
                <span className="text-sm text-[#d8d5cf] group-hover:text-[#f0ede8] transition-colors duration-300 font-light">Download Resume</span>
                <span className="text-[#6b6966] group-hover:text-[#c9a96e] transition-colors duration-300">↓</span>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1e1e1c] flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] tracking-widest uppercase text-[#4a4845]">Hari Manoj · SDE-1</span>
          <span className="text-[10px] tracking-widest uppercase text-[#4a4845]">Built with Next.js · 2026</span>
        </div>
      </div>
    </section>
  );
}
