"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Clock, Shield, MessageCircle, Sliders } from "lucide-react";

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 lg:py-32 bg-[#080810]">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple-400/80 text-sm tracking-wider mb-4">РЕЗУЛЬТАТИ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Що Очікувати Від Flamingo <span className="gradient-text">CRM...</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#12121a] to-[#0a0a12] rounded-2xl border border-white/5 p-8 lg:p-10">
              {/* Зображення статистики / дашборду */}
              <div className="rounded-xl border border-white/10 overflow-hidden mb-6">
                <img
                  src="/images/statistic.png"
                  alt="Скріншот дашборду та звітів Flamingo CRM — статистика продажів, аналітика та метрики бізнесу"
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Зростання Продажів</h3>
                  <p className="text-gray-500 text-sm">Highlights</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white mb-1">+40%</div>
                  <div className="text-gray-500 text-sm">Конверсія</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-400 mb-1">+65%</div>
                  <div className="text-gray-500 text-sm">Ефективність</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Прогрес</span>
                  <span className="text-purple-400">85%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                </div>
              </div>

              {/* CTA */}
              <button className="w-full py-3.5 bg-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/40 flex items-center justify-center gap-2 transition-all hover:bg-purple-500 hover:shadow-purple-500/50 hover:shadow-xl">
                <span>Дізнатися Більше</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              {/* 1. Централізоване управління */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Централізоване управління</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Всі клієнти, угоди та комунікації в одному місці — без розкиданих таблиць і втрачених контактів.
                    Один інструмент замість десятків файлів і чатів.
                  </p>
                </div>
              </div>

              {/* 2. Ролі та доступи */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Ролі та доступи</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Налаштуйте, хто що бачить і що може змінювати: адмін, менеджер, співробітник.
                    Захист даних і прозора робота команди без зайвих прав.
                  </p>
                </div>
              </div>

              {/* 3. Чати та командна робота */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Чати та командна робота</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Обговорення угод і клієнтів прямо в картці, історія листувань під рукою.
                    Вся команда в контексті — без копіювання в месенджери.
                  </p>
                </div>
              </div>

              {/* 4. Гнучкість і налаштування */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                  <Sliders className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Система під ваш бізнес</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Додаткові поля, етапи угод, статуси — налаштуйте CRM під свої процеси, а не навпаки.
                    Один інструмент для різних сфер: торгівля, послуги, проєкти.
                  </p>
                </div>
              </div>

              {/* 5. Економія часу */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Економія часу</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Автоматизація рутини та зрозумілий інтерфейс — менше годин на введення даних, більше на клієнтів і угоди.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
