"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { metrics } from "@/lib/data";
import { 
  ProjectOutlined, 
  ShopOutlined, 
  ThunderboltOutlined, 
  TrophyOutlined, 
  RocketOutlined, 
  TeamOutlined 
} from "@ant-design/icons";

const iconMap: Record<string, React.ComponentType<{ style?: React.CSSProperties; className?: string }>> = {
  ProjectOutlined,
  ShopOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
  RocketOutlined,
  TeamOutlined,
};

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function MetricsCounter() {
  return (
    <section className="py-16 md:py-20 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background gradient accents - immersive blue scales */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-indigo-100/60 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-r from-blue-50/40 to-transparent rounded-full blur-2xl pointer-events-none" />
      
      {/* Blue gradient grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Impact in Numbers
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Proven track record of excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((metric, index) => {
            const IconComponent = iconMap[metric.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative group"
              >
                <div className="relative text-center p-5 premium-card rounded-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="text-2xl mb-2">
                      {IconComponent && <IconComponent style={{ fontSize: '32px', color: '#2563eb' }} />}
                    </div>
                    <div className="text-3xl font-black mb-1.5 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                      <Counter end={metric.value} />+
                    </div>
                    <div className="text-xs font-bold text-slate-900 mb-0.5">{metric.label}</div>
                    <div className="text-xs text-slate-600 font-medium">{metric.sublabel}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
