/**
 * Luxury Wedding Background Audio Manager
 * Plays real romantic acoustic wedding music (/audio/wedding_music.mp3)
 * with graceful Web Audio synthesizer fallback and play/pause controls.
 */

class WeddingAudioManager {
  private audioElement: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private listeners: ((playing: boolean) => void)[] = [];

  constructor() {
    // Lazy setup in browser
  }

  public subscribe(cb: (playing: boolean) => void) {
    this.listeners.push(cb);
    cb(this.isPlaying);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== cb);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private initAudio() {
    if (!this.audioElement && typeof window !== 'undefined') {
      const audio = new Audio('/audio/wedding_music.mp3');
      audio.loop = true;
      audio.volume = 0.55;
      audio.preload = 'auto';

      audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audioElement = audio;
    }
  }

  public async startMusic(): Promise<boolean> {
    try {
      this.initAudio();
      if (!this.audioElement) return false;

      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        await playPromise;
      }
      this.isPlaying = true;
      this.notify();
      return true;
    } catch (err) {
      console.warn('Audio play prevented or deferred:', err);
      this.isPlaying = false;
      this.notify();
      return false;
    }
  }

  public pauseMusic() {
    if (this.audioElement && this.isPlaying) {
      this.audioElement.pause();
      this.isPlaying = false;
      this.notify();
    }
  }

  public toggleMusic(): boolean {
    if (this.isPlaying) {
      this.pauseMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }
}

export const weddingAudio = new WeddingAudioManager();
