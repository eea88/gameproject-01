const hastatiContainerElement = document.getElementById('hastatiContainer');
const principesContainerElement = document.getElementById('principesContainer');
const triariiContainerElement = document.getElementById('triariiContainer');
let currentXPosition = 0;

const hastatiContainer = {
    position: "bottom",
    element: hastatiContainerElement,
    yAxis: 170,
}
const principesContainer = {
    position: "middle",
    element: principesContainerElement,
    yAxis: 120,
}
const triariiContainer = {
    position: "top",
    element: triariiContainerElement,
    yAxis: 70,
}

class Soldier {
    constructor(level) {

        this.positionX = currentXPosition // Use the currentXPosition to set the initial position
        this.positionY = 0 // Manage vertical position if needed
        // stats will need to go here
        this.health = 90 + (level * 2);
        this.stamina = 50 + (level * 3);
        this.attack = 10 + level;
        this.strength = 10 + level;
        this.defense = 8 + (level / 2);
        this.agility = 8 + (level / 4);
        this.level = level;
        this.experience = 0;
    }  
    checkCollisions() {
        const getEdges = (element) => {
          const rect = element.getBoundingClientRect();
          return {
            left: rect.x,
            right: rect.x + rect.width,
            top: rect.y,
            bottom: rect.y + rect.height,
          };
        };
    
        const soldierEdges = getEdges(this.element);
        let isColliding = false;
    
        game.enemies.forEach((enemy) => {
          const enemyEdges = getEdges(enemy.element);
    
          if (
            soldierEdges.bottom > enemyEdges.top &&
            soldierEdges.top < enemyEdges.bottom &&
            soldierEdges.left < enemyEdges.right &&
            soldierEdges.right > enemyEdges.left
          ) {
            isColliding = true;
            console.log("Collision with the enemy!");
            this.soldierAttack(enemy);
            enemy.orcAttack(this);
            enemy.positionY += 100;
            enemy.updateElementPosition();
        }
        });
            
        return isColliding;

      }        
    soldierAttack(enemy){
        console.log("attackkkkkk");
        setTimeout(() => {
        let diceThrowAttacker = Math.floor(Math.random() * 12) + 1;
        let diceThrowDefender = Math.floor(Math.random() * 12) + 1;
            if(this.attack * diceThrowAttacker > enemy.defense * diceThrowDefender){
            enemy.receivesDamage(this.strength);
            //console.log("attack successful");
        } else{
            ;
        }
        },1000);
    }
    receivesDamage(amount){
        this.health -= amount;
        //console.log(this.health);
        if(this.health <=0){this.soldierDied()}
    }
    soldierDied(){
        
        const index = game.soldiers.indexOf(this);
        game.deadSoldiers.push(this),
        game.soldiers.splice(index,1);
        if(this.element){this.element.remove()};
        console.log("Soldier died");
    }
    }
    

class Hastati extends Soldier {
    constructor(level) {
        super(level);
        this.createHastatiElement();
    }


    createHastatiElement() {
        this.element = document.createElement("div");
        this.element.className = "hastati";
        currentXPosition += 56; // Increment the horizontal position for the next soldier
        this.updateElementPosition();
        hastatiContainerElement.appendChild(this.element);
        hastatiContainerElement.style.alignItems = 'center';
        hastatiContainerElement.style.justifyContent = 'center';
    }
    updateElementPosition() {
        this.element.style.left = `${this.positionX}px`;
        this.element.style.top = `${this.positionY}px`;
    }
    /* moveContainer(){
        //we will need to add movement of the line here
    }*/

}

class Principes extends Soldier {
    constructor(level, armor) { //will add stats later//
        super(level); // will add stats later
        this.armor = armor + level;
        this.attack = 10 + level * 2;
        this.strength = 10 + level * 2;
        this.createPrincipesElement();

    }
    createPrincipesElement() {
        this.element = document.createElement("div");
        this.element.className = "principes";
        currentXPosition += 56; // Increment the horizontal position for the next soldier
        this.updateElementPosition();
        principesContainerElement.appendChild(this.element);
        principesContainerElement.style.alignItems = 'center';
        principesContainerElement.style.justifyContent = 'center';
    }
    updateElementPosition() {
        this.element.style.left = `${this.positionX}px`;
        this.element.style.top = `${this.positionY}px`;
    }
    

}
class Triarii extends Soldier {
    constructor(level, armor) { //will add stats later//
        super(level);
        this.armor = (armor * level);
        this.attack = 15;
        this.stamina = 150 + (level * 3);
        this.attack = 10 + level * 2;
        this.strength = 10 + level * 2;
        this.createTriariiElement();
    }
    createTriariiElement() {
        this.element = document.createElement("div");
        this.element.className = "triarii";
        currentXPosition += 56; // Increment the horizontal position for the next soldier
        this.yAxis=70;
        this.updateElementPosition();
        triariiContainerElement.appendChild(this.element);
        triariiContainerElement.style.alignItems = 'center';
        triariiContainerElement.style.justifyContent = 'center';
    }
    updateElementPosition() {
        this.element.style.left = `${this.positionX}px`;
        this.element.style.top = `${this.positionY}px`;
    }
    

}




//Rotation
let command = "";
let battlePosition = 220;
let stepsBack = 10;
document.addEventListener("keydown", (event) => {
    //console.log("You have pressed the key: ", event.key);
    command = (event.key);
    console.log(command);

    if (command === " ") {
        
        if (hastatiContainer.position === "bottom") {
            hastatiContainerElement.style.zIndex = "1";
            hastatiContainerElement.style.top = 70 - stepsBack + "px";
           
            hastatiContainer.yAxis = 70
            principesContainerElement.style.zIndex = "3";
            triariiContainerElement.style.zIndex = "2";
            battlePosition -= stepsBack;
            if (stepsBack < 50) { stepsBack += 10 } else { stepsBack = 50, battlePosition = 160 };
            principesContainer.position = "bottom";
            triariiContainer.position = "middle";
            hastatiContainer.position = "top";


            setTimeout(() => {
                principesContainerElement.style.top = (180 - stepsBack) + "px"
                principesContainer.yAxis = 170
            }, 300);

            setTimeout(() => {
                triariiContainerElement.style.top = (120 - stepsBack) + "px"
                triariiContainer.yAxis = 120
            }, 700);
        }
        else if (principesContainer.position === "bottom") {
            principesContainerElement.style.zIndex = "1";
            Principes.yAxis = 70
            principesContainerElement.style.top = (70 - stepsBack) + "px";
            hastatiContainerElement.style.zIndex = "2";
            triariiContainerElement.style.zIndex = "3";
            battlePosition -= stepsBack;
            if (stepsBack < 50) { stepsBack += 10 } else { stepsBack = 50, battlePosition = 160 };
            principesContainer.position = "top";
            triariiContainer.position = "bottom";
            hastatiContainer.position = "middle";
            setTimeout(() => {
                triariiContainerElement.style.top = (170 - stepsBack) + "px"
                Triarii.yAxis = 170
            }, 300);

            setTimeout(() => {
                hastatiContainerElement.style.top = (120 - stepsBack) + "px"
                Hastati.yAxis = 120
            }, 700);
        }
        else if (triariiContainer.position === "bottom") {
            triariiContainerElement.style.zIndex = "1";
            triariiContainerElement.style.top = (70 - stepsBack) + "px";
            Triarii.yAxis = 70
            hastatiContainerElement.style.zIndex = "3";
            principesContainerElement.style.zIndex = "2";
            battlePosition -= stepsBack;
            if (stepsBack < 50) { stepsBack += 10 } else { stepsBack = 50, battlePosition = 160 };
            principesContainer.position = "middle";
            triariiContainer.position = "top";
            hastatiContainer.position = "bottom";
            setTimeout(() => {
                hastatiContainerElement.style.top = (170 - stepsBack) + "px"
                Hastati.yAxis = 170
            }, 300);

            setTimeout(() => {
                principesContainerElement.style.top = (120 - stepsBack) + "px"
                Principes.yAxis = 120
            }, 700);
        }
    }
});

// Initial Setup
for (let i = 0; i < 20; i++) { // Create 20 hastati
    const hastati = new Hastati(1);
    game.soldiers.push(hastati);
    game.soldiersHastati.push(hastati);
}
for (let i = 0; i < 20; i++) { // Create 20 principes
    const principes = new Principes(2);
    game.soldiers.push(principes);
    game.soldiersPrincipes.push(principes);
}
for (let i = 0; i < 20; i++) { // Create 20 triarii
    const triarii = new Triarii(3);
    game.soldiers.push(triarii);
    game.soldiersTriarii.push(triarii);
}
for (let i = 0; i < 2; i++) { // Create 2 triarii
    const triarii = new Triarii(5);
    game.soldiers.push(triarii);
    game.soldiersTriarii.push(triarii);
}

console.log(game.soldiers);
console.log(game.soldiersHastati);
console.log(game.soldiersPrincipes);
console.log(game.soldiersTriarii);


/* 
const hastatiArrayLeft = game.soldiers.slice (7);
const hastatiArrayCenter = game.soldiers.slice(7,14);
const hastatiArrayRight = game.soldiers.slice (14,20);

console.table(hastatiArrayLeft);
console.table(hastatiArrayCenter);
console.table(hastatiArrayRight);
 */
