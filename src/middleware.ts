import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(en|es|pt|fr|de|it|nl|ru|uk|ro|pl|el|bg|ar|am|sw|ko|zh-CN|zh-TW|ja|hi|id|fil|vi|tr|fa)/:path*']
};
