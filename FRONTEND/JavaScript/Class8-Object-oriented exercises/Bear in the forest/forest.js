function Forest() {
    this.hunterChance = 95;
    this.luck = 70;
    this.unlucky;
    this.bear = new Bear("Meca", 200);
    this.hunter = new Hunter();


    this.animals = [];


    this.animals.push(new ForestAnimals("Wolf", 250, "predator"));
    this.animals.push(new ForestAnimals("Deer", 125, "mammal"));
    this.animals.push(new ForestAnimals("Rabbit", 75, "rabbit"));



    this.oneDay = function (number) {
        var day = number;
        var dayGone;
        console.log("Day", day, "for the", this.bear.name, "bear.");
        if (this.bear.totalMass < this.bear.totalMassMin) {
            this.bear.moveBear();
            day = 30;
        } else if (this.bear.totalMass > this.bear.totalMassMax) {
            this.bear.moveBear();
            dayGone = day ;
        } else if (calculatePercent(this.luck)) {
            this.bear.moveBear();
            this.unlucky = randomNum(0, 2);
            this.bear.catchAnimal(this.animals[this.unlucky]);
            dayGone = day;
        } else {
            this.bear.totalMass -= this.bear.totalMass * 0.1;
            this.bear.moveBear();
            console.log("Today the bear didnt hunt anything so she will continue her search for food... and lost 10% of her weight today so now her weight is",Math.floor(this.bear.totalMass));
            dayGone = day;

        }
        if (day >= 20 && this.bear.totalMass > this.bear.totalMassMin) {
            if (calculatePercent(this.hunterChance)) {
                if (this.hunter.hunt(this.bear)) {                       
                    dayGone = 30;                        
                }
            }
        }
        if(day === 30 && this.bear.isAlive){
            console.log("");
            console.log('<-------------------End of the Month---------------------->');
            console.log("The ", this.bear.name, "bear has survived the month, and has a weight of",Math.floor(this.bear.totalMass), "kg's");
            console.log("");
        }else if(!this.bear.isAlive){
            console.log("");
            console.log('<----------------End of the road for the', this.bear.name, 'bear---------------->');
            console.log("The ", this.bear.name, "bear has not survived the month, and had a weight of", Math.floor(this.bear.totalMass), "kg's");
            return;
        }
        return dayGone;
    }
}
