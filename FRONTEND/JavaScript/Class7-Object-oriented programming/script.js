// An orc warrior is fighting a human footman. The battle ends when one of them dies. The orc has 720 hitpoints, does 23-35 damage and has 5 armor. The human footman has 550 hitpoints, does 18-27 damage, but has a shield that gives him 9 armor. Shields and armor deduct the damage that the fighter takes. Who will win the fight?

function Soldier(name,hitpoints,damageMax,damageMin,armor){
    this.name = name;
    this.hitpoints = hitpoints;
    this.damageMax = damageMax;
    this.damageMin = damageMin;
    this.armor = armor;
    this.attack = function() {
        return Math.floor(Math.random() * (this.damageMax - this.damageMin + 1)) + this.damageMin;
    }
  
}

var orc = new Soldier("Orc", 720, 35,23, 5);
var footman = new Soldier("Footman", 550, 27, 18, 9);

function Fight(orc, footman){
    var round = 1;

    while(orc.hitpoints > 0 && footman.hitpoints > 0){
    console.log("Round " + round + " starts!!!");
    var orcHit = orc.attack() - footman.armor;
    var footmanHit = footman.attack() - orc.armor;
    orc.hitpoints = orc.hitpoints - footmanHit;
    console.log("The orc HP is " + orc.hitpoints + " after the footman did " + footmanHit);
    footman.hitpoints = footman.hitpoints - orcHit;
    console.log("The footman HP is " + footman.hitpoints + " after the orc did " + orcHit);
    round++;
    if(orc.hitpoints < 0){
        console.log("The orc lost the fight!!!");
        break;
    }else if(footman.hitpoints < 0){ 
        console.log("The footman lost the fight!!!");
        break;
    }
}
console.log("THE DUEL IS OVER!!!!!!");
}

Fight(orc,footman);