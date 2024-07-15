
console.log(hastatiContainer.postionY);
console.log(battlePosition);
class Enemy{
    constructor(){
        this.createEnemyElement();
        //this metod creates the enemey which we need ot set the position
        this.positionX= Math.floor(Math.random()*(gameArea.offsetWidth-this.element.offsetWidth)) 
        this.positionY= gameArea.offsetHeight- this.element.offsetHeight;
        this.updateElementPosition();
        this.velocity = 2;
        
        //other stats go here
        
    }
    createEnemyElement(){
        this.element = document.createElement("div");
        this.element.className = "basic-enemy";
        gameArea.appendChild(this.element);
    }
    updateElementPosition(){
        this.element.style.left = `${this.positionX}px`;
        this.element.style.top = `${this.positionY}px`;
    }
    move(){
        setTimeout(()=>{
        if(this.positionY>battlePosition){this.positionY-= this.velocity;
        this.updateElementPosition()}else{warriorAttack()}
        },300);
    }
    setBoundaries(){
        if(this.positionX <=0){
            this.positionX=0;
        }
        if(this.positionY <=0){
            this.positionY=0;
        }
        if(this.positionX >= gameArea.offsetWidth - this.element.offsetWidth){
            this.positionX = gameArea.offsetWidth - this.element.offsetWidth
        }
        if(this.positionY >= gameArea.offsetHeight - this.element.offsetHeight){
            this.positionY = gameArea.offsetHeight - this.element.offsetHeight
        }
    }
}


    for (let i = 0; i < 5; i++) { // Create 5 basic enemies
        game.enemies.push(new Enemy());
    }
    setInterval(() =>{
        game.enemies.push(new Enemy());
        console.log(game.enemies);
        
        
        },2000);

//setInterval (() =>{
    
//},10)

