"use client";

import { motion } from "framer-motion";
import { Users, Database, BarChart3, Plug, ArrowRight, Target, Mail, Calendar, Share2, Lock } from "lucide-react";
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
  { icon: Lock, title: "Ролі та доступи", description: "Гнучкий контроль прав доступу для кожного члена команди.", bgColor: "from-violet-600 to-purple-500" },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-28 bg-[#0a0a0f] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-center mb-12">
          <p className="text-purple-400/80 text-sm tracking-widest mb-2 uppercase font-semibold">Потужні функції</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 text-white">Що ми можемо <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">зробити для вас</span></h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">Простий і чистий набір функцій, спеціально розроблених для вашого успіху.</p>
        </motion.div>

        {/* Clean grid layout with premium card style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }} className="group relative rounded-2xl overflow-hidden">
                {/* Premium Gradient Border */}
                <div className={`absolute inset-0 rounded-2xl p-px bg-gradient-to-r ${f.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute inset-px rounded-2xl bg-[#0a0a0f]" />
                </div>

                {/* Background Animated Glow */}
                <motion.div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${f.bgColor} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

                {/* Content Container */}
                <div className="relative z-10 p-6 glass-panel rounded-2xl group-hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                  <motion.div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${f.bgColor} mb-4 shadow-lg group-hover:scale-110 transition-transform`} whileHover={{ scale: 1.15, rotate: 10 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">{f.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed flex-1">{f.description}</p>
                </div>
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
