import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Тарифи CRM | Flamingo CRM - Від 9$/міс",
  description: "Тарифи Flamingo CRM: Starter 9$/міс, Growth 29$/міс, Enterprise 99$/міс. Дешевше Pipedrive в 3-5 разів. Безкоштовний пробний період 14 днів без карти.",
  keywords: ["тарифи CRM", "безкоштовний пробний період CRM", "ціни CRM", "CRM для бізнесу"],
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
            ← Назад
          </Link>
          
          {/* Page H1 */}
          <section className="py-12 text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Тарифи <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Flamingo CRM</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Оберіть план, який підходить вашому бізнесу. Перший місяць повністю безкоштовно!
            </p>
          </section>
        </div>
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
