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
    this.a = true;
    this.b = 1;
  }
  draw() {
    this.time++;
    if (this.time % 1 == 0) {
      this.x -= 2.35;
    }
    ctxMain.drawImage(skyHurdleImg, this.x, this.y, this.width, this.height);
  }
  coll() {
    let tempX = player.x - skyHurdle[0].x;
    let obslength = skyHurdle[0].width + skyHurdle[1].width + skyHurdle[2].width + 30;// tempX랑 비교해보면 -110~320정도
    if (
      player.height == 55 &&
      tempX > -110 && tempX < 320
    ) {
      // console.log("엥");
      // console.log(tempX);
      // console.log(obslength);
    } else if (
      player.height == 90 &&
      tempX > -82 && tempX < 320 &&
      this.a == true
    ) {
      this.a = false;
      this.b++;
      console.log("충돌");
      // console.log(tempX);
      console.log(this.b);
    } else {
      // console.log("걸어감");
    };
  }
}

let skyHurdle = [
  new Hurdle({ x: 380, y: 15, width: 120, height: 430 }),
  new Hurdle({ x: 500, y: 15, width: 120, height: 430 }),
  new Hurdle({ x: 620, y: 15, width: 120, height: 430 }),
];


// function Collision() {

//   if (player.y > 430) {
//     console.log("!?");    
//   }
// }

