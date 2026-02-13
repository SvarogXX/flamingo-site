import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flamingo CRM - CRM система для бізнесу, управління клієнтами, база даних клієнтів",
  description: "Онлайн CRM система для ефективного управління клієнтами та базою даних. Безкоштовний пробний період CRM 14 днів. Тарифи CRM від 9$/міс.",
  keywords: "CRM система для бізнесу, управління клієнтами, база даних клієнтів, онлайн CRM, безкоштовний пробний період CRM, тарифи CRM",
  authors: [{ name: "CRM Team" }],
  creator: "CRM System",
  publisher: "CRM System",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://crm-system.com'),
  alternates: {
    canonical: '/',
    languages: {
      'uk-UA': '/uk',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "Flamingo CRM - CRM система для бізнесу, управління клієнтами",
    description: "Онлайн CRM з безкоштовним пробним періодом. Управління клієнтами, база даних, звіти. Тарифи від 9$/міс.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://crm-system.com',
    siteName: "Flamingo CRM",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flamingo CRM',
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flamingo CRM - CRM система для бізнесу, управління клієнтами",
    description: "Онлайн CRM з безкоштовним пробним періодом. База даних клієнтів, тарифи від 9$/міс.",
    images: ['/og-image.jpg'],
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
  return (
    <html lang="uk" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-white`}>
        {children}
      </body>
    </html>
  );
}
