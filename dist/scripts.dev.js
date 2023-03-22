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
    playerXPosition++;
    player.setAttribute("x", "".concat(playerXPosition, "%"));
  } else if (pressedKey == "ArrowLeft") {
    playerXPosition--;
    player.setAttribute("x", "".concat(playerXPosition, "%"));
  } else if (pressedKey == "ArrowDown") {
    playerYPosition++;
    player.setAttribute("y", "".concat(playerYPosition, "%"));
  } else if (pressedKey == "ArrowUp") {
    playerYPosition--;
    player.setAttribute("y", "".concat(playerYPosition, "%"));
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