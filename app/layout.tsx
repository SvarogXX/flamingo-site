import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flamingo CRM - Управління бізнесом нового рівня",
  description: "Професійна CRM система для управління клієнтами, завданнями та продажами. Збільште ефективність вашого бізнесу з нашою інтуїтивною платформою.",
  keywords: "CRM, управління клієнтами, CRM система, управління продажами, бізнес автоматизація, CRM Україна, CRM система Україна, управління бізнесом",
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
    title: "Flamingo CRM - Управління бізнесом нового рівня",
    description: "Професійна CRM система для управління клієнтами, завданнями та продажами. Збільште ефективність вашого бізнесу.",
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
    title: "Flamingo CRM - Управління бізнесом нового рівня",
    description: "Професійна CRM система для управління клієнтами, завданнями та продажами",
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
