"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Можливості", href: "/features" },
    { name: "Тарифи", href: "/pricing" },
    { name: "Інтеграції", href: "https://flamingo-crm-xi.vercel.app/" },
    { name: "API", href: "https://flamingo-crm-xi.vercel.app/" },
  ],
  company: [
    { name: "Про нас", href: "/about" },
    { name: "Блог", href: "/blog" },
    { name: "Кар'єра", href: "https://flamingo-crm-xi.vercel.app/" },
    { name: "Контакти", href: "/contact" },
  ],
  resources: [
    { name: "Документація", href: "https://flamingo-crm-xi.vercel.app/" },
    { name: "Підтримка", href: "mailto:support@crmsystem.com" },
    { name: "FAQ", href: "/blog" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#060608] border-t border-white/5">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-3xl" aria-hidden>🦩</span>
              <span className="text-white font-semibold">Flamingo CRM</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Платформа для управління бізнесом. Перетворіть свій підхід до роботи з клієнтами.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@crm-system.com" className="flex items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>suport@flamingo-crm.com</span>
              </a>
              <a href="tel:+380501234567" className="flex items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+38 (050) 123-45-67</span>
              </a>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>Вінниця, Україна</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Продукт</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Компанія</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Ресурси</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("http") || link.href.startsWith("mailto:") ? (
                    <a href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Flamingo CRM. Всі права захищені.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-600 hover:text-purple-400 transition-colors text-xs">
              Політика конфіденційності
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-400 transition-colors text-xs">
              Умови використання
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
