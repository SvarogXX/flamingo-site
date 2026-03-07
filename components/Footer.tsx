"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Можливості", href: "/features" },
    { name: "Про допомогу", href: "#ukraine-support" },
    { name: "Інтеграції", href: "https://crm.flamingo-crm.com.ua/" },
  ],
  company: [
    { name: "Про нас", href: "/about" },
    { name: "Блог", href: "/blog" },
    { name: "Контакти", href: "/contact" },
  ],
  resources: [
    { name: "Документація", href: "https://crm.flamingo-crm.com.ua/" },
    { name: "Підтримка", href: "mailto:support@flamingo-crm.com.ua" },
    { name: "FAQ", href: "/faq" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#060608] border-t border-purple-500/20">
      {/* Top accent line */}
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <motion.span 
                className="text-3xl"
                whileHover={{ scale: 1.1, rotate: 15 }}
                aria-hidden
              >
                🦩
              </motion.span>
              <span className="text-white font-bold text-lg group-hover:text-purple-400 transition-colors">
                Flamingo CRM
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Платформа для управління бізнесом. Безкоштовно. Для України.
            </p>
            <motion.div 
              className="space-y-3 text-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.a 
                href="mailto:support@flamingo-crm.com.ua"
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>support@flamingo-crm.com.ua</span>
              </motion.a>
              <motion.a 
                href="tel:+380501234567"
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+38 (050) 123-45-67</span>
              </motion.a>
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-2 text-gray-400"
              >
                <MapPin className="w-4 h-4" />
                <span>Вінниця, Україна</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Product */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white text-sm font-semibold mb-4">Продукт</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {link.href.startsWith("http") ? (
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm group flex items-center gap-1 w-fit"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm group flex items-center gap-1 w-fit"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white text-sm font-semibold mb-4">Компанія</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {link.href.startsWith("http") ? (
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm group flex items-center gap-1 w-fit"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm group flex items-center gap-1 w-fit"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white text-sm font-semibold mb-4">Ресурси</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {link.href.startsWith("http") || link.href.startsWith("mailto:") ? (
                    <a 
                      href={link.href} 
                      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm group flex items-center gap-1 w-fit"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm group flex items-center gap-1 w-fit"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="border-t border-purple-500/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <motion.p variants={itemVariants} className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Flamingo CRM. Всі права захищені.
          </motion.p>
          <motion.div 
            variants={containerVariants}
            className="flex gap-6"
          >
            <motion.div variants={itemVariants}>
              <Link href="#" className="text-gray-600 hover:text-purple-400 transition-colors text-xs">
                Політика конфіденційності
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="#" className="text-gray-600 hover:text-purple-400 transition-colors text-xs">
                Умови використання
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
