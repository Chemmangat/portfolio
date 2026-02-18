"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ApiOutlined, DownOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const packages = [
    { name: "easy-scroll", url: "https://easyscroll.chemmangathari.in" },
    { name: "optimistic-update", url: "https://optimisticupdate.chemmangathari.in" },
    { name: "msal", url: "https://msal.chemmangathari.in" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-black/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg sm:rounded-xl blur-md sm:blur-lg opacity-40" />
              <div className="relative text-xl sm:text-2xl font-black bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent px-2 sm:px-3 py-1">
                HM
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="group relative overflow-hidden"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-lg sm:rounded-xl blur-sm sm:blur-md opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative flex items-center gap-1.5 sm:gap-2.5 px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm shadow-xl shadow-blue-500/25 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/40 group-hover:-translate-y-0.5">
                <ApiOutlined style={{ fontSize: '14px' }} className="sm:text-base group-hover:rotate-12 transition-transform duration-300" />
                <span className="tracking-wide whitespace-nowrap">My Packages</span>
                <DownOutlined 
                  style={{ fontSize: '10px' }} 
                  className={`sm:text-xs transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </div>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 mt-2 w-56 sm:w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 overflow-hidden"
                >
                  {packages.map((pkg, index) => (
                    <motion.a
                      key={pkg.name}
                      href={pkg.url}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="block px-4 sm:px-5 py-3 sm:py-3.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100/50 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 group-hover:scale-125 transition-transform" />
                        <span className="text-sm sm:text-base font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                          {pkg.name}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
