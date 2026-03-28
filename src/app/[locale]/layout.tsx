import { NextIntlClientProvider, hasLocale } from 'next-intl';
import "@/app/globals.css";
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Noto_Sans, Noto_Serif } from 'next/font/google';
import { locales, isRtl, type Locale } from '@/i18n/config';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const notoSans = Noto_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'greek', 'cyrillic', 'vietnamese'],
  variable: '--font-noto-sans',
  display: 'swap',
});

const notoSerif = Noto_Serif({
  weight: ['400', '700'],
  subsets: ['latin', 'greek', 'cyrillic', 'vietnamese'],
  variable: '--font-noto-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Theology Study Platform — Apologetics, Doctrine & Primary Sources',
    template: '%s | Theology Study Platform',
  },
  description: 'The definitive Christian theology study platform covering apologetics, denominational comparison, cult refutation, primary source archives, and interactive study tools.',
  keywords: ['theology', 'apologetics', 'Christian', 'philosophy', 'religion', 'Bible', 'Church Fathers'],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const rtl = isRtl(locale as Locale);

  return (
    <html
      lang={locale}
      dir={rtl ? 'rtl' : 'ltr'}
      className={`${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary font-sans">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">
            {children}
            <SpeedInsights />
            </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
