import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Database, BarChart3, Plug, ArrowRight } from "lucide-react";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Функціонал CRM | Flamingo - Управління та аналітика",
  description: "Функціонал CRM: управління клієнтами, воронка продажів, інтеграції з Telegram та Email. Аналітика та звіти для малого бізнесу.",
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
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
            ← Назад
          </Link>
          
          {/* Page H1 */}
          <section className="py-12 text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Функціонал <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Flamingo CRM</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Повний набір інструментів для управління клієнтами, угодами та автоматизацією вашого бізнесу
            </p>
          </section>

          <Features/>
        </div>
      </main>
      <Footer />
    </>
  );
}
