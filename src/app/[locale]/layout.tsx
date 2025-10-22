import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "Landry Kabore Portfolio",
  description: "Landry Kabore Portfolio",
  openGraph: {
    title: "Landry Kabore Portfolio",
    description: "Showcasing projects, skills",
    url: "https://landrykaboreportfolio.vercel.app/",
    siteName: "Landry Kabore",
    images: [
      {
        url: "https://res.cloudinary.com/dxvnon94f/image/upload/v1756182029/secondprofile.jpg",
        width: 1200,
        height: 630,
        alt: "Landry Kabore Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html>
      <body>
        <Analytics />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
