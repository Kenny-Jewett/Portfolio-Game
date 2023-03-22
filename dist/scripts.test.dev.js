"use strict";

var _require = require("./scripts.js"),
    keyPress = _require.keyPress;

test("return the key pressed", function () {
  console.log("ArrowRight was pressed");
  expect(keyPress("ArrowRight")).toBe("ArrowRight");
});