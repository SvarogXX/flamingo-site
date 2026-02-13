"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "9",
    currency: "$",
    period: "міс",
    description: "Ідеально для малого бізнесу та фрілансерів",
    popular: false,
    features: [
      "До 3 менеджерів",
      "1 компанія",
      "До 1000 клієнтів в базі",
      "Базові звіти",
      "Email-інтеграція",
      "Email-підтримка",
    ],
  },
  {
    name: "Growth",
    price: "29",
    currency: "$",
    period: "міс",
    description: "Для зростаючого бізнесу",
    popular: true,
    features: [
      "До 5 менеджерів",
      "До 2 компаній",
      "До 5000 клієнтів",
      "Розширені звіти",
      "Інтеграції з календарем та платіжками",
      "Пріоритетна підтримка",
    ],
  },
  {
    name: "Enterprise",
    price: "99",
    currency: "$",
    period: "міс",
    description: "Для великих команд без обмежень",
    popular: false,
    features: [
      "Безліміт менеджерів",
      "Безліміт компаній",
      "Безліміт клієнтів",
      "Повні звіти з аналітикою",
      "Кастомні інтеграції (API)",
      "24/7 підтримка",
      "Модулі маркетингу",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-[#0a0a0f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Тарифи CRM: оберіть план для <span className="gradient-text">вашого зростання</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Почніть з безкоштовного пробного періоду 14 днів – повний доступ до всіх функцій.
            Потім оберіть тариф, що пасує вашому бізнесу.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${plan.popular
                  ? "bg-gradient-to-b from-purple-600/20 to-purple-900/10 border-2 border-purple-500/50 shadow-lg shadow-purple-500/20"
                  : "bg-white/5 border border-white/5 hover:border-purple-500/30"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                    <Sparkles className="w-4 h-4" />
                    Найпопулярніший
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">{plan.currency}{plan.price}</span>
                <span className="text-gray-500">/{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://flamingo-crm-xi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 rounded-xl font-semibold text-center transition-all ${plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/30"
                    : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                  }`}
              >
                Обрати тариф
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-purple-400 text-sm mt-8"
        >
          Щорічна підписка – знижка 20%! Оновлюйте тариф у будь-який момент.
        </motion.p>

        <div className="text-center mt-12">
          <a
            href="https://flamingo-crm-xi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl"
          >
            <span>Обрати тариф і почати</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
