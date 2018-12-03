// Write a function that accepts two numbers N and X. Find the closest number bigger than N that is TOTALLY DIFFERENT than the number X. A number is TOTALLY DIFFERENT from another if every digit in the first number is different than every digit of the second number. You are not permitted to use arrays or matrices (we haven’t learned them yet). It’s ok to write subprocedures (helper functions that get called in your main function).

function compare(broj1, broj2) {
    var cifra1 = 0;
    var cifra2 = 0;
    var brojac;

    while (broj1 && broj2) {
        cifra1 = broj1 % 10;
        broj1 = Math.floor(broj1 / 10);
        cifra2 = broj2 % 10;
        broj2 = Math.floor(broj2 / 10); 

        if (cifra1 == cifra2) {
            brojac = true;
            break;
        } else {
            brojac = false;
        }
    }
    return brojac;
}

function differentNext(N, X) {
    var broj1 = N + 1;

    while (true) {

        if (compare(broj1,X)) {
            broj1++;
        } else { break; }
    }
   console.log("Najgolemiot pogolem broj od " + N + " koj e razlicen od " + X + " e " + broj1);

}

differentNext(13845, 15483);