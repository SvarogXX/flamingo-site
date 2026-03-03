"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Clock, Shield, MessageCircle, Sliders } from "lucide-react";

const BenefitItem = ({ icon: Icon, color, title, description }: { icon: any; color: string; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    whileHover={{ x: 10 }}
    className="group flex gap-5"
  >
    <motion.div 
      className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${color} border border-white/20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <Icon className="w-7 h-7 text-white" />
    </motion.div>
    <div>
      <h4 className="text-white font-bold text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
        {title}
      </h4>
      <p className="text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </motion.div>
);

const benefits = [
  {
    icon: Users,
    title: "Централізоване управління",
    description: "Всі клієнти, угоди та комунікації в одному місці — без розкиданих таблиць і втрачених контактів.",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: Shield,
    title: "Ролі та доступи",
    description: "Налаштуйте, хто що бачить і може змінювати. Захист даних і прозора робота команди.",
    color: "from-emerald-600 to-teal-500",
  },
  {
    icon: MessageCircle,
    title: "Чати та командна робота",
    description: "Обговорення угод і клієнтів прямо в картці, історія листувань під рукою.",
    color: "from-pink-600 to-rose-500",
  },
  {
    icon: Sliders,
    title: "Система під ваш бізнес",
    description: "Додаткові поля, етапи угод, статуси — налаштуйте CRM під свої процеси.",
    color: "from-amber-600 to-orange-500",
  },
  {
    icon: Clock,
    title: "Економія часу",
    description: "Автоматизація рутини та зрозумілий інтерфейс — більше часу на клієнтів.",
    color: "from-cyan-600 to-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Ріст продажів",
    description: "Прозорість воронки продажів і своєчасні нагадування про наступні кроки.",
    color: "from-lime-600 to-green-500",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 lg:py-32 bg-[#080810] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.01)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      {/* Animated Background Glow */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
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
          className="text-center mb-20"
        >
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-purple-400/80 text-sm tracking-wider mb-4 font-semibold"
          >
            ПЕРЕВАГИ FLAMINGO CRM
          </motion.p>
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Що Очікувати Від Flamingo{" "}
            <span className="gradient-text">CRM</span>
          </motion.h2>
        </motion.div>

        {/* Main content with 2-layout (image + benefits) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left - Card with Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-[#12121a] to-[#0a0a12] backdrop-blur-xl p-8 lg:p-10 shadow-2xl shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all">
              {/* Gradient Border Hover Effect */}
              <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-px rounded-2xl bg-[#080810]" />
              </div>

              <div className="relative z-10">
                {/* Зображення статистики / дашборду */}
                <div className="rounded-xl border border-white/10 overflow-hidden mb-8">
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
                <div className="flex items-center gap-3 mb-8">
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <TrendingUp className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Результати в цифрах</h3>
                    <p className="text-gray-500 text-sm">Перший місяць використання</p>
                  </div>
                </div>

                {/* Stats with Animation */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <motion.div 
                    className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-purple-500/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1">
                      +40%
                    </div>
                    <div className="text-gray-400 text-sm">Конверсія</div>
                  </motion.div>
                  <motion.div 
                    className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 border border-green-500/20"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="text-3xl font-bold text-green-400 mb-1">+65%</div>
                    <div className="text-gray-400 text-sm">Ефективність</div>
                  </motion.div>
                </div>

                {/* Progress bar with Gradient */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-400 font-medium">Прогрес впровадження</span>
                    <span className="text-purple-400 font-semibold">85%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden border border-white/5">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                {/* CTA */}
                <motion.a
                  href="https://crm.flamingo-crm.com.ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2 transition-all hover:shadow-purple-500/70 hover:shadow-xl"
                >
                  <span>Почати безкоштовно</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right - Benefits Grid */}
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
            className="space-y-6"
          >
            {benefits.map((benefit) => (
              <BenefitItem key={benefit.title} {...benefit} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
