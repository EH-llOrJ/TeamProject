//장애물 기본 이미지
let skyHurdleImg = new Image();
skyHurdleImg.src = "images/Hurdle/hurdle1.png";

let floorlowHurdleImg = new Image();
floorlowHurdleImg.src = "images/Hurdle/hurdle1.png";

let floorhighHurdleImg = new Image();
floorhighHurdleImg.src = "images/Hurdle/hurdle1.png";

//장애물 클래스
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

let skyHurdle = [
  new Hurdle({ x: 3850, y: 15, width: 120, height: 430 }),
  new Hurdle({ x: 3970, y: 15, width: 120, height: 430 }),
  new Hurdle({ x: 4090, y: 15, width: 120, height: 430 }),
];
