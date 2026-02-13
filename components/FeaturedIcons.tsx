"use client";

import { motion } from "framer-motion";
import { Users, BarChart3, Shield, Zap } from "lucide-react";

const features = [
  { icon: Users, label: "Управління Клієнтами" },
  { icon: BarChart3, label: "Аналітика Продажів" },
  { icon: Shield, label: "Безпека Даних" },
  { icon: Zap, label: "Управління завданнями" },
];

export default function FeaturedIcons() {
  return (
    <section className="relative py-16 bg-[#0a0a0f]">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mb-10"
        >
          Відкрийте Наші Ключові Можливості
        </motion.p>

        {/* Icons row */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/20 flex items-center justify-center group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                  <Icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
                <span className="text-gray-400 text-sm text-center group-hover:text-white transition-colors">
                  {feature.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
