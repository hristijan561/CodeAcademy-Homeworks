// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them

function maxOfThree(a, b, c) { 
    var result;
    if((a >= b) && (a >=c)){
        result = a;
    } else if((b >= c) && (b >= a)) { 
        result = b;
    } else { 
        result = c;
    }
    // console.log(result);
    return result;
}

maxOfThree ( 100, 500, 30);