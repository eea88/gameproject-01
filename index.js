//console.log("INDEX JS RUNNING");
const game = {
    score:0,
    enemies: [],
    soldiers: [],
    deadEnemies:[],
    deadSoldiers:[],
    enemiesBattleLeft: [],
    soldiersHastati: [],
    enemiesBattleRight: [],
    soldiersPrincipes: [],
    enemiesBattleCenter: [],
    soldiersTriarii: [],
}

const gameArea = document.querySelector("#game-area");

let frames = 0;
let score = 0;
let frameCounter = 0;
function playGame(){
    frames++;
    frameCounter++;
    if (frameCounter % 10 === 0) { // Execute game logic every 10 frames

    game.enemies.forEach((enemy)=>{
        enemy.move();
    });
    game.soldiers.forEach((soldier)=>{
        soldier.checkCollisions();
    })
    if(frameCounter%500 === 0){
   
    if(game.enemies.length < 80){
        for (let i = 0; i < 20 ; i++) { // Create 20 basic enemies
            game.enemies.push(new Enemy(1));
            console.log("New Enemy Wave")
        }
    }
};
    
}
    window.requestAnimationFrame(playGame)  


}

window.requestAnimationFrame(playGame)

const gridWidth = gameArea.offsetWidth/25;
const gridLength = gameArea.offsetHeight/25;

const gridLeft = gameArea.offsetWidth/3;
const gridCenter = gameArea.offsetWidth/3 * 2;
const gridRight = gameArea.offsetWidth;

//console.log (gridWidth*25);
//console.log (gridLength*25);
/* Tried to guild a Grid to make enemies move in order and not overlap but after a walk switched to filtered array. Commenting this part out for now
function createGrid(top,left){
    this.element = document.createElement("div");
    this.element.className = "grid";
    gameArea.appendChild(this.element);
    this.element.top= top;
    this.element.left = left;
}
//Create the game setup for the enemies too move in order
//for (let i = 0; i < 10 ;  i * 25) { 
  //      createGrid(i,0);
//};
createGrid(25,25);
*/

//function attackRange(){
    
//}
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
    }
});*/