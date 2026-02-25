"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Фон блоку — зображення на весь екран секції */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/business.png)" }}
        aria-hidden
      />
      {/* Затемнення для читабельності тексту */}
      <div className="absolute inset-0 bg-[#080810]/75" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Ліва частина — пуста, фон видно */}
          <div className="relative order-2 lg:order-1 min-h-[200px] lg:min-h-0" aria-hidden />

          {/* Текст і CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-purple-400/80 text-sm tracking-wider mb-4">ПРИЄДНУЙТЕСЬ</p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Про Flamingo CRM: створена для{" "}
              <span className="gradient-text">реального бізнесу</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Ми – команда, що розуміє виклики бізнесу. Flamingo CRM акцентує на базовому зручному функціоналі: робота з клієнтами, ведення бази даних без зайвого. Невисока ціна робить її доступною для стартапів, а гнучкість – для корпорацій. <br />
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Широкий діапазон використання: від онлайн-магазинів до сервісних компаній. <br /> Приєднуйтеся до тисяч користувачів, які вже оптимізували свій бізнес!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://flamingo-crm-xi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/40 transition-all duration-300 hover:from-purple-500 hover:to-pink-400 hover:shadow-purple-500/50 hover:shadow-xl"
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
