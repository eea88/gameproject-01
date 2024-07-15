console.log("INDEX JS RUNNING");
const game = {
    score:0,
    enemies: [],
    soldiers: [],
}

const gameArea = document.querySelector("#game-area");

let frames = 0;


function playGame(){
    frames++
    
    game.enemies.forEach((enemy)=>{
        enemy.move();
    });
    
    window.requestAnimationFrame(playGame)
    


}

window.requestAnimationFrame(playGame)

function warriorAttack(){
    setTimeout(()=>{





    
    ;},1000)
}

function attackRange(){
    
}
/*checkCollisions(){
    game.hastati.forEach((hastati)=>{
    const hastatiLeftEdge = this.positionX;
    const hastatiRightEdge = this.positionX + this.element.offsetWidth;
    const hastatiTopEdge = this.positionY;
    const hastatiButtomEdge = this.positionY + this.element.offsetHeight;
    const hastatiLeftEdge = hastati.positionX;
    const hastatiRightEdge = hastati.positionX + hastati.element.offsetWidth;
    const hastatiTopEdge = hastati.positionY;
    const hastatiButtomEdge = hastati.positionY + hastati.element.offsetHeight;
    if(
        playerLeftEdge < enemyRightEdge && 
        playerRightEdge > enemyLeftEdge &&
        playerTopEdge < enemyButtomEdge &&
        playerButtomEdge > enemyTopEdge
    ){
        console.log("Collision detected");
        enemy.disappear();
        shakeGameArea();
        game.lives --;
        livesElement.innerText = "❤️".repeat(game.lives);
    }
});*/