function Bear(name, totalMass){
    this.name = name;
    this.totalMass = totalMass;
    this.totalMassMin = 50;
    this.totalMassMax = 400;
    this.isFat = false;
    this.isAlive = true;

    
    console.log("The bear",this.name,"bear, will try to survive for a month in the forest!")
    console.log("Her weight is",this.totalMass,"kg's.");
    console.log("If her weight goes bellow",this.totalMassMin,"kg's, the brar will die");
    console.log("If her weight goes above",this.totalMassMax,"kg's, she wont be able to move for the day.");
    console.log("Her journey starts today!!!");



    this.moveBear = function(){
        if(this.totalMass < this.totalMassMin){
            this.isAlive = false;
            this.isFat = false;
            console.log("The bear died from hunger because her wieght is ",Math.floor(this.totalMass));
        }else if(this.totalMass > this.totalMassMax){
            this.isFat = true;
            this.totalMass -= (this.totalMass * 0.2);
            console.log("The bear is overweight now she cant move and lost 20% of her weight so now she is ",Math.floor(this.totalMass));
        }else { 
         
            this.isFat=false;
            console.log("The bear weight is", Math.floor(this.totalMass), " kg's.");
        }

        return this.totalMass;
        }
    this.catchAnimal = function(animal){
        if(animal.type === "predator"){
            this.totalMass -= (totalMass * 0.1);
            this.totalMass += (animal.nutritionValue / 2);
            console.log("The bear managed to eat wolf with",animal.nutritionValue, "and because of that her weight was reduced by 10% but gained half of the wolf's nutrition value",(animal.nutritionValue / 2), "so now her weight right now is ",Math.floor(this.totalMass));

        }else if(animal.type === "mammal"){ 
            this.totalMass += animal.nutritionValue;
            console.log("The bear ate a deer with",animal.nutritionValue, "so now her weight is ",Math.floor(this.totalMass));
        }else { 
            this.totalMass += animal.nutritionValue;
            console.log("The bear ate rabbit with",animal.nutritionValue, "so now her weight is ",Math.floor(this.totalMass));
        }
    }
    this.bearIsKilled = function(){

        console.log("The hunter has killed the bear, " + this.name + " because the bear was overweight");
        this.isAlive=false;

    }
    this.bearEscaped=function(){

        var beforeWeight = this.totalMass;
        this.totalMass -= this.totalMass * 30 / 100;
        console.log("The bear", this.name,"has escaped the hunter but also lost",Math.floor(beforeWeight -= this.totalMass), "kg's and now her weight is",Math.floor(this.totalMass));
    }

}
