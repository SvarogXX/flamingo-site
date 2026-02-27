"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Scissors,
  Wrench,
  Code,
  Home,
  FileText,
  ShieldCheck,
  Dumbbell,
  ArrowRight,
} from "lucide-react";

type AudienceItem = {
  title: string;
  subtitle: string;
  detail: string;
  icon?: React.ComponentType<any>;
  slug?: string;
};

const audiences: AudienceItem[] = [
  {
    icon: ShoppingCart,
    slug: "online-store",
    title: "Онлайн-магазин / Роздрібна торгівля",
    subtitle: "Вся база клієнтів, замовлення, повернення та повторні продажі — в одному місці.",
    detail: "Швидкий пошук, теги, історія покупок — більше повторних продажів без хаосу.",
  },
  {
    icon: Scissors,
    slug: "beauty-salon",
    title: "Салон краси / Перукарня / Нігтьовий сервіс",
    subtitle: "Записи клієнтів, нагадування в Telegram/SMS, історія послуг та вподобань.",
    detail: "Автоматичні нагадування + зручний календар — менше пропущених клієнтів.",
  },
  {
    icon: Wrench,
    slug: "autoservice",
    title: "Автосервіс / Шиномонтаж / СТО",
    subtitle: "Картка авто + історія ремонтів, нагадування про ТО, VIN-пошук.",
    detail: "Клієнт завжди знає, коли їхати на наступне обслуговування — лояльність росте.",
  },
  {
    icon: Code,
    slug: "it-team",
    title: "IT-фріланс / Невелика IT-команда",
    subtitle: "Ліди, завдання, дедлайни, комунікація з клієнтом — все в одній системі.",
    detail: "Без розкиданих чатів і нотаток — контроль проєктів без переплат.",
  },
  {
    icon: Home,
    slug: "real-estate",
    title: "Агентство нерухомості",
    subtitle: "Клієнти, об’єкти, перегляди, угоди, етапи продажів/оренди.",
    detail: "Один погляд — і видно статус кожного клієнта та об’єкта.",
  },
  {
    icon: FileText,
    slug: "medical",
    title: "Медичний кабінет / Клініка / Психолог",
    subtitle: "Картки пацієнтів, записи на прийом, історія візитів (з урахуванням конфіденційності).",
    detail: "Зручне планування та нагадування.",
  },
  {
    icon: ShieldCheck,
    slug: "insurance",
    title: "Страхові компанії / Агенти",
    subtitle: "Клієнти, поліси, дати закінчення, нагадування про продовження та платежі.",
    detail: "Автоматичний контроль термінів — менше втрачених клієнтів і прострочених полісів.",
  },
  {
    icon: Dumbbell,
    slug: "fitness",
    title: "Спортзали / Фітнес-клуби / Тренери",
    subtitle: "Абонементи, відвідування, персональні тренування, історія клієнтів.",
    detail: "Нагадування про закінчення абонементу + зручний графік занять — вища лояльність і повторні покупки.",
  },
];

export default function Audience() {
  return (
    <>
   
    <section id="audience" className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-16">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-6xl mx-auto">
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-purple-950/6 to-[#0a0a0f] border border-white/6 shadow-[0_20px_60px_-20px_rgba(147,51,234,0.15)]">
          <p className="text-purple-400/90 text-xs font-semibold tracking-[0.25em] uppercase text-center mb-3">
            Для кого Flamingo CRM — ідеальне рішення?
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
            Проста та потужна система для управління клієнтами та базою даних
          </h3>
          <p className="text-gray-500 text-sm text-center max-w-2xl mx-auto mb-6">
            Підходить практично будь-якому бізнесу — від малого до середнього.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {audiences.map((a, idx) => {
              const Icon = a.icon;
              const handleCardAction = () => {
                const slug = a.slug || "";
                if (typeof window !== "undefined") {
                  window.location.href = `/for-whom#${slug}`;
                }
              };

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04, duration: 0.36 }}
                  className="group bg-white/[0.02] rounded-2xl p-5 border border-white/6 hover:shadow-[0_22px_80px_-30px_rgba(147,51,234,0.18)] hover:bg-white/[0.035] transition-all h-full cursor-pointer"
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={handleCardAction}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleCardAction();
                      }
                    }}
                    className="flex flex-col h-full justify-between outline-none focus:ring-2 focus:ring-purple-500/60 focus:ring-offset-2 focus:ring-offset-transparent rounded-md p-0"
                    aria-label={`Деталі: ${a.title}`}
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/12 to-pink-500/8 border border-white/6 flex items-center justify-center mb-3">
                        {Icon ? <Icon className="w-6 h-6 text-purple-300" /> : null}
                      </div>
                      <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">{a.title}</h4>
                      <p className="text-gray-300 text-sm mb-2">{a.subtitle}</p>
                      <p className="text-gray-400 text-xs mb-4">{a.detail}</p>
                    </div>

                    <motion.div 
                      className="flex items-center justify-between mt-4 pt-4 border-t border-white/10"
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-purple-300 text-sm font-medium">Детальніше</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4 text-purple-300 group-hover:text-pink-300 transition-colors" />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
    </>
  );
}
