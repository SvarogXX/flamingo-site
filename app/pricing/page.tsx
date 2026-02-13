import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Тарифи CRM | Flamingo CRM - Ціни та безкоштовний пробний період",
  description: "Оберіть тариф CRM: Starter 9$/міс, Growth 29$/міс, Enterprise 99$/міс. Безкоштовний пробний період 14 днів. Тарифи CRM для бізнесу.",
  keywords: ["тарифи CRM", "безкоштовний пробний період CRM", "ціни CRM", "CRM для бізнесу"],
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/#pricing" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
            ← Назад
          </Link>
        </div>
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
