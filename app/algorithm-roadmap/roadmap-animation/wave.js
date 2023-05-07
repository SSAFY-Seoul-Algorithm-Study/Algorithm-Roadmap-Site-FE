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
        this.pointGap * i + this.startX + this.xGap,
        this.percentY + this.startY,
      );
      this.points[i] = point;
    }
  }

  resize(startX, startY, stageWidth, stageHeight, fillRatio){
    this.startX = startX;
    this.startY = startY;
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2 + startX;
    this.centerY = stageHeight / 2 + startY;
    this.percentY = stageHeight * (1 - fillRatio);

    //점의 간격: 전체 넓이 / (전체 점의 숫자 - 1)
    //(x - a)^2 + (y - b)^2 = r^2
    this.xGap = Math.sqrt(Math.pow(this.stageHeight / 2, 2) - Math.pow(this.percentY + this.startY - this.centerY, 2)) + this.centerX;
    this.pointGap = (this.stageWidth - 2 * this.xGap) / (this.totalPoints - 1);
    console.log(this.xGap, " : ", this.pointGap, " / ", this.centerX)

    this.init();
  }

  draw(ctx){
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    //각각의 점에서 점으로 곡선을 그리는 과정
    for(let i = 1; i < this.totalPoints; i++) {

      if(i < this.totalPoints - 1) {
        this.points[i].update();
      }

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    //파도의 모양을 완성해주는 과정
    //오른쪽 파도 끝 점부터 시작해서 아래에 있는 절반의 네모를 그려준다
    ctx.lineTo(prevX, prevY);
    ctx.strokeStyle="red";
    ctx.stroke();
    //
    if(this.centerY >= prevY)
      ctx.arc(this.centerX, this.centerY, Math.atan(prevY - this.centerY, prevX - this.centerX), Math.atan2(prevY - this.centerY, this.points[0].x - this.centerX), false);
    else
      ctx.arc(this.centerX, this.centerY, Math.atan2(prevY - this.centerY, this.centerX - this.points[0].x), Math.atan(prevY - this.centerY, prevX - this.centerX), true);
    // ctx.lineTo(this.stageWidth + this.startX, this.stageHeight + this.startY);
    // ctx.lineTo(this.startX, this.stageHeight + this.startY);
    // ctx.lineTo(this.points[0].x, this.points[0].y);
    
    //색상을 채우고 path를 닫는다
    ctx.fill();
    ctx.closePath();
  }
}