import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Про нас | Flamingo CRM - CRM для реального бізнесу",
  description: "Історія та місія Flamingo CRM. Команда, що створює зручну CRM систему для управління клієнтами за доступною ціною.",
  keywords: ["про CRM", "Flamingo CRM", "CRM система для бізнесу"],
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-24">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/#about" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
            ← Назад
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Про нашу CRM: створена для <span className="gradient-text">реального бізнесу</span>
          </h1>
          <div className="text-gray-400 text-lg leading-relaxed space-y-6">
            <p>
              Ми – команда, що розуміє виклики бізнесу. Наша CRM акцентує на базовому зручному функціоналі:
              робота з клієнтами, ведення бази даних без зайвого.
            </p>
            <p>
              Невисока ціна робить її доступною для стартапів, а гнучкість – для корпорацій.
              Широкий діапазон використання: від онлайн-магазинів до сервісних компаній.
            </p>
            <p>
              Приєднуйтеся до тисяч користувачів, які вже оптимізували свій бізнес!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
