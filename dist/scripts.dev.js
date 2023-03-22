"use strict";

var player = document.querySelector(".main__svg__player");
var mainContainerGrid = document.querySelector(".main__container");
var position = 0;
var playerXPosition = 0;
var playerYPosition = 0;

var movePlayer = function movePlayer() {};

var keyPress = function keyPress(pressedKey) {
  console.log(player);

  if (pressedKey == "ArrowRight") {
    player.setAttribute("x", "".concat(playerXPosition, "%"));
    playerXPosition++;
  } else if (pressedKey == "ArrowLeft") {
    player.setAttribute("x", "".concat(playerXPosition, "%"));
    playerXPosition--;
  } else if (pressedKey == "ArrowDown") {
    player.setAttribute("y", "".concat(playerYPosition, "%"));
    playerYPosition++;
  } else if (pressedKey == "ArrowUp") {
    player.setAttribute("y", "".concat(playerYPosition, "%"));
    playerYPosition--;
  }

  console.log(pressedKey);
  return pressedKey;
};

document.onkeydown = function (e) {
  keyPress(e.key);
};

module.exports = {
  keyPress: keyPress
}; // let nextColumn = 1;   
// if (e.key == `ArrowRight`) {
//  snakeHead.style.background = "green";
//  snakeHead.style["grid-column"] =  `${nextColumn++} / 2`;
// } else if (e.key == `ArrowDown`) {
// }
//  console.log(e.key);