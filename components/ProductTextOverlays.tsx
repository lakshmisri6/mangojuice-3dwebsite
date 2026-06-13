"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "@/data/products";

export default function ProductTextOverlays({ product }: { product: Product }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth, precise staggering
  const opacity1 = useTransform(scrollYProgress, [0.0, 0.05, 0.15, 0.20], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.0, 0.05, 0.15, 0.20], [80, 0, 0, -80]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [80, 0, 0, -80]);

  const opacity3 = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.70], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.70], [80, 0, 0, -80]);

  const opacity4 = useTransform(scrollYProgress, [0.75, 0.8, 0.9, 0.95], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.75, 0.8, 0.9, 0.95], [80, 0, 0, -80]);

  const sections = [
    { opacity: opacity1, y: y1, data: product.section1, align: "left" },
    { opacity: opacity2, y: y2, data: product.section2, align: "right" },
    { opacity: opacity3, y: y3, data: product.section3, align: "left" },
    { opacity: opacity4, y: y4, data: product.section4, align: "right" },
  ];

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-20">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-8 md:p-24 overflow-hidden">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            style={{ opacity: sec.opacity, y: sec.y }}
            className={`absolute w-full px-8 md:px-24 flex flex-col ${
              sec.align === "left" ? "items-start text-left md:w-5/12 md:mr-auto" : 
              "items-end text-right md:w-5/12 md:ml-auto"
            }`}
          >
            <div className="glass-panel p-10 md:p-14 rounded-3xl backdrop-blur-3xl">
              <h2 className="text-5xl md:text-[5rem] font-black tracking-tighter text-white mb-6 leading-[0.9] drop-shadow-2xl">
                {sec.data.title}
              </h2>
              {sec.data.subtitle && (
                <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed drop-shadow-md border-t border-white/20 pt-6">
                  {sec.data.subtitle}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
