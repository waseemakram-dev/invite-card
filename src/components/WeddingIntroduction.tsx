import React from 'react';
import { motion } from 'motion/react';
import { PointedArchFrame, StarDivider } from './OrnamentalAssets';
import { weddingData } from '../data/wedding';
import { MapPin } from 'lucide-react';

export const WeddingIntroduction: React.FC = () => {
  const {
    couple,
    bismillahArabic,
    bismillahEnglish,
    quranicVerseArabic,
    quranicVerseEnglish,
    quranicVerseReference,
  } = weddingData;

  return (
    <section
      id="invitation-section"
      aria-label="Formal Islamic Wedding Invitation"
      className="relative w-full py-16 sm:py-24 px-4 bg-[#F5E8EA] text-[#493B3A] overflow-hidden"
    >
      {/* Background paper texture */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#D8BDC1 0.7px, transparent 0.7px), radial-gradient(#E8D5D8 0.7px, #F5E8EA 0.7px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="max-w-xl mx-auto relative z-10"
      >
        {/* Arched Palace Courtyard Vignette at top of the card (Frame 00:06 - 00:07) */}
        <div className="flex justify-center mb-6">
          <div className="relative w-48 sm:w-56 h-36 sm:h-44 rounded-t-full overflow-hidden border border-[#D9BF8C]/60 shadow-[0_6px_20px_rgba(184,154,103,0.15)]">
            <img
              src="/images/morocco_riad.jpg"
              alt="Palace Courtyard"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F5E8EA] via-transparent to-transparent opacity-80" />
          </div>
        </div>

        {/* Main Pointed Arch Islamic Invitation Card */}
        <PointedArchFrame className="bg-[#FAF3F4]/90 backdrop-blur-xs rounded-2xl shadow-[0_10px_35px_rgba(184,154,103,0.12)] border border-[#E8D4D7]/80">
          {/* 1. Bismillah Arabic Calligraphy */}
          <div className="mb-4">
            <h3
              className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#2F2423] font-normal leading-relaxed tracking-normal"
              dir="rtl"
            >
              {bismillahArabic}
            </h3>
            <p className="font-serif-luxury italic text-xs text-[#7A6462] mt-1 tracking-wider">
              "{bismillahEnglish}"
            </p>
          </div>

          <StarDivider className="opacity-60" />

          {/* 2. Quranic Blessing Verse */}
          <div className="my-4 px-2 sm:px-4">
            <p
              className="font-arabic text-base sm:text-lg text-[#3E2E2D] font-normal leading-loose"
              dir="rtl"
            >
              {quranicVerseArabic}
            </p>
            <p className="font-serif-luxury italic text-xs text-[#735C5A] mt-1.5 leading-relaxed max-w-md mx-auto">
              "{quranicVerseEnglish}"
            </p>
            <p className="font-royal text-[10px] tracking-[0.2em] text-[#9A7D63] uppercase mt-1">
              — {quranicVerseReference} —
            </p>
          </div>

          <StarDivider className="opacity-60" />

          {/* 3. Hosting Families & Invitation Prose */}
          <div className="mt-5 space-y-3.5 px-2">
            <div className="space-y-1">
              <p className="font-royal text-xs tracking-[0.2em] text-[#8C7058] uppercase font-semibold">
                {couple.bride.parents}
              </p>
              <p className="font-serif-luxury italic text-xs text-[#7A6462]">
                &amp;
              </p>
              <p className="font-royal text-xs tracking-[0.2em] text-[#8C7058] uppercase font-semibold">
                {couple.groom.parents}
              </p>
            </div>

            <p className="font-serif-luxury text-sm text-[#544240] max-w-sm mx-auto leading-relaxed pt-1">
              cordially request the honor of your presence and blessings at the wedding ceremonies of their beloved children
            </p>

            {/* Couple Names in Romantic Calligraphy */}
            <div className="py-2 space-y-0.5">
              <h2 className="font-script text-3xl sm:text-4xl text-[#2A201F] font-normal">
                {couple.groom.shortName}
              </h2>
              <div className="font-script text-2xl text-[#B89A67]">
                &amp;
              </div>
              <h2 className="font-script text-3xl sm:text-4xl text-[#2A201F] font-normal">
                {couple.bride.shortName}
              </h2>
            </div>

            <p className="font-royal text-[11px] tracking-[0.2em] text-[#856C69] uppercase font-medium">
              30 October – 01 November 2026
            </p>

            {/* Venue Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3E5E7] text-xs text-[#6E5654] font-serif-luxury italic mt-2">
              <MapPin className="w-3 h-3 text-[#B89A67]" />
              <span>Bahawalpur, Pakistan</span>
            </div>
          </div>
        </PointedArchFrame>
      </motion.div>
    </section>
  );
};
