// Write a function that will receive 3 parameters. Two strings and a boolean. If the boolean value is “true”, concatenate the strings. If the value is false, concatenate them in the inverse order. Think about what would happen if we enter only 1 or 2 parameters.

function parameterReceiver(a,b,c) { 
var result;
if(c === true){
    result = a + b;
}else if(c !== true) { 
    result = c + b + a;
}
// console.log(result);
return result;
}

parameterReceiver("this","is", false);