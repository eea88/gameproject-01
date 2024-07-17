//console.log("INDEX JS RUNNING");
const gameOverElement = document.querySelector("#game-over-screen");

const game = {
  score: 0,
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
  isGameOver: false,
  checkGameOver() {
    if (this.soldiers.length < 1) {
      gameOverElement.style.display = "flex";
      this.isGameOver = true;
      const scoreElement = document.querySelector("#score");
      scoreElement.textContent = this.score;
    }
  },
};

const tryAgainButton = document.querySelector("#try-again-btn");
tryAgainButton.addEventListener("click", () => {
  location.reload();
});
const gameArea = document.querySelector("#game-area");

let frames = 0;
let score = 0;
let frameCounter = 0;
function playGame() {
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
    if (frameCounter % 500 === 0) {
      if (game.enemies.length < 80) {
        for (let i = 0; i < 20; i++) {
          // Create 20 basic enemies
          game.enemies.push(new Enemy(1));
          console.log("New Enemy Wave");
        }
      }
    }
    game.checkGameOver();
  }
  window.requestAnimationFrame(playGame);
}

window.requestAnimationFrame(playGame);

const gridWidth = gameArea.offsetWidth / 25;
const gridLength = gameArea.offsetHeight / 25;

const gridLeft = gameArea.offsetWidth / 3;
const gridCenter = (gameArea.offsetWidth / 3) * 2;
const gridRight = gameArea.offsetWidth;
