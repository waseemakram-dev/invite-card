import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  LuxuryWaxSeal,
  GoldDiamondMandala,
  FlapTriangleOrnament,
} from './OrnamentalAssets';

interface EnvelopeIntroProps {
  onOpenComplete: () => void;
  onSealClick?: () => void;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({
  onOpenComplete,
  onSealClick,
}) => {
  const [stage, setStage] = useState<'idle' | 'opening' | 'revealing'>('idle');
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; delay: number; scale: number }[]
  >([]);

  const handleOpen = () => {
    if (stage !== 'idle') return;

    if (onSealClick) {
      onSealClick();
    }

    setStage('opening');

    // Generate gold glints around the seal and lines
    const glints = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 40,
      y: 50 + (Math.random() - 0.5) * 40,
      delay: Math.random() * 1.6,
      scale: 0.6 + Math.random() * 0.9,
    }));
    setParticles(glints);

    // Timed progression matching reference video (~2.5s - 3.2s)
    setTimeout(() => {
      setStage('revealing');
    }, 2000);

    setTimeout(() => {
      onOpenComplete();
    }, 3000);
  };

  const isOpening = stage === 'opening' || stage === 'revealing';

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Open wedding invitation"
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      }}
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none bg-[#121210] transition-opacity duration-1000 ${
        stage === 'revealing' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* 1. Deep Matte Charcoal/Black Paper Texture */}
      <div className="absolute inset-0 bg-[#121210]">
        <div
          className="absolute inset-0 opacity-25 mix-blend-soft-light"
          style={{
            backgroundImage:
              'radial-gradient(#C5A880 0.8px, transparent 0.8px), radial-gradient(#1E1E1A 0.8px, #121210 0.8px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
          }}
        />
      </div>

      {/* 2. Double Inset Gold Hairline Rectangle Border with Corner Stars (Frame 00:00) */}
      <div className="absolute inset-3 sm:inset-5 md:inset-8 pointer-events-none border border-[#D9BF8C]/40 rounded-sm">
        <div className="absolute inset-1.5 border border-[#D9BF8C]/25" />
        {/* Corner 4-point stars */}
        <span className="absolute top-1 left-1 text-[#D9BF8C] text-[10px] leading-none">✦</span>
        <span className="absolute top-1 right-1 text-[#D9BF8C] text-[10px] leading-none">✦</span>
        <span className="absolute bottom-1 left-1 text-[#D9BF8C] text-[10px] leading-none">✦</span>
        <span className="absolute bottom-1 right-1 text-[#D9BF8C] text-[10px] leading-none">✦</span>
      </div>

      {/* 3. Envelope Diagonal Crease Lines (Meeting the central diamond vertices) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="envelopeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E6338" />
            <stop offset="50%" stopColor={isOpening ? '#FFF5D6' : '#D9BF8C'} />
            <stop offset="100%" stopColor="#7E6338" />
          </linearGradient>
          <filter id="glowFoil" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Diagonal lines to top vertex of diamond */}
        <line
          x1="0"
          y1="0"
          x2="50%"
          y2="34%"
          stroke="url(#envelopeLineGrad)"
          strokeWidth={isOpening ? 2 : 1.2}
          opacity={isOpening ? 1 : 0.65}
          filter={isOpening ? 'url(#glowFoil)' : undefined}
        />
        <line
          x1="100%"
          y1="0"
          x2="50%"
          y2="34%"
          stroke="url(#envelopeLineGrad)"
          strokeWidth={isOpening ? 2 : 1.2}
          opacity={isOpening ? 1 : 0.65}
          filter={isOpening ? 'url(#glowFoil)' : undefined}
        />

        {/* Diagonal lines to bottom vertex of diamond */}
        <line
          x1="0"
          y1="100%"
          x2="50%"
          y2="66%"
          stroke="url(#envelopeLineGrad)"
          strokeWidth={isOpening ? 2 : 1.2}
          opacity={isOpening ? 1 : 0.65}
          filter={isOpening ? 'url(#glowFoil)' : undefined}
        />
        <line
          x1="100%"
          y1="100%"
          x2="50%"
          y2="66%"
          stroke="url(#envelopeLineGrad)"
          strokeWidth={isOpening ? 2 : 1.2}
          opacity={isOpening ? 1 : 0.65}
          filter={isOpening ? 'url(#glowFoil)' : undefined}
        />
      </svg>

      {/* 4. Top & Bottom Flap Filigree Jewels (Frame 00:01) */}
      <div className="absolute top-12 sm:top-16 inset-x-0 flex justify-center pointer-events-none">
        <FlapTriangleOrnament position="top" illuminated={isOpening} />
      </div>
      <div className="absolute bottom-12 sm:bottom-16 inset-x-0 flex justify-center pointer-events-none">
        <FlapTriangleOrnament position="bottom" illuminated={isOpening} />
      </div>

      {/* 5. Center Gold Diamond Mandala & Wax Seal */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        {/* Large Diamond Mandala behind the seal */}
        <div className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] relative flex items-center justify-center">
          <GoldDiamondMandala
            illuminated={isOpening}
            className="w-full h-full"
          />

          {/* 3D Wax Seal directly in the center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={
                isOpening
                  ? { scale: [1, 1.08, 1.14], filter: 'drop-shadow(0 0 25px rgba(255,235,175,0.95))' }
                  : { scale: 1 }
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="cursor-pointer"
            >
              <LuxuryWaxSeal
                monogram="A & U"
                size={118}
                glow={isOpening}
              />
            </motion.div>
          </div>
        </div>

        {/* Elegant "Tap to Open" hint beneath */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={
            isOpening
              ? { opacity: 0, y: -6 }
              : { opacity: [0.5, 0.95, 0.5], y: 0 }
          }
          transition={{
            opacity: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
            duration: 0.6,
          }}
          className="mt-4 flex flex-col items-center gap-1 pointer-events-none"
        >
          <span className="font-royal text-[11px] sm:text-xs tracking-[0.25em] text-[#D9BF8C] uppercase font-medium">
            Tap to Open
          </span>
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#D9BF8C] to-transparent" />
        </motion.div>
      </div>

      {/* 6. Radiant Golden Light Halo when Tapped */}
      <AnimatePresence>
        {isOpening && (
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: [0.6, 2, 4], opacity: [0.4, 0.95, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 320,
              height: 320,
              background:
                'radial-gradient(circle, rgba(255, 245, 210, 0.95) 0%, rgba(217, 191, 140, 0.7) 35%, rgba(184, 154, 103, 0.3) 65%, transparent 85%)',
              filter: 'blur(20px)',
            }}
          />
        )}
      </AnimatePresence>

      {/* 7. Glint Sparkle Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, p.scale, 0],
            y: [(p.y - 50) * 3, (p.y - 50) * 6],
          }}
          transition={{ duration: 1.6, delay: p.delay, ease: 'easeOut' }}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: 4 * p.scale,
            height: 4 * p.scale,
            backgroundColor: '#FFF5D6',
            boxShadow: '0 0 10px #FFD77A',
          }}
        />
      ))}
    </div>
  );
};
