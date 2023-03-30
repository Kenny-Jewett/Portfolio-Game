const player = document.querySelector(".main__svg__player");
const mainContainerGrid = document.querySelector(".main__container")
const enemy = document.querySelectorAll(".main__svg__enemy");
const dropPoint = document.querySelectorAll(".main__svg__dropPoint")
const enemyArray = [...enemy];
const dropArray = [...dropPoint];
const pointCounter = document.querySelector(".point-counter")
const restartButton = document.querySelector(".restart");
const timer = document.querySelector(".timer");
const clickBlocker = document.querySelector(".clickBlocker")


let playerXPosition = 0;
let playerYPosition = 0;
let score = (enemyArray.length);
let counter = 60;




const gameOver = () => {
    if (counter >= 0){
        timer.innerHTML = parseInt(counter); 
        counter--    
    } else {
       clickBlocker.style.pointerEvents = "none";

    }
} 
setInterval(gameOver, 1000);

const reloadFunc = () => {
 location.reload(false);
};

 restartButton.addEventListener("click", reloadFunc); 


const playerPosition = {
    x : player.getAttribute("x"),
    y : player.getAttribute("y"),       
}


const checkCollision = (playerX, playerY, enemyX, enemyY) => {
    if (playerX == enemyX &&
         playerY == enemyY){              
        return true;
     } else {        
        return false;
     }

};

document.onkeydown = (e) => {     
   const checkEnemy = enemyArray.map((element) => checkCollision(playerPosition.x, playerPosition.y,
     element.getAttribute("x"), element.getAttribute("y")));

     
   const checkDrop = dropArray.map((element) => checkCollision(element.getAttribute("x"),
    element.getAttribute("y"), playerPosition.x, playerPosition.y));  
   
    if (e.key == " "){
        const dropIndex = checkDrop.indexOf(true);
        if (dropIndex == checkEnemy.indexOf(true)) {
            enemyArray[checkEnemy.indexOf(true)].setAttribute("fill", "#001219");
            playerPosition.x += 5;
            awardPoint();
            keyPress(e.key) 
        }

     // Put checkdrop logice here, and pass data into the awardpoint func.   
        
    }else if (checkEnemy.includes(true)) {      
        keyPress(e.key);       
        enemyKeyPress(e.key, checkEnemy.indexOf(true))       

    } else {            
        keyPress(e.key);
    }       
};

//Get checkenemy logic and pass it as a argument to the awardpoint func.
// then set fill to nothing and award a point
// after that start working on timer logic and point setup
// then get the start and stop functionality in
// then add art.


const awardPoint = () => {

    score -= 1;
    counter += 3;
    pointCounter.innerHTML = score;
   console.log(score);
}


const keyPress = (pressedKey) => {
    if (counter <= 0) {
        playerXPosition = 0;
        playerYPosition = 0;
    } else {

        
        if (pressedKey == "ArrowRight") { 
            playerXPosition+=5;
            player.setAttribute("x", `${playerXPosition}`);
        playerPosition.x = player.getAttribute("x");   
        return playerPosition.x;    
        
    } else if (pressedKey == "ArrowLeft"){
        playerXPosition-=5;
        player.setAttribute("x", `${playerXPosition}`);
        playerPosition.x = player.getAttribute("x");
        return playerPosition.x;
        
    } else if (pressedKey == "ArrowDown") {
        playerYPosition+=5;
        player.setAttribute("y", `${playerYPosition}`);
        playerPosition.y = player.getAttribute("y");
        return playerPosition.y;

    } else if (pressedKey == "ArrowUp") {
        playerYPosition-=5;
        player.setAttribute("y", `${playerYPosition}`);
        playerPosition.y = player.getAttribute("y");
        return playerPosition.y;
    }  
    
}      

    return pressedKey;
}


const enemyKeyPress = (pressedKey, enemy) => {    
    
    if (pressedKey == "ArrowRight") {       
        enemyArray[enemy].setAttribute("x", `${playerXPosition}`);               
        
    } else if (pressedKey == "ArrowLeft"){       
        enemyArray[enemy].setAttribute("x", `${playerXPosition}`);        

    } else if (pressedKey == "ArrowDown") {       
        enemyArray[enemy].setAttribute("y", `${playerYPosition}`);        

    } else if (pressedKey == "ArrowUp") {
        enemyArray[enemy].setAttribute("y", `${playerYPosition}`);
        
    } 
       
    return pressedKey;
};















//Testing suite
// module.exports = { keyPress }