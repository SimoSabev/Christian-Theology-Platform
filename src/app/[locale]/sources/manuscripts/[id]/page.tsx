'use client';

import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, ScrollText, BookOpen, ExternalLink, FileText, Users, Bookmark, ChevronRight, ImageIcon, X } from 'lucide-react';
import { getManuscriptById } from '@/data/manuscripts';
import InterlinearReader from '@/components/manuscripts/InterlinearReader';
import { useState } from 'react';

const typeColors: Record<string, string> = {
  papyrus: 'bg-accent-amber/10 text-accent-amber border-accent-amber/20',
  uncial: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
  codex: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
  scroll: 'bg-accent-green/10 text-accent-green border-accent-green/20',
  translation: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20',
  minuscule: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20',
};

const scriptLabels: Record<string, string> = {
  greek: 'Greek',
  hebrew: 'Hebrew',
  aramaic: 'Aramaic',
  latin: 'Latin',
  syriac: 'Syriac',
  gothic: 'Gothic',
  coptic: 'Coptic',
};

export default function ManuscriptDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const ms = getManuscriptById(id);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  if (!ms) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Manuscript Not Found</h1>
        <Link href="/sources/manuscripts" className="text-accent-gold hover:underline">← Back to Manuscripts</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
        <Link href="/sources" className="hover:text-accent-gold transition-colors">Sources</Link>
        <ChevronRight size={12} />
        <Link href="/sources/manuscripts" className="hover:text-accent-gold transition-colors">Manuscripts</Link>
        <ChevronRight size={12} />
        <span className="text-text-secondary truncate max-w-[200px]">{ms.designation.split('—')[0]?.trim()}</span>
      </div>

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${typeColors[ms.type] || typeColors.papyrus}`}>
            {ms.type.charAt(0).toUpperCase() + ms.type.slice(1)}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium border border-border text-text-muted">
            {scriptLabels[ms.script] || ms.script}
          </span>
          {ms.textType && (
            <span className="px-3 py-1 rounded-full text-xs font-medium border border-accent-teal/20 text-accent-teal bg-accent-teal/5">
              {ms.textType}
            </span>
          )}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold gold-gradient mb-3">{ms.designation}</h1>
        {ms.alternateName && <p className="text-text-muted text-lg font-serif italic">{ms.alternateName}</p>}
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Images */}
          {ms.images.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className={`grid ${ms.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-4`}>
                {ms.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative group cursor-pointer rounded-xl overflow-hidden border border-border hover:border-accent-gold/30 transition-colors"
                    onClick={() => setLightboxImage(img.url)}
                  >
                    <div className="aspect-[4/3] bg-bg-secondary flex items-center justify-center overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-medium">{img.caption}</p>
                      <p className="text-white/60 text-xs">{img.attribution} · {img.license}</p>
                    </div>
                    <div className="absolute top-3 right-3 p-2 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <ImageIcon size={14} className="text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Full Description */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6 sm:p-8 hover:translate-y-0">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileText size={18} className="text-accent-gold" /> Description
            </h2>
            <div className="text-text-secondary font-serif leading-relaxed space-y-4">
              {ms.detailedDescription.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>

          {/* Significance */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="formal-statement">
            <p className="text-sm font-semibold text-accent-gold uppercase tracking-wider mb-2">Significance</p>
            <p className="text-text-secondary font-serif leading-relaxed">{ms.significance}</p>
          </motion.div>

          {/* Interactive Interlinear Reading */}
          {ms.passages.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6 sm:p-8 hover:translate-y-0">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BookOpen size={18} className="text-accent-gold" /> Interactive Interlinear Reading
              </h2>
              <InterlinearReader passages={ms.passages} script={ms.script} />
            </motion.div>
          )}

          {/* Bibliography */}
          {ms.bibliography.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6 sm:p-8 hover:translate-y-0">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Bookmark size={16} className="text-accent-gold" /> Bibliography
              </h2>
              <ul className="space-y-2">
                {ms.bibliography.map((ref, i) => (
                  <li key={i} className="text-sm text-text-secondary font-serif leading-relaxed pl-4 border-l-2 border-border">
                    {ref}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Info Card */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 hover:translate-y-0 sticky top-20">
            <h3 className="text-sm font-semibold text-accent-gold uppercase tracking-wider mb-4">Manuscript Details</h3>
            <div className="space-y-3 text-sm">
              <InfoRow icon={Calendar} label="Date" value={ms.date} />
              <InfoRow icon={ScrollText} label="Material" value={ms.material} />
              {ms.dimensions && <InfoRow icon={ScrollText} label="Dimensions" value={ms.dimensions} />}
              {ms.totalLeaves && <InfoRow icon={FileText} label="Leaves" value={ms.totalLeaves} />}
              {ms.columns && <InfoRow icon={FileText} label="Columns" value={`${ms.columns} per page`} />}
              {ms.linesPerPage && <InfoRow icon={FileText} label="Lines" value={ms.linesPerPage} />}
              <div className="section-divider my-3" />
              <InfoRow icon={MapPin} label="Location" value={ms.location} />
              {ms.discoveredBy && <InfoRow icon={Users} label="Discovery" value={ms.discoveredBy} />}
              {ms.discoveryDate && <InfoRow icon={Calendar} label="Found" value={ms.discoveryDate} />}
              {ms.discoveryLocation && <InfoRow icon={MapPin} label="Found at" value={ms.discoveryLocation} />}
              <div className="section-divider my-3" />
              <div>
                <p className="text-text-muted mb-1">Contents</p>
                <p className="text-text-secondary font-serif text-xs leading-relaxed">{ms.contents}</p>
              </div>
              {ms.contentsDetail && (
                <div>
                  <p className="text-text-muted mb-1">Details</p>
                  <p className="text-text-secondary font-serif text-xs leading-relaxed">{ms.contentsDetail}</p>
                </div>
              )}
            </div>

            {/* Online Resources */}
            {ms.onlineResources && ms.onlineResources.length > 0 && (
              <div className="mt-6 pt-4 border-t border-border">
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Online Resources</h4>
                <div className="space-y-2">
                  {ms.onlineResources.map((res, i) => (
                    <a
                      key={i}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-accent-teal hover:text-accent-teal/80 transition-colors"
                    >
                      <ExternalLink size={12} />
                      {res.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Related Manuscripts */}
            {ms.relatedManuscripts && ms.relatedManuscripts.length > 0 && (
              <div className="mt-6 pt-4 border-t border-border">
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Related Manuscripts</h4>
                <div className="flex flex-wrap gap-2">
                  {ms.relatedManuscripts.map((relId) => (
                    <Link
                      key={relId}
                      href={`/sources/manuscripts/${relId}`}
                      className="px-3 py-1.5 rounded-lg text-xs bg-surface-glass border border-border text-text-secondary hover:border-accent-gold/30 hover:text-accent-gold transition-all"
                    >
                      {relId}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-10">
            <X size={20} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxImage}
            alt="Manuscript full view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={e => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* Back link */}
      <div className="mt-12 pt-6 border-t border-border">
        <Link href="/sources/manuscripts" className="inline-flex items-center gap-2 text-accent-gold text-sm font-medium hover:gap-3 transition-all">
          <ArrowLeft size={14} /> Back to All Manuscripts
        </Link>
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2">
      <Icon size={14} className="text-text-muted mt-0.5 shrink-0" />
      <div>
        <p className="text-text-muted text-xs">{label}</p>
        <p className="text-text-primary text-xs">{value}</p>
      </div>
    </div>
  );
}
