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
            Наша CRM система фокусується на тому, що дійсно важливо: робота з клієнтами та ведення бази даних.
            Забудьте про складні інструменти – отримайте зручний функціонал за невисокою ціною.
          </p>
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
