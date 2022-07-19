let continueAnimating = true;

playBtn.onclick = function () {
    continueAnimating = true;
    game();

    console.log("감사합니다 재생버튼 클릭했다");
};

pauseBtn.onclick = function () {
    continueAnimating = false;
    console.log("정지버튼 클릭했다");
};