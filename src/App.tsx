import { useState } from 'react';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import { PalaceHero } from './components/PalaceHero';
import { WeddingIntroduction } from './components/WeddingIntroduction';
import { Countdown } from './components/Countdown';
import { WeddingTimeline } from './components/WeddingTimeline';
import { VenueSection } from './components/VenueSection';
import { WeddingFooter } from './components/WeddingFooter';
import { MusicButton } from './components/MusicButton';
import { weddingAudio } from './utils/audio';

export function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);

  const handleSealClick = () => {
    // Attempt audio playback on user interaction
    weddingAudio.startMusic().catch(() => {
      // Handled
    });
  };

  const handleOpenComplete = () => {
    setIsEnvelopeOpened(true);
  };

  const handleScrollToInvitation = () => {
    const section = document.getElementById('invitation-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#11110F] text-[#493B3A] relative overflow-x-hidden">
      {/* 1. Opening Black-and-Gold Foil Envelope with Wax Seal (Frame 00:00 - 00:03) */}
      {!isEnvelopeOpened && (
        <EnvelopeIntro
          onOpenComplete={handleOpenComplete}
          onSealClick={handleSealClick}
        />
      )}

      {/* 2. Continuous Vertical Page Flow */}
      <div className={`transition-opacity duration-1000 ${isEnvelopeOpened ? 'opacity-100' : 'opacity-0'}`}>
        {/* Royal Palace Hero with Curtains & Chandelier (Frame 00:04 - 00:06) */}
        <PalaceHero onScrollDown={handleScrollToInvitation} />

        {/* Formal Blush-Pink Islamic Invitation with Arched Vignette (Frame 00:07) */}
        <WeddingIntroduction />

        {/* Romantic French-Style Countdown "La Célébration Commence" (Frame 00:08) */}
        <Countdown />

        {/* 3-Column Wedding Timeline "Chronologie de l'événement" (Frame 00:09) */}
        <WeddingTimeline />

        {/* Venue Section with Arched Palace Visuals "Lieu" (Frame 00:10) */}
        <VenueSection />

        {/* Royal Wedding Footer */}
        <WeddingFooter />
      </div>

      {/* 3. Floating Music Controller (Present throughout entire experience as shown in video) */}
      <MusicButton />
    </main>
  );
}

export default App;
