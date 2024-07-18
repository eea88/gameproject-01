//console.log("INDEX JS RUNNING");
const gameOverElement = document.querySelector("#game-over-screen");

const game = {
  score: 0,
  wave: 0,
  enemies: [],
  soldiers: [],
  deadEnemies: [],
  deadSoldiers: [],
  enemiesBattleLeft: [],
  soldiersHastati: [],
  enemiesBattleRight: [],
  soldiersPrincipes: [],
  enemiesBattleCenter: [],
  soldiersTriarii: [],
  battleArray: [],
  isGameOver: false,
  checkGameOver() {
    if (this.soldiers.length < 1) {
      gameOverElement.style.display = "flex";
      this.isGameOver = true;
      let scoreElement = document.querySelector("#score-end");
      scoreElement.textContent = this.score;
    }
  },
};

const tryAgainButton = document.querySelector("#try-again-btn");
tryAgainButton.addEventListener("click", () => {
  location.reload();
});
const gameArea = document.querySelector("#game-area");
const waveElement = document.querySelector("#wave");
let scoreElement = document.querySelector("#score-game");
let frames = 0;
let frameCounter = 0;


function playGame() {
  scoreElement.textContent = game.score;
  waveElement.textContent = game.wave;
  frames++;
  frameCounter++;
  if (!game.isGameOver && frameCounter % 10 === 0) {
    // Execute game logic every 10 frames

    game.enemies.forEach((enemy) => {
      enemy.move();
    });
    game.soldiers.forEach((soldier) => {
      soldier.checkCollisions();
    });
    classRemoval();
  };  
    if (frameCounter < 1000){ 
      game.wave = 1;
    if (frameCounter % 250 === 0) {
      if (game.enemies.length < 80) {
        
        for (let i = 0; i < 10; i++) {
          // Create 20 basic enemies
          game.enemies.push(new Enemy(1));
          console.log("New Enemy Wave");
        }
         
        
      }
    }
  }
   else if( frameCounter <2000){
    game.wave = 2;
    if (frameCounter % 250 === 0) {
      if (game.enemies.length < 100) {
        
        for (let i = 0; i < 20; i++) {
          // Create 20 basic enemies
          game.enemies.push(new Enemy(2));
          console.log("New Enemy Wave");
        }
      }
    }
  } 
  else if( frameCounter <3000){
    game.wave = 3;
    if (frameCounter % 250 === 0) {
      if (game.enemies.length < 100) {
        
        for (let i = 0; i < 18; i++) {
          // Create 20 basic enemies
          game.enemies.push(new Enemy(3));
          console.log("New Enemy Wave");
        }
      
      }
    }
  } 
  else if( frameCounter <4000){
    game.wave = 4;
    if (frameCounter % 250 === 0) {
      if (game.enemies.length < 120) {
        
        for (let i = 0; i < 25; i++) {
          // Create 20 basic enemies
          game.enemies.push(new Enemy(4)); // ideally change the Enemy type here
          console.log("New Enemy Wave");
        }
        /* for (let i = 0; i < 1; i++) {
          // Create  basic enemies
          game.enemies.push(new EnemySwordsman(3));
          game.enemies.push(new EnemyAxeOrc(3));
        } */
      }
    }
  } 
  else if( frameCounter <5000){
    game.wave = 5;
    if (frameCounter % 250 === 0) {
      if (game.enemies.length < 120) {
        
        for (let i = 0; i < 25; i++) {
          // Create 20 basic enemies
          game.enemies.push(new Enemy(5)); // ideally change the Enemy type here
          console.log("New Enemy Wave");
        }
      game.enemies.push(new AttackingBoss(1));
        
      }
    }
  } 
  else if( frameCounter <6000){
    game.wave = 6;
    if (frameCounter % 250 === 0) {
      if (game.enemies.length < 120) {
        
        for (let i = 0; i < 15; i++) {
          // Create 20 basic enemies
          game.enemies.push(new Enemy(6)); // ideally change the Enemy type here
          console.log("New Enemy Wave");
        }
      }
    }
  } 
  else if( frameCounter <8000){
    game.wave = 7;
    if (frameCounter % 250 === 0) {
      if (game.enemies.length < 120) {
        
        for (let i = 0; i < 30; i++) {
          // Create 20 basic enemies
          game.enemies.push(new Enemy(7)); // ideally change the Enemy type here
          console.log("New Enemy Wave");
        }
        /* for (let i = 0; i < 2; i++) {
          game.enemies.push(new EnemySwordsman(5));
          game.enemies.push(new EnemyAxeOrc(5));
        } */
        for (let i = 0; i < 1; i++) {
          // Create  basic enemies
          game.enemies.push(new AttackingBoss(2));
        }
      }
    }
    }
    else if( frameCounter <10000){
      game.wave = 8;
      if (frameCounter % 250 === 0) {
        if (game.enemies.length < 200) {
          
          for (let i = 0; i < 35; i++) {
            // Create 20 basic enemies
            game.enemies.push(new Enemy(8)); // ideally change the Enemy type here
            console.log("New Enemy Wave");
          }
          /* for (let i = 0; i < 2; i++) {
            // Create  basic enemies
            game.enemies.push(new EnemySwordsman(5));
            game.enemies.push(new EnemyAxeOrc(5));
          } */
            game.enemies.push(new BigBoss(1));
          
        }
      }
    }
    else if( frameCounter <12000){
      game.wave = 9;
      if (frameCounter % 250 === 0) {
        if (game.enemies.length < 200) {
          
          for (let i = 0; i < 40; i++) {
            // Create 20 basic enemies
            game.enemies.push(new Enemy(8)); // ideally change the Enemy type here
            console.log("New Enemy Wave");
          }
          /* for (let i = 0; i < 3; i++) {
            // Create  basic enemies
            game.enemies.push(new EnemySwordsman(5));
            game.enemies.push(new EnemyAxeOrc(5));
          } */
            game.enemies.push(new AttackingBoss(5));
            game.enemies.push(new AttackingBoss(5));
            game.enemies.push(new BigBoss(3));
          
        }
      }
    }
    else if( frameCounter <14000){
      game.wave = 10;
      if (frameCounter % 250 === 0) {
        if (game.enemies.length < 200) {
          
          for (let i = 0; i < 50; i++) {
            // Create 20 basic enemies
            game.enemies.push(new Enemy(9)); // ideally change the Enemy type here
            console.log("New Enemy Wave");
          }
          /* for (let i = 0; i < 5; i++) {
            // Create  basic enemies
            game.enemies.push(new EnemySwordsman(5));
            game.enemies.push(new EnemyAxeOrc(5));
          } */
            game.enemies.push(new AttackingBoss(7));
            game.enemies.push(new AttackingBoss(7));
            game.enemies.push(new BigBoss(10));
          
        }
      }
    }
    game.checkGameOver();
  
  window.requestAnimationFrame(playGame);
  }


window.requestAnimationFrame(playGame);

const gridWidth = gameArea.offsetWidth / 25;
const gridLength = gameArea.offsetHeight / 25;

const gridLeft = gameArea.offsetWidth / 3;
const gridCenter = (gameArea.offsetWidth / 3) * 2;
const gridRight = gameArea.offsetWidth;
