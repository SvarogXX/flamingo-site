"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="signup" className="relative py-24 lg:py-32 bg-[#080810] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-pink-600/30 rounded-full blur-3xl animate-pulse" />

              {/* Main illustration */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="relative">
                  {/* Character/illustration placeholder */}
                  <div className="w-48 h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-3xl flex items-center justify-center border border-purple-500/30 shadow-2xl shadow-purple-500/20">
                    <span className="text-8xl">💡</span>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-purple-500/30 rounded-2xl flex items-center justify-center border border-purple-500/40 animate-bounce">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-pink-500/30 rounded-xl flex items-center justify-center border border-pink-500/40 animate-pulse">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div className="absolute top-1/2 -right-10 w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center border border-blue-500/40">
                    <span className="text-xl">📊</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-purple-400/80 text-sm tracking-wider mb-4">ПРИЄДНУЙТЕСЬ</p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Спільнота Бізнесу{" "}
              <span className="gradient-text">Вітає Вас</span>{" "}
              З Відкритими Руками
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Приєднуйтесь до тисяч успішних підприємців та компаній,
              які вже трансформували свій бізнес за допомогою нашої CRM системи.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#pricing"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Почати Безкоштовно</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              {/* <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
                Замовити Демо
              </button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
