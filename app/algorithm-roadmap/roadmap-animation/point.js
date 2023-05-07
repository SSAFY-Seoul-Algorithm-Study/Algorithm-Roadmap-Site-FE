export class Point{
    constructor(index, x, y){
      this.x = x;
      this.y = y;
      this.fixedY = y; //수평선
      this.speed = 0.025; //웨이브의 속도
      this.cur = index; //sin 함수에서의 위치
      this.max = Math.random() * 5 + 2;
    }
  
    update(){
      //계속해서 cur이 speed만큼 변화하는데,
      //이때 cur은 sin속에 들어가 무한히 -1 ~ 1을 반복하게 된다
      this.cur += this.speed;
      this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
  }