import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { ChevronDown } from 'lucide-react';
import { ClassicalChandelier, DrapedCurtains } from './OrnamentalAssets';

interface PalaceHeroProps {
  onScrollDown?: () => void;
}

export const PalaceHero: React.FC<PalaceHeroProps> = ({ onScrollDown }) => {
  const { couple } = weddingData;

  return (
    <section
      aria-label="Royal Palace Wedding Hero"
      className="relative min-h-screen w-full flex flex-col justify-between items-center text-center overflow-hidden bg-[#221B16]"
    >
      {/* 1. Real Photorealistic Palace Riad Backdrop (Frame 00:04 - 00:06) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/palace_courtyard.jpg"
          alt="Royal Palace Courtyard"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
        />
        {/* Warm Golden Sunset / Champagne Editorial Color Grading Scrim */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(34, 27, 22, 0.45) 0%, rgba(184, 154, 103, 0.22) 40%, rgba(34, 27, 22, 0.75) 100%)',
          }}
        />
        {/* Soft radial sun glow behind center archway */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(255, 235, 185, 0.3) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* 2. Top Rich Draped Curtains (Framing upper corners) */}
      <DrapedCurtains className="z-10" />

      {/* 3. Glowing Classical Crystal Chandelier in Top Center (Frame 00:04) */}
      <div className="relative z-20 pt-2 sm:pt-4">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
        >
          <ClassicalChandelier />
        </motion.div>
      </div>

      {/* 4. Central Royal Typographic Space (Exact positioning matching reference video) */}
      <div className="relative z-20 max-w-2xl px-6 py-6 sm:py-10 flex flex-col items-center my-auto">
        {/* Groom's Name in Romantic Script */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FFFDF8] tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] leading-tight px-2"
        >
          {couple.groom.shortName}
        </motion.h1>

        {/* Romantic Decorative Script "and" */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="my-0.5 sm:my-1"
        >
          <span className="font-script text-3xl sm:text-4xl md:text-5xl text-[#F3E5D0] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            &amp;
          </span>
        </motion.div>

        {/* Bride's Name in Romantic Script */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#FFFDF8] tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] leading-tight px-2"
        >
          {couple.bride.shortName}
        </motion.h2>

        {/* Full Formal Titles */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="font-royal text-[11px] sm:text-xs tracking-[0.25em] text-[#EAD8C3] uppercase mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          {couple.groom.name} &amp; {couple.bride.name}
        </motion.p>

        {/* Wedding Date in French/Editorial style matching video: "20 Mai 2027 à partir de 16h" */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="mt-4 flex flex-col items-center gap-1"
        >
          <span className="font-serif-luxury text-base sm:text-lg md:text-xl text-[#FFFDF8] tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            30 Octobre – 01 Novembre 2026
          </span>
          <span className="font-serif-luxury italic text-xs sm:text-sm text-[#F3E2CF] tracking-wider drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            Bahawalpur, Pakistan
          </span>
        </motion.div>
      </div>

      {/* 5. Scroll Down Indicator */}
      <div className="relative z-20 pb-8 sm:pb-10 flex flex-col items-center">
        <motion.button
          onClick={onScrollDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { delay: 1.8, duration: 1 },
            y: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' },
          }}
          aria-label="Scroll to formal invitation"
          className="group flex flex-col items-center gap-1 text-[#F3E2CF] hover:text-[#FFF] transition-colors focus:outline-none"
        >
          <span className="font-royal text-[10px] sm:text-[11px] tracking-[0.3em] uppercase opacity-90 group-hover:opacity-100">
            Scroll to View Invitation
          </span>
          <ChevronDown className="w-4 h-4 text-[#D9BF8C] group-hover:translate-y-0.5 transition-transform" />
        </motion.button>
      </div>

      {/* Soft gradient fade into blush-pink paper section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#F5E8EA] via-[#F5E8EA]/60 to-transparent pointer-events-none z-10" />
    </section>
  );
};
