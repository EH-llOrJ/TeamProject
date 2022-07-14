let canvasBackground = document.getElementById("background");
let ctxBackground = canvasBackground.getContext("2d");

canvasBackground.width = 2000;
canvasBackground.height = 600;

let backgroundImg = new Image();
backgroundImg.src = "images/Map/first.png";

//배경 객체선언 및 할당
let background = {
  x: 0,
  y: 0,
  width: 2000,
  height: 600,
  time: 0,
  a: 1,
  draw() {
    this.time++;
    this.x -= 0.05;
    if (this.time % 100 == 0) {
      this.a -= 0.1;
    }
    ctxBackground.globalAlpha = this.a;
    ctxBackground.drawImage(
      backgroundImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
  },
};
