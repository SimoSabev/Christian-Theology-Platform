// src/components/layout/Footer.tsx
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { KeystoneDivider, InscribedDate } from '@/components/ornament';

export default function Footer() {
  const t = useTranslations('nav');

  return (
    <footer
      className="mt-24"
      style={{
        background: 'var(--color-bg-primary)',
        color: 'var(--color-text-secondary)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <KeystoneDivider />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div>
            <div className="t-eyebrow mb-3">SECTIONS</div>
            <ul className="space-y-2">
              <li><Link href="/defend"    className="t-body text-sm">{t('defend')}</Link></li>
              <li><Link href="/compare"   className="t-body text-sm">{t('compare')}</Link></li>
              <li><Link href="/explore"   className="t-body text-sm">{t('explore')}</Link></li>
              <li><Link href="/semantics" className="t-body text-sm">{t('semantics')}</Link></li>
              <li><Link href="/sources"   className="t-body text-sm">{t('sources')}</Link></li>
            </ul>
          </div>

          <div>
            <div className="t-eyebrow mb-3">REFERENCE</div>
            <ul className="space-y-2">
              <li><Link href="/sources/manuscripts" className="t-body text-sm">Manuscripts</Link></li>
              <li><Link href="/sources/church-fathers" className="t-body text-sm">Church Fathers</Link></li>
              <li><Link href="/sources/councils" className="t-body text-sm">Councils</Link></li>
            </ul>
          </div>

          <div>
            <div className="t-eyebrow mb-3">ABOUT</div>
            <p className="t-body text-sm" style={{ color: 'var(--color-text-muted)' }}>
              A study platform for the historic Christian faith.
            </p>
            <div className="mt-4">
              <InscribedDate year={new Date().getFullYear()} />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <KeystoneDivider />
          <div className="t-caps text-xs mt-6" style={{ color: 'var(--color-accent-gold)', letterSpacing: '0.6em' }}>
            SOLI · DEO · GLORIA
          </div>
        </div>
      </div>
    </footer>
  );
}
