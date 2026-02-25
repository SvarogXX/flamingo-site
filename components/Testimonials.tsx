"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Shield, Store, Zap, Users } from "lucide-react";

/* ========== ОРИГІНАЛЬНИЙ БЛОК ВІДГУКІВ (повернути, коли будуть реальні відгуки) ==========
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Олександр Петренко",
    role: "CEO, Tech Solutions",
    content: "CRM система змінила наш підхід до роботи з клієнтами. Продажі зросли на 45%!",
    rating: 5,
  },
  {
    name: "Марія Коваленко",
    role: "Директор з продажів",
    content: "Найкраща інвестиція в наш бізнес. Команда працює набагато ефективніше.",
    rating: 5,
  },
  {
    name: "Дмитро Сидоренко",
    role: "Засновник стартапу",
    content: "Простота використання та потужний функціонал - саме те, що потрібно.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-[#080810]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ... >
          <p className="text-purple-400/80 ...">ВІДГУКИ</p>
          <h2 ...>Що Кажуть <span className="gradient-text">Клієнти</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(...) => ( картки з рейтингом, цитатою, автором ) }
        </div>
      </div>
    </section>
  );
}
========== Кінець блоку Відгуки ========== */

const results = [
  {
    icon: TrendingUp,
    title: "+35–50 % конверсії угоди",
    description: "Бо вся база клієнтів у одному місці + автоматичні нагадування",
  },
  {
    icon: Clock,
    title: "–12 годин на тиждень",
    description: "Замість Excel і розкиданих таблиць — один зручний дашборд",
  },
  {
    icon: Shield,
    title: "100 % безпечне зберігання даних",
    description: "GDPR-сумісна база клієнтів, яку можна експортувати в 1 клік",
  },
  {
    icon: Store,
    title: "Підходить для будь-якого бізнесу",
    description: "Від маленького магазину до сервісної компанії на 30+ людей",
  },
  {
    icon: Zap,
    title: "Швидкий старт без налаштувань",
    description: "Почніть за хвилини — без технічних знань та складної інтеграції",
  },
  {
    icon: Users,
    title: "Робота команди та завдання в одному місці",
    description: "Розподіляйте задачі, бачте хто за що відповідає, контролюйте дедлайни — без хаосу в чатах",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-[#080810]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-purple-400/80 text-sm tracking-wider mb-4">
            РЕЗУЛЬТАТИ, ЯКИХ ВИ ДОСЯГНЕТЕ З FLAMINGO CRM
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Результати, яких ви досягнете{" "}
            <span className="gradient-text">вже в перший місяць</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((item, index) => {
            const Icon = item.icon;
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-2xl border border-white/5 p-6 hover:border-purple-500/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto"
        >
          Це не обіцянки — це середні результати, які отримують користувачі простих
          CRM-систем 2025–2026 року
        </motion.p>
      </div>
    </section>
  );
}
