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
    <section className="py-16 md:py-20 relative bg-amber-50 overflow-hidden border-y-4 border-amber-200">
      {/* Paper texture effect */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Stamp-like decorations */}
      <div className="absolute top-4 right-4 w-24 h-24 border-4 border-dashed border-amber-300 rounded-full opacity-40" />
      <div className="absolute bottom-4 left-4 w-32 h-32 border-4 border-dashed border-amber-300 rounded-full opacity-40" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-amber-900">
            Key Metrics
          </h2>
          <p className="text-base text-amber-800 font-medium">
            Quantifiable achievements and project outcomes
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
                <div className="relative text-center p-5 bg-white border-2 border-amber-300 rounded-lg shadow-[4px_4px_0px_0px_rgba(217,119,6,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(217,119,6,0.4)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300">
                  <div className="relative">
                    <div className="text-2xl mb-2">
                      {IconComponent && <IconComponent style={{ fontSize: '32px', color: '#d97706' }} />}
                    </div>
                    <div className="text-3xl font-black mb-1.5 text-amber-900">
                      <Counter end={metric.value} />+
                    </div>
                    <div className="text-xs font-bold text-amber-900 mb-0.5">{metric.label}</div>
                    <div className="text-xs text-amber-700 font-medium">{metric.sublabel}</div>
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
