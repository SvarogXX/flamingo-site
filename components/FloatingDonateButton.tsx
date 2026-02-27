"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FloatingDonateButton() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById('ukraine-support');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      className={`fixed bottom-8 right-4 sm:bottom-12 sm:right-8 z-40 w-32 sm:w-36 rounded-2xl border border-white/10 hover:border-white/30 bg-gradient-to-br from-purple-950/80 to-[#0c0c10] p-4 shadow-xl shadow-black/40 backdrop-blur-md cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 ${!reducedMotion ? "hero-card-float" : ""}`}
    >
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-0.5">Free</div>
        <div className="text-xs text-purple-400/90 font-medium">за донат для ЗСУ</div>
      </div>
    </motion.div>
  );
}
