import React from 'react';
import { weddingData } from '../data/wedding';
import { ArrowUp } from 'lucide-react';
import { WaxSeal } from './OrnamentalAssets';

export const WeddingFooter: React.FC = () => {
  const { couple } = weddingData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      aria-label="Wedding Invitation Footer"
      className="relative w-full py-16 px-4 bg-[#11110F] text-[#E8D5B9] text-center overflow-hidden border-t border-[#B89A67]/20"
    >
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Miniature Wax Seal Monogram */}
        <div className="mb-6 opacity-90 hover:opacity-100 transition-opacity">
          <WaxSeal monogram="A & U" size={80} />
        </div>

        {/* Closing Arabic Dua */}
        <p
          className="font-arabic text-xl sm:text-2xl text-[#D9BF8C] mb-2 leading-relaxed"
          dir="rtl"
        >
          بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
        </p>
        <p className="font-serif-luxury italic text-xs sm:text-sm text-[#A8937C] max-w-md mx-auto mb-6">
          "May Allah bless you both, shower His blessings upon you, and unite you in goodness."
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#B89A67]/40 text-[#D9BF8C] hover:border-[#D9BF8C] hover:text-[#FFF] transition-all text-xs font-royal tracking-widest uppercase mb-8"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to Top</span>
        </button>

        {/* Family Tribute Line */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#B89A67] to-transparent mb-4" />
        <p className="font-royal text-[10px] tracking-[0.25em] text-[#8C765C] uppercase">
          {couple.groom.shortName} &amp; {couple.bride.shortName} · October 2026
        </p>
        <p className="font-serif-luxury text-[11px] text-[#6E5A47] mt-1">
          With warmest gratitude from the Zahid &amp; Khan Families
        </p>
      </div>
    </footer>
  );
};
