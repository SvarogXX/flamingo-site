"use client";

import { motion } from "framer-motion";
import { Users, Database, BarChart3, Plug, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Users,
    title: "Управління клієнтами",
    description: "Додавайте контакти, відстежуйте взаємодії, сегментуйте базу. Легко персоналізуйте пропозиції та збільшуйте продажі!",
  },
  {
    icon: Database,
    title: "База даних клієнтів",
    description: "Безпечне зберігання даних з пошуком, фільтрами та експортом. До 1000 клієнтів на старті – масштабуйте з тарифом.",
  },
  {
    icon: BarChart3,
    title: "Звіти та аналітика",
    description: "Автоматичні звіти про продажі, конверсії. Дізнайтеся, що працює, і оптимізуйте бізнес.",
  },
  {
    icon: Plug,
    title: "Інтеграції",
    description: "З email, календарем, месенджерами – все для автоматизації рутини.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-[#0a0a0f]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Функціонал CRM: <span className="gradient-text">базовий, але потужний</span> для вашого бізнесу
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Flamingo CRM система фокусується на тому, що дійсно важливо: робота з клієнтами та ведення бази даних. Створення угод та контрроль виконання завдань.
            Забудьте про складні інструменти – отримайте зручний та ефективний функціонал, який змінити ваш бізнес.
          </p>
        </motion.div>

        {/* Скріншот можливостей CRM — з віньєткою та м'яким свіченням */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_60px_-12px_rgba(0,0,0,0.5),0_0_100px_-15px_rgba(147,51,234,0.4),0_20px_40px_-10px_rgba(147,51,234,0.15)]"
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
            <div className="absolute top-0 left-0 right-0 h-px z-10 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none rounded-t-2xl" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium"
          >
            Дізнатися більше про функції
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
