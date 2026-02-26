"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight, Zap, Shield } from "lucide-react";

interface DonationMethod {
  bank: string;
  card: string;
  icon: string;
  color: string;
  description: string;
}

const donationMethods: DonationMethod[] = [
  {
    bank: "Monobank",
    card: "4441 1144 0220 9380",
    icon: "💳",
    color: "from-purple-600 to-purple-400",
    description: "Миттєвий переказ",
  },
  {
    bank: "ПриватБанк",
    card: "4149 4399 9401 9595",
    icon: "🏦",
    color: "from-pink-600 to-pink-400",
    description: "Любі суми, будь-коли",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function UkraineSupport() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Номер карти скопійовано: ${text}`);
  };

  return (
    <section
      id="ukraine-support"
      className="relative py-24 lg:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-contain lg:bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/images/ukraine.png')",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0.6 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ duration: 0.8 }}
      />

      {/* Multi-layer Gradient Overlay for Premium Effect */}
      {/* Layer 1: Left to Center Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
      
      {/* Layer 2: Top to Bottom Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/20 via-[#0a0a0f]/5 to-[#0a0a0f]/30" />
      
      {/* Layer 3: Vignette Effect */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.3)]" />

      {/* Animated Background Glow Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-600/15 rounded-full filter blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 14, repeat: Infinity, delay: 2 }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0, 0.3, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants} 
            className="flex justify-center mb-6"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50 rounded-full backdrop-blur-md shadow-lg shadow-purple-500/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span className="text-sm font-semibold text-white">Підтримка України 🇺🇦</span>
            </motion.div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
          >
            Flamingo CRM —{" "}
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-pulse"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              безкоштовно
            </motion.span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
              як подарунок нашому народу
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-200 text-lg max-w-3xl mx-auto mb-4 leading-relaxed font-light"
          >
            Ми вважаємо, що справжній успіх бізнесу неможливий без мирного неба над головою. Тому 
            <motion.span 
              className="font-semibold text-white mx-1 inline-block"
              whileHover={{ scale: 1.1, color: "#ec4899" }}
            >
              Flamingo CRM абсолютно безкоштовна
            </motion.span>
            . Замість плати просимо вас підтримати <span className="font-semibold text-white">Збройні Сили України</span>.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base max-w-2xl mx-auto mb-8 backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10"
          >
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Кожна копійка
            </span>
            {" "}йде на захист нашої свободи. Обирайте зручний спосіб донату —
            <br />
            <span className="inline-flex gap-3 mt-2 flex-wrap justify-center">
              <span className="text-white font-medium">✓ без мінімуму</span>
              <span className="text-white font-medium">✓ без комісій</span>
              <span className="text-white font-medium">✓ анонімно</span>
            </span>
          </motion.p>
        </motion.div>

        {/* Donation Methods */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {donationMethods.map((method, index) => (
            <motion.div
              key={method.bank}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Premium Gradient Border */}
              <div
                className={`absolute inset-0 rounded-2xl p-px bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              >
                <div className="absolute inset-px rounded-2xl bg-[#0a0a0f]" />
              </div>

              {/* Background Animated Glow */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
              />

              {/* Content Container */}
              <div className="relative z-10 p-8 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <motion.span 
                      className="text-5xl mb-3 block"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {method.icon}
                    </motion.span>
                    <h3 className="text-2xl font-bold text-white">{method.bank}</h3>
                  </div>
                  <motion.div
                    className={`p-3 rounded-lg bg-gradient-to-br ${method.color} text-white shadow-lg`}
                    whileHover={{ scale: 1.15, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Heart className="w-6 h-6" />
                  </motion.div>
                </div>

                <p className="text-gray-300 text-sm mb-6 font-light">{method.description}</p>

                {/* Card Number Box with Premium Effect */}
                <motion.div
                  className={`mb-6 p-4 bg-gradient-to-r ${method.color} /5 border border-white/10 rounded-lg group/card cursor-pointer hover:bg-white/10 transition-all backdrop-blur-sm`}
                  onClick={() => copyToClipboard(method.card)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className="text-xs text-gray-400 mb-2 font-mono uppercase tracking-widest">💳 Номер карти</p>
                  <p className="text-white font-mono font-bold text-lg tracking-wider"
                    style={{
                      textShadow: `0 0 20px ${method.color.includes('purple') ? 'rgba(168, 85, 247, 0.5)' : 'rgba(236, 72, 153, 0.5)'}`
                    }}
                  >
                    {method.card}
                  </p>
                  <motion.p 
                    className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-2 font-semibold"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨ Клікніть щоб скопіювати
                  </motion.p>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => copyToClipboard(method.card)}
                  className={`w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r ${method.color} shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group/btn relative overflow-hidden`}
                >
                  {/* Button Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["−100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative">Скопіювати карту</span>
                  <motion.div
                    className="relative"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats / Impact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          {[
            {
              icon: Zap,
              label: "Підтримка",
              value: "24/7",
              description: "Постійно включені",
              color: "from-yellow-600 to-orange-500",
            },
            {
              icon: Shield,
              label: "Безпека",
              value: "100%",
              description: "Дані захищані",
              color: "from-green-600 to-emerald-500",
            },
            {
              icon: Heart,
              label: "Цель",
              value: "ЗСУ",
              description: "Оборона України",
              color: "from-red-600 to-pink-500",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Glow Background */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />

                {/* Card */}
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-white/30 transition-all backdrop-blur-xl">
                  <motion.div
                    className={`inline-flex p-3 bg-gradient-to-r ${stat.color} text-white rounded-lg mb-4 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <p className="text-gray-400 text-sm mb-2 font-light">{stat.label}</p>
                  <motion.p
                    className={`text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}
                    whileHover={{ scale: 1.2 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs text-gray-500">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center p-8 rounded-2xl bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 border border-purple-500/30 backdrop-blur-lg shadow-2xl shadow-purple-500/20 relative overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="relative z-10">
            <motion.p
              variants={itemVariants}
              className="text-white mb-6 font-bold text-lg sm:text-xl leading-relaxed"
            >
              🇺🇦{" "}
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Спасибі вам за довіру
              </motion.span>
              {" "}та за здійснювання вашого бізнесу разом з нами!
            </motion.p>
            <motion.a
              variants={itemVariants}
              href="https://flamingo-crm-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:shadow-2xl transition-all relative overflow-hidden group"
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["−100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <span className="relative">Почати з Flamingo CRM</span>
              <motion.div
                className="relative"
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Top Border with Glow */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent shadow-lg shadow-purple-500/50"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Bottom Border with Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
    </section>
  );
}
