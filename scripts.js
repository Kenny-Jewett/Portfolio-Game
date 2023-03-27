const player = document.querySelector(".main__svg__player");
const mainContainerGrid = document.querySelector(".main__container")
const enemy = document.querySelector(".main__svg__enemy");
// const playerHitBox = player.getBBox()
// const enemyHitBox = enemy.getBBox()

const playerPosition = {
    x : player.getAttribute("x"),
    y : player.getAttribute("y"),
    width : player.getAttribute("width"),
    height : player.getAttribute("height"),    
}

const enemyPosition = {
    x : enemy.getAttribute("x"),
    y : enemy.getAttribute("y"),
    width : enemy.getAttribute("width"),
    height : enemy.getAttribute("height"),  
}

let playerXPosition = 0;
let playerYPosition = 0;


document.onkeydown = (e) => {   
    if (checkCollision()){
        keyPress(e.key)
        enemyKeyPress(e.key)
    } else {        
        keyPress(e.key);
    }      
    
};


const checkCollision = () => {
    if (playerPosition.x == enemyPosition.x && playerPosition.y == enemyPosition.y){
       console.log("collision");        
        return true;
     } else {
        console.log("no collision");
        return false;
     }

};


const keyPress = (pressedKey) => {
    
    
    if (pressedKey == "ArrowRight") { 
        playerXPosition+=5;
        player.setAttribute("x", `${playerXPosition}`);
        playerPosition.x = player.getAttribute("x");       
        
    } else if (pressedKey == "ArrowLeft"){
        playerXPosition-=5;
        player.setAttribute("x", `${playerXPosition}`);
        playerPosition.x = player.getAttribute("x");

    } else if (pressedKey == "ArrowDown") {
        playerYPosition+=5;
        player.setAttribute("y", `${playerYPosition}`);
        playerPosition.y = player.getAttribute("y");

    } else if (pressedKey == "ArrowUp") {
        playerYPosition-=5;
        player.setAttribute("y", `${playerYPosition}`);
        playerPosition.y = player.getAttribute("y");       

    } 
    

    // console.log(enemyPosition.width);
    // console.log(enemyPosition.height);


    console.log(enemyPosition.x);
    console.log(enemyPosition.y);
    console.log(playerPosition.x);
    console.log(playerPosition.y);
    return pressedKey;
}


const enemyKeyPress = (pressedKey) => {
    
    
    if (pressedKey == "ArrowRight") {       
        enemy.setAttribute("x", `${playerXPosition}`);
        enemyPosition.x = enemy.getAttribute("x");       
        
    } else if (pressedKey == "ArrowLeft"){       
        enemy.setAttribute("x", `${playerXPosition}`);
        enemyPosition.x = enemy.getAttribute("x");

    } else if (pressedKey == "ArrowDown") {       
        enemy.setAttribute("y", `${playerYPosition}`);
        enemyPosition.y = enemy.getAttribute("y");

    } else if (pressedKey == "ArrowUp") {
        enemy.setAttribute("y", `${playerYPosition}`);
        enemyPosition.y = enemy.getAttribute("y");
        

    } 
       
    return pressedKey;
}















//Testing suite
// module.exports = { keyPress }


