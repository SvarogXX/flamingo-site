import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ForWhomContent from "@/components/ForWhomContent";

export const metadata: Metadata = {
  title: "Для кого CRM | Flamingo - Рішення для малого бізнесу",
  description: "CRM для стартапів, агентств, e-commerce та консалтингу. Рішення для малого бізнесу. Безкоштовно для всіх. За кожного користувача — донат для ЗСУ.",
  keywords: ["CRM для магазину", "CRM для салону красі", "CRM для IT", "CRM для автосервісу", "CRM для нерухомості"],
  openGraph: {
    title: "Для кого CRM | Flamingo CRM",
    description: "CRM система для різних типів бізнесу з можливістю налаштування",
    type: "website",
  },
};

export default function ForWhomPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#05050a] via-[#070713] to-[#07060b] text-white py-20">
        <ForWhomContent />
      </main>
      <Footer />
    </>
  );
}
