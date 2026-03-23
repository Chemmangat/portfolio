"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/lib/data";

function TimelineItem({ item, i, total }: { item: typeof timeline[0]; i: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLast = i === total - 1;

  return (
    <div ref={ref} className="group flex">
      {/* Date column */}
      <div className="hidden md:flex w-[160px] flex-shrink-0 pt-10 pb-10 justify-end pr-8">
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs font-light tracking-[0.1em] text-[#a8a5a0] group-hover:text-[#c9a96e] transition-colors duration-500 whitespace-nowrap"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
        >
          {item.date}
        </motion.span>
      </div>

      {/* Line + dot column */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 w-[1px] relative">
        {/* Top line segment */}
        <motion.div
          className="w-px bg-[#252523]"
          initial={{ height: 0 }}
          animate={isInView ? { height: "2.5rem" } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ flexShrink: 0 }}
        />

        {/* Dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.35, type: "spring", stiffness: 300, damping: 20 }}
          className="relative flex-shrink-0 -mx-[3px]"
        >
          {/* Ping ring */}
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={isInView ? { scale: 2.5, opacity: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="absolute inset-0 rounded-full bg-[#c9a96e]/30"
          />
          <div className="w-[7px] h-[7px] rounded-full border border-[#c9a96e]/60 bg-[#0f0f10] group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e]/20 transition-all duration-500" />
        </motion.div>

        {/* Bottom line segment — grows down as content reveals */}
        {!isLast && (
          <motion.div
            className="w-px bg-[#252523] flex-1"
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
        {isLast && <div className="flex-1" />}
      </div>

      {/* Content */}
      <div className="flex-1 pt-10 pb-10 pl-8 md:pl-10 min-w-0">
        {/* Mobile date */}
        <div className="md:hidden mb-3">
          <span
            className="text-xs font-light tracking-[0.1em] text-[#a8a5a0]"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            {item.date}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3
            className="text-lg md:text-xl font-light text-[#f0ede8] mb-3 leading-snug group-hover:text-white transition-colors duration-300"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {item.title}
          </h3>
          <p className="text-sm text-[#a8a5a0] leading-relaxed mb-5 max-w-lg font-light">
            {item.description}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="flex flex-wrap gap-2 mb-5"
          >
            {item.skills.map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 6 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.45 + idx * 0.05 }}
                className="text-[10px] font-mono tracking-wider text-[#8a8880] border border-[#252523] px-2.5 py-1 group-hover:border-[#353533] transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="flex items-center gap-3"
          >
            <div className="w-5 h-px bg-[#c9a96e]/60" />
            <p className="text-xs text-[#c9a96e] font-medium" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
              {item.impact}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-36 bg-[#0f0f10] border-t border-[#1e1e1c]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e]">Journey</span>
          <h2
            className="text-4xl md:text-5xl font-light text-[#f0ede8] mt-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Professional Timeline
          </h2>
          <p className="text-sm text-[#a8a5a0] mt-3 font-light">From first commit to leading teams — the story so far</p>
        </motion.div>

        <div className="divide-y divide-[#1e1e1c]">
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} i={i} total={timeline.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
