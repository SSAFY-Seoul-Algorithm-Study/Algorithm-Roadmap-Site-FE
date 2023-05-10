import { Wave } from './wave.js';

export class WaveGroup{
  constructor(name, startX, startY, stageSize, fillRatio, colors) {

    this.totalWaves = 3;
    this.totalPoints = 4;
    this.name = name;
    this.startX = startX;
    this.startY = startY;
    this.stageSize = stageSize;
    this.fillRatio = fillRatio;
    this.centerX = stageSize / 2 + startX;
    this.centerY = stageSize / 2 + startY;

    this.color = colors;

    this.waves = [];

    for(let i = 0; i < this.totalWaves; i++){
      const wave = new Wave(
          i,
          this.totalPoints,
          this.color[i]
      );
      this.waves[i] = wave;
    }
    this.resize();
  }

  resize(){
    for(let i = 0; i < this.totalWaves; i++){
      const wave = this.waves[i];
      wave.resize(this.startX, this.startY, this.stageSize, this.fillRatio);
    }
  }

  draw(ctx){

    ctx.beginPath();
    ctx.strokeStyle = '#A0A0A0';
    ctx.arc(this.centerX, this.centerY, this.stageSize / 2, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();
    
    for(let i = 0; i < this.totalWaves; i++){
      const wave = this.waves[i];
      
      wave.draw(ctx);
    }
  }
}