"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import ProductTextOverlays from "@/components/ProductTextOverlays";
import ProductDetails from "@/components/ProductDetails";
import BuyNow from "@/components/BuyNow";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = products[currentIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.style.setProperty('--product-gradient', currentProduct.gradient);
    document.documentElement.style.setProperty('--product-color', currentProduct.themeColor);
  }, [currentIndex, currentProduct]);

  const nextFlavor = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prevFlavor = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <main className="min-h-screen relative bg-black selection:bg-white selection:text-black">
      <Navbar />

      {/* Dynamic Background Layer */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 transition-colors duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ background: currentProduct.gradient }}
      />
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-30 mix-blend-overlay bg-noise-overlay" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProduct.id}
          initial={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Scroll Experence Engine */}
          <div className="relative">
            <ProductBottleScroll product={currentProduct} />
            <ProductTextOverlays product={currentProduct} />
          </div>

          <div className="relative z-30 pt-24 -mt-[80vh] md:-mt-[100vh]">
            <ProductDetails product={currentProduct} />
            <BuyNow product={currentProduct} />
          </div>

          <div className="py-32 px-8 flex justify-center">
            <button 
              onClick={nextFlavor}
              className="group relative overflow-hidden rounded-[3rem] glass-panel p-10 md:p-16 w-full max-w-5xl transition-all duration-500 hover:scale-[1.02] active:scale-95 flex items-center justify-between"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-1000" />
              <div className="text-left text-white relative z-10 flex-grow">
                <span className="block text-sm md:text-lg uppercase tracking-[0.3em] font-bold text-white/50 mb-3">Explore Next Flavor</span>
                <span className="block text-4xl md:text-7xl font-black tracking-tighter drop-shadow-lg pr-4">{products[(currentIndex + 1) % products.length].name}</span>
              </div>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center text-black shadow-2xl group-hover:rotate-12 transition-all duration-700 relative z-10 shrink-0">
                <ChevronRight className="w-12 h-12 md:w-16 md:h-16 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </button>
          </div>
          
          <Footer />
        </motion.div>
      </AnimatePresence>

      {/* Modern Floating UI Nav Arrows */}
      <div className="fixed top-1/2 -translate-y-1/2 left-4 md:left-8 z-40 hidden md:flex flex-col gap-4">
        <button 
          onClick={prevFlavor}
          className="w-16 h-16 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
        >
          <ChevronLeft className="w-8 h-8 text-white group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="fixed top-1/2 -translate-y-1/2 right-4 md:right-8 z-40 hidden md:flex flex-col gap-4">
        <button 
          onClick={nextFlavor}
          className="w-16 h-16 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
        >
          <ChevronRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Minimalist Floating Pill Menu */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 p-2 rounded-full glass-panel border border-white/20 shadow-2xl backdrop-blur-3xl">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(i)}
              className={`px-8 py-4 rounded-full text-sm tracking-widest uppercase font-bold transition-all duration-500 ${
                currentIndex === i 
                  ? "bg-white text-black shadow-lg scale-100" 
                  : "text-white/50 hover:text-white hover:bg-white/5 scale-95 hover:scale-100"
              }`}
            >
              {p.id.charAt(0).toUpperCase() + p.id.slice(1)}
            </button>
          ))}
        </div>
      </div>

    </main>
  );
}
