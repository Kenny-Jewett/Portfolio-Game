"use strict";

var snakeHead = document.querySelector(".main__div__rectangle");
var mainContainerGrid = document.querySelector(".main__container");

document.onkeydown = function (e) {
  if (e.key == "ArrowRight") {
    snakeHead.style.background = "green";
    snakeHead.style["grid-column"] = "1 / 2";
  } else if (e.key == "ArrowLeft") {
    snakeHead.style["grid-row"] = "4 / 3";
  }

  console.log(e.key);
};