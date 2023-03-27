"use strict";

var player = document.querySelector(".main__svg__player");
var mainContainerGrid = document.querySelector(".main__container");
var enemy = document.querySelector(".main__svg__enemy"); // const playerHitBox = player.getBBox()
// const enemyHitBox = enemy.getBBox()

var playerPosition = {
  x: player.getAttribute("x"),
  y: player.getAttribute("y"),
  width: player.getAttribute("width"),
  height: player.getAttribute("height")
};
var enemyPosition = {
  x: enemy.getAttribute("x"),
  y: enemy.getAttribute("y"),
  width: enemy.getAttribute("width"),
  height: enemy.getAttribute("height")
};
var playerXPosition = 0;
var playerYPosition = 0;

document.onkeydown = function (e) {
  if (checkCollision()) {
    keyPress(e.key);
    enemyKeyPress(e.key);
  } else {
    keyPress(e.key);
  }
};

var checkCollision = function checkCollision() {
  if (playerPosition.x == enemyPosition.x && playerPosition.y == enemyPosition.y) {
    console.log("collision");
    return true;
  } else {
    console.log("no collision");
    return false;
  }
};

var keyPress = function keyPress(pressedKey) {
  if (pressedKey == "ArrowRight") {
    playerXPosition += 5;
    player.setAttribute("x", "".concat(playerXPosition));
    playerPosition.x = player.getAttribute("x");
  } else if (pressedKey == "ArrowLeft") {
    playerXPosition -= 5;
    player.setAttribute("x", "".concat(playerXPosition));
    playerPosition.x = player.getAttribute("x");
  } else if (pressedKey == "ArrowDown") {
    playerYPosition += 5;
    player.setAttribute("y", "".concat(playerYPosition));
    playerPosition.y = player.getAttribute("y");
  } else if (pressedKey == "ArrowUp") {
    playerYPosition -= 5;
    player.setAttribute("y", "".concat(playerYPosition));
    playerPosition.y = player.getAttribute("y");
  } // console.log(enemyPosition.width);
  // console.log(enemyPosition.height);


  console.log(enemyPosition.x);
  console.log(enemyPosition.y);
  console.log(playerPosition.x);
  console.log(playerPosition.y);
  return pressedKey;
};

var enemyKeyPress = function enemyKeyPress(pressedKey) {
  if (pressedKey == "ArrowRight") {
    enemy.setAttribute("x", "".concat(playerXPosition));
    enemyPosition.x = enemy.getAttribute("x");
  } else if (pressedKey == "ArrowLeft") {
    enemy.setAttribute("x", "".concat(playerXPosition));
    enemyPosition.x = enemy.getAttribute("x");
  } else if (pressedKey == "ArrowDown") {
    enemy.setAttribute("y", "".concat(playerYPosition));
    enemyPosition.y = enemy.getAttribute("y");
  } else if (pressedKey == "ArrowUp") {
    enemy.setAttribute("y", "".concat(playerYPosition));
    enemyPosition.y = enemy.getAttribute("y");
  }

  return pressedKey;
}; //Testing suite
// module.exports = { keyPress }