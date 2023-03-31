"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//  **Comment out for tests**
var player = document.querySelector(".main__svg__player");
var mainContainerGrid = document.querySelector(".main__container");
var enemy = document.querySelectorAll(".main__svg__enemy");
var dropPoint = document.querySelectorAll(".main__svg__dropPoint");

var enemyArray = _toConsumableArray(enemy);

var dropArray = _toConsumableArray(dropPoint);

var pointCounter = document.querySelector(".point-counter");
var restartButton = document.querySelector(".restart");
var timer = document.querySelector(".timer");
var clickBlocker = document.querySelector(".clickBlocker");
var startButton = document.querySelector(".start");
var winCondition = document.querySelector(".win-loss-message");
var playerXPosition = 0;
var playerYPosition = 0;
var score = enemyArray.length;
var counter = 0;
var playerPosition = {
  x: player.getAttribute("x"),
  y: player.getAttribute("y")
};

var startGame = function startGame() {
  counter += 50;
  clickBlocker.style = "opacity: 100%";
  winCondition.style = "visibility: hidden";
  startButton.style = "visibility: hidden";
};

startButton.addEventListener("click", startGame);

var gameOver = function gameOver() {
  if (counter >= 0 && score > 0) {
    timer.innerHTML = parseInt(counter);
    counter--;
  } else if (counter >= 0 && score == 0) {
    restartButton.style = "visibility: visible";
    clickBlocker.style = "opacity: 30%";
    winCondition.style = "visibility: visible";
    startButton.style = "visibility: visible";
    winCondition.innerHTML = "Congratulations! You Win!!!!!";
  } else if (counter < 0 && score > 0) {
    restartButton.style = "visibility: visible";
    clickBlocker.style = "opacity: 30%";
    winCondition.style = "visibility: visible";
    startButton.style = "visibility: visible";
    winCondition.innerHTML = "Press Restart then press Start to begin.";
  } else {
    clickBlocker.style.pointerEvents = "none";
    clickBlocker.style = "opacity: 30%";
    restartButton.style = "visibility: visible";
    startButton.style = "visibility: visible";
    winCondition.innerHTML = "Press Restart to try again.";
  }
}; //  **Comment out for testing**


var awardPoint = function awardPoint() {
  score -= 1;
  counter += 3;
  pointCounter.innerHTML = score;
};

setInterval(gameOver, 1000);

var reloadFunc = function reloadFunc() {
  location.reload(false);
};

restartButton.addEventListener("click", reloadFunc);

var checkCollision = function checkCollision(playerX, playerY, enemyX, enemyY) {
  if (playerX == enemyX && playerY == enemyY) {
    return true;
  } else {
    return false;
  }
}; //    ** Comment out for testing **


document.onkeydown = function (e) {
  var checkEnemy = enemyArray.map(function (element) {
    return checkCollision(playerPosition.x, playerPosition.y, element.getAttribute("x"), element.getAttribute("y"));
  });
  var checkDrop = dropArray.map(function (element) {
    return checkCollision(element.getAttribute("x"), element.getAttribute("y"), playerPosition.x, playerPosition.y);
  });

  if (e.key == " ") {
    var dropIndex = checkDrop.indexOf(true);

    if (dropIndex == checkEnemy.indexOf(true)) {
      enemyArray[checkEnemy.indexOf(true)].setAttribute("fill", "#001219");
      playerPosition.x += 5;
      awardPoint();
      keyPress(e.key);
    }
  } else if (checkEnemy.includes(true)) {
    keyPress(e.key);
    enemyKeyPress(e.key, checkEnemy.indexOf(true));
  } else {
    keyPress(e.key);
  }
};

var keyPress = function keyPress(pressedKey) {
  if (counter <= 0) {
    playerXPosition = 0;
    playerYPosition = 0;
  } else {
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
}; // Testing suite
// module.exports = { keyPress, checkCollision, enemyKeyPress }