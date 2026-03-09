import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";
import FloatingDonateButton from "@/components/FloatingDonateButton";
import FloatingTelegramButton from "@/components/FloatingTelegramButton";
import PageTransitionEffect from "@/components/PageTransitionEffect";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flamingo CRM - Безкоштовна українська CRM-система для бізнесу | Донат на ЗСУ замість підписки",
  description: "Flamingo CRM — безкоштовна українська CRM для малого бізнесу. Автоматизація продажів, клієнти, угоди. Донат на ЗСУ замість підписки.",
  keywords: "CRM система для бізнесу, управління клієнтами, база даних клієнтів, автоматизація, онлайн CRM, донат на ЗСУ, тарифи CRM",
  authors: [{ name: "CRM Team" }],
  creator: "CRM System",
  publisher: "CRM System",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://flamingo-crm.com.ua'),
  alternates: {
    canonical: '/',
    languages: {
      'uk-UA': '/uk',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "Flamingo CRM - Безкоштовна українська CRM-система для бізнесу | Донат на ЗСУ замість підписки",
    description: "Flamingo CRM — безкоштовна українська CRM для малого та середнього бізнесу. Автоматизація продажів, клієнти, угоди. Донат на ЗСУ замість підписки.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://flamingo-crm.com.ua',
    siteName: "Flamingo CRM",
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Flamingo CRM - Безкоштовна CRM система для управління клієнтами',
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flamingo CRM - Безкоштовна українська CRM-система для бізнесу| Донат на ЗСУ замість підписки",
    description: "Flamingo CRM — безкоштовна українська CRM для малого бізнесу. Автоматизація продажів, клієнти, угоди. Донат на ЗСУ замість підписки.",
    images: ['/images/hero.png'],
    creator: "@FlamingoCRM",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Flamingo CRM",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Flamingo CRM",
    "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://flamingo-crm.com.ua',
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "image": process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png` : 'https://flamingo-crm.com.ua/logo.png',
    "description": "Безкоштовна українська CRM для малого та середнього бізнесу. Автоматизація продажів, клієнти, угоди. Замість підписки — донат на ЗСУ.",
    "author": {
      "@type": "Organization",
      "name": "Flamingo CRM Team",
      "url": "https://flamingo-crm.com.ua"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "UAH",
      "description": "Безкоштовно за умови донату на ЗСУ"
    }
  };

  return (
    <html lang="uk" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        
        {/* Google Analytics 4 - GA4 Script for G-GZG106BQDD */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GZG106BQDD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GZG106BQDD');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-white`}>
        <PageTransitionEffect>
          {children}
        </PageTransitionEffect>
        <SideNav />
        <FloatingTelegramButton />
        <FloatingDonateButton />
      </body>
    </html>
  );
}
