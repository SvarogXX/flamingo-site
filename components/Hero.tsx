"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0f] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-purple-400/80 text-sm tracking-wider mb-6"
          >
            ★ Онлайн CRM з безкоштовним пробним періодом ★
          </motion.p>

          {/* H1 - SEO ключові слова */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">CRM система для ефективного </span>
            <span className="gradient-text">управління клієнтами</span>
            <span className="text-white"> та </span>
            <span className="gradient-text">базою даних</span>
            <span className="text-white"> – просто, доступно, потужно</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Уявіть: ваш бізнес росте, клієнти множаться, а ви завжди на крок попереду. <br />
            <span className="gradient-text">Flamingo</span> CRM – базовий зручний інструмент для роботи з клієнтами, ведення бази даних
            та автоматизації. Невисока ціна, широкий діапазон: від малого магазину до великої компанії.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="https://flamingo-crm-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 mx-auto"
            >
              <span>Спробувати безкоштовно</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-purple-400/80 text-sm mt-4"
          >
            Безкоштовний пробний період 14 днів
          </motion.p>

          {/* Чому наша CRM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-16 text-left max-w-2xl mx-auto"
          >
            <h2 className="text-lg font-semibold text-white mb-4 text-center">Чому Flamingo CRM?</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm"><strong className="text-gray-300">Зручність на першому місці:</strong> Інтуїтивний інтерфейс – від додавання клієнтів до генерації звітів.</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm"><strong className="text-gray-300">Доступна ціна:</strong> Тарифи від 450 грн/міс, без прихованих платежів.</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm"><strong className="text-gray-300">Універсальність:</strong> Підходить для торгівлі, послуг, IT – масштабуйтеся з бізнесом.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
