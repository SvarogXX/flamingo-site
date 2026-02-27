"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Можливості", href: "/features" },
  { name: "Для кого", href: "/for-whom" },
  { name: "Допомога ЗСУ", href: "/ukrainesupport" },
  { name: "Про нас", href: "/about" },
  { name: "Результати", href: "/testimonials" },
  { name: "Блог", href: "/blog" },
  { name: "Контакти", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10"
        : "bg-transparent"
        }`}
    >
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" onClick={handleLogoClick}>
            <motion.span 
              className="text-3xl transition-transform"
              whileHover={{ scale: 1.1, rotate: 15 }}
              aria-hidden
            >
              🦩
            </motion.span>
            <span className="text-white font-bold hidden sm:block text-lg transition-colors group-hover:text-purple-400">
              Flamingo CRM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium relative group"
                >
                  {link.name}
                  <motion.span
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "auto" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="https://flamingo-crm-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Увійти
            </motion.a>
            <motion.a
              href="https://flamingo-crm-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-purple-500/40 hover:shadow-purple-500/50 hover:shadow-xl transition-all"
            >
              Почати
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-purple-500/20">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 px-4 text-gray-400 hover:text-white hover:bg-purple-500/10 transition-all text-sm font-medium rounded-lg"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex gap-3 mt-4 pt-4 border-t border-purple-500/20">
                  <a
                    href="https://flamingo-crm-xi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 text-center py-2.5 text-gray-400 text-sm font-medium hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  >
                    Увійти
                  </a>
                  <a
                    href="https://flamingo-crm-xi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 text-center py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-purple-500/40 transition-all hover:shadow-purple-500/50"
                  >
                    Почати
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
