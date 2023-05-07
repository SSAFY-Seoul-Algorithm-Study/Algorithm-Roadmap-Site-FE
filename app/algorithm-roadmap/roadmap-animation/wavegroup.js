import { Wave } from './wave.js';

export class WaveGroup{
  constructor(startX, startY, stageWidth, stageHeight, fillRatio) {

    this.totalWaves = 3;
    this.totalPoints = 4;
    this.startX = startX;
    this.startY = startY;
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.fillRatio = fillRatio;
    this.centerX = stageWidth / 2 + startX;
    this.centerY = stageHeight / 2 + startY;

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
    this.resize();
  }

  resize(){
    for(let i = 0; i < this.totalWaves; i++){
      const wave = this.waves[i];
      wave.resize(this.startX, this.startY, this.stageWidth, this.stageHeight, this.fillRatio);
    }
  }

  draw(ctx){

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.arc(this.centerX, this.centerY, this.stageWidth / 2, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();
    
    for(let i = 0; i < this.totalWaves; i++){
      const wave = this.waves[i];
      
      wave.draw(ctx);
    }
  }
}