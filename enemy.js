
//console.log(hastatiContainer.postionY);
//console.log(battlePosition);
const enemyClassesArray = ["enemy1","enemy2","enemy3","enemy4","enemy5","enemy6","enemy7"];

class Enemy{
    constructor(level){
        this.createEnemyElement();
        //this metod creates the enemey which we need to set the position
       
        this.positionX = Math.floor(
          Math.random() * (gameArea.offsetWidth - this.element.offsetWidth)
        );
        this.positionY = gameArea.offsetHeight - this.element.offsetHeight;
        this.updateElementPosition();
        this.velocity = 10;
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
        let randomClass = Math.floor(Math.random()*7+1);
        this.element.className = enemyClassesArray[randomClass];
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
                orcNotMe.forEach((enemy) => {
                    const thisLeftEdge = this.positionX;
                    const thisRightEdge = this.positionX + this.element.offsetWidth/2;
                    const thisTopEdge = this.positionY;
                    const thisButtomEdge = this.positionY + this.element.offsetHeight/2;
                    const enemyLeftEdge = enemy.positionX;
                    const enemyRightEdge = enemy.positionX + enemy.element.offsetWidth/2;
                    const enemyTopEdge = enemy.positionY;
                    const enemyButtomEdge = enemy.positionY + enemy.element.offsetHeight/2;
              
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
                        //enemy.disappear();
                        //shakeGameArea();
                        //game.lives --;
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
    /* orcNotMe.forEach((enemy)=>{
    const thisLeftEdge = this.positionX;
    const thisRightEdge = this.positionX + this.element.offsetWidth/2;
    const thisTopEdge = this.positionY;
    const thisButtomEdge = this.positionY + this.element.offsetHeight/2;
    const enemyLeftEdge = enemy.positionX;
    const enemyRightEdge = enemy.positionX + enemy.element.offsetWidth/2;
    const enemyTopEdge = enemy.positionY;
    const enemyButtomEdge = enemy.positionY + enemy.element.offsetHeight/2;
    if(
        thisLeftEdge < enemyRightEdge && 
        thisRightEdge > enemyLeftEdge &&
        thisTopEdge < enemyButtomEdge &&
        thisButtomEdge > enemyTopEdge
    ){
        //console.log("Collision detected");
        isColliding = true;
        return
        //enemy.disappear();
        //shakeGameArea();
        //game.lives --;
    }
    }); return isColliding;} */
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
            //console.log(this.checkOrcCollisions());
        if(!this.checkOrcCollisions()){
            if(this.positionY > battlePosition ) {
                this.positionY -= this.velocity;
                this.updateElementPosition()
            }
            else {
                
                //console.log(this.positionX+" "+this.positionY);
                let thisPositionX= Number(this.positionX);
                let thisGridArea; 
                if(thisPositionX < gridLeft){
                    thisGridArea = "Left";}
                else if(thisPositionX < gridCenter){
                    thisGridArea = "Center";} 
                else{ 
                    thisGridArea = "Right";}
                //switch statement used to handle grid assignments by X position.
                switch(thisGridArea){
                    case "Left":
                        if(!game.enemiesBattleLeft.includes(this)){
                            game.enemiesBattleLeft.push(this);
                        //console.log(game.enemiesBattleLeft);
                        };
                        break;
                    case "Center":
                        if(!game.enemiesBattleCenter.includes(this)){
                            game.enemiesBattleCenter.push(this);
                        //console.log(game.enemiesBattleCenter);
                        };
                        break;
                    default:
                        if(!game.enemiesBattleRight.includes(this)){
                            game.enemiesBattleRight.push(this);
                            //console.log(game.enemiesBattleRight);
                            };
                        }                           

            }
        }
            else{
                //setTimeout(() => {
                //this.move()
                //},10000*Math.random());
          
        }}
    orcAttack(soldier){
        
        let diceThrowAttacker= Math.floor(Math.random() * 12) + 1;
        let diceThrowDefender = Math.floor(Math.random() * 12) + 1;
        
        if(this.attack * diceThrowAttacker > soldier.defense * diceThrowDefender){
            soldier.receivesDamage(this.strength*diceThrowAttacker);
            //console.log("Orc hit you!");
        } else{
            ;
        }
    
    }
    receivesDamage(amount){
        this.health -= amount;
        //console.log(this.health);
        if(this.health <=0){this.orcDied()}
    }
    orcDied(){
        const index = game.enemies.indexOf(this);
        game.score += this.level;
        game.deadEnemies.push(this),
        game.enemies.splice(index,1);
        if(this.element)
            {this.element.remove()
            };
        console.log(`${game.score} SCORE!` );
    }
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

    for (let i = 0; i < 20 ; i++) { // Create 20 basic enemies
        game.enemies.push(new Enemy(1));
    }
   /* setInterval(() =>{
        game.enemies.push(new Enemy(1));
        //console.log(game.enemies);
        
        
        },1000);
*/
//setInterval (() =>{
    
//},10)

