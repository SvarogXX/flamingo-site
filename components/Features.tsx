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
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-center mb-12">
          <p className="text-purple-400/80 text-sm tracking-widest mb-2 uppercase font-semibold">Потужні функції</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 text-white">Що ми можемо <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">зробити для вас</span></h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">Простий і чистий набір функцій, спеціально розроблених для вашого успіху.</p>
        </motion.div>

        {/* Clean grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }} className="group flex flex-col p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/7 hover:border-white/15 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${f.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">{f.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Link href="/features" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm">
            Всі можливості
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
