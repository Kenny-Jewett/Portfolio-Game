"use strict";

var _require = require("./scripts.js"),
    keyPress = _require.keyPress,
    checkCollision = _require.checkCollision,
    enemyKeyPress = _require.enemyKeyPress;

test("return the key pressed", function () {
  console.log("ArrowRight was pressed");
  expect(keyPress("ArrowRight")).toBe("ArrowRight");
});
test("return the key pressed", function () {
  console.log("ArrowLeft was pressed");
  expect(keyPress("ArrowLeft")).toBe("ArrowLeft");
});
test("return the key pressed", function () {
  console.log("ArrowDown was pressed");
  expect(keyPress("ArrowDown")).toBe("ArrowDown");
});
test("return the key pressed", function () {
  console.log("ArrowUp was pressed");
  expect(keyPress("ArrowUp")).toBe("ArrowUp");
});
test("return true if collision is true", function () {
  console.log("Collision is true");
  expect(checkCollision(10, 10, 10, 10)).toBe(true);
});
test("return false if collision is false", function () {
  console.log("Collision is false");
  expect(checkCollision(9, 10, 11, 10)).toBe(false);
});
test("return false if collision is false", function () {
  console.log("Collision is false");
  expect(checkCollision(10, 10, 0, 20)).toBe(false);
});
test("returns the key that was pressed", function () {
  console.log("ArrowLeft was pressed");
  expect(enemyKeyPress("ArrowLeft")).toBe("ArrowLeft");
});
test("returns the key that was pressed", function () {
  console.log("ArrowRight was pressed");
  expect(enemyKeyPress("ArrowRight")).toBe("ArrowRight");
});
test("returns the key that was pressed", function () {
  console.log("ArrowDown was pressed");
  expect(enemyKeyPress("ArrowDown")).toBe("ArrowDown");
});
test("returns the key that was pressed", function () {
  console.log("ArrowUp was pressed");
  expect(enemyKeyPress("ArrowUp")).toBe("ArrowUp");
});