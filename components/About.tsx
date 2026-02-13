"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#080810]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Про нашу CRM: створена для <span className="gradient-text">реального бізнесу</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Ми – команда, що розуміє виклики бізнесу. Наша CRM акцентує на базовому зручному функціоналі:
            робота з клієнтами, ведення бази даних без зайвого. Невисока ціна робить її доступною для стартапів,
            а гнучкість – для корпорацій. Широкий діапазон використання: від онлайн-магазинів до сервісних компаній.
            Приєднуйтеся до тисяч користувачів, які вже оптимізували свій бізнес!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
