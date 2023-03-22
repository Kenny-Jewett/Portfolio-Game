const { keyPress } = require("./scripts.js");

test("return the key pressed", () =>{
    console.log("ArrowRight was pressed");
    expect(keyPress("ArrowRight")).toBe("ArrowRight");  
});