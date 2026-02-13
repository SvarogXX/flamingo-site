"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Олександр Петренко",
    role: "CEO, Tech Solutions",
    content: "CRM система змінила наш підхід до роботи з клієнтами. Продажі зросли на 45%!",
    rating: 5,
  },
  {
    name: "Марія Коваленко",
    role: "Директор з продажів",
    content: "Найкраща інвестиція в наш бізнес. Команда працює набагато ефективніше.",
    rating: 5,
  },
  {
    name: "Дмитро Сидоренко",
    role: "Засновник стартапу",
    content: "Простота використання та потужний функціонал - саме те, що потрібно.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-[#080810]">
      {/* Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-purple-400/80 text-sm tracking-wider mb-4">ВІДГУКИ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Що Кажуть <span className="gradient-text">Клієнти</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-2xl border border-white/5 p-6 hover:border-purple-500/20 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
