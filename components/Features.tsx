"use client";

import { motion } from "framer-motion";
import { Users, Database, BarChart3, Plug, ArrowRight, Target, Mail, Calendar, Share2 } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Users,
    title: "Управління клієнтами",
    description: "Додавайте контакти, відстежуйте взаємодії, сегментуйте базу. Легко персоналізуйте пропозиції та збільшуйте продажі!",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: Target,
    title: "Управління угодами",
    description: "Відслідковуйте кожну угоду на кожному етапі воронки. Автоматичні нагадування та пріоритизація для максимальних продаж.",
    color: "from-purple-600 to-violet-500",
  },
  {
    icon: Database,
    title: "База даних клієнтів",
    description: "Безпечне зберігання даних з пошуком, фільтрами та експортом. До 1000 клієнтів на старті – масштабуйте з тарифом.",
    color: "from-green-600 to-emerald-500",
  },
  {
    icon: Mail,
    title: "Електронна пошта та SMS",
    description: "Розсилайте кампанії, відслідковуйте відкриття. Інтеграція з Gmail, Outlook. Автоматичні відповіді та поважні шаблони.",
    color: "from-indigo-600 to-blue-500",
  },
  {
    icon: Calendar,
    title: "Календар та планування",
    description: "Синхронізація з Google Calendar та Outlook. Планування дзвінків, зустрічей, автоматичні нагадування для команди.",
    color: "from-teal-600 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Звіти та аналітика",
    description: "Автоматичні звіти про продажи, конверсії. Дізнайтеся, що працює, і оптимізуйте бізнес з деталізованої статистики.",
    color: "from-orange-600 to-yellow-500",
  },
  {
    icon: Plug,
    title: "Інтеграції",
    description: "З email, календарем, месенджерами, платіжними системами – все для автоматизації рутини без програмування.",
    color: "from-pink-600 to-rose-500",
  },
  {
    icon: Share2,
    title: "Командна робота",
    description: "Видимість для всієї команди, розподіл завдань, коментарі та активність. Синхронізація в реальному часі для всіх користувачів.",
    color: "from-cyan-600 to-blue-500",
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
    <section id="features" className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p 
            variants={itemVariants}
            className="text-purple-400/80 text-sm tracking-wider mb-4"
          >
            ПОТУЖНІ ФУНКЦІЇ
          </motion.p>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight"
          >
            Відкрийте наші <span className="gradient-text">ключові можливості</span> для розвитку бізнесу
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg max-w-3xl mx-auto"
          >
            Flamingo CRM система фокусується на тому, що дійсно важливо: робота з клієнтами та ведення бази даних. Забудьте про складні інструменти – отримайте зручний та ефективний функціонал.
          </motion.p>
        </motion.div>

        {/* Скріншот можливостей CRM — з віньєткою та м'яким свіченням */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 relative rounded-2xl overflow-hidden border border-purple-500/20 bg-white/[0.02] backdrop-blur-xl shadow-[0_0_0_1px_rgba(147,51,234,0.2),0_30px_60px_-12px_rgba(0,0,0,0.5),0_0_100px_-15px_rgba(147,51,234,0.3),0_20px_40px_-10px_rgba(147,51,234,0.1)]"
        >
          <div className="relative bg-[#0c0c12]">
            <img
              src="/images/task.png"
              alt="Завдання та можливості Flamingo CRM — дашборд, списки задач, управління клієнтами та угодами"
              width={1200}
              height={600}
              loading="lazy"
              decoding="async"
              className="relative z-0 w-full h-auto object-contain"
            />
            {/* Віньєтка — затемнення від країв до центру */}
            <div
              className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
              style={{
                background: "radial-gradient(ellipse 88% 82% at 50% 50%, transparent 50%, rgba(0,0,0,0.12) 75%, rgba(0,0,0,0.28) 100%)",
              }}
            />
            {/* Тонка світла лінія зверху — глибина */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-px z-10 bg-gradient-to-r from-transparent via-purple-400 to-transparent pointer-events-none rounded-t-2xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative rounded-2xl overflow-hidden"
              >
                {/* Gradient Border */}
                <div
                  className={`absolute inset-0 rounded-2xl p-px bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                >
                  <div className="absolute inset-px rounded-2xl bg-[#0a0a0f]" />
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10 flex gap-6 p-8 backdrop-blur-xl">
                  <motion.div 
                    className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/features"
            className="group inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold px-6 py-3 rounded-lg hover:bg-purple-500/10 transition-all"
          >
            Дізнатися більше про всі функції
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
