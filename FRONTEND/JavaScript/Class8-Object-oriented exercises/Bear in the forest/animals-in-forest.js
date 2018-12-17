function ForestAnimals(name,nutritionValue, type){
    this.name = name;
    this.nutritionValue = nutritionValue;
    this.type = type;
    this.isTasty = false;
    this.isEaten = function(){

        this.isTasty=true;
        this.nutritionValue=null;
    }
}


