//젤리 기본 이미지
let skyHurdleImg = new Image();
skyHurdleImg.src = "images/Hurdle/hurdle1-1.png";

let floorlowHurdleImg = new Image();
floorlowHurdleImg.src = "images/Hurdle/hurdle1-2.png";

let floorhighHurdleImg = new Image();
floorhighHurdleImg.src = "images/Hurdle/hurdle1-3.png";

let skyHurdleImg2 = new Image();
skyHurdleImg2.src = "images/Hurdle/hurdle1-1.png";

let floorlowHurdleImg2 = new Image();
floorlowHurdleImg2.src = "images/Hurdle/hurdle1-2.png";

let floorhighHurdleImg2 = new Image();
floorhighHurdleImg2.src = "images/Hurdle/hurdle1-3.png";

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
    ctxMain.drawImage(skyHurdleImg, this.x, this.y, this.width, this.height);
  }
}

class lowHurdle extends Hurdle {
  draw() {
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

  new highHurdle({ x: 5630, y: 360, width: 70, height: 150 }),
  new highHurdle({ x: 5830, y: 360, width: 70, height: 150 }),
  new lowHurdle({ x: 6030, y: 455, width: 45, height: 55 }),

  new highHurdle({ x: 7000, y: 360, width: 70, height: 150 }),
  new lowHurdle({ x: 7140, y: 135, width: 45, height: 55 }),
  new highHurdle({ x: 7250, y: 360, width: 70, height: 150 }),

  new highHurdle({ x: 7730, y: 140, width: 70, height: 150 }),

  new lowHurdle({ x: 8000, y: 455, width: 45, height: 55 }),
  new highHurdle({ x: 8200, y: 360, width: 70, height: 150 }),

  new lowHurdle({ x: 8900, y: 335, width: 45, height: 55 }),
  new lowHurdle({ x: 9000, y: 245, width: 45, height: 55 }),
  new lowHurdle({ x: 9200, y: 155, width: 45, height: 55 }),
  new lowHurdle({ x: 9400, y: 155, width: 45, height: 55 }),

  new highHurdle({ x: 9500, y: 360, width: 70, height: 150 }),
  new highHurdle({ x: 9750, y: 360, width: 70, height: 150 }),
];
