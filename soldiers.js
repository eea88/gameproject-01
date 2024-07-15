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
    constructor() {

        this.positionY = 0
        this.positionX = currentXPosition; // Use the currentXPosition to set the initial position
        this.positionY = 0; // Manage vertical position if needed
        // stats will need to go here
    }
}
class Hastati extends Soldier {
    constructor() {
        super();
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
    constructor() { //will add stats later//
        super() // will add stats later
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
    /* moveContainer(){
        //we will need to add movement of the line here
    }*/

}
class Triarii extends Soldier {
    constructor() { //will add stats later//
        super() // will add stats later
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
    game.hastati.push(new Hastati());
}
for (let i = 0; i < 20; i++) { // Create 10 principes
    game.principes.push(new Principes());
}
for (let i = 0; i < 20; i++) { // Create 10 principes
    game.triarii.push(new Triarii());
}

game.hastati.push(new Hastati())
game.hastati.push(new Principes())
game.triarii.push(new Triarii())
game.triarii.push(new Triarii())
game.triarii.push(new Triarii())
game.triarii.push(new Triarii())

//Rotation
let command = "";
document.addEventListener("keydown", (event) => {
    //console.log("You have pressed the key: ", event.key);
    command = (event.key);
    console.log(command);
    let stepsBack = 10;
    if (command === " ") {

        if (hastatiContainer.position === "bottom") {
            hastatiContainerElement.style.zIndex = "1";
            hastatiContainerElement.style.top = (70 - stepsBack) + "px";
            principesContainerElement.style.zIndex = "3";
            triariiContainerElement.style.zIndex = "2";
            stepsBack += 10;
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
            principesContainerElement.style.top = (70 - stepsBack) + "px";
            hastatiContainerElement.style.zIndex = "2";
            triariiContainerElement.style.zIndex = "3";
            stepsBack += 10;
        }
        else if (triariiContainer.position === "bottom") {
            triariiContainerElement.style.zIndex = "1";
            triariiContainerElement.style.top = (70 - stepsBack) + "px";
            hastatiContainerElement.style.zIndex = "3";
            principesContainerElement.style.zIndex = "2";
            stepsBack += 10;
        }
    }
});




