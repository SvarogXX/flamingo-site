"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-[#0a0a0f]">
      {/* Border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/10 rounded-3xl blur-2xl" />

          {/* Card */}
          <div className="relative bg-gradient-to-br from-[#12121a] to-[#0a0a12] rounded-3xl border border-purple-500/20 overflow-hidden">
            {/* Header */}
            <div className="text-center pt-10 pb-8 border-b border-white/5">
              <p className="text-purple-400 text-sm font-medium mb-2">СПЕЦІАЛЬНА ПРОПОЗИЦІЯ</p>
              <h3 className="text-2xl font-bold text-white mb-4">14 Днів Безкоштовно</h3>

              {/* Price */}
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl font-bold gradient-text">0</span>
                <span className="text-2xl text-gray-400">₴</span>
              </div>
              <p className="text-gray-500 mt-2">потім 1 200 грн/місяць</p>
            </div>

            {/* Features */}
            <div className="p-8 lg:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Необмежена кількість контактів",
                  "Повна аналітика та звіти",
                  "Автоматизація продажів",
                  "Командна робота",
                  "Інтеграції з популярними сервісами",
                  "Мобільний додаток",
                  "Пріоритетна підтримка 24/7",
                  "Експорт та імпорт даних",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-purple-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="#signup"
                className="group w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Почати 14-Денний Тріал</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <p className="text-center text-gray-500 text-sm mt-4">
                Без кредитної картки • Скасування в будь-який момент
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional plans - smaller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12"
        >
          {/* Starter */}
          <div className="bg-white/5 rounded-2xl border border-white/5 p-6 hover:border-purple-500/30 transition-colors">
            <h4 className="text-white font-bold mb-2">Старт</h4>
            <p className="text-gray-500 text-sm mb-4">Для малого бізнесу</p>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-bold text-white">0</span>
              <span className="text-gray-500">₴ назавжди</span>
            </div>
            <Link href="#signup" className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors">
              Детальніше →
            </Link>
          </div>

          {/* Enterprise */}
          <div className="bg-white/5 rounded-2xl border border-white/5 p-6 hover:border-purple-500/30 transition-colors">
            <h4 className="text-white font-bold mb-2">Корпоративний</h4>
            <p className="text-gray-500 text-sm mb-4">Для великих команд</p>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-bold text-white">2499</span>
              <span className="text-gray-500">₴/місяць</span>
            </div>
            <Link href="#signup" className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors">
              Зв&apos;язатися →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
