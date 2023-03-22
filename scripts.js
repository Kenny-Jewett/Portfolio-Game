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
        player.setAttribute("x", `${playerXPosition}%`);
        playerXPosition++;

    } else if (pressedKey == "ArrowLeft"){
        player.setAttribute("x", `${playerXPosition}%`);
        playerXPosition--;

    } else if (pressedKey == "ArrowDown") {
        player.setAttribute("y", `${playerYPosition}%`)
        playerYPosition++;
    } else if (pressedKey == "ArrowUp") {
        player.setAttribute("y", `${playerYPosition}%`)
        playerYPosition--;
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