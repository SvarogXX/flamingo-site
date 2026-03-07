"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Heart, ArrowRight, Zap, Shield, Instagram } from "lucide-react";

interface DonationMethod {
  bank: string;
  card: string;
  icon: string;
  color: string;
  description: string;
  qrCode: string;
  bankUrl: string;
}

const donationMethods: DonationMethod[] = [
  {
    bank: "Monobank",
    card: "4874 1000 2516 5005",
    icon: "💳",
    color: "from-purple-600 to-purple-400",
    description: "Миттєвий переказ",
    qrCode: "/images/qr_mono.jpg",
    bankUrl: "https://send.monobank.ua/jar/8Y7ErZobGU",
  },
  {
    bank: "ПриватБанк",
    card: "5168 7521 5769 0663",
    icon: "🏦",
    color: "from-pink-600 to-pink-400",
    description: "Будь-які суми, будь-коли",
    qrCode: "/images/qr_privat.jpg",
    bankUrl: "https://www.privat24.ua/send/i9i0h",
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
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Номер карти скопійовано: ${text}`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
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
              <span className="text-sm font-semibold text-white">Підтримка Збройних Сил України</span>
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
              безкоштовно за донат
            </motion.span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-200 text-lg max-w-3xl mx-auto mb-4 leading-relaxed font-light"
          >
            Ми вважаємо, що справжній успіх бізнесу неможливий без мирного неба над головою. Тому 
            <motion.span 
              className="font-semibold text-white mx-1 inline-block"
              whileHover={{ scale: 1, color: "#ec4899" }}
            >
              Flamingo CRM абсолютно безкоштовна
            </motion.span>
            . Замість плати просимо вас підтримати <span className="font-semibold text-white">Збройні Сили України</span>.
          </motion.p>
        </motion.div>

        {/* Story & Mission Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-12"
        >
          <motion.section variants={itemVariants} className="mb-10 p-8 glass-panel shadow-none">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Про проект і нашу місію
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-300 text-base leading-relaxed mb-4">
              Цей проект створений <span className="font-semibold text-white">ветеранами російсько-Української війни</span>. Разом з побратимами, які також пройшли фронт, ми створили цю CRM-систему. Для того, щоб український бізнес міг працювати ефективно навіть у найважчі часи.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300 text-base leading-relaxed mb-6">
              Поки воїни тримають небо і землю, ми не маємо морального права брати гроші за інструмент, який допомагає малому та середньому бізнесу. Тому <span className="font-semibold text-white">Flamingo CRM — повністю безкоштовна</span>.
            </motion.p>

            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-4">Що ми просимо замість підписки?</motion.h3>
            <motion.p variants={itemVariants} className="text-gray-300 text-base leading-relaxed mb-6 font-semibold text-pink-300">
              Підтримати тих, хто зараз нищить ворога на полі бою.
            </motion.p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-10 p-8 glass-panel bg-gradient-to-br from-red-900/10 to-pink-900/5 border-red-500/20 shadow-none">
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-4">Наша основна мета</motion.h3>
            <motion.p variants={itemVariants} className="text-gray-300 text-base leading-relaxed mb-4">
              Наше основне завдання сьогодні — допомогти побратимам з <span className="font-semibold text-white">1-го батальйону безпілотних систем «Хижаки висот» 59-ї окремої штурмової бригади імені Якова Гандзюка</span> (Сили безпілотних систем ЗСУ).
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300 text-base leading-relaxed mb-4">
              Ці хлопці і дівчата полюють у небі, щоб повернути свободу на нашу землю. Вони роблять рекордні ураження техніки та живої сили ворога, проводять розвідку, збивають гелікоптери FPV-дронами.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300 text-base leading-relaxed">
              <span className="font-semibold text-white">Кожна гривня йде саме на їхні потреби</span>: дрони, модернізація FPV, термальні камери, Starlink, акумулятори, запчастини — все, що робить їх ефективнішими в бою.
            </motion.p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-10 p-8 glass-panel bg-gradient-to-br from-purple-900/10 to-blue-900/5 border-purple-500/20 shadow-none">
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-6">Як це працює просто і прозоро?</motion.h3>
            
            <motion.ol variants={itemVariants} className="text-gray-300 text-base leading-relaxed space-y-4">
              <motion.li variants={itemVariants} className="flex gap-4">
                <span className="font-bold text-purple-400 flex-shrink-0">1.</span>
                <span><span className="font-semibold">Використовуйте Flamingo CRM — безкоштовно.</span> Без прихованих платежів, без обмежень функцій.</span>
              </motion.li>
              
              <motion.li variants={itemVariants} className="flex gap-4">
                <span className="font-bold text-purple-400 flex-shrink-0">2.</span>
                <span><span className="font-semibold">Якщо система спростила вам роботу</span>, заощадила час чи принесла додатковий дохід — зробіть донат на ЗСУ. Ви самі вирішуєте суму та частоту донатів (одноразово чи регулярно).</span>
              </motion.li>
              
              <motion.li variants={itemVariants} className="flex gap-4">
                <span className="font-bold text-purple-400 flex-shrink-0">3.</span>
                <span><span className="font-semibold">Кошти йдуть виключно на потреби «Хижаків висот»</span>. Цільові донати, прозоро, зі звітністю.</span>
              </motion.li>
              
              <motion.li variants={itemVariants} className="flex gap-4">
                <span className="font-bold text-purple-400 flex-shrink-0">4.</span>
                <span>Ви отримуєте чистий, зручний інструмент для бізнесу. <span className="font-semibold">Ми не дзвонимо, не надсилаємо нагадування про оплату</span>.</span>
              </motion.li>
            </motion.ol>
          </motion.section>

          <motion.section variants={itemVariants} className="p-8 glass-panel bg-gradient-to-br from-yellow-900/10 to-orange-900/5 border-yellow-500/20 shadow-none">
            
            <motion.p variants={itemVariants} className="text-gray-300 text-base leading-relaxed mb-4">
              <span className="text-xl font-bold text-white">Дякуємо, що ви з нами.</span>
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300 text-base leading-relaxed mb-4">
              <span className="text-lg font-bold text-white">Дякуємо всім, хто тримає стрій.</span>
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-300 text-base leading-relaxed font-semibold text-pink-300">
              Поки бізнес працює тут — вони роблять неможливе там. <span className="text-white">Разом ми переможемо.</span>
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-yellow-500/20">
              <motion.a
                href="https://www.instagram.com/khyzhaky.vysot?igsh=MXNza2J4bGt4NmZiNA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-pink-300 transition-colors duration-300"
                whileHover={{ x: 2 }}
              >
                <Instagram size={18} />
                <span>Слідкуйте за «Хижаками висот» в Instagram</span>
              </motion.a>
            </motion.div>
          </motion.section>
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
              <div className="relative z-10 p-8 glass-panel group-hover:border-white/20 transition-all duration-300 shadow-none">
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
                  className={`mb-6 p-4 glass-panel bg-gradient-to-r ${method.color} /5 border-white/10 rounded-lg group/card cursor-pointer hover:bg-white/10 transition-all shadow-none`}
                  onClick={() => copyToClipboard(method.card)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className="text-xs text-white-400 mb-2 font-mono uppercase  tracking-widest"><span className="text-xl">💳 </span>  Номер карти</p>
                  <p className="text-white font-mono font-bold text-lg tracking-wider"
                    style={{
                      textShadow: `0 0 20px ${method.color.includes('purple') ? 'rgba(168, 85, 247, 0.5)' : 'rgba(236, 72, 153, 0.5)'}`
                    }}
                  >
                    {method.card}
                  </p>
                  <motion.p 
                    className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-white/100 to-teal-400 mt-2 font-semibold"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨ Клікніть щоб скопіювати
                  </motion.p>
                </motion.div>

                {/* QR Code and Bank Link */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* QR Code */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center"
                  >
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest font-semibold">QR Код</p>
                    <div className="w-full aspect-square rounded-lg bg-white/10 border border-white/20 overflow-hidden flex items-center justify-center">
                      <Image 
                        src={method.qrCode} 
                        alt={`${method.bank} QR код`}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden text-xs text-gray-400 text-center p-2">QR код недоступний</div>
                    </div>
                  </motion.div>

                  {/* Bank Link */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center"
                  >
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest font-semibold">Оплата за посиланням</p>
                    <motion.a
                      href={method.bankUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="w-full h-full rounded-lg bg-gradient-to-br from-white/15 to-white/5 border border-white/20 hover:border-white/40 transition-all flex flex-col items-center justify-center p-4 text-center"
                    >
                      <span className="text-2xl mb-1">🔗</span>
                      <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                        {method.bank}
                      </span>
                    </motion.a>
                  </motion.div>
                </div>

                {/* CTA Button */}
                
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
              details: "Ми тут для вас в будь-який час. Прямий зв'язок з командою розробників без черг і чекання.",
              color: "from-yellow-600 to-orange-500",
            },
            {
              icon: Shield,
              label: "Безпека",
              value: "100%",
              description: "Дані захищані",
              details: "Ми керуємося найсуворішими правилами конфіденційності.",
              color: "from-green-600 to-emerald-500",
            },
            {
              icon: Heart,
              label: "Ціль",
              value: "ЗСУ",
              description: "Оборона України",
              details: "Ваш вибір — це вибір в користь України й нашої свободи. Разом ми сильніші.",
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
                <div className="relative p-6 glass-panel rounded-xl group-hover:border-white/30 transition-all shadow-none border-white/10">
                  <motion.div
                    className={`inline-flex p-3 bg-gradient-to-r ${stat.color} text-white rounded-lg mb-4 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <p className="text-gray-400 text-sm mb-2 font-light">{stat.label}</p>
                  <motion.p
                    className={`text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}
                    whileHover={{ scale: 1.2 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs text-gray-400 mb-3 font-medium">{stat.description}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{stat.details}</p>
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
          className="text-center p-8 glass-panel bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 border-purple-500/30 shadow-2xl shadow-purple-500/20 relative overflow-hidden"
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
      
                Дякуємо вам за довіру
             
              {" "}та за зростання вашого бізнесу разом з нами!
            </motion.p>
            <motion.a
              variants={itemVariants}
              href="https://crm.flamingo-crm.com.ua/"
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

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="glass-panel bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg border-white/20 shadow-lg">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span className="font-medium">{toastMessage}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
