"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Target, Users, Zap, Github, Mail } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const values = [
  {
    icon: Heart,
    title: "Служба перш за все",
    description: "Рейтинг 5/5 задоволення користувачів, приоритет на справді важливе",
  },
  {
    icon: Target,
    title: "Фокус на результат",
    description: "Кожна функція – результат збору зворотного зв'язку від наших користувачів",
  },
  {
    icon: Users,
    title: "Спільнота ветеранів",
    description: "Побудована ветеранами для ветеранів та їхніх побратимів. Кожна копійка йде на ЗСУ",
  },
  {
    icon: Zap,
    title: "Простота перш за все",
    description: "Без лишнього. Тільки те, що справді потрібно для бізнесу",
  },
];

const stats = [
  { number: "2026", label: "Рік створення під час війни" },
  { number: "100%", label: "Прибуток на підтримку ЗСУ" },
  { number: "∞", label: "Задоволених користувачів" },
];

export default function CTA() {
  return (
    <section id="about" className="relative py-24 lg:py-40 overflow-hidden">
      {/* Background gradient orbs */}
      <motion.div 
        className="absolute top-0 left-10 w-[400px] h-[400px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-[120px] opacity-10"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-[120px] opacity-10"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.p 
            className="text-purple-400/80 text-sm tracking-widest mb-4 font-semibold uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            🇺🇦 ПРО ПРОЄКТ
          </motion.p>

          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Створена <span className="gradient-text">ветеранами</span> для своїх <span className="gradient-text">побратимів</span>
          </motion.h2>

          <motion.p 
            className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Flamingo CRM народилася в 2026 році під час активного конфлікту. Це не просто CRM – це результат праці людей, які розуміють, що потрібно для справжнього бізнесу. Кожен проданий план підписки – прямо на рахунок ЗСУ.
          </motion.p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 lg:mb-28"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl px-8 py-10 border border-white/10 hover:border-white/20 transition-colors duration-300 text-center">
                <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-300 text-sm sm:text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Наші цінності */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20 lg:mb-28"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
          >
            Що нас керує
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 group-hover:border-white/40 transition-colors duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex-shrink-0 group-hover:from-blue-500/50 group-hover:to-purple-500/50 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Історія */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mb-20 lg:mb-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Лівий текст */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-purple-400/80 text-sm tracking-wider mb-4 font-semibold uppercase">
                Наша історія
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Коли вибір підтримати своїх стає бізнесом
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  У 2026 році кілька ветеранів, які повернулися зі строю, поставили собі завдання: створити інструмент для управління бізнесом, який буде:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-1">→</span>
                    <span><strong>Простим</strong> – без зайвого, тільки суть</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold mt-1">→</span>
                    <span><strong>Доступним</strong> – не видавати всі гроші за ліцензію</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 font-bold mt-1">→</span>
                    <span><strong>Корисним</strong> – заробляти на підтримку тих, хто захищав країну</span>
                  </li>
                </ul>
                <p className="pt-4">
                  Результат – Flamingo CRM. Легкий, потужний, справедливий. Кожна його копійка – це вже допомога.
                </p>
              </div>
            </motion.div>

            {/* Правий контакт + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Контактна карточка */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-purple-900/40 to-pink-900/30 rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-colors">
                  <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-400" />
                    Хочете допомогти?
                  </h4>
                  <p className="text-gray-300 text-sm mb-6">
                    Розповідайте друзям про Flamingo CRM – разом ми сильніші. Приєднуйтеся до нашої спільноти.
                  </p>
                  <div className="flex items-center gap-3">
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </Link>
                    <Link
                      href="mailto:support@example.com"
                      className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* CTA Кнопка */}
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="group w-full"
              >
                <Link
                  href="https://crm.flamingo-crm.com.ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-bold rounded-xl shadow-xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300"
                >
                  <span>Спробувати Flamingo CRM</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to action финальний */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Flamingo CRM – це більше ніж продукт. Це символ того, що ветерани не просто захищають країну, а й будують її майбутнє. <span className="text-white font-semibold">Разом ми сильніші.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
