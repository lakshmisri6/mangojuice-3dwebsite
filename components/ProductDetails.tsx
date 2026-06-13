"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <section className="py-32 px-8 md:px-24 max-w-[90rem] mx-auto text-white relative z-30">
      
      {/* Detail Block 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-4">
            <span className="w-12 h-px bg-white/50"></span>
            <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-white/50">The Details</h3>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40 pb-2">
            {product.detailsSection.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light max-w-xl">
            {product.detailsSection.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-6">
            {product.features.map((f, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium backdrop-blur-md shadow-xl hover:bg-white/10 transition-colors">
                {f}
              </span>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-[32rem] rounded-[2.5rem] glass-panel flex flex-col justify-center items-center p-12 group hover:border-white/40 transition-colors duration-700"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <h4 className="text-[12rem] font-black text-stroke-transparent opacity-10 absolute -right-10 -bottom-20 select-none group-hover:scale-110 transition-transform duration-1000 ease-out">{product.id}</h4>
          
          <div className="grid grid-cols-1 gap-12 w-full z-10">
            {product.stats.map((stat, i) => (
              <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4">
                <span className="text-lg text-white/50 tracking-[0.2em] uppercase font-semibold">{stat.label}</span>
                <span className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{stat.val}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Detail Block 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-last md:order-first h-[32rem] rounded-[2.5rem] glass-panel p-16 flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-white/10 blur-[100px] rounded-full group-hover:bg-white/20 transition-colors duration-1000" />
          <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-white/50 mb-8 border-b border-white/10 pb-4">Our Promise</h4>
          <p className="text-3xl md:text-4xl text-white font-light leading-[1.4] relative z-10">
            "{product.freshnessSection.description}"
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 order-first md:order-last md:pl-16"
        >
          <div className="inline-flex items-center gap-4">
            <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-white/50">Process</h3>
            <span className="w-12 h-px bg-white/50"></span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-bl from-white to-white/40 pb-2">
            {product.freshnessSection.title}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
