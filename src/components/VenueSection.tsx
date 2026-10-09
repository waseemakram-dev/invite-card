import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';
import { StarDivider } from './OrnamentalAssets';
import { MapPin, Navigation } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const { venues } = weddingData;

  return (
    <section
      id="venues-section"
      aria-label="Wedding Venues & Locations"
      className="relative w-full py-16 sm:py-24 px-4 bg-[#F5E8EA] text-[#493B3A] overflow-hidden"
    >
      <div className="max-w-xl mx-auto text-center">
        {/* Section Heading matching Frame 00:10 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1 }}
          className="mb-10 sm:mb-14"
        >
          <StarDivider className="opacity-70 mb-2" />
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6D5451] font-normal tracking-wide">
            Lieu
          </h2>
          <p className="font-serif-luxury italic text-xs sm:text-sm text-[#826966] mt-1">
            Venues &amp; Navigation
          </p>
        </motion.div>

        {/* Venues List with Arched Visuals (Frame 00:10) */}
        <div className="space-y-12 sm:space-y-16">
          {venues.map((venue, idx) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: idx * 0.2 }}
              className="flex flex-col items-center"
            >
              {/* Location Pin & Event Type */}
              <div className="flex items-center gap-1.5 text-[#9A7D63] mb-2">
                <MapPin className="w-4 h-4 text-[#B89A67]" />
                <span className="font-royal text-[10px] tracking-[0.25em] uppercase font-semibold">
                  {venue.events.join(' & ')}
                </span>
              </div>

              {/* Venue Name */}
              <h3 className="font-display-luxury text-2xl sm:text-3xl text-[#2E2423] font-normal mb-1">
                {venue.name}
              </h3>

              {/* Venue Address */}
              <p className="font-serif-luxury text-sm text-[#6C5654] leading-relaxed max-w-sm mb-6">
                {venue.address}, {venue.city}
              </p>

              {/* Arched Palace Visual Frame (Frame 00:10) */}
              <div className="relative w-64 sm:w-80 h-44 sm:h-52 rounded-t-full overflow-hidden border border-[#D9BF8C]/70 shadow-[0_8px_25px_rgba(184,154,103,0.18)] mb-6">
                <img
                  src={idx === 0 ? '/images/palace_sunset.jpg' : '/images/grand_palace_venue.jpg'}
                  alt={venue.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5E8EA]/40 to-transparent" />
              </div>

              {/* "Itinéraire" / Directions Pill Button matching Frame 00:10 */}
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2 px-6 rounded-full bg-[#FAF2EB] border border-[#D9BF8C] text-[#6E532B] hover:bg-[#D9BF8C] hover:text-[#11110F] transition-all text-xs font-serif-luxury italic tracking-wider shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Itinéraire / Get Directions</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
