"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { metrics } from "@/lib/data";

function Counter({ end, duration = 2.5 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let frame: number;
    const animate = (t: number) => {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function MetricsCounter() {
  return (
    <section className="bg-[#0f0f10] border-t border-[#1e1e1c]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y divide-[#1e1e1c]">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col gap-3 px-5 md:px-8 py-10 md:py-12 group"
            >
              <div
                className="text-4xl md:text-5xl font-light text-[#f0ede8] tabular-nums leading-none"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <Counter end={metric.value} />
                <span className="text-[#c9a96e]">+</span>
              </div>
              <div className="w-5 h-px bg-[#c9a96e]/40 group-hover:w-10 transition-all duration-500" />
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#a8a5a0]">
                {metric.label}
              </div>
              <div className="text-[10px] text-[#7a7870]">{metric.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
