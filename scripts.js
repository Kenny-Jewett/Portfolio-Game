//  **Comment out for tests**
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
const startButton = document.querySelector(".start");
const winCondition = document.querySelector(".win-loss-message")

let playerXPosition = 0;
let playerYPosition = 0;
let score = (enemyArray.length);
let counter = 0;

const playerPosition = {
    x : player.getAttribute("x"),
    y : player.getAttribute("y"),       
}

const startGame = () => {
    counter += 50;
    clickBlocker.style = "opacity: 100%"; 
    winCondition.style = "visibility: hidden"; 
   startButton.style = "visibility: hidden";
}

startButton.addEventListener("click", startGame);

const gameOver = () => {
    if (counter >= 0 && score > 0){
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
        winCondition.innerHTML = "Press Restart to try again."  
    }
} 

//  **Comment out for testing**

const awardPoint = () => {
    score -= 1;
    counter += 3;
    pointCounter.innerHTML = score;    
}

setInterval(gameOver, 1000);

const reloadFunc = () => {
 location.reload(false);
};

 restartButton.addEventListener("click", reloadFunc); 

const checkCollision = (playerX, playerY, enemyX, enemyY) => {
    if (playerX == enemyX &&
         playerY == enemyY){              
        return true;
     } else {        
        return false;
     }

};

//    ** Comment out for testing **

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
        
    }else if (checkEnemy.includes(true)) {      
        keyPress(e.key);       
        enemyKeyPress(e.key, checkEnemy.indexOf(true))       

    } else {            
        keyPress(e.key);
    }       
};

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

// Testing suite
// module.exports = { keyPress, checkCollision, enemyKeyPress }