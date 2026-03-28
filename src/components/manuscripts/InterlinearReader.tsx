'use client';

import { useState } from 'react';
import type { InterlinearVerse, InterlinearWord, ManuscriptPassage } from '@/data/manuscripts/types';
import { Eye, EyeOff, Type, Columns, AlignLeft, X, BookOpen, Hash } from 'lucide-react';

type ViewMode = 'interlinear' | 'parallel' | 'original';

interface InterlinearReaderProps {
  passages: ManuscriptPassage[];
  script: string;
}

function WordPopup({ word, onClose }: { word: InterlinearWord; onClose: () => void }) {
  return (
    <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 sm:w-80">
      <div className="bg-bg-elevated border border-border rounded-xl shadow-2xl shadow-black/40 p-4 backdrop-blur-xl">
        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl font-serif text-accent-gold">{word.original}</span>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-surface-glass text-text-muted">
            <X size={14} />
          </button>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-text-muted w-24 shrink-0">Transliteration</span>
            <span className="text-text-primary italic">{word.transliteration}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-text-muted w-24 shrink-0">Gloss</span>
            <span className="text-accent-gold font-medium">{word.gloss}</span>
          </div>
          {word.lemma && (
            <div className="flex items-center gap-2">
              <span className="text-text-muted w-24 shrink-0">Lemma</span>
              <span className="text-text-primary font-serif">{word.lemma}</span>
            </div>
          )}
          {word.parsing && (
            <div className="flex items-center gap-2">
              <span className="text-text-muted w-24 shrink-0">Parsing</span>
              <span className="px-2 py-0.5 bg-accent-blue/10 text-accent-blue text-xs rounded font-mono">{word.parsing}</span>
            </div>
          )}
          {word.parsingFull && (
            <div className="flex items-start gap-2">
              <span className="text-text-muted w-24 shrink-0">Full Parsing</span>
              <span className="text-text-secondary text-xs leading-relaxed">{word.parsingFull}</span>
            </div>
          )}
          {word.strongs && (
            <div className="flex items-center gap-2">
              <span className="text-text-muted w-24 shrink-0">Strong&apos;s</span>
              <a
                href={`https://www.blueletterbible.org/lexicon/${word.strongs.toLowerCase()}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-teal text-xs hover:underline flex items-center gap-1"
              >
                <Hash size={10} /> {word.strongs}
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-bg-elevated border-r border-b border-border rotate-45 -mt-1.5" />
    </div>
  );
}

function InterlinearWordCell({ word, showTransliteration, showParsing }: { word: InterlinearWord; showTransliteration: boolean; showParsing: boolean }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div
      className="relative inline-flex flex-col items-center px-1.5 py-1 cursor-pointer rounded-lg hover:bg-surface-glass-hover transition-colors group"
      onClick={() => setShowPopup(!showPopup)}
    >
      {showPopup && <WordPopup word={word} onClose={() => setShowPopup(false)} />}
      <span className="text-lg sm:text-xl font-serif text-accent-gold leading-tight group-hover:text-accent-gold-light transition-colors">
        {word.original}
      </span>
      {showTransliteration && (
        <span className="text-[10px] text-text-muted italic leading-tight mt-0.5">{word.transliteration}</span>
      )}
      {showParsing && word.parsing && (
        <span className="text-[8px] text-accent-blue/60 font-mono leading-tight">{word.parsing}</span>
      )}
      <span className="text-xs text-text-secondary leading-tight mt-0.5">{word.gloss}</span>
    </div>
  );
}

function VerseDisplay({ verse, viewMode, showTransliteration, showParsing }: {
  verse: InterlinearVerse; viewMode: ViewMode; showTransliteration: boolean; showParsing: boolean;
}) {
  if (viewMode === 'original') {
    return (
      <div className="mb-4">
        <span className="text-xs text-accent-gold font-semibold mr-2">{verse.reference}</span>
        <span className="text-xl font-serif text-text-primary leading-loose" dir="auto">{verse.originalText}</span>
      </div>
    );
  }

  if (viewMode === 'parallel') {
    return (
      <div className="mb-6 grid md:grid-cols-2 gap-4 border-b border-border/50 pb-4">
        <div>
          <span className="text-xs text-accent-gold font-semibold block mb-1">{verse.reference} (Original)</span>
          <p className="text-lg font-serif text-text-primary leading-relaxed" dir="auto">{verse.originalText}</p>
        </div>
        <div>
          <span className="text-xs text-accent-blue font-semibold block mb-1">{verse.reference} (English Gloss)</span>
          <p className="text-base text-text-secondary leading-relaxed">
            {verse.words.map(w => w.gloss).join(' ')}
          </p>
        </div>
      </div>
    );
  }

  // Interlinear view (default)
  return (
    <div className="mb-6">
      <div className="text-xs text-accent-gold font-semibold mb-2 flex items-center gap-1.5">
        <BookOpen size={12} />
        {verse.reference}
      </div>
      <div className="flex flex-wrap gap-0.5 items-end pb-3 border-b border-border/30">
        {verse.words.map((word, i) => (
          <InterlinearWordCell
            key={`${verse.reference}-${i}`}
            word={word}
            showTransliteration={showTransliteration}
            showParsing={showParsing}
          />
        ))}
      </div>
    </div>
  );
}

export default function InterlinearReader({ passages, script }: InterlinearReaderProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('interlinear');
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [showParsing, setShowParsing] = useState(false);
  const [activePassage, setActivePassage] = useState(0);

  const passage = passages[activePassage];
  if (!passage) return null;

  const isRtl = script === 'hebrew' || script === 'aramaic';

  return (
    <div className="space-y-6">
      {/* Passage tabs (if multiple) */}
      {passages.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {passages.map((p, i) => (
            <button
              key={i}
              onClick={() => setActivePassage(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                i === activePassage
                  ? 'bg-accent-gold/15 text-accent-gold border border-accent-gold/30'
                  : 'bg-surface-glass text-text-secondary border border-border hover:border-border-hover'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>
      )}

      {/* Reading controls */}
      <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-surface-glass border border-border">
        <span className="text-xs text-text-muted font-medium mr-2">View:</span>
        {([
          { mode: 'interlinear' as ViewMode, icon: AlignLeft, label: 'Interlinear' },
          { mode: 'parallel' as ViewMode, icon: Columns, label: 'Parallel' },
          { mode: 'original' as ViewMode, icon: Type, label: 'Original' },
        ]).map(({ mode, icon: Icon, label }) => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === mode
                ? 'bg-accent-gold/15 text-accent-gold'
                : 'text-text-muted hover:text-text-secondary hover:bg-surface-glass-hover'
            }`}
          >
            <Icon size={13} /> {label}
          </button>
        ))}

        <div className="w-px h-5 bg-border mx-1" />

        <button
          onClick={() => setShowTransliteration(!showTransliteration)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            showTransliteration ? 'text-accent-teal' : 'text-text-muted'
          }`}
        >
          {showTransliteration ? <Eye size={13} /> : <EyeOff size={13} />} Transliteration
        </button>

        <button
          onClick={() => setShowParsing(!showParsing)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            showParsing ? 'text-accent-purple' : 'text-text-muted'
          }`}
        >
          {showParsing ? <Eye size={13} /> : <EyeOff size={13} />} Parsing
        </button>
      </div>

      {/* Passage info */}
      <div className="p-4 rounded-xl bg-accent-gold/5 border border-accent-gold/10">
        <h3 className="font-bold text-lg mb-1">{passage.title}</h3>
        <p className="text-sm text-text-muted mb-2">{passage.reference}</p>
        <p className="text-sm text-text-secondary font-serif leading-relaxed">{passage.notes}</p>
      </div>

      {/* Verses */}
      <div className={isRtl ? 'direction-rtl' : ''} dir={isRtl ? 'rtl' : 'ltr'}>
        {passage.verses.map((verse, i) => (
          <VerseDisplay
            key={i}
            verse={verse}
            viewMode={viewMode}
            showTransliteration={showTransliteration}
            showParsing={showParsing}
          />
        ))}
      </div>

      {/* Textual variants */}
      {passage.variants && passage.variants.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-accent-amber flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-accent-amber/10 flex items-center justify-center text-[10px]">⚡</span>
            Textual Variants
          </h4>
          {passage.variants.map((v, i) => (
            <div key={i} className="p-4 rounded-xl bg-surface-glass border border-border text-sm">
              <p className="font-medium text-text-primary mb-2">{v.reference}</p>
              <div className="grid md:grid-cols-2 gap-3 mb-2">
                <div>
                  <span className="text-[10px] text-accent-gold uppercase tracking-wider font-semibold">This manuscript</span>
                  <p className="text-text-secondary font-serif mt-0.5">{v.thisReading}</p>
                </div>
                <div>
                  <span className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Majority reading</span>
                  <p className="text-text-secondary font-serif mt-0.5">{v.majorityReading}</p>
                </div>
              </div>
              <p className="text-text-muted text-xs italic">{v.note}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
