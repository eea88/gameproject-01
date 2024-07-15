console.log("INDEX JS RUNNING");
const game = {
    score:0,
    enemies: [],
    hastati: [],
    principes: [],
    triarii: [],
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

    console.log("Attacks will go here");},1000)
}