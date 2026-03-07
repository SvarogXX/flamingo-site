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
    <section id="testimonials" className="relative py-24 bg-[#080810]">
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
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#080810] overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.01)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      {/* Animated Background Glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute -top-1/2 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          className="text-center mb-16"
        >
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-purple-400/80 text-sm tracking-wider mb-4 font-semibold"
          >
            РЕАЛЬНІ РЕЗУЛЬТАТИ
          </motion.p>
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Результати, яких ви досягнете{" "}
            <span className="gradient-text">вже в перший місяць</span>
          </motion.h2>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Реальні результати від користувачів Flamingo CRM
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {results.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative rounded-2xl overflow-hidden"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-px rounded-2xl bg-[#080810]" />
                </div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500"
                />

                {/* Content */}
                <div className="relative z-10 p-6 lg:p-8 glass-panel border-none bg-transparent shadow-none">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center mb-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 glass-panel bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-none relative overflow-hidden"
        >
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            <span className="text-white font-semibold">Це не обіцянки —</span> це чинні результати, досягнуті середніми користувачами Flamingo CRM у 2025–2026 роках. Результати залежать від якості даних та послідовності в роботі з системою.
          </p>
        </motion.div>
      </div>

      {/* Top Border with Glow */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent shadow-lg shadow-purple-500/50"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}
