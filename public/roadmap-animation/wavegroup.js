'use client'

//wavegroup.js
import { Wave } from './wave.js';

export class WaveGroup{
  constructor() {
    this.totalWaves = 3;
    this.totalPoints = 4;

    this.color = ['rbga(0, 255, 0, 0.13)', 'rgba(0, 0, 255, 0.13)', 'rgba(0, 255, 255, 0.13)'];

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