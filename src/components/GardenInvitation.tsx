import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight, CalendarDays, MapPin, Music2, Pause, Phone } from 'lucide-react';
import { gardenMedia as media } from '../data/gardenMedia';
import { gardenWedding as wedding } from '../data/gardenWedding';
import { countdownAt, downloadCalendar, mapsLink } from '../utils/invitation';
import { GardenMusic } from '../utils/gardenMusic';
import { EnvelopeIntro } from './EnvelopeIntro';
import { Flourish, Swans } from './GardenOrnaments';

function Reveal({ children, className = '', delay = 0, style = 'fade', duration = 2 }: { children: ReactNode; className?: string; delay?: number; style?: 'fade' | 'up'; duration?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: style === 'up' ? 40 : 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration, delay, ease: 'easeOut' }}>{children}</motion.div>;
}

function Countdown() {
  const [left, setLeft] = useState(() => countdownAt(Date.now()));
  const section = useRef<HTMLElement>(null);
  const visible = useInView(section, { once: true, amount: .35 });
  const reduced = useReducedMotion();
  useEffect(() => { const interval = setInterval(() => setLeft(countdownAt(Date.now())), 1000); return () => clearInterval(interval); }, []);
  return <section ref={section} className={`countdown-section ${visible ? 'is-visible' : ''}`} aria-labelledby="countdown-heading">
    <Reveal><Flourish /><h2 id="countdown-heading">The celebration begins in</h2>
      {left.complete ? <p className="celebration-begun">Our wedding celebrations have begun</p> : <div className="countdown" role="timer" aria-label="Time until Mehndi">
        {(['days', 'hours', 'minutes', 'seconds'] as const).map((unit, index)=><div key={unit} style={{ '--reveal-delay': `${index * .18}s` } as React.CSSProperties}><div className="number-ink"><AnimatePresence mode="popLayout" initial={false}><motion.span key={left[unit]} initial={reduced ? false : {y:'60%',opacity:0}} animate={{y:0,opacity:1}} exit={reduced ? undefined : {y:'-60%',opacity:0}} transition={{duration:.52,ease:[.25,.1,.25,1]}}>{String(left[unit]).padStart(2,'0')}</motion.span></AnimatePresence></div><small>{unit}</small></div>)}
      </div>}
      <p className="small-note">Until Mehndi · 30 October 2026 · 7:00 PM PKT</p>
      <button className="text-button" onClick={downloadCalendar}><CalendarDays size={15} /> Save the dates</button>
    </Reveal>
  </section>;
}

function EventTimeline() {
  const timeline = useRef<HTMLDivElement>(null);
  const rose = useRef<HTMLImageElement>(null);
  const reduced = useReducedMotion();
  const [track, setTrack] = useState({ start: 0, end: 0, from: 0, to: 1 });
  const { scrollYProgress } = useScroll({ target: timeline, offset: ['start center', 'end center'] });
  const y = useTransform(scrollYProgress, [track.from, track.to], [track.start, track.end]);

  useLayoutEffect(() => {
    const element = timeline.current;
    const image = rose.current;
    if (!element || !image) return;
    const entries = Array.from(element.querySelectorAll<HTMLElement>('.event-entry'));
    const measure = () => {
      if (!entries.length || !element.offsetHeight) return;
      // Read the actual marker centres so font loading and wrapped mobile text stay aligned.
      const markerCentre = (entry: HTMLElement) => {
        const marker = getComputedStyle(entry, '::after');
        return entry.offsetTop + parseFloat(marker.top) + parseFloat(marker.height) / 2;
      };
      const first = markerCentre(entries[0]);
      const last = markerCentre(entries[entries.length - 1]);
      const halfRose = image.offsetHeight / 2;
      setTrack({ start: first - halfRose, end: last - halfRose, from: first / element.offsetHeight, to: last / element.offsetHeight });
    };
    measure();
    const observer = new ResizeObserver(measure);
    [element, image, ...entries].forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <div ref={timeline} className="event-timeline">
    <motion.img ref={rose} className="timeline-rose" src={media.rose} alt="" aria-hidden="true" loading="lazy" style={{ y: reduced ? track.start : y }}/>
    {wedding.events.map((event,i)=><Reveal key={event.id} delay={.1*i} duration={1.5} className="event-entry"><div className="event-date"><strong>{event.dayNumber}</strong><span>{event.month}</span><small>{event.day} · 2026</small></div>
      <div className="event-details"><h3>{event.name}</h3><dl>{event.times.map(time=><div key={time.label}><dt>{time.label}</dt><dd>{time.time}</dd></div>)}</dl><a href={`#venue-${event.venueId}`} className="event-venue"><MapPin size={13}/><span>{event.venueId==='home'?'Al Noor Garden':'The Grand Palace'}</span><ArrowUpRight size={13}/></a></div>
    </Reveal>)}
  </div>;
}

function HeroFilm() {
  const video = useRef<HTMLVideoElement>(null);
  const inView = useInView(video, { amount: .05 });
  const reduced = useReducedMotion();
  useEffect(() => {
    const sync = () => {
      if (!video.current) return;
      if (inView && !reduced && !document.hidden) void video.current.play().catch(() => {});
      else video.current.pause();
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => document.removeEventListener('visibilitychange', sync);
  }, [inView, reduced]);
  return <video ref={video} className="garden-hero-video" poster={media.heroPoster} autoPlay={!reduced} muted loop playsInline preload="metadata" aria-hidden="true"><source src={media.gardenSwans} type="video/mp4"/></video>;
}

export function GardenInvitation() {
  const [opened,setOpened] = useState(false);
  const [playing,setPlaying] = useState(false);
  const [musicError,setMusicError] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const music = useRef<GardenMusic | null>(null);
  const reduced = useReducedMotion();
  useEffect(() => { music.current = new GardenMusic(); return () => music.current?.dispose(); }, []);
  useEffect(() => { if(opened) heading.current?.focus({preventScroll:true}); },[opened]);
  const startMusic = async () => { try { await music.current?.play(); setPlaying(true); setMusicError(''); } catch { setPlaying(false); setMusicError('Music could not start on this browser.'); } };
  const toggleMusic = async () => { if(playing) { await music.current?.pause(); setPlaying(false); } else await startMusic(); };

  return <>
    {!opened && <EnvelopeIntro onOpenComplete={()=>setOpened(true)} onSealClick={()=>{ if(!reduced) void startMusic(); }}/>} 
    {opened && <>
    <a className="skip-content" href="#programme">Skip to wedding details</a>
    <main className="garden-page">
      <section className="garden-hero" aria-label="Attique and Umaira wedding invitation">
        <img className="garden-hero-image" src={media.heroPoster} alt="" fetchPriority="high"/>
        <HeroFilm/>
        <div className="hero-letter">
          <motion.p className="hero-kicker" initial={reduced ? false : {opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:2,delay:.1}}>Wedding Day</motion.p>
          <motion.p className="hero-date" initial={reduced ? false : {opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:2,delay:.1}}>31.10.26</motion.p>
          <motion.h1 ref={heading} tabIndex={-1} initial={reduced ? false : {opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:2,delay:.2}}><span>Attique</span><em>&</em><span>Umaira</span></motion.h1>
          <motion.p className="hero-place" initial={reduced ? false : {opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:2,delay:.3}}>Bahawalpur, Pakistan</motion.p>
          <a className="scroll-cue" href="#invitation"><span>Scroll down</span><ArrowDown size={21}/></a>
        </div>
      </section>

      <section id="invitation" className="paper-panel introduction" aria-labelledby="invitation-heading">
        <img className="reference-floral floral-left" src={media.floralLeft} alt="" loading="lazy"/><img className="reference-floral floral-right" src={media.floralRight} alt="" loading="lazy"/>
        <Reveal duration={1}><p className="bismillah" lang="ar" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <p className="bismillah-translation">In the name of Allah, the Most Gracious, the Most Merciful</p>
        </Reveal>
        <Reveal duration={1}><h2 id="invitation-heading">Two souls<br/>One destiny<br/><span>A lifetime written by Allah</span></h2><Flourish/></Reveal>
        <Reveal delay={.2}><p className="family-names">{wedding.hosts[0]}<br/>{wedding.hosts[1]}</p>
          <p className="invitation-prose">Would be delighted to have your gracious presence at the wedding ceremony of their beloved son</p>
          <p className="formal-name groom-name"><small>Dr. Hafiz Muhammad</small>Attique Zahid</p><p className="with-script">with</p>
          <p className="formal-name">Umaira Mehmood Khan</p>
          <p className="parent-label">Beloved daughter of</p><p className="family-names">{wedding.brideParents}</p>
          <p className="closing-dua">Your presence and prayers<br/>will make our celebration complete.</p>
        </Reveal>
      </section>
      <Countdown/>

      <section id="programme" className="paper-panel programme" aria-labelledby="programme-heading">
        <Reveal><p className="eyebrow">In Sha Allah</p><h2 id="programme-heading">Schedule of celebrations</h2><Flourish/><p className="small-note">All times are Pakistan Standard Time (PKT)</p></Reveal>
        <EventTimeline/>
      </section>

      <section className="locations" aria-labelledby="locations-heading">
        <Reveal><Flourish/><h2 id="locations-heading">Where we celebrate</h2><p className="location-intro">We look forward to welcoming you in Bahawalpur.</p></Reveal>
        {wedding.venues.map(venue=><Reveal key={venue.id} style="up" className="venue-card"><article id={`venue-${venue.id}`}>
          <p className="eyebrow">{venue.events}</p><MapPin className="venue-pin" size={25} strokeWidth={1}/><h3>{venue.title}</h3><p>{venue.address}<br/>Pakistan</p><a href={mapsLink(venue)} className="outline-button" target="_blank" rel="noopener noreferrer">Open in Google Maps<ArrowUpRight size={15}/></a>
        </article></Reveal>)}
      </section>

      <section className="paper-panel family-section" aria-labelledby="family-heading">
        <img className="family-border family-border-left" src={media.floralLeft} alt="" aria-hidden="true" loading="lazy"/>
        <img className="family-border family-border-right" src={media.floralRight} alt="" aria-hidden="true" loading="lazy"/>
        <img className="family-rose" src={media.rose} alt="" loading="lazy"/><Reveal><h2 id="family-heading">Looking forward</h2><Flourish/>
        <div className="looking-forward">{wedding.lookingForward.map(name=><p key={name}>{name}</p>)}</div>
        <p className="closing-dua">With the love and blessings of our families.</p></Reveal>
      </section>

      <section className="rsvp-section" aria-labelledby="contact-heading"><Reveal><Flourish/><h2 id="contact-heading">With love & duas</h2><p>For any details, our family is a call away.</p>
        <p className="eyebrow">Family contacts</p><div className="contact-links">{wedding.contacts.map(contact=><a key={contact.phone} href={`tel:${contact.phone}`}><Phone size={14}/>{contact.display}</a>)}</div>
        <details className="family-rsvp"><summary>R.S.V.P · Family</summary><p>{wedding.rsvp.join(' · ')}</p></details>
      </Reveal></section>

      <footer className="garden-footer"><Reveal><Swans/><h2>See you at the celebration</h2><p className="footer-names">Attique & Umaira</p><p className="eyebrow">With love, always</p><Flourish/><button className="text-button" onClick={()=>{ window.scrollTo({top:0,behavior:reduced?'instant':'smooth'}); }}>Back to the beginning ↑</button></Reveal></footer>
    </main>
    </>}
    {(opened || playing) && <button className="music-control" aria-label={playing?'Pause music':'Play music'} aria-pressed={playing} onClick={()=>void toggleMusic()}>{playing?<Pause size={19} fill="currentColor"/>:<Music2 size={20}/>}</button>}
    {musicError && <p className="music-status" role="status">{musicError}</p>}
  </>;
}
