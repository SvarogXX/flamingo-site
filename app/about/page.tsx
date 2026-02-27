import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Про нас | Flamingo CRM - Історія та місія",
  description: "Дізнайтесь про Flamingo CRM: нашу історію, місію та команду, нерухомість створює найкращу CRM для українського бізнесу.",
  keywords: ["про Flamingo CRM", "історія CRM", "команда Flamingo", "CRM для України"],
  openGraph: {
    title: "Про нас | Flamingo CRM",
    description: "Історія та місія Flamingo CRM - CRM система для управління клієнтами",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
          >
            ← Назад
          </Link>
          
          {/* Hero Section */}
          <section className="relative py-20 lg:py-28">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Про <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Flamingo CRM</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Flamingo CRM — це безкоштовна система управління клієнтами, створена для українських стартапів та малого бізнесу. 
                Наша місія — надати доступний, потужний та простий інструмент для роботи з клієнтами без обмежень та прихованих платежів.
              </p>
            </div>
          </section>

          {/* About Content */}
          <section className="py-16 max-w-3xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-4 text-white">Наша історія</h2>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Flamingo CRM була створена командою розробників, яка розібралася, що великість CRM системи часто спричиняє 
                складність та високі витрати для малого бізнесу. Ми вирішили створити щось інше — просту, але потужну систему, 
                яка дійсно працює для українських компаній.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-white mt-8">Наші цінності</h2>
              <ul className="text-gray-300 text-base space-y-3 mb-6">
                <li>✓ <strong>Простота</strong> — інтерфейс, який зрозуміють всі, без запозичення дизайнерів</li>
                <li>✓ <strong>Доступність</strong> — безкоштовна система для всіх, без сховані платежі</li>
                <li>✓ <strong>Гнучкість</strong> — налаштуйте систему під ваш бізнес, не розробник</li>
                <li>✓ <strong>Надійність</strong> — ваші дані в безпеці з шифруванням та резервними копіями</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 text-white mt-8">Донати на ЗСУ</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Flamingo CRM не однак просто CRM. Якщо система вам корисна, ми просимо підтримати Збройні Сили України. 
                Всі донати йдуть на реальні потреби фронту — дрони, обладнання, комунікаційні засоби.
              </p>
            </div>
          </section>
        </div>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
