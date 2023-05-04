import { WaveGroup } from './wavegroup.js'

class App{
  constructor(){
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

    //페이지의 크기가 변할때 resize를 호출
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    //requestAnimationFrame: css로 처리하기 어려운 애니메이션이나 Canvas, SVG등
    //애니메이션 구현에 이용. setInterval과 흡사하지만, 재귀적으로 자신을 호출
    //1초당 디스플레이 주사율에 따라 정해진 프레임을 렌더링
    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    //레티나 디스플레이에서 화면이 작아지는 현상 방지
    //레티나 디스플레이는 보통 디스플레이보다 픽셀의 개수가 4배 많으므로
    //픽셀의 가로 세로를 2배씩 늘려주고 컨버스의 컨텍스트 또한 2배씩 늘려주어
    //레티나 디스플레이에서 화면이 작아지는 현상을 방지한다
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    //wave에도 리사이즈를 적용
    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t){
    //캔버스 초기화
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    //초기화된 캔버스에 웨이브를 그리기
    this.waveGroup.draw(this.ctx);
    //재귀적 호출
    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};