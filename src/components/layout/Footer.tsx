import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Shield, Scale, BookOpen, Compass, Heart } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('nav');

  return (
    <footer className="border-t border-border bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
              <Shield size={14} className="text-accent-gold" />
              {t('defend')}
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/defend/atheism/cosmological" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Cosmological</Link></li>
              <li><Link href="/defend/atheism/ontological" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Ontological</Link></li>
              <li><Link href="/defend/atheism/teleological" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Teleological</Link></li>
              <li><Link href="/defend/atheism/moral" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Moral</Link></li>
              <li><Link href="/defend/atheism/historical" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Historical</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
              <Scale size={14} className="text-accent-gold" />
              {t('compare')}
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/compare/orthodoxy" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Eastern Orthodoxy</Link></li>
              <li><Link href="/compare/catholicism" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Roman Catholicism</Link></li>
              <li><Link href="/compare/protestantism" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Protestantism</Link></li>
              <li><Link href="/compare/side-by-side" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Side-by-Side Tool</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
              <BookOpen size={14} className="text-accent-gold" />
              {t('sources')}
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/sources/manuscripts" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Manuscripts</Link></li>
              <li><Link href="/sources/church-fathers" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Church Fathers</Link></li>
              <li><Link href="/sources/councils" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Councils & Creeds</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
              <Compass size={14} className="text-accent-gold" />
              {t('explore')}
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/explore/argument-tree" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Argument Tree</Link></li>
              <li><Link href="/explore/debate-mode" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Debate Mode</Link></li>
              <li><Link href="/explore/timeline" className="text-sm text-text-muted hover:text-accent-gold transition-colors">Timeline</Link></li>
            </ul>
          </div>
        </div>
        <div className="section-divider mt-10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-accent-red" /> for the study of theology
          </p>
          <p>All theological positions presented based on their strongest academic formulations</p>
        </div>
      </div>
    </footer>
  );
}
