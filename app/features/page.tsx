import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Database, BarChart3, Plug, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Функціонал CRM | Flamingo CRM - Управління клієнтами та база даних",
  description: "Детальний опис можливостей CRM: управління клієнтами, база даних клієнтів, звіти, інтеграції. Онлайн CRM для бізнесу.",
  keywords: ["CRM система для бізнесу", "управління клієнтами", "база даних клієнтів", "онлайн CRM", "функціонал CRM"],
};

const features = [
  {
    icon: Users,
    title: "Управління клієнтами",
    description: "Додавайте контакти, відстежуйте взаємодії, сегментуйте базу. Уявіть, як легко персоналізувати пропозиції та збільшити продажі!",
  },
  {
    icon: Database,
    title: "База даних клієнтів",
    description: "Безпечне зберігання даних з пошуком, фільтрами та експортом. До 1000 клієнтів на старті – масштабуйте з тарифом.",
  },
  {
    icon: BarChart3,
    title: "Звіти та аналітика",
    description: "Автоматичні звіти про продажі, конверсії. Дізнайтеся, що працює, і оптимізуйте бізнес.",
  },
  {
    icon: Plug,
    title: "Інтеграції",
    description: "З email, календарем, платіжками – все для автоматизації рутини.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/#features" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
            ← Назад
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Функціонал CRM: базовий, але потужний для вашого бізнесу
          </h1>
          <p className="text-gray-400 text-lg mb-16 max-w-3xl">
            Наша CRM система фокусується на тому, що дійсно важливо: робота з клієнтами та ведення бази даних.
            Забудьте про складні інструменти – отримайте зручний функціонал за невисокою ціною, який працює для будь-якого бізнесу.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex gap-6 p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-3">{feature.title}</h2>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="https://flamingo-crm-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl"
            >
              <span>Дізнатися більше про функції</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
