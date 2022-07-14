//장애물 기본 이미지
let skyHurdleImg = new Image();
skyHurdleImg.src = "images/Hurdle/hurdle1-1.png";

let floorlowHurdleImg = new Image();
floorlowHurdleImg.src = "images/Hurdle/hurdle1-2.png";

let floorhighHurdleImg = new Image();
floorhighHurdleImg.src = "images/Hurdle/hurdle1-3.png";

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

class lowHurdle extends Hurdle {
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(
      floorlowHurdleImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
class highHurdle extends Hurdle {
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(
      floorhighHurdleImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

let hurdle = [
  new Hurdle({ x: 3850, y: 15, width: 120, height: 430 }),
  new Hurdle({ x: 3970, y: 15, width: 120, height: 430 }),
  new Hurdle({ x: 4090, y: 15, width: 120, height: 430 }),

  new lowHurdle({ x: 4350, y: 455, width: 45, height: 55 }),
  new highHurdle({ x: 4550, y: 360, width: 70, height: 150 }),

  new highHurdle({ x: 4950, y: 240, width: 70, height: 150 }),

  new Hurdle({ x: 5220, y: 15, width: 120, height: 430 }),
  new Hurdle({ x: 5340, y: 15, width: 120, height: 430 }),

  new lowHurdle({ x: 5950, y: 455, width: 45, height: 55 }),
  new highHurdle({ x: 5630, y: 360, width: 70, height: 150 }),
  new highHurdle({ x: 5830, y: 360, width: 70, height: 150 }),
];
