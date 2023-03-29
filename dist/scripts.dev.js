"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var player = document.querySelector(".main__svg__player");
var mainContainerGrid = document.querySelector(".main__container");
var enemy = document.querySelectorAll(".main__svg__enemy");
var dropPoint = document.querySelectorAll(".main__svg__dropPoint");

var enemyArray = _toConsumableArray(enemy);

var dropArray = _toConsumableArray(dropPoint);

console.log(dropArray);
var score = 1;
var playerPosition = {
  x: player.getAttribute("x"),
  y: player.getAttribute("y")
};
var playerXPosition = 0;
var playerYPosition = 0;

var checkCollision = function checkCollision(playerX, playerY, enemyX, enemyY) {
  if (playerX == enemyX && playerY == enemyY) {
    console.log("collision");
    return true;
  } else {
    console.log("no collision");
    return false;
  }
};

document.onkeydown = function (e) {
  var checkEnemy = enemyArray.map(function (element) {
    return checkCollision(playerPosition.x, playerPosition.y, element.getAttribute("x"), element.getAttribute("y"));
  });
  console.log(checkEnemy);

  if (e.key == " ") {
    playerPosition.x += 5;
    keyPress(e.key); // Put checkdrop logice here, and pass data into the awardpoint func.   
  } else if (checkEnemy.includes(true)) {
    keyPress(e.key);
    enemyKeyPress(e.key, checkEnemy.indexOf(true));
    console.log(checkEnemy.indexOf(true));
  } else {
    keyPress(e.key);
  }
}; //Get checkenemy logic and pass it as a argument to the awardpoint func.
// then set fill to nothing and award a point
// after that start working on timer logic and point setup
// then get the start and stop functionality in
// then add art.


var awardPoint = function awardPoint() {
  var checkDrop = dropArray.map(function (element) {
    return checkCollision(playerPosition.x, playerPosition.y, element.getAttribute("x"), element.getAttribute("y"));
  });
  console.log(checkDrop);
};

var keyPress = function keyPress(pressedKey) {
  if (pressedKey == "ArrowRight") {
    playerXPosition += 5;
    player.setAttribute("x", "".concat(playerXPosition));
    playerPosition.x = player.getAttribute("x");
    return playerPosition.x;
  } else if (pressedKey == "ArrowLeft") {
    playerXPosition -= 5;
    player.setAttribute("x", "".concat(playerXPosition));
    playerPosition.x = player.getAttribute("x");
    return playerPosition.x;
  } else if (pressedKey == "ArrowDown") {
    playerYPosition += 5;
    player.setAttribute("y", "".concat(playerYPosition));
    playerPosition.y = player.getAttribute("y");
    return playerPosition.y;
  } else if (pressedKey == "ArrowUp") {
    playerYPosition -= 5;
    player.setAttribute("y", "".concat(playerYPosition));
    playerPosition.y = player.getAttribute("y");
    return playerPosition.y;
  }

  return pressedKey;
};

var enemyKeyPress = function enemyKeyPress(pressedKey, enemy) {
  if (pressedKey == "ArrowRight") {
    enemyArray[enemy].setAttribute("x", "".concat(playerXPosition));
  } else if (pressedKey == "ArrowLeft") {
    enemyArray[enemy].setAttribute("x", "".concat(playerXPosition));
  } else if (pressedKey == "ArrowDown") {
    enemyArray[enemy].setAttribute("y", "".concat(playerYPosition));
  } else if (pressedKey == "ArrowUp") {
    enemyArray[enemy].setAttribute("y", "".concat(playerYPosition));
  }

  return pressedKey;
}; //Testing suite
// module.exports = { keyPress }