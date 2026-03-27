export const locales = [
  'en', 'es', 'pt', 'fr', 'de', 'it', 'nl',
  'ru', 'uk', 'ro', 'pl', 'el', 'bg',
  'ar', 'am', 'sw',
  'ko', 'zh-CN', 'zh-TW', 'ja',
  'hi', 'id', 'fil', 'vi', 'tr', 'fa'
] as const;

export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const rtlLocales: Locale[] = ['ar', 'fa'];

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'es': 'Español',
  'pt': 'Português',
  'fr': 'Français',
  'de': 'Deutsch',
  'it': 'Italiano',
  'nl': 'Nederlands',
  'ru': 'Русский',
  'uk': 'Українська',
  'ro': 'Română',
  'pl': 'Polski',
  'el': 'Ελληνικά',
  'bg': 'Български',
  'ar': 'العربية',
  'am': 'አማርኛ',
  'sw': 'Kiswahili',
  'ko': '한국어',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'ja': '日本語',
  'hi': 'हिन्दी',
  'id': 'Bahasa Indonesia',
  'fil': 'Filipino',
  'vi': 'Tiếng Việt',
  'tr': 'Türkçe',
  'fa': 'فارسی',
};

export const localeRegions: Record<string, Locale[]> = {
  'Europe': ['en', 'es', 'fr', 'de', 'it', 'nl', 'pl', 'ro', 'el'],
  'Eastern Europe': ['ru', 'uk', 'bg', 'tr'],
  'Middle East': ['ar', 'fa'],
  'Africa': ['am', 'sw'],
  'East Asia': ['zh-CN', 'zh-TW', 'ja', 'ko'],
  'South & Southeast Asia': ['hi', 'id', 'fil', 'vi'],
  'Americas': ['pt'],
};

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
