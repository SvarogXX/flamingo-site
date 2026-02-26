"use client";

import { motion } from "framer-motion";
import { Users, Database, BarChart3, Plug, ArrowRight, Target, Mail, Calendar, Share2 } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Users,
    title: "Управління клієнтами",
    description: "Додавайте контакти, відстежуйте взаємодії та персоналізуйте пропозиції",
    bgColor: "from-purple-600 to-purple-700",
    accentColor: "#9333ea",
    side: "left",
  },
  {
    icon: Target,
    title: "Управління угодами",
    description: "Відслідковуйте угоди на кожному етапі воронки з автоматичними нагадуваннями",
    bgColor: "from-pink-600 to-rose-600",
    accentColor: "#ec4899",
    side: "right",
  },
  {
    icon: Database,
    title: "База даних клієнтів",
    description: "Безпечне зберігання з пошуком, фільтрами та експортом до 1000 клієнтів",
    bgColor: "from-purple-700 to-purple-600",
    accentColor: "#a855f7",
    side: "left",
  },
  {
    icon: Mail,
    title: "Електронна пошта та SMS",
    description: "Розсилайте кампанії з інтеграцією Gmail, Outlook та автоматичними відповідями",
    bgColor: "from-pink-600 to-pink-700",
    accentColor: "#f43f5e",
    side: "right",
  },
  {
    icon: Calendar,
    title: "Календар та планування",
    description: "Синхронізація з Google Calendar, планування дзвінків та зустрічей",
    bgColor: "from-purple-600 to-violet-600",
    accentColor: "#a855f7",
    side: "left",
  },
  {
    icon: BarChart3,
    title: "Звіти та аналітика",
    description: "Автоматичні звіти про продажи та конверсії з деталізованою статистикою",
    bgColor: "from-pink-700 to-rose-600",
    accentColor: "#f43f5e",
    side: "right",
  },
  {
    icon: Plug,
    title: "Інтеграції",
    description: "Підключайте email, календарі, месенджери та платіжні системи без коду",
    bgColor: "from-purple-700 to-purple-600",
    accentColor: "#9333ea",
    side: "left",
  },
  {
    icon: Share2,
    title: "Командна робота",
    description: "Видимість для команди, розподіл завдань і коментарі в реальному часі",
    bgColor: "from-pink-600 to-rose-700",
    accentColor: "#ec4899",
    side: "right",
  },
];

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
    transition: { duration: 0.5 },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-32 lg:py-48 bg-[#0a0a0f] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="text-purple-400/80 text-sm tracking-widest mb-4 uppercase font-semibold">
            Потужні функції
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
            Відкрийте наші <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ключові можливості</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Спеціально розроблені для вашого бізнесу функції, які допоможуть вам керувати клієнтами та зростати швидше
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLeft = feature.side === "left";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex ${isLeft ? "flex-row" : "flex-row-reverse"} items-center gap-8 lg:gap-16`}
              >
                {/* Large Background Shape */}
                <div className="flex-1 relative">
                  <motion.div
                    className={`bg-gradient-to-br ${feature.bgColor} rounded-[3rem] p-12 lg:p-16 min-h-96 flex flex-col justify-between relative overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Decorative Circle */}
                    <motion.div
                      className="absolute -top-20 -right-20 w-56 h-56 rounded-full opacity-20 bg-white blur-3xl"
                      animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        className="w-24 h-24 rounded-3xl bg-white/15 backdrop-blur-xl flex items-center justify-center mb-8"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon className="w-12 h-12 text-white" />
                      </motion.div>

                      <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-white/85 text-lg leading-relaxed max-w-sm">
                        {feature.description}
                      </p>
                    </div>

                    {/* Bottom accent circle */}
                    <motion.div
                      className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-15 bg-white blur-3xl"
                      animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                {/* Icon decoration on side */}
                <motion.div
                  className="hidden lg:flex flex-col gap-6 flex-1"
                  initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center shadow-2xl`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-16 rounded-full bg-purple-400/30" />
                    <div className="h-2 w-12 rounded-full bg-purple-400/20" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-24"
        >
          <Link
            href="/features"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
          >
            Дізнатися все про функції
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
