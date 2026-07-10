import { NextIntlClientProvider, hasLocale } from 'next-intl';
import "@/app/globals.css";
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Cinzel, Crimson_Pro, Inter, JetBrains_Mono } from 'next/font/google';
import { locales, isRtl, type Locale } from '@/i18n/config';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { LensProvider, LensOnboarding } from '@/components/lens';
import OnboardingModal from '@/components/onboarding/OnboardingModal';
import PageTransition from '@/components/motion/PageTransition';

const cinzel = Cinzel({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-crimson-pro',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin', 'cyrillic', 'greek', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Theosia — A Journey Toward God | Apologetics, Doctrine & Primary Sources',
    template: '%s | Theosia',
  },
  description: 'Theosia — a journey toward God. The definitive Christian theology study platform covering apologetics, denominational comparison, cult refutation, primary source archives, and interactive study tools.',
  keywords: ['theology', 'apologetics', 'Christian', 'philosophy', 'religion', 'Bible', 'Church Fathers', 'Theosia'],
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
      className={`${cinzel.variable} ${crimsonPro.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary font-sans">
        <NextIntlClientProvider messages={messages}>
          <LensProvider>
            <Navbar />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
              <SpeedInsights />
            </main>
            <Footer />
            <LensOnboarding />
            <OnboardingModal />
          </LensProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
