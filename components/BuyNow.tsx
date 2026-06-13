"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { ShoppingCart, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function BuyNow({ product }: { product: Product }) {
  return (
    <section className="py-32 px-8 md:px-24 max-w-[80rem] mx-auto text-white">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="rounded-[3rem] glass-panel p-10 md:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.3)] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div className="flex flex-col justify-center">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-6 w-max">
              Limited Edition
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">{product.name}</h2>
            <p className="text-2xl text-white/60 mb-12 font-light">{product.subName}</p>
            
            <div className="flex items-baseline gap-3 mb-10 pb-10 border-b border-white/10">
              <span className="text-7xl md:text-8xl font-black tracking-tighter">{product.buyNowSection.price}</span>
              <span className="text-xl text-white/50 font-medium uppercase tracking-widest">{product.buyNowSection.unit}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.buyNowSection.processingParams.map((param, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/5">
                  <CheckCircle2 className="w-6 h-6 text-white opacity-80" />
                  <span className="text-lg font-medium tracking-wide">{param}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-10 lg:pl-12 lg:border-l border-white/10">
            <div className="space-y-6 flex-grow flex flex-col justify-center">
              <div className="flex bg-black/20 rounded-3xl p-6 gap-6 items-start border border-white/5 hover:bg-white/5 transition-colors">
                <Zap className="w-8 h-8 text-white opacity-90 shrink-0" />
                <div>
                  <h4 className="font-bold text-xl mb-2 tracking-wide">Lightning Delivery</h4>
                  <p className="text-white/60 leading-relaxed">{product.buyNowSection.deliveryPromise}</p>
                </div>
              </div>
              <div className="flex bg-black/20 rounded-3xl p-6 gap-6 items-start border border-white/5 hover:bg-white/5 transition-colors">
                <ShieldCheck className="w-8 h-8 text-white opacity-90 shrink-0" />
                <div>
                  <h4 className="font-bold text-xl mb-2 tracking-wide">Quality Assured</h4>
                  <p className="text-white/60 leading-relaxed">{product.buyNowSection.returnPolicy}</p>
                </div>
              </div>
            </div>

            <button className="group relative w-full py-6 md:py-8 rounded-[2rem] bg-white text-black overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
              <div className="relative z-10 flex items-center justify-center gap-4">
                <ShoppingCart className="w-8 h-8" />
                <span className="font-black text-2xl uppercase tracking-widest">Add to Cart</span>
              </div>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
