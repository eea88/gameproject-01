//console.log(hastatiContainer.postionY);
//console.log(battlePosition);
const enemyClassesArray = [
  "enemy1",
  "enemy2",
  "enemy3",
  "enemy4",
  "enemy5",
  "enemy6",
  "enemy7",
];

class Enemy {
  constructor(level) {
  

    
    this.velocity = 10 + level / 2;
    this.health = 90 + level * 2;
    this.stamina = 50 + level * 3;
    this.attack = 8 + level * 1.5;
    this.strength = 10 + level * 2;
    this.defense = 8 + level;
    this.agility = 8 + level;
    this.level = level;
    this.experience = 0;

    //other stats go here
  }
  updateElementPosition() {
    this.element.style.left = `${this.positionX}px`;
    this.element.style.top = `${this.positionY}px`;
  }
  checkOrcCollisions() {
    let isColliding = false;
    const orcNotMe = game.enemies.filter((eachEnemy) => {
      return eachEnemy !== this;
    });
    orcNotMe.forEach((enemy) => {
      const thisLeftEdge = this.positionX;
      const thisRightEdge = this.positionX + this.element.offsetWidth / 3;
      const thisTopEdge = this.positionY;
      const thisButtomEdge = this.positionY + this.element.offsetHeight / 3;
      const enemyLeftEdge = enemy.positionX;
      const enemyRightEdge = enemy.positionX + enemy.element.offsetWidth / 3;
      const enemyTopEdge = enemy.positionY;
      const enemyButtomEdge = enemy.positionY + enemy.element.offsetHeight / 3;

      if (
        thisButtomEdge > enemyTopEdge &&
        thisTopEdge < enemyButtomEdge &&
        thisLeftEdge < enemyRightEdge &&
        thisRightEdge > enemyLeftEdge
      ) {
        // we have a collision, but we need to know where it is
        isColliding = true;
        if (thisButtomEdge > enemyTopEdge) {
          //console.log("Collision in the front");
          this.positionY = enemyButtomEdge + 1; // move the enemy down until it is not colliding

          return;
        } else if (thisTopEdge < enemyButtomEdge) {
          //console.log("Collision detected in the back");
          return;
        } else if (
          thisLeftEdge < enemyRightEdge &&
          thisRightEdge > enemyLeftEdge
        ) {
          //console.log("lateral collision detected");
          return;
        }
      }
    });
    return isColliding;
  }

  move() {
    //console.log(this.checkOrcCollisions());
    if (!this.checkOrcCollisions()) {
      if (this.positionY > battlePosition) {
        this.positionY -= this.velocity;
        this.updateElementPosition();
      } else {
        //console.log(this.positionX+" "+this.positionY);
        let thisPositionX = Number(this.positionX);
        let thisGridArea;
        if (thisPositionX < gridLeft) {
          thisGridArea = "Left";
        } else if (thisPositionX < gridCenter) {
          thisGridArea = "Center";
        } else {
          thisGridArea = "Right";
        }
        //switch statement used to handle grid assignments by X position.
        switch (thisGridArea) {
          case "Left":
            /* if (!game.enemiesBattleLeft.includes(this)) {
              game.enemiesBattleLeft.push(this);
              //console.log(game.enemiesBattleLeft);
            } */
            this.positionX += this.velocity;
            this.updateElementPosition();
            break;
          case "Center":
            /* if (!game.enemiesBattleCenter.includes(this)) {
              game.enemiesBattleCenter.push(this);
              //console.log(game.enemiesBattleCenter);
            } */
            break;
          default:
            /* if (!game.enemiesBattleRight.includes(this)) {
              game.enemiesBattleRight.push(this);
              //console.log(game.enemiesBattleRight);
            } */
            this.positionX -= this.velocity;
            this.updateElementPosition();
        }
      }
    } else {
      this.positionX += (Math.random() - 0.5) * 200;
      this.positionY += 10;
      this.updateElementPosition();
    }
  }

  orcAttack(soldier) {
    console.log("attackkk");
    let diceThrowAttacker = Math.floor(Math.random() * 12) + 1;
    let diceThrowDefender = Math.floor(Math.random() * 12) + 1;

    if (diceThrowAttacker + 1 < soldier.agility) {
      this.stamina -= 10;
      soldier.experience += 15 *this.level;
      soldier.stamina -= 2;
      //console.log(`Soldier evaded with ${soldier.agility} vs ${diceThrowAttacker +2} `);
    } else {
      if (
        this.attack * diceThrowAttacker >
        soldier.defense * diceThrowDefender
      ) {
        soldier.receivesDamage(this.strength * diceThrowAttacker);
        this.stamina -= 10;
        soldier.stamina -= 10;
        console.log("Orc hit you!");
      } else {
        this.stamina -= 10;
        soldier.stamina -= diceThrowAttacker;
        soldier.experience += 15 * this.level;
      }
    }
  }
  receivesDamage(amount) {
    this.health -= amount;
    //console.log(this.health);
    if (this.health <= 0) {
      this.orcDied();
    }
  }
  orcDied() {
    const index = game.enemies.indexOf(this);
    game.score += this.level;
    // game.deadEnemies.push(this);
    this.element.remove();
    game.enemies.splice(index, 1);
    game.battleArray.forEach((soldier) => {
      soldier.experience += 40 * this.level;
    });
    console.log(`${game.score} SCORE!`);
    console.log(game.enemies);
    game.soldiers.forEach((soldier) => {
      levelUp(soldier);
    });
  }
}

class BasicOrc extends Enemy{
  constructor(level) {
    super(level);
    this.createEnemyElement();
    this.positionX = Math.floor(
      Math.random() * (gameArea.offsetWidth - this.element.offsetWidth)
    );
    this.positionY = gameArea.offsetHeight - this.element.offsetHeight;
    this.updateElementPosition();
}
createEnemyElement() {
  this.element = document.createElement("div");
  let randomClass = Math.floor(Math.random() * 7 + 1);
  this.element.className = enemyClassesArray[randomClass];

  gameArea.appendChild(this.element);
}

}
class EnemySwordsman extends Enemy {
  constructor(level) {
    super(level);
    this.velocity = 15 + level / 2;
    this.health = 90 + level * 2;
    this.attack = 12 + level * 1.5;
    this.defense = 10 + level;
    this.agility = 10 + level;
    this.createEnemySwordsmanElement();
    this.positionX = Math.floor(
      Math.random() * (gameArea.offsetWidth - this.element.offsetWidth)
    );
    this.positionY = gameArea.offsetHeight - this.element.offsetHeight;
    this.updateElementPosition();
  }
  createEnemySwordsmanElement() {
    this.element = document.createElement("div");
    this.element.className = "swordsman";
    this.updateElementPosition();
    gameArea.appendChild(this.element);
  }
/*   updateElementPosition() {
    this.element.style.left = `${this.positionX}px`;
    this.element.style.top = `${this.positionY}px`;
  } */
}

class EnemyAxeOrc extends Enemy {
  constructor(level) {
    super(level);
    this.velocity = 5 + level / 2;
    this.health = 150 + level * 2;
    this.attack = 12 + level * 1.5;
    this.strength = 18 + level*3;
    this.defense = 8 + level;
    this.agility = 3 + level;
    this.createAxeOrcElement();
    this.positionX = Math.floor(
      Math.random() * (gameArea.offsetWidth - this.element.offsetWidth)
    );
    this.positionY = gameArea.offsetHeight - this.element.offsetHeight;
    this.updateElementPosition();
  }
  createAxeOrcElement() {
    this.element = document.createElement("div");
    this.element.className = "ax-orc";
    this.updateElementPosition();
    gameArea.appendChild(this.element);
  }
 /*  updateElementPosition() {
    this.element.style.left = `${this.positionX}px`;
    this.element.style.top = `${this.positionY}px`;
  } */
}

class AttackingBoss extends Enemy {
  constructor(level) {
    super(level);
    this.velocity = 10 + level / 2;
    this.health = 250 + level * 3;
    this.attack = 30 + level * 4;
    this.strength = 30 + level * 3;
    this.defense = 15 + level;
    this.agility = 8 + level;
    this.createAttackingBossElement();
    this.positionX = Math.floor(
      Math.random() * (gameArea.offsetWidth - this.element.offsetWidth)
    );
    this.positionY = gameArea.offsetHeight - this.element.offsetHeight;
    this.updateElementPosition();
  }
  createAttackingBossElement() {
    this.element = document.createElement("div");
    this.element.className = "attack-boss";
    this.updateElementPosition();
    gameArea.appendChild(this.element);
  }
/*   updateElementPosition() {
    this.element.style.left = `${this.positionX}px`;
    this.element.style.top = `${this.positionY}px`;
  } */
}
class BigBoss extends Enemy {
  constructor(level) {
    super(level);
    this.velocity = 10 + level / 2;
    this.health = 300 + level * 3;
    this.attack = 25 + level * 3;
    this.strength = 30 + level * 3;
    this.defense = 30 + level *3;
    this.agility = 8 + level;
    this.createBigBossElement();
    this.positionX = Math.floor(
      Math.random() * (gameArea.offsetWidth - this.element.offsetWidth)
    );
    this.positionY = gameArea.offsetHeight - this.element.offsetHeight;
    this.updateElementPosition();
  }
  createBigBossElement() {
    this.element = document.createElement("div");
    this.element.className = "big-boss";
    this.updateElementPosition();
    gameArea.appendChild(this.element);
  }
  updateElementPosition() {
    this.element.style.left = `${this.positionX}px`;
    this.element.style.top = `${this.positionY}px`;
  }
}

for (let i = 0; i < 20; i++) {
  // Create 20 basic enemies
  game.enemies.push(new BasicOrc(1));
}

/* setInterval(() =>{
        game.enemies.push(new Enemy(1));
        //console.log(game.enemies);
        
        
        },1000);
*/
//setInterval (() =>{

//},10)
