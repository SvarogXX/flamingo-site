"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0f] overflow-hidden">
      {/* Background chart visualization */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-[#0a0a0f]" />

        {/* Chart lines effect */}
        <svg className="absolute top-0 left-0 w-full h-[60%] opacity-30" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q150,100 300,150 T600,100 T900,180 T1200,80 T1500,150 T1800,50 L1800,0 L0,0 Z"
            fill="url(#chartGradient)"
          />
          <path
            d="M0,200 Q150,100 300,150 T600,100 T900,180 T1200,80 T1500,150 T1800,50"
            fill="none"
            stroke="#9333ea"
            strokeWidth="2"
          />
        </svg>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Percentage numbers */}
        <div className="absolute top-[15%] right-[10%] text-6xl font-bold text-purple-500/20">
          7.5%
        </div>
        <div className="absolute top-[25%] left-[5%] text-4xl font-bold text-green-500/15">
          +12.3%
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Small badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400/80 text-sm tracking-wider mb-6"
          >
            ★ ПРОФЕСІЙНА CRM ПЛАТФОРМА ★
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            <span className="text-white">&quot;#1 Вибір Для </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Управління Бізнесом
            </span>
            <span className="text-white"> З Потужними Інструментами</span>
            <br />
            <span className="text-white">Прямо До Вас Для </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Швидкого Зростання&quot;
            </span>
          </motion.h1>

          {/* Email input
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-md mx-auto mb-6"
          >
            <div className="relative">
              <input
                type="email"
                placeholder="Введіть ваш email"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
          </motion.div> */}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="https://flamingo-crm-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 mx-auto"
            >
              <span>Почати Зараз</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
