function extraBattle(battleArray,bottomContainer){
    if(game.battleArray.length>= 1){
    if(game.enemies.length> 0){
        let orcNumber = Math.floor(Math.random()*game.enemies.length);
        let soldierNumber=  Math.floor(Math.random()*game.battleArray.length);
        let soldierBlocker = game.battleArray[soldierNumber];
        let orcAttacker = game.enemies[orcNumber];
        soldierBlocker.soldierAttack(orcAttacker);
        orcAttacker.orcAttack(soldierBlocker);
        }
    } else
        {
        bottomContainer.remove();
        console.log("You are losing Soldiers")
        battlePosition -= 1;
    }  
}


function classRemoval (){
    game.battleArray = game.soldiersHastati;
    let bottomContainer = hastatiContainer;
    if (game.soldiersHastati.length >=0 
         && hastatiContainer.position === "bottom"){
        game.battleArray = game.soldiersHastati;
        bottomContainer = hastatiContainerElement
    }
         else if( game.soldiersPrincipes.length >=0 
             && principesContainer.position === "bottom")
           { game.battleArray = game.soldiersPrincipes;
            bottomContainer = principesContainerElement}
 else {  game.battleArray = game.soldiersTriarii;
            bottomContainer = triariiContainerElement}

    extraBattle(game.battleArray,bottomContainer);
    
}

function gameOver(status){
       if(status === true){

       }
}

function levelUp(soldier){
    if(soldier.experience>=100 && soldier.experience <200 &&soldier.level <2){
        //level up 2
        soldier.level +=1
        soldier.maxStamina += 15;
        soldier.stamina +=10
        soldier.health += 10;
        soldier.defense +=1
        soldier.agility +=1
        soldier.attack+=1
    } else if (soldier.experience>=200 && soldier.experience <300 &&soldier.level <3){
        //level up 3
        soldier.level +=1;
        soldier.maxStamina += 20;
        soldier.stamina +=10;
        soldier.health += 10;
        soldier.defense +=1;
        soldier.agility +=1;
        soldier.attack+=1;
        soldier.strength +=1;
    }else if (soldier.experience>=300 && soldier.experience <400 &&soldier.level <4){
        //level up 4
        soldier.level +=1;
        soldier.maxStamina += 10;
        soldier.stamina +=10;
        soldier.health += 10;
        soldier.defense +=1;

        soldier.strength +=1;
}else if (soldier.experience>=400 && soldier.experience <500 &&soldier.level <5){
    //level up 5
    soldier.level +=1;
    soldier.maxStamina += 10;
    soldier.stamina +=10;
   
    soldier.agility +=1;
    soldier.attack+=1;
    soldier.strength +=1;
}else if (soldier.experience>=500 && soldier.experience <600 &&soldier.level <6){
    //level up 6
    soldier.level +=1;
    soldier.maxStamina += 10;
    soldier.stamina +=10;
    soldier.health += 10;
    soldier.defense +=1;
    
    soldier.strength +=2;
}
}