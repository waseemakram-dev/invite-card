import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Pause, Play } from 'lucide-react';
import { weddingAudio } from '../utils/audio';

export const MusicButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    weddingAudio.toggleMusic();
  };

  return (
    <div
      className="fixed z-50 pointer-events-auto"
      style={{
        bottom: '24px',
        right: 'max(20px, calc(50% - 220px + 20px))',
      }}
    >
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.5)] border border-[#E8D5B9] ${
          isPlaying
            ? 'bg-gradient-to-tr from-[#B89A67] via-[#D9BF8C] to-[#E8D5B9] text-[#1A1A16]'
            : 'bg-[#1F1B18]/90 text-[#D9BF8C] backdrop-blur-xs'
        }`}
      >
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-[#D9BF8C] animate-ping opacity-30" />
        )}

        {isPlaying ? (
          <Pause className="w-4 h-4 fill-current transition-transform" />
        ) : (
          <Play className="w-4 h-4 fill-current ml-0.5 opacity-90" />
        )}
      </motion.button>
    </div>
  );
};
