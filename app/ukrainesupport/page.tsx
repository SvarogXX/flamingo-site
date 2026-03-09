import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UkraineSupport from "@/components/UkraineSupport";

export const metadata: Metadata = {
  title: "Підтримка ЗСУ | Flamingo CRM - Донат замість підписки",
  description: "Підтримайте ЗСУ разом із Flamingo CRM: донат замість підписки та прозора підтримка України.",
  keywords: ["тарифи CRM", "безкоштовний пробний період CRM", "ціни CRM", "CRM для бізнесу"],
  alternates: {
    canonical: "/ukrainesupport",
  },
  openGraph: {
    title: "Підтримка ЗСУ | Flamingo CRM - Донат замість підписки",
    description: "Підтримайте ЗСУ разом із Flamingo CRM: донат замість підписки та прозора підтримка України.",
    url: "/ukrainesupport",
    siteName: "Flamingo CRM",
    images: [
      {
        url: "/images/ukraine.png",
        width: 1200,
        height: 630,
        alt: "Підтримка ЗСУ разом із Flamingo CRM",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Підтримка ЗСУ | Flamingo CRM - Донат замість підписки",
    description: "Підтримайте ЗСУ разом із Flamingo CRM: донат замість підписки та прозора підтримка України.",
    images: ["/images/ukraine.png"],
  },
};

export default function UkraineSupportPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0a0f] pt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
            ← Назад
          </Link>
        </div>
        <UkraineSupport/>
      </main>
      <Footer />
    </>
  );
}
