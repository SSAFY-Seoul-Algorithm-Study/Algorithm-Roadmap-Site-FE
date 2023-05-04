//wavegroup.js
import { Wave } from './wave.js';

export class WaveGroup{
  constructor() {
    this.totalWaves = 6;
    this.totalPoints = 10;

    this.color = ['rgba(255, 0, 0, 0.13)', 'rbga(0, 255, 0, 0.13)', 'rgba(0, 0, 255, 0.13)', 'rgba(255, 255, 0, 0.13)', 'rgba(255, 0, 255, 0.13)', 'rgba(0, 255, 255, 0.13)'];

    this.waves = [];

    for(let i = 0; i < this.totalWaves; i++){
      const wave = new Wave(
          i,
          this.totalPoints,
          this.color[i]
      );
      this.waves[i] = wave;
    }
  }

  resize(stageWidth, stageHeight){
    for(let i = 0; i < this.totalWaves; i++){
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx){
    for(let i = 0; i < this.totalWaves; i++){
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}