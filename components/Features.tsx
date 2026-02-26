"use client";

import { motion } from "framer-motion";
import { Users, Database, BarChart3, Plug, ArrowRight, Target, Mail, Calendar, Share2 } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Users, title: "Управління клієнтами", description: "Додавайте контакти, відстежуйте взаємодії та персоналізуйте пропозиції.", bgColor: "from-blue-600 to-cyan-500" },
  { icon: Target, title: "Управління угодами", description: "Відслідковуйте угоди на кожному етапі воронки.", bgColor: "from-purple-600 to-violet-500" },
  { icon: Database, title: "База даних клієнтів", description: "Пошук, фільтри та експорт даних — безпечно і надійно.", bgColor: "from-green-600 to-emerald-500" },
  { icon: Mail, title: "Електронна пошта та SMS", description: "Розсилки з шаблонами та відстеженням відкриттів.", bgColor: "from-indigo-600 to-blue-500" },
  { icon: Calendar, title: "Календар та планування", description: "Синхронізація з Google Calendar та Outlook.", bgColor: "from-teal-600 to-cyan-500" },
  { icon: BarChart3, title: "Звіти та аналітика", description: "Автоматичні звіти про продажі та конверсії.", bgColor: "from-orange-600 to-yellow-500" },
  { icon: Plug, title: "Інтеграції", description: "Підключення месенджерів, платежів та інших сервісів.", bgColor: "from-pink-600 to-rose-500" },
  { icon: Share2, title: "Командна робота", description: "Розподіл задач, коментарі та спільна робота в реальному часі.", bgColor: "from-cyan-600 to-blue-500" },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 lg:py-24 bg-[#0a0a0f] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10"
        >
          <p className="text-purple-400/80 text-sm tracking-widest mb-2 uppercase font-semibold">Потужні функції</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 text-white">Відкрийте наші <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ключові можливості</span></h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">Компактний та функціональний набір інструментів для ефективної роботи з клієнтами.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: screenshot with floating mini-cards */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/task.png" alt="Flamingo CRM screenshot" className="w-full h-auto object-cover block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="absolute top-6 right-6 space-y-3">
                {features.slice(0, 3).map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div key={i} whileHover={{ y: -6 }} transition={{ type: 'spring' }} className="w-44 bg-[#0b0b10]/80 backdrop-blur rounded-lg p-3 border border-white/7 flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${f.bgColor} flex-shrink-0`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{f.title}</div>
                        <div className="text-xs text-gray-300 mt-1">{f.description.split('.').slice(0,1).join('.') + '.'}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right: compact tiles */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f, idx) => {
                const Icon = f.icon;
                return (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.03 }} className="flex items-start gap-3 p-3 rounded-lg bg-[#0b0b10] border border-white/6 hover:scale-[1.01] transition-transform">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${f.bgColor} flex-shrink-0`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{f.title}</div>
                      <div className="text-xs text-gray-300 mt-1">{f.description}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 text-center lg:text-left">
              <Link href="/features" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm">
                Всі можливості
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
