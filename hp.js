// bread canvas 생성
let canvasHpBar = document.createElement("canvas");
canvasHpBar.classList.add("bread");
canvasHpBar.style.position = "absolute";
canvasHpBar.style.left = "27%";
canvasHpBar.style.top = "6px";
canvasHpBar.style.width = "430px";
canvasHpBar.style.height = "80px";
document.getElementById("canvasBox").appendChild(canvasHpBar);

let ctxHpBar = canvasHpBar.getContext("2d");

// bread image
let hpImg = new Image();
hpImg.onload = function () {
  ctxHpBar.drawImage(hpImg, 0, 0, 300, 100);
};
hpImg.src = "images/HP/bread.png";

// jam canvas 생성
let canvasJam = document.createElement("canvas");
canvasJam.classList.add("jam");
canvasJam.style.position = "absolute";
canvasJam.style.left = "27%";
canvasJam.style.top = "10px";
canvasJam.style.width = "431px";
canvasJam.style.height = "70px";
document.getElementById("canvasBox").appendChild(canvasJam);

let ctxJam = canvasJam.getContext("2d");

// jam image
let jamImg = new Image();
jamImg.onload = function () {
  ctxJam.drawImage(jamImg, 35, 30, 233, 50);
};
jamImg.src = "images/HP/hp.png";

function clearDraw() {
  ctxJam.clearRect(35, 30, 233, 50);
}

clearDraw();
