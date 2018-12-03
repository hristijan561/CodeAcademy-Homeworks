// An old woman has 3 cats. She has to feed them every day for one week. The cats’ names are Tabby, Lizzie and Mary. Tabby likes fish and Lizzy likes chicken. Mary eats anything you give her. Help the woman feed her cats by writing a script that will feed them for a week. The actual feeding procedure is: console.log(nameofcat + “ started eating fish/chicken/whatever”);

// function catFeeding() { 
//     var cats = ["Tabby", "Lizzie", "Mary"];

//     for(var i = 0;i <= cats.length; i++){
//         var cat = cats[i];
//         if(cat === "Tabby"){
//             console.log(cats [0] + " started eating fish");
//         }else if(cat === "Lizzie"){
//             console.log(cats [1] + " started eating chicken" );
//         }else if(cat === "Mary"){
//             console.log(cats [2] + " eats anything");
//         }
//     }
// }

// catFeeding();

// Help a paramedic save a life! A person is unconscious and the medic needs to perform CPR. The whole process lasts one minute. Every second he has to massage the patient's heart (console.log(“performing insertAction”);). Every 15-th second he has to check his pulse and at the end of the process, he needs to declare the patient dead or alive.

// function saveLife(){
//     for(var i = 1; i < 60;i++){
//         var sec = i;
//         console.log("Trying to save patient's life!!!");
//         if(sec % 15 === 0){
//             console.log("CHECK HIS PULSE!!!");
//         }else if(sec === 60 - 1){
//             console.log("THE PATIENT IS ALIVE!!!!!!!!");
//         }


//     }
// }


// saveLife();


// Write a script to check whether a number is a palindrome or not. Input the number as a parameter.


// function palindromeNumber(x){
//     number1 = x;
//     number2 = x;
//     var palindrome = 0;
//     var check = 0;
//     while(number1){
//         check = number1 % 10;
//         palindrome *= 10;
//         palindrome += check;
//         number1 = Math.floor(number1 / 10);
//     }
//     if(number2 == palindrome){
//         console.log("Brojot e palindrom");
//     }else { 
//         console.log("Brojot ne e palindrom");
//     }
// }

// palindromeNumber(151);


// A car uses 7 litres of fuel on 100km. How much fuel will the car spend driving 43 kilometers? Use a loop instead of a mathematical formula.

// function fuelConsumption(km){
//     var kilometers = km;
//     var fuel = 0;
//     for(var i = 0; i < 100; i++){
//         fuel = kilometers * 0.07;
//     }
//     console.log("Kolata ke potrosi " + fuel + "l za " + km + "km");
// }

// fuelConsumption(43);


// A girl tries to impress a boy by flirting with him. Every flirt she makes is worth 1 point, every third flirt is worth 5 points and every 5th flirt is worth 10 points. Every 10th flirt the boy gets tired and deducts the girl’s points by 12. Write a function that will calculate if the girl impressed the boy or not, by accepting the number of tries the girl should use and the number of hitpoints the boy has, as function parameters.

// function loveStory(numberOfTries, numberOfHitpoints){
//     var boy = numberOfHitpoints;
//     var girl = numberOfTries;
//     for(var i = 1; i <= girl; i++){
//         var flirt = 1;
//         var girlpoints = flirt;
//         boy -= flirt;
//         if(boy < girlpoints){
//             console.log("She finally did it .... She seduced him :D");
//             break;
//         }else if(i % 10 === 0){
//             boy += 12;
//         }else if(i % 5 === 0){
//             boy -= (girlpoints + 10);
//         }else if(i % 3 === 0){
//             boy -= (girlpoints + 5);
//         }
//         console.log("Boy's HP is = " + boy + " after " + i + " girl's try");
//     }
// }

// loveStory(20,50);

// An orc warrior is fighting a human footman. The battle ends when one of them dies. The orc has 720 hitpoints, does 23-35 damage and has 5 armor. The human footman has 550 hitpoints, does 18-27 damage, but has a shield that gives him 9 armor. Shields and armor deduct the damage that the fighter takes. Who will win the fight?

function getRandomHit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fight() {
    var orc = 720;
    var footman = 550;
    var armorOfFootman = 9;
    var armorOfOrc = 5;
    var hitpoints1 = orc;
    var hitpoints2 = footman;
    while (true) {
        hitpoints1 -= (getRandomHit(18, 27) - armorOfOrc);
        hitpoints2 -= (getRandomHit(23, 35) - armorOfFootman);
        if (hitpoints1 <= 0) {
            console.log(hitpoints2 + " The footman won the battle ");
            break;
        } else if (hitpoints2 <= 0) {
            console.log(hitpoints1 + " The orc won the battle ");
            break;
        }
        console.log("The duel is finished");
    }
}
    fight();
