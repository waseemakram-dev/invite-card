import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { StarDivider } from './OrnamentalAssets';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = (): TimeLeft => {
      const targetTime = new Date(weddingData.countdownTarget).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true,
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return {
        days,
        hours,
        minutes,
        seconds,
        isComplete: false,
      };
    };

    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', frenchLabel: 'Jours', value: timeLeft.days },
    { label: 'Hours', frenchLabel: 'Heures', value: timeLeft.hours },
    { label: 'Minutes', frenchLabel: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', frenchLabel: 'Secondes', value: timeLeft.seconds },
  ];

  return (
    <section
      aria-label="Wedding Countdown"
      className="relative w-full py-16 sm:py-20 px-4 bg-[#F5E8EA] text-[#493B3A] text-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-xl mx-auto"
      >
        {/* Star Ornament above heading (Frame 00:08) */}
        <StarDivider className="opacity-70 mb-2" />

        {/* Romantic French-style script heading matching reference video */}
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6D5451] font-normal tracking-wide">
          La Célébration Commence
        </h2>

        {/* Minimalist Countdown Typography (Exact replica of Frame 00:08) */}
        {mounted && !timeLeft.isComplete ? (
          <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 mt-6">
            {timeUnits.map((unit, index) => (
              <div key={unit.label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <span className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-light text-[#2A201F] tracking-tight tabular-nums leading-none">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="font-serif-luxury italic text-[11px] sm:text-xs text-[#826966] mt-2 font-normal">
                    {unit.label}
                  </span>
                </div>

                {/* Subtle colon separator */}
                {index < timeUnits.length - 1 && (
                  <span className="font-serif-luxury text-2xl sm:text-3xl text-[#B89A67]/70 ml-3 sm:ml-6 md:ml-8 mb-5">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : mounted && timeLeft.isComplete ? (
          <div className="mt-6 p-4">
            <span className="font-serif-luxury text-2xl sm:text-3xl text-[#2A201F]">
              The Auspicious Day Is Here!
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-4 sm:gap-8 mt-6 opacity-40">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((label) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-serif-luxury text-4xl sm:text-5xl text-[#2A201F]">--</span>
                <span className="font-serif-luxury italic text-xs text-[#826966] mt-2">{label}</span>
              </div>
            ))}
          </div>
        )}

        <StarDivider className="opacity-50 mt-8" />
      </motion.div>
    </section>
  );
};
