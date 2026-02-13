"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#0a0a0f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center">
            Зв&apos;яжіться з нами
          </h2>
          <p className="text-gray-400 text-center mb-10">
            Маєте питання про CRM? Напишіть нам – відповімо за 24 години.
            Email: <a href="mailto:suport@flamingo-crm.com" className="text-purple-400 hover:text-purple-300">suport@flamingo-crm.com</a>.
            Або зареєструйтеся на пробний період прямо зараз! <a href="https://flamingo-crm-xi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Розпочати</a>.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Ім&apos;я</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                placeholder="Ваше ім'я"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Повідомлення</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 resize-none"
                placeholder="Ваше повідомлення..."
              />
            </div>
            <a
              href="https://flamingo-crm-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              <span>Надіслати</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
