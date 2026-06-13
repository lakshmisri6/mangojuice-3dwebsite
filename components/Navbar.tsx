"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 flex justify-between items-center px-6 md:px-16 py-6 ${
      scrolled ? "bg-black/10 backdrop-blur-2xl border-b border-white/10 shadow-2xl" : "bg-transparent"
    }`}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="relative">
          <Zap className="text-white fill-white w-8 h-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10" />
          <div className="absolute inset-0 blur-lg bg-white/50 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
        </div>
        <span className="text-2xl font-black tracking-tighter text-white opacity-90 group-hover:opacity-100 transition-opacity">
          NANO BANANA
        </span>
      </motion.div>

      <motion.button 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative group overflow-hidden px-8 py-3 rounded-full bg-white/5 border border-white/20 backdrop-blur-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
      >
        <span className="relative z-10 text-white font-bold tracking-wide text-sm uppercase">Order Now</span>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </motion.button>
    </nav>
  );
}
