"use client";

import { motion } from "framer-motion";
import { Apple, Monitor, Smartphone, Mail } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-[#0a0a0f]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Отримайте <span className="gradient-text">Повний Контроль</span> Над Вашими Клієнтами та Продажами
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Наша CRM система надає вам потужні інструменти для управління контактами,
              автоматизації продажів та аналітики. Все в одному місці, доступне
              з будь-якого пристрою.
            </p>

            {/* Subtitle */}
            <div className="mb-8">
              <p className="text-purple-400 text-sm font-medium mb-2">
                Розширюйте Ваші Можливості
              </p>
              <p className="text-xl text-white font-semibold">
                Інструменти, Які Допомагають <span className="gradient-text">Зростати</span> Вашому Бізнесу
              </p>
            </div>

            {/* Platform badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Apple, label: "iOS" },
                { icon: Monitor, label: "Windows" },
                { icon: Smartphone, label: "Android" },
                { icon: Mail, label: "Email" },
              ].map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/10 border border-purple-500/30 rounded-lg hover:border-purple-500/50 transition-colors cursor-pointer"
                  >
                    <Icon className="w-5 h-5 text-purple-400" />
                    <span className="text-white text-sm font-medium">{platform.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/20 rounded-3xl blur-3xl" />

              {/* Main illustration container */}
              <div className="relative z-10 w-full h-full rounded-3xl bg-gradient-to-br from-purple-900/40 to-pink-900/20 border border-purple-500/20 p-8 flex items-center justify-center">
                {/* Placeholder illustration */}
                <div className="text-center">
                  <div className="text-8xl mb-4">📊</div>
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-2xl flex items-center justify-center">
                    <div className="w-20 h-20 bg-purple-500/40 rounded-xl flex items-center justify-center">
                      <span className="text-4xl">💼</span>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute top-10 right-10 w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center animate-bounce">
                    <span className="text-xl">📈</span>
                  </div>
                  <div className="absolute bottom-10 left-10 w-10 h-10 bg-pink-500/30 rounded-lg flex items-center justify-center animate-pulse">
                    <span className="text-lg">✨</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
