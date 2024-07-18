# Orc Hordes

## Deployed Game


[Deployed version](https://eea88.github.io/gameproject-01/)

## Project Description
My game is a Wave kind of game where the idea is to have Orcs (enemies) that attack your kingdom and you have to defend the kingdom with soldiers.

Enemy waves will approach the soldiers directly and your job is to manage the soldiers for them to win the battles. You manage the soldiers by rotating your battle lines, just like the Roman army back in the days.

For Game play rotate your lines by pressing space-bar. you top-line will tire and lose stamina as the battle progress.  

Attacks, defenses and evasion will cost your soldier Stamina points.
Stamina regenerates by 1 point with every frame until it reaches the soldier Maximum Stamina. So a soldier in the back line will not lose stamina and will be able to get some rest in order to be able to go back to battle.

Enemies advance until they collide with you, on collision battle starts (both Soldier attack and Orc attack). After colliding enemies will retreat 100 yards and charge again.


Points are scored by defeating enemies. Every defeated enemies will add that particular enemy level to the score.

Best score wins.

## Project Planning
### Day 1 
-Create the HTML structure
- Create the Soldier lines
- Create Event listener and move the lines
- Create enemies
- Build the enemy movement
- add aligment when the lines move
- make enemies stop moving when they approach you and start the battle.

### Day 2 

Battle
-basic attack workflow
-block workflow
- stamina workflow
- Health workflow

### Day 3

 - Soldier & Enemy design
- Experience & Levelling workflow
- Scores
- Game over

### Day 4 
   - Build Read-me
  - Design finalization
  - build Game presentation
  - add bosses to the enemy
  - if time is possible make the game more challenging and go through the priorities of the Backlog

### Backlog:

  - Create enemy attacks for evemies that are behind you ( making those attacks more powerful in order for players to lose battles faster if enemies get behind them).
  - Add health & Stamina bars to Soldiers
  - +1- Economy system to be able to purchase more soldiers
 - Add Player/Centurion
 -  Add a Tutorial
  - Add Ranged Enemies & Ranged Defense (Not a priority)
- Add Ranged Attack (Not a priority)


## JS Code Walk-through
 - Please keep in mind that this game was done as simple as possible so parts of the code are not follwing best practices.
### Index
  - Core Game functions are here
  - Staring arrays
  - Game Over
  - Try Again
  - grid sizing variables
  #### Play Game

  - Play Game has 3 key parts, first frame counter and frame loop with an ending on Window Request annimation
  - For Each loops that create the game mechanisms
    - Game Enemies for Each Loops to make enemies move 
    - Game Soldiers for each Looops to make soldiers check for collisions. (Stamina regenration happens inside the Check Collisions).
  - Enemy Wave Spawning based on Frame Counter.
### Soldier
- Core Soldier functions are here:
- Container Elements for each soldie line
- Soldier Class 
  - Constructor with stats
  - check Collisions Function
    Being called in Game logic
    Stamina regeneration happens here
  - soldierAttack function
  - receivesDamage function
  - soldierDied function.
    Plese note soldierDied has to splice soldiers in both game.soldiers array and in each line soldier array. This is being done with a switch.
- Sub classes on Soldier for each line: (Hastati, Principes & Triari)
- Rotation commands.
  What happens when you press Space Bar and the line moves
- Initial Soldier Game setup. You can add remove initial soldiers here
### Enemy
- enemyClassesArray for different orc basic classes with different images on each
- Enemy Class
  -Constructor with Stats and creation starting point
  - Orc creation flow - with random enemies
  - checkOrcCollisinsFunction. If Orc is colling Orc won't move
  - move function (being called in the game logic)
  - orcAttack function
  - orcReceivesDamage function
  - orcDied function
    Please note that not only the Orc dies but it also call the level up function for each soldier inside the battle Array.
  - orcBoss subclass (coming soon, should be there by the time you read this)
   
### Battle
Other Battle functions are coded here, but the core code is either in Soldier or Enemy:
- extraBattle function - this creates an additional random battle. Ensuring all enemies and all soldiers can battle. This functin has been simplified to reduce bugs. If it gets too complex it can cause freezing orcs. is called in class Removals.
- classRemovals - removes soldier lines from the game if they lose soldiers. extraBattle being called here. classRemovals is being checked inside the core game logic.
- levelUp function
  every time an Orc Dies Soldiers have an opportunity to level up if they have enough experience. This can be tricky as if experience is not being deducted it can cause ultra powerful soldiers. It works as it is written now, but only level 7 and above is removing for experience but there is not second && to limit higher levels.

## Potential Issues
 ### Bug on alignment between DOM & Arrays
 - During day 2 & half of Day 3 soldier & Enemies arrays where miisaligned with the DOM.
  - For Soldiers this caused wrorng soldiers to disappear from the DOM and for the Game Over design to happen before all soldiers died in the Dom
  - for Enemies this caused some enemies to freeze in place
  - Soldier bug was solved by removing timeouts from battles
  - Enemy bug was solved by simplifying Enemy array system.
### Moving the lines
  - Moving the lines is criticla for workflow. A Player that does nt move the line might find issues with enemies not attacking. This happens because the Game.battlearray is making the bottom soldier line have an extra random battle every frame. (This is a criticla game flow in order to ensure that enemies keep fighting even if they do not collide with the line -due to spacing of th eline and soldiers being killed).
  However if the bottom line has been removed and space bar is not pressed then game.battleArray will be empty.
### Game too hard/ too easy
- Game can become too hard or too easy for the players. Attempts have been made to make the game more challenging but giving players a chance, however this still requires fine tuning.
#### Modification to fine tune game difficulty
 - Increase?Lower Level up stats in the Level up function in battle.js
    - Focus on Soldiers levels 6 and above, somthing you can do is lower?increase experience charge for levelling up for soldiers level 7 & above
 - Reduce/increase levels of spawning enemies in index.js.
 - Increase/reice spawned enemies. (Keep in mid that due to levelling up mechainsims too many enemies might actually make the game easier for players, especially if player has time to charge Stamina.)


  



