function extraBattle(battleArray,bottomContainer){
    if(battleArray.length>= 1){
    if(game.enemies.length> 0){
        let orcNumber = Math.floor(Math.random()*game.enemies.length);
        let soldierNumber=  Math.floor(Math.random()*battleArray.length);
        let soldierBlocker = battleArray[soldierNumber];
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
    let battleArray = game.soldiersHastati;
    let bottomContainer = hastatiContainer;
    if (game.soldiersHastati.length >=0 
         && hastatiContainer.position === "bottom"){
        battleArray = game.soldiersHastati;
        bottomContainer = hastatiContainerElement
    }
         else if( game.soldiersPrincipes.length >=0 
             && principesContainer.position === "bottom")
           { battleArray = game.soldiersPrincipes;
            bottomContainer = principesContainerElement}
 else {  battleArray = game.soldiersTriarii;
            bottomContainer = triariiContainerElement}

    extraBattle(battleArray,bottomContainer);
    
}

function block(){

}

function gameOver(status){
       if(status === true){

       }
}

