const player = document.querySelector(".main__svg__player");
const mainContainerGrid = document.querySelector(".main__container")
let position = 0;
let playerXPosition = 0;
let playerYPosition = 0;
const movePlayer = () => {

}




const keyPress = (pressedKey) => {
    console.log(player);
    
    if (pressedKey == "ArrowRight") {
        playerXPosition++;
        player.setAttribute("x", `${playerXPosition}%`);

    } else if (pressedKey == "ArrowLeft"){
        playerXPosition--;
        player.setAttribute("x", `${playerXPosition}%`);

    } else if (pressedKey == "ArrowDown") {
        playerYPosition++;
        player.setAttribute("y", `${playerYPosition}%`)
    } else if (pressedKey == "ArrowUp") {
        playerYPosition--;
        player.setAttribute("y", `${playerYPosition}%`)
    }    
    console.log(pressedKey);   
    return pressedKey;
}

document.onkeydown = (e) => {    
    keyPress(e.key);    
};













module.exports = { keyPress }
// let nextColumn = 1;   
 
// if (e.key == `ArrowRight`) {
//  snakeHead.style.background = "green";
//  snakeHead.style["grid-column"] =  `${nextColumn++} / 2`;
 
// } else if (e.key == `ArrowDown`) {
// }
//  console.log(e.key);