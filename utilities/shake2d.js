import { getPercentage, lerp } from "./math";

export class Shake2D {
  constructor(amplitude, frequency, duration, decayFunc) {
    // Parameters
    this.amplitude = amplitude;
    this.frequency = frequency;
    this.duration = duration;
    this.nrSamples = Math.round((duration / 1000) * frequency);
    this.decayFunc = decayFunc;
    // State
    this.samples = [];
  }

  generateSamples() {
    this.samples = [];
    for (let i = 0; i < this.nrSamples; ++i)
      this.samples.push({
        x: (Math.random() * 2 - 1) * this.amplitude,
        y: (Math.random() * 2 - 1) * this.amplitude,
      });
  }

  compute(p) {
    // Get previous and next sample indexes
    const maxSample = this.nrSamples - 1;
    const s = maxSample * p;
    const s0 = Math.floor(s);
    const s1 = Math.min(s0 + 1, maxSample);

    // Get x and y values from interpolated index sample
    const decay = this.decayFunc(p) - 1; // TODO: could use an easer
    const sP = s0 === s1 ? 1 : getPercentage(s, s0, s1);
    const x = lerp(sP, this.samples[s0].x, this.samples[s1].x) * decay;
    const y = lerp(sP, this.samples[s0].y, this.samples[s1].y) * decay;
    return { x: x, y: y };
  }
}
