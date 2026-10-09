// Original procedural instrumental. No third-party music recording is used.
export class GardenMusic {
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private timer: ReturnType<typeof setInterval> | null = null;
  private beat = 0;
  private melody = [72, 76, 79, 76, 74, 71, 67, 71, 69, 72, 76, 72, 67, 71, 74, 71];
  private tick() {
    if (!this.context || !this.master) return;
    const context = this.context;
    const tone = (midi: number, volume: number, duration: number) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = 440 * 2 ** ((midi - 69) / 12);
      const at = context.currentTime;
      gain.gain.setValueAtTime(0, at);
      gain.gain.linearRampToValueAtTime(volume, at + 0.018);
      gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);
      oscillator.connect(gain).connect(this.master!);
      oscillator.start(at);
      oscillator.stop(at + duration + 0.05);
      oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
    };
    tone(this.melody[this.beat % this.melody.length], 0.15, 2.2);
    if (this.beat % 4 === 0) {
      const root = [48, 43, 45, 43][Math.floor(this.beat / 4) % 4];
      [root, root + 7, root + 12].forEach(n => tone(n, 0.045, 3.6));
    }
    this.beat++;
  }
  async play() {
    if (!this.context) {
      this.context = new AudioContext();
      this.master = this.context.createGain();
      this.master.gain.value = 0.4;
      this.master.connect(this.context.destination);
    }
    await this.context.resume();
    if (!this.timer) { this.tick(); this.timer = setInterval(() => this.tick(), 800); }
  }
  async pause() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    await this.context?.suspend();
  }
  dispose() {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    void this.context?.close();
    this.context = null;
  }
}
