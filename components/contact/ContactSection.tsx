"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Download, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function ContactSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Hari_Manoj_Resume.pdf';
    link.target = '_blank'; // Open in new tab if file exists
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-5 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
              <Mail className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
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
            className="group p-6 sm:p-8 bg-gray-50 hover:bg-gray-100 rounded-xl sm:rounded-2xl transition-colors border-2 border-gray-200"
          >
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
            </div>
            
            <div className="text-xs sm:text-sm text-gray-600 mb-1 font-medium">Email</div>
            <div className="text-base sm:text-lg font-bold text-gray-900 break-all">
              {personalInfo.email}
            </div>
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="group p-6 sm:p-8 bg-gray-50 hover:bg-gray-100 rounded-xl sm:rounded-2xl transition-colors border-2 border-gray-200"
          >
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-600 rounded-xl flex items-center justify-center">
                <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
            </div>
            
            <div className="text-xs sm:text-sm text-gray-600 mb-1 font-medium">Phone</div>
            <div className="text-base sm:text-lg font-bold text-gray-900">
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
            className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all shadow-lg text-sm sm:text-base"
          >
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-semibold">GitHub</span>
            <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-lg text-sm sm:text-base"
          >
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-semibold">LinkedIn</span>
            <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </a>

          <button
            onClick={handleDownloadResume}
            className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all shadow-lg text-sm sm:text-base"
          >
            <Download className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-semibold">Resume</span>
          </button>
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-green-100 rounded-full border-2 border-green-600">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-full" />
            <span className="text-green-900 font-bold text-xs sm:text-sm md:text-base">Available for new opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
