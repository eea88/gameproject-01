const hastatiContainerElement = document.getElementById('hastatiContainer');
const principesContainerElement = document.getElementById('principesContainer');
const triariiContainerElement = document.getElementById('triariiContainer');
let currentXPosition = 0;

const hastatiContainer = {
    position: "bottom",
    element: hastatiContainerElement
}
const principesContainer = {
    position: "middle",
    element: principesContainerElement
}
const triariiContainer = {
    position: "top",
    element: triariiContainerElement
}

class Soldier {
    constructor(level) {

        this.positionY = 0
        this.positionX = currentXPosition // Use the currentXPosition to set the initial position
        this.positionY = 0 // Manage vertical position if needed
        // stats will need to go here
        this.health = 90 + (level*2);
        this.stamina = 50 + (level*3);
        this.attack = 10 + level;
        this.strength = 10 + level;
        this.defense = 8 +(level/2);
        this.agility = 8 +(level/4);
        this.level = level;
        this.experience = 0;
        this.battleParticipant = true;
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
    constructor(level,armor) { //will add stats later//
        super(level) // will add stats later
        this.createPrincipesElement();
        this.armor = armor + level;
        this.attack = 10 + level*2;
        this.strength = 10 + level*2;
        this.battleParticipant = false;
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
    /* moveContainer(){
        //we will need to add movement of the line here
    }*/

}
class Triarii extends Soldier {
    constructor(level,armor) { //will add stats later//
        super(level)
        this.armor = (armor*level);
        this.attack = 15;
        this.stamina = 150 + (level*3);
        this.attack = 10 + level*2;
        this.strength = 10 + level*2;
        this.battleParticipant = false;
         // will add stats later
        this.createTriariiElement();
    }
    createTriariiElement() {
        this.element = document.createElement("div");
        this.element.className = "triarii";
        currentXPosition += 56; // Increment the horizontal position for the next soldier
        this.updateElementPosition();
        triariiContainerElement.appendChild(this.element);
        triariiContainerElement.style.alignItems = 'center';
        triariiContainerElement.style.justifyContent = 'center';
    }
    updateElementPosition() {
        this.element.style.left = `${this.positionX}px`;
        this.element.style.top = `${this.positionY}px`;
    }
    /* moveContainer(){
        //we will need to add movement of the line here
    }*/

}



//Initial Setup
for (let i = 0; i < 20; i++) { // Create 10 hastati
    game.soldiers.push(new Hastati(1));
}
for (let i = 0; i < 20; i++) { // Create 10 principes
    game.soldiers.push(new Principes(2));
}
for (let i = 0; i < 20; i++) { // Create 10 principes
    game.soldiers.push(new Triarii(3));
}

game.soldiers.push(new Hastati(1))
game.soldiers.push(new Principes(2))
game.soldiers.push(new Triarii(3))
game.soldiers.push(new Triarii(5))
game.soldiers.push(new Triarii(5))
game.soldiers.push(new Triarii(3))

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
            Hastati.battleParticipant = false;
            hastatiContainerElement.style.top = 70 - stepsBack + "px";
            principesContainerElement.style.zIndex = "3";
            Principes.battleParticipant = true;
            triariiContainerElement.style.zIndex = "2";
            battlePosition -= stepsBack;
            if(stepsBack<50){stepsBack += 10}else{stepsBack=50, battlePosition=160};
            principesContainer.position = "bottom";
            triariiContainer.position = "middle";
            hastatiContainer.position = "top";
            
            
            setTimeout(() => {
                principesContainerElement.style.top = (170 - stepsBack) + "px"
            }, 300);

            setTimeout(()=>{
                triariiContainerElement.style.top = (120 - stepsBack) + "px"}, 700);
        }
        else if (principesContainer.position === "bottom") {
            principesContainerElement.style.zIndex = "1";
            Principes.battleParticipant = false;
            principesContainerElement.style.top = (70 - stepsBack) + "px";
            hastatiContainerElement.style.zIndex = "2";
            triariiContainerElement.style.zIndex = "3";
            Triarii.battleParticipant = true;
            battlePosition -= stepsBack;
            if(stepsBack<50){stepsBack += 10}else{stepsBack=50, battlePosition=160};
            principesContainer.position = "top";
            triariiContainer.position = "bottom";
            hastatiContainer.position = "middle";
            setTimeout(() => {
                triariiContainerElement.style.top = (170 - stepsBack) + "px"
            }, 300);

            setTimeout(()=>{
                hastatiContainerElement.style.top = (120 - stepsBack) + "px"}, 700);
        }
        else if (triariiContainer.position === "bottom") {
            triariiContainerElement.style.zIndex = "1";
            Triarii.battleParticipant = false;
            triariiContainerElement.style.top = (70 - stepsBack) + "px";
            hastatiContainerElement.style.zIndex = "3";
            Hastati.battleParticipant = true;
            principesContainerElement.style.zIndex = "2";
            battlePosition -= stepsBack;
            if(stepsBack<50){stepsBack += 10}else{stepsBack=50, battlePosition=160};
            principesContainer.position = "middle";
            triariiContainer.position = "top";
            hastatiContainer.position = "bottom";
            setTimeout(() => {
                hastatiContainerElement.style.top = (170 - stepsBack) + "px"
            }, 300);

            setTimeout(()=>{
                principesContainerElement.style.top = (120 - stepsBack) + "px"}, 700);
        }
    }
});

