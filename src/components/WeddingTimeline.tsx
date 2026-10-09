import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { StarDivider } from './OrnamentalAssets';

export const WeddingTimeline: React.FC = () => {
  const { events } = weddingData;

  // Flattened chronological timeline items matching Frame 00:09
  const timelineMilestones = [
    {
      time: '19:00',
      timeLabel: '07:00 PM',
      day: 'Friday, 30 Oct',
      title: 'Mehndi & Henna Celebration',
      subtitle: 'Evening of Music & Henna Blossoms',
      venue: 'House No. 31-A, Al Noor Garden',
    },
    {
      time: '14:30',
      timeLabel: '02:30 PM',
      day: 'Saturday, 31 Oct',
      title: 'Sehra Bandi & Barat Departure',
      subtitle: 'Traditional Procession & Nikah Ceremony',
      venue: 'House No. 31-A, Al Noor Garden',
    },
    {
      time: '19:00',
      timeLabel: '07:00 PM',
      day: 'Sunday, 01 Nov',
      title: 'Grand Walima Reception',
      subtitle: 'Reception of Guests & Welcoming',
      venue: 'The Grand Palace Banquet Hall',
    },
    {
      time: '20:00',
      timeLabel: '08:00 PM',
      day: 'Sunday, 01 Nov',
      title: 'Royal Dinner Feast',
      subtitle: 'Celebratory Banquet & Farewell',
      venue: 'The Grand Palace Banquet Hall',
    },
  ];

  return (
    <section
      id="timeline-section"
      aria-label="Wedding Events Schedule"
      className="relative w-full py-16 sm:py-24 px-4 bg-[#F5E8EA] text-[#493B3A] overflow-hidden"
    >
      <div className="max-w-xl mx-auto">
        {/* Section Heading matching Frame 00:09 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16"
        >
          <StarDivider className="opacity-70 mb-2" />
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6D5451] font-normal tracking-wide">
            Chronologie de l'événement
          </h2>
          <p className="font-serif-luxury italic text-xs sm:text-sm text-[#826966] mt-1">
            Wedding Itinerary &amp; Auspicious Timings
          </p>
        </motion.div>

        {/* Minimalist 3-Column Vertical Timeline matching Frame 00:09 */}
        <div className="relative">
          {/* Continuous thin vertical line in center axis */}
          <div className="absolute left-[85px] sm:left-[110px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#B89A67]/40 via-[#D9BF8C] to-[#B89A67]/40" />

          <div className="space-y-10 sm:space-y-12">
            {timelineMilestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                className="relative flex items-baseline"
              >
                {/* Left Column: Time */}
                <div className="w-[75px] sm:w-[95px] text-right pr-3 shrink-0">
                  <span className="font-serif-luxury text-xl sm:text-2xl font-light text-[#2E2423] block leading-none tabular-nums">
                    {item.time}
                  </span>
                  <span className="font-royal text-[9px] sm:text-[10px] tracking-wider text-[#917774] block mt-1 uppercase">
                    {item.timeLabel}
                  </span>
                </div>

                {/* Center Column: Node on Line */}
                <div className="relative flex items-center justify-center w-5 shrink-0 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F5E8EA] border border-[#B89A67] flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-[#B89A67]" />
                  </div>
                </div>

                {/* Right Column: Event Details */}
                <div className="pl-4 sm:pl-6 flex-1">
                  <h3 className="font-display-luxury text-lg sm:text-xl text-[#2F2423] font-normal">
                    {item.title}
                  </h3>
                  <p className="font-serif-luxury italic text-xs text-[#7A6462] mt-0.5">
                    {item.subtitle}
                  </p>
                  <p className="font-royal text-[10px] tracking-widest text-[#9A7D63] uppercase mt-1">
                    {item.day} · {item.venue}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
