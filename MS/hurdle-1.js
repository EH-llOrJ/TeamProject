//젤리 기본 이미지
let skyHurdleImg = new Image();
skyHurdleImg.src = "images/Hurdle/hurdle1.png";

//젤리 클래스
class Hurdle {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.time = 0;
  }
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(skyHurdleImg, this.x, this.y, this.width, this.height);
  }
}

let skyHurdle = new Hurdle({ x: 500, y: 450, width: 40, height: 300 });
