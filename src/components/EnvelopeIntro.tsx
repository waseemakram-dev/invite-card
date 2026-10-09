import { useEffect, useRef, useState } from 'react';
const imagePath = '/images/Embossed Ivory Envelope with A&U Wax Seal.png';
const videoPath = '/images/Edit_video_monogram_on_seal_20261009143255.mp4';
export function EnvelopeIntro({ onOpenComplete, onSealClick }: { onOpenComplete: () => void; onSealClick?: () => void }) {
  const [stage, setStage] = useState<'idle' | 'playing' | 'leaving'>('idle');
  const [hasFrame, setHasFrame] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finished = useRef(false);
  const completeCallback = useRef(onOpenComplete);
  completeCallback.current = onOpenComplete;
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; if (exitTimer.current) clearTimeout(exitTimer.current); };
  }, []);
  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    video.current?.pause();
    setStage('leaving');
    exitTimer.current = setTimeout(() => completeCallback.current(), 650);
  };
  const open = () => {
    if (stage !== 'idle') return;
    onSealClick?.();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { finish(); return; }
    setStage('playing');
    video.current?.play().catch(finish);
  };
  return <div className={`envelope-overlay ${stage}`} aria-label="Wedding invitation cover">
    <div className="envelope-canvas">
      <video ref={video} className={hasFrame ? 'opening-film visible' : 'opening-film'} muted playsInline preload="none" onPlaying={() => setHasFrame(true)} onEnded={finish} onError={() => { if (stage === 'playing') finish(); }} aria-hidden="true">
        <source src={videoPath} type="video/mp4" />
      </video>
      <img className={hasFrame ? 'envelope-poster fading' : 'envelope-poster'} src={imagePath} alt="Embossed ivory envelope with an A and U burgundy wax seal" fetchPriority="high" />
      {stage === 'idle' && <button className="open-envelope" onClick={open} aria-label="Open wedding invitation" autoFocus><span>Tap to open</span></button>}
      {stage === 'playing' && <p className="opening-status" role="status">Opening your invitation…</p>}
      <button className="skip-intro" onClick={finish}>{stage === 'idle' ? 'View invitation' : 'Skip opening'}</button>
    </div>
  </div>;
}
