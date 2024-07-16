
//console.log(hastatiContainer.postionY);
//console.log(battlePosition);
class Enemy{
    constructor(level){
        this.createEnemyElement();
        //this metod creates the enemey which we need ot set the position
        this.positionX= Math.floor(Math.random()*(gameArea.offsetWidth-this.element.offsetWidth)) 
        this.positionY= gameArea.offsetHeight- this.element.offsetHeight;
        this.updateElementPosition();
        this.velocity = 1;
        this.health = 90 + (level*2);
        this.stamina = 50 + (level*3);
        this.attack = 10 + level;
        this.strength = 10 + level;
        this.defense = 8 +(level/2);
        this.agility = 8 +(level/4);
        this.level = level;
        this.experience = 0;
        
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
    checkOrcCollisions(){
        let isColliding = false;
        const orcNotMe = game.enemies.filter((eachEnemy)=>{
            return (
                eachEnemy !== this);})

    orcNotMe.forEach((enemy)=>{
    const thisLeftEdge = this.positionX;
    const thisRightEdge = this.positionX + this.element.offsetWidth;
    const thisTopEdge = this.positionY;
    const thisButtomEdge = this.positionY + this.element.offsetHeight;
    const enemyLeftEdge = enemy.positionX;
    const enemyRightEdge = enemy.positionX + enemy.element.offsetWidth;
    const enemyTopEdge = enemy.positionY;
    const enemyButtomEdge = enemy.positionY + enemy.element.offsetHeight;
    if(
        thisLeftEdge < enemyRightEdge && 
        thisRightEdge > enemyLeftEdge &&
        thisTopEdge < enemyButtomEdge &&
        thisButtomEdge > enemyTopEdge
    ){
        console.log("Collision detected");
        isColliding = true;
        return
        //enemy.disappear();
        //shakeGameArea();
        //game.lives --;
    }
    }); return isColliding;}
    /*freeze(){
        const orcInFront = game.enemies.filter((eachEnemy)=>{
            return (
               +eachEnemy.positionY < (this.positionY+5) && 
                eachEnemy !== this);
        })
        const orcInParallel = game.enemies.filter((eachEnemy)=>{
            return (
                +eachEnemy.positionX < (this.positionX + 25) && 
                +eachEnemy.positionX > (this.positionX - 25) &&
                eachEnemy !== this
            );
        })
        
        if(orcInFront.length >0  && orcInParallel.length>0){
            console.log("Orc froze");
            return true; //Orc should freeze
        }else {
            
            return false; // Orc should not freeze
        }

    }*/
    move(){
            console.log(this.checkOrcCollisions());
        if(!this.checkOrcCollisions()){
            if(this.positionY>battlePosition){
                this.positionY-= this.velocity;
                this.updateElementPosition()
            }
                else{
            //this.orcAttack();
            console.log(this.positionX+" "+this.positionY);
            return(this.positionX);}
        }else{
            
        }}
    }
    /*orcAttack(){
        setTimeout(()=>{
    let orcVictim = game.soldiers[0]; // temporariliy while we figure out the victim
            if (this.attack > orcVictim.defense) {
                return this.strength;
            } else console.log("attacked blocked");//future{blockAttack};
    },1000)
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
*/

    for (let i = 0; i < 5; i++) { // Create 5 basic enemies
        game.enemies.push(new Enemy(1));
    }
    setInterval(() =>{
        game.enemies.push(new Enemy(1));
        console.log(game.enemies);
        
        
        },1000);

//setInterval (() =>{
    
//},10)

