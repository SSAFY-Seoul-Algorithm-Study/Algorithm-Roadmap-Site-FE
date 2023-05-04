//wave.js
import { Point } from './point.js';

export class Wave{
  constructor(index, totalPoints, color){
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  init(){
    for(let i = 0; i < this.totalPoints; i++){
      const point = new Point(
        this.index + i,
        this.pointGap * i,
        this.centerY,
      );
      this.points[i] = point;
    }
  }

  resize(stageWidth, stageHeight){
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    //점의 간격: 전체 넓이 / (전체 점의 숫자 - 1)
    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  draw(ctx){
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    //각각의 점에서 점으로 곡선을 그리는 과정
    for(let i = 1; i < this.totalPoints; i++){
      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;

      if(i != 0 && i != this.totalPoints - 1){
        this.points[i].update();
      }
    }

    //파도의 모양을 완성해주는 과정
    //오른쪽 파도 끝 점부터 시작해서 아래에 있는 절반의 네모를 그려준다
    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(0, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.points[0].y);

    //색상을 채우고 path를 닫는다
    ctx.fill();
    ctx.closePath();
  }
}